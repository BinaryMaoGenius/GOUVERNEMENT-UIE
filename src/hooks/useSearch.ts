import { useState, useEffect, useMemo } from "react";
import { searchIndex, SearchItem } from "@/lib/searchIndex";

interface SearchResult extends SearchItem {
    score: number;
    matchedTerms: string[];
}

const SEARCH_HISTORY_KEY = "gouv-uie-search-history";
const MAX_HISTORY_ITEMS = 5;

// Fonction pour normaliser le texte (enlever les accents, mettre en minuscules)
function normalizeText(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Fonction de recherche fuzzy avec calcul de score
function calculateScore(item: SearchItem, query: string): number {
    const normalizedQuery = normalizeText(query);
    const queryTerms = normalizedQuery.split(" ").filter((t) => t.length > 0);

    let score = 0;

    // Recherche dans le titre (poids: 3)
    const normalizedTitle = normalizeText(item.title);
    queryTerms.forEach((term) => {
        if (normalizedTitle.includes(term)) {
            score += 3;
            // Bonus si le terme est au début du titre
            if (normalizedTitle.startsWith(term)) {
                score += 2;
            }
            // Bonus si c'est une correspondance exacte
            if (normalizedTitle === term) {
                score += 5;
            }
        }
    });

    // Recherche dans la description (poids: 1)
    const normalizedDescription = normalizeText(item.description);
    queryTerms.forEach((term) => {
        if (normalizedDescription.includes(term)) {
            score += 1;
        }
    });

    // Recherche dans les mots-clés (poids: 2)
    item.keywords.forEach((keyword) => {
        const normalizedKeyword = normalizeText(keyword);
        queryTerms.forEach((term) => {
            if (normalizedKeyword.includes(term)) {
                score += 2;
            }
            if (normalizedKeyword === term) {
                score += 3;
            }
        });
    });

    return score;
}

// Fonction pour mettre en évidence les termes recherchés
export function highlightMatch(text: string, query: string): string {
    if (!query.trim()) return text;

    const normalizedQuery = normalizeText(query);
    const queryTerms = normalizedQuery.split(" ").filter((t) => t.length > 0);

    let result = text;
    queryTerms.forEach((term) => {
        const regex = new RegExp(`(${term})`, "gi");
        result = result.replace(regex, "<mark>$1</mark>");
    });

    return result;
}

export function useSearch(query: string, debounceMs: number = 300) {
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    // Debouncing
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, debounceMs);

        return () => clearTimeout(timer);
    }, [query, debounceMs]);

    // Charger l'historique de recherche au montage
    useEffect(() => {
        const history = localStorage.getItem(SEARCH_HISTORY_KEY);
        if (history) {
            try {
                setSearchHistory(JSON.parse(history));
            } catch (e) {
                console.error("Error loading search history:", e);
            }
        }
    }, []);

    // Fonction pour ajouter à l'historique
    const addToHistory = (searchQuery: string) => {
        if (!searchQuery.trim()) return;

        const newHistory = [
            searchQuery,
            ...searchHistory.filter((q) => q !== searchQuery),
        ].slice(0, MAX_HISTORY_ITEMS);

        setSearchHistory(newHistory);
        localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(newHistory));
    };

    // Fonction pour effacer l'historique
    const clearHistory = () => {
        setSearchHistory([]);
        localStorage.removeItem(SEARCH_HISTORY_KEY);
    };

    // Recherche avec score
    const results = useMemo(() => {
        if (!debouncedQuery.trim()) {
            return [];
        }

        const scoredResults: SearchResult[] = searchIndex
            .map((item) => {
                const score = calculateScore(item, debouncedQuery);
                return {
                    ...item,
                    score,
                    matchedTerms: debouncedQuery.split(" ").filter((t) => t.length > 0),
                };
            })
            .filter((result) => result.score > 0)
            .sort((a, b) => b.score - a.score);

        return scoredResults;
    }, [debouncedQuery]);

    // Grouper les résultats par catégorie
    const groupedResults = useMemo(() => {
        const groups: Record<string, SearchResult[]> = {
            page: [],
            member: [],
            pole: [],
            activity: [],
        };

        results.forEach((result) => {
            groups[result.category].push(result);
        });

        return groups;
    }, [results]);

    return {
        results,
        groupedResults,
        isSearching: query !== debouncedQuery,
        searchHistory,
        addToHistory,
        clearHistory,
    };
}

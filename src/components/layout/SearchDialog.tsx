import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, FileText, Calendar, Users, Shield, Clock, TrendingUp } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";

interface SearchDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    const { results, groupedResults, isSearching, searchHistory, addToHistory } = useSearch(query);

    // Reset selected index when results change
    useEffect(() => {
        setSelectedIndex(0);
    }, [results]);

    // Focus input when dialog opens
    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            setQuery("");
        }
    }, [open]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!open) return;

            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    setSelectedIndex((prev) => Math.max(prev - 1, 0));
                    break;
                case "Enter":
                    e.preventDefault();
                    if (results[selectedIndex]) {
                        handleResultClick(results[selectedIndex].url, query);
                    }
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, results, selectedIndex, query]);

    const handleResultClick = (url: string, searchQuery: string) => {
        if (searchQuery.trim()) {
            addToHistory(searchQuery);
        }
        navigate(url);
        onOpenChange(false);
        setQuery("");
    };

    const handleHistoryClick = (historyQuery: string) => {
        setQuery(historyQuery);
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "page":
                return <FileText className="w-4 h-4" />;
            case "activity":
                return <Calendar className="w-4 h-4" />;
            case "member":
                return <Users className="w-4 h-4" />;
            case "pole":
                return <Shield className="w-4 h-4" />;
            default:
                return <Search className="w-4 h-4" />;
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case "page":
                return "Page";
            case "activity":
                return "Activité";
            case "member":
                return "Membre";
            case "pole":
                return "Pôle";
            default:
                return "";
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "page":
                return "bg-blue-500/10 text-blue-500";
            case "activity":
                return "bg-green-500/10 text-green-500";
            case "member":
                return "bg-purple-500/10 text-purple-500";
            case "pole":
                return "bg-orange-500/10 text-orange-500";
            default:
                return "bg-primary/10 text-primary";
        }
    };

    const renderCategorySection = (category: string, items: typeof results) => {
        if (items.length === 0) return null;

        const categoryLabels: Record<string, string> = {
            page: "Pages",
            member: "Membres",
            pole: "Pôles",
            activity: "Activités",
        };

        return (
            <div key={category} className="mb-2">
                <div className="px-4 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider bg-secondary/50">
                    {categoryLabels[category]}
                </div>
                {items.map((result, index) => {
                    const globalIndex = results.indexOf(result);
                    const isSelected = globalIndex === selectedIndex;

                    return (
                        <button
                            key={result.id}
                            onClick={() => handleResultClick(result.url, query)}
                            className={`w-full px-4 py-3 flex items-start gap-3 transition-colors text-left ${isSelected ? "bg-primary/10" : "hover:bg-secondary"
                                }`}
                        >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getCategoryColor(result.category)}`}>
                                {getCategoryIcon(result.category)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm text-foreground truncate">
                                    {result.title}
                                </p>
                                <p className="text-xs text-muted-foreground truncate">
                                    {result.description}
                                </p>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground flex-shrink-0">
                                {getCategoryLabel(result.category)}
                            </span>
                        </button>
                    );
                })}
            </div>
        );
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] p-0 max-h-[80vh] flex flex-col">
                <DialogHeader className="px-4 pt-4 pb-2 flex-shrink-0">
                    <DialogTitle className="text-base">Rechercher</DialogTitle>
                </DialogHeader>

                <div className="px-4 flex-shrink-0">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            ref={inputRef}
                            placeholder="Rechercher des pages, membres, pôles, activités..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="pl-10 pr-4"
                        />
                        {isSearching && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-2 mb-3">
                        <div>
                            <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px]">Ctrl</kbd>
                            {" + "}
                            <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px]">K</kbd>
                            {" pour ouvrir"}
                        </div>
                        <div className="flex gap-2">
                            <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px]">↑↓</kbd>
                            <span>naviguer</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto border-t">
                    {!query.trim() && searchHistory.length > 0 && (
                        <div className="px-4 py-3">
                            <div className="flex items-center gap-2 mb-3">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                    Recherches récentes
                                </span>
                            </div>
                            <div className="space-y-1">
                                {searchHistory.map((historyItem, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleHistoryClick(historyItem)}
                                        className="w-full px-3 py-2 text-left text-sm text-foreground hover:bg-secondary rounded-lg transition-colors flex items-center gap-2"
                                    >
                                        <Search className="w-3 h-3 text-muted-foreground" />
                                        {historyItem}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {!query.trim() && searchHistory.length === 0 && (
                        <div className="px-4 py-8 text-center">
                            <TrendingUp className="w-8 h-8 text-muted-foreground mx-auto mb-3 opacity-50" />
                            <p className="text-sm text-muted-foreground mb-2">Suggestions populaires</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {["Gouvernement", "Activités", "Participer", "Pôles"].map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        onClick={() => setQuery(suggestion)}
                                        className="px-3 py-1.5 text-xs bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {query.trim() && results.length > 0 && (
                        <div>
                            {renderCategorySection("page", groupedResults.page)}
                            {renderCategorySection("member", groupedResults.member)}
                            {renderCategorySection("pole", groupedResults.pole)}
                            {renderCategorySection("activity", groupedResults.activity)}
                        </div>
                    )}

                    {query.trim() && results.length === 0 && !isSearching && (
                        <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                            <Search className="w-8 h-8 mx-auto mb-3 opacity-50" />
                            <p>Aucun résultat trouvé pour <strong>"{query}"</strong></p>
                            <p className="text-xs mt-2">Essayez avec d'autres mots-clés</p>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

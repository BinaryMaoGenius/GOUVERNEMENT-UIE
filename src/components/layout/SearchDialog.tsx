import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, FileText, Calendar, Users } from "lucide-react";

interface SearchResult {
    title: string;
    description: string;
    url: string;
    category: "page" | "activity" | "member";
}

const searchData: SearchResult[] = [
    // Pages
    { title: "Accueil", description: "Page principale", url: "/", category: "page" },
    { title: "Gouvernement", description: "Structure et membres", url: "/gouvernement", category: "page" },
    { title: "Activités", description: "Événements et activités", url: "/activites", category: "page" },
    { title: "Programme", description: "Programme du gouvernement", url: "/programme", category: "page" },
    { title: "Participer", description: "Rejoindre le gouvernement", url: "/participer", category: "page" },

    // Activités (exemples)
    { title: "Journée d'Intégration", description: "Activité à venir", url: "/activites", category: "activity" },
    { title: "Tournoi de Football", description: "Sport et compétition", url: "/activites", category: "activity" },
    { title: "Soirée Culturelle", description: "Culture et divertissement", url: "/activites", category: "activity" },

    // Membres/Postes
    { title: "Président(e)", description: "Bureau exécutif", url: "/gouvernement", category: "member" },
    { title: "Vice-Président(e)", description: "Bureau exécutif", url: "/gouvernement", category: "member" },
    { title: "Communication", description: "Pôle Communication et Relations", url: "/gouvernement", category: "member" },
    { title: "Culture & Sport", description: "Pôle activités culturelles et sportives", url: "/gouvernement", category: "member" },
];

interface SearchDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (query.trim() === "") {
            setResults([]);
            return;
        }

        const filtered = searchData.filter(
            (item) =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered.slice(0, 8)); // Limit to 8 results
    }, [query]);

    // Keyboard shortcut
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                onOpenChange(true);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onOpenChange]);

    const handleResultClick = (url: string) => {
        navigate(url);
        onOpenChange(false);
        setQuery("");
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "page":
                return <FileText className="w-4 h-4" />;
            case "activity":
                return <Calendar className="w-4 h-4" />;
            case "member":
                return <Users className="w-4 h-4" />;
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
            default:
                return "";
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] p-0">
                <DialogHeader className="px-4 pt-4 pb-2">
                    <DialogTitle className="text-base">Rechercher</DialogTitle>
                </DialogHeader>

                <div className="px-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Rechercher des pages, activités, membres..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="pl-10"
                            autoFocus
                        />
                    </div>

                    <div className="text-xs text-muted-foreground mt-2 mb-3">
                        <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px]">Ctrl</kbd>
                        {" + "}
                        <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px]">K</kbd>
                        {" pour ouvrir"}
                    </div>
                </div>

                {results.length > 0 && (
                    <div className="max-h-[300px] overflow-y-auto border-t">
                        {results.map((result, index) => (
                            <button
                                key={index}
                                onClick={() => handleResultClick(result.url)}
                                className="w-full px-4 py-3 flex items-start gap-3 hover:bg-secondary transition-colors text-left"
                            >
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
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
                        ))}
                    </div>
                )}

                {query && results.length === 0 && (
                    <div className="px-4 py-8 text-center text-sm text-muted-foreground border-t">
                        Aucun résultat trouvé pour "{query}"
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}

import { useState } from "react";
import { Lightbulb, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialIdeas = [
    { id: 1, text: "Un forum mensuel de débat ouvert à tous les étudiants.", author: "Aminata K.", votes: 12, category: "Gouvernance" },
    { id: 2, text: "Installation de zones de coworking avec Wi-Fi haut débit.", author: "Moussa T.", votes: 45, category: "Numérique" },
    { id: 3, text: "Une application mobile pour suivre les activités du gouvernement.", author: "Issa D.", votes: 28, category: "Numérique" },
    { id: 4, text: "Mise en place d'un programme de parrainage L1/L3.", author: "Fatoumata S.", votes: 34, category: "Mobilisation" },
];

const categories = ["Tous", "Gouvernance", "Numérique", "Mobilisation", "Culture", "Sport"];

export function IdeaWall() {
    console.log("Mur des idées rendu !");
    const [ideas, setIdeas] = useState(initialIdeas);
    const [activeCategory, setActiveCategory] = useState("Tous");

    const filteredIdeas = activeCategory === "Tous"
        ? ideas
        : ideas.filter(idea => idea.category === activeCategory);

    return (
        <section id="mur-des-idees" className="py-20 relative overflow-hidden bg-background">
            <div className="container-section relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="section-title text-3xl mb-2 italic">Le Mur des Idées</h2>
                        <p className="text-muted-foreground font-body">
                            Chaque voix compte. Participez à la construction de notre université en proposant vos meilleures idées.
                        </p>
                    </div>
                    <Button className="rounded-full bg-accent text-black font-bold hover:bg-accent/90 shadow-[0_0_20px_rgba(255,191,0,0.3)]">
                        <Send className="w-4 h-4 mr-2" />
                        Proposer une idée
                    </Button>
                </div>

                <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${activeCategory === cat
                                ? "bg-accent text-black border-accent shadow-lg shadow-accent/20"
                                : "bg-white/5 text-muted-foreground border-white/10 hover:border-accent/50"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredIdeas.map((idea) => (
                        <div key={idea.id} className="idea-card group flex flex-col justify-between h-64 border-accent/10">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2 text-accent/50 group-hover:text-accent transition-colors">
                                        <Lightbulb size={20} />
                                        <Sparkles size={14} className="animate-pulse" />
                                    </div>
                                    <span className="text-[9px] font-bold bg-accent/10 text-accent px-2 py-1 rounded-md uppercase tracking-tighter">
                                        {idea.category}
                                    </span>
                                </div>
                                <p className="font-body text-foreground leading-relaxed italic">
                                    "{idea.text}"
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{idea.author}</span>
                                <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-full cursor-pointer hover:bg-accent/20 transition-colors">
                                    <span className="text-xs font-bold text-accent">{idea.votes}</span>
                                    <span className="text-[10px] text-muted-foreground">VOTES</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

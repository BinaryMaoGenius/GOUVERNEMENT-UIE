import { useState } from "react";
import { Lightbulb, Send, Sparkles, Heart, MessageCircle, User, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialIdeas = [
    { id: 1, text: "Un forum mensuel de débat ouvert à tous les étudiants pour discuter des projets en cours.", author: "Aminata K.", votes: 12, category: "Gouvernance", color: "from-blue-500/10 to-blue-500/5", date: "Il y a 2h" },
    { id: 2, text: "Installation de zones de coworking avec Wi-Fi haut débit et prises connectées dans le jardin central.", author: "Moussa T.", votes: 45, category: "Numérique", color: "from-purple-500/10 to-purple-500/5", date: "Hier" },
    { id: 3, text: "Une application mobile centralisée pour suivre les activités du gouvernement et voter les budgets.", author: "Issa D.", votes: 28, category: "Numérique", color: "from-cyan-500/10 to-cyan-500/5", date: "Il y a 3 jours" },
    { id: 4, text: "Mise en place d'un programme de parrainage structuré entre les L1 et les L3.", author: "Fatoumata S.", votes: 34, category: "Mobilisation", color: "from-rose-500/10 to-rose-500/5", date: "Semaine dernière" },
    { id: 5, text: "Création d'un jardin communautaire géré par le club d'agronomie ouvert à tous.", author: "Oumar B.", votes: 19, category: "Culture", color: "from-emerald-500/10 to-emerald-500/5", date: "Il y a 5h" },
];

const categories = ["Tous", "Gouvernance", "Numérique", "Mobilisation", "Culture", "Sport"];

export function IdeaWall() {
    const [ideas, setIdeas] = useState(initialIdeas);
    const [activeCategory, setActiveCategory] = useState("Tous");
    const [likedIdeas, setLikedIdeas] = useState<number[]>([]);

    const toggleLike = (id: number) => {
        if (likedIdeas.includes(id)) {
            setLikedIdeas(likedIdeas.filter(i => i !== id));
            setIdeas(ideas.map(idea => idea.id === id ? { ...idea, votes: idea.votes - 1 } : idea));
        } else {
            setLikedIdeas([...likedIdeas, id]);
            setIdeas(ideas.map(idea => idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea));
        }
    };

    const filteredIdeas = activeCategory === "Tous"
        ? ideas
        : ideas.filter(idea => idea.category === activeCategory);

    return (
        <section id="mur-des-idees" className="py-24 relative overflow-hidden bg-white/50">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="container-section relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            <Sparkles className="w-3 h-3" />
                            <span>Intelligence Collective</span>
                        </div>
                        <h2 className="section-title">Le Mur des <span className="text-primary italic">Idées</span></h2>
                        <p className="text-muted-foreground text-lg font-body leading-relaxed">
                            C'est ici que naissent les grands projets. Proposez, votez et construisez ensemble l'avenir de notre campus.
                        </p>
                    </div>
                    <Button className="h-16 px-10 rounded-2xl bg-primary text-white font-bold hover:scale-105 transition-all shadow-2xl shadow-primary/20 group">
                        <Lightbulb className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                        Lancer une proposition
                    </Button>
                </div>

                {/* Filters Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-border pb-8">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
                        <Filter className="w-4 h-4 text-muted-foreground mr-2 hidden md:block" />
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap ${activeCategory === cat
                                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                                    : "bg-white text-muted-foreground border border-border hover:border-primary/40"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                        <span className="text-primary font-bold">{filteredIdeas.length}</span> idées actives
                    </div>
                </div>

                {/* The Wall - Masonry-like grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredIdeas.map((idea) => (
                        <div
                            key={idea.id}
                            className="group relative bg-white p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
                        >
                            {/* Accent decorative background */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${idea.color} rounded-full -mr-16 -mt-16 blur-3xl opacity-60`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <Lightbulb size={20} />
                                    </div>
                                    <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest px-3 py-1 rounded-full border border-border">
                                        {idea.category}
                                    </span>
                                </div>

                                <blockquote className="flex-1">
                                    <p className="font-display text-xl text-foreground font-semibold leading-relaxed mb-6 group-hover:text-primary transition-colors">
                                        "{idea.text}"
                                    </p>
                                </blockquote>

                                <div className="mt-auto">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-white">
                                            <User size={14} className="text-slate-400" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-foreground/80 lowercase italic">@{idea.author.replace(' ', '').toLowerCase()}</span>
                                            <span className="text-[9px] text-muted-foreground uppercase tracking-widest">{idea.date}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-border/60">
                                        <button
                                            onClick={() => toggleLike(idea.id)}
                                            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-2xl transition-all ${likedIdeas.includes(idea.id)
                                                    ? "bg-rose-50 text-rose-500 font-bold border border-rose-100 scale-105"
                                                    : "bg-slate-50 text-slate-500 hover:bg-rose-50 hover:text-rose-500 border border-transparent"
                                                }`}
                                        >
                                            <Heart size={18} className={likedIdeas.includes(idea.id) ? "fill-current" : ""} />
                                            <span className="text-sm">{idea.votes}</span>
                                        </button>

                                        <button className="flex items-center gap-2 p-2.5 rounded-xl text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                                            <MessageCircle size={20} />
                                            <span className="text-xs font-bold">12</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add Suggestion Placeholder */}
                    <button className="group relative bg-slate-50/50 p-8 rounded-[2.5rem] border-2 border-dashed border-slate-200 hover:border-primary/40 hover:bg-white transition-all duration-500 flex flex-col items-center justify-center text-center min-h-[320px]">
                        <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 mb-6">
                            <Send size={28} />
                        </div>
                        <h3 className="font-display font-bold text-xl mb-2">Votre idée ici ?</h3>
                        <p className="text-sm text-muted-foreground max-w-[200px] leading-relaxed">
                            Aidez-nous à améliorer la vie sur le campus.
                        </p>
                    </button>
                </div>
            </div>
        </section>
    );
}

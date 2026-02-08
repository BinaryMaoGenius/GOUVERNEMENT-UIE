import { useState } from "react";
import { Lightbulb, Send, Sparkles, CheckCircle2, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialIdeas = [
    { id: 1, text: "Un forum mensuel de débat ouvert à tous les étudiants.", author: "Aminata K.", category: "Gouvernance" },
    { id: 2, text: "Installation de zones de coworking avec Wi-Fi haut débit.", author: "Moussa T.", category: "Numérique" },
    { id: 3, text: "Une application mobile pour suivre les activités du gouvernement.", author: "Issa D.", category: "Numérique" },
    { id: 4, text: "Mise en place d'un programme de parrainage L1/L3.", author: "Fatoumata S.", category: "Mobilisation" },
];

const categories = ["Tous", "Gouvernance", "Numérique", "Mobilisation", "Culture", "Sport"];

export function IdeaWall() {
    const [ideas, setIdeas] = useState(initialIdeas);
    const [activeCategory, setActiveCategory] = useState("Tous");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [newIdea, setNewIdea] = useState({
        text: "",
        author: "",
        category: "Gouvernance",
        email: "",
        niveau: "L1"
    });

    const filteredIdeas = activeCategory === "Tous"
        ? ideas
        : ideas.filter(idea => idea.category === activeCategory);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/.netlify/functions/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'idea',
                    nom: newIdea.author,
                    prenom: 'Prénom', // Placeholder as the function requires both
                    email: newIdea.email,
                    niveau: newIdea.niveau,
                    message: newIdea.text,
                    pole: newIdea.category
                }),
            });

            if (response.ok) {
                setSubmitted(true);
                // Add to local state for immediate feedback
                setIdeas([
                    { id: Date.now(), text: newIdea.text, author: newIdea.author, category: newIdea.category },
                    ...ideas
                ]);
                setTimeout(() => {
                    setShowForm(false);
                    setSubmitted(false);
                    setNewIdea({ text: "", author: "", category: "Gouvernance", email: "", niveau: "L1" });
                }, 3000);
            }
        } catch (error) {
            console.error("Error submitting idea:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="mur-des-idees" className="py-20 relative overflow-hidden bg-background">
            <div className="container-section relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="section-title text-3xl mb-2 italic text-slate-900">Le Mur des Idées</h2>
                        <p className="text-muted-foreground font-body">
                            Chaque voix compte. Participez à la construction de notre université en proposant vos meilleures idées.
                        </p>
                    </div>
                    {!showForm && (
                        <Button
                            onClick={() => setShowForm(true)}
                            className="rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 group active:scale-95 transition-all"
                        >
                            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Proposer une idée
                        </Button>
                    )}
                </div>

                {showForm && (
                    <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-white rounded-[2rem] p-6 md:p-10 border border-blue-100 shadow-2xl relative">
                            <button
                                onClick={() => setShowForm(false)}
                                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {submitted ? (
                                <div className="text-center py-10">
                                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Idée envoyée !</h3>
                                    <p className="text-slate-500">Merci pour votre contribution au gouvernement UIE.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-slate-900 mb-2">Votre idée</label>
                                        <textarea
                                            required
                                            value={newIdea.text}
                                            onChange={(e) => setNewIdea({ ...newIdea, text: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none min-h-[120px]"
                                            placeholder="Décrivez votre idée en quelques phrases..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-900 mb-2">Nom ou Pseudonyme</label>
                                        <input
                                            required
                                            type="text"
                                            value={newIdea.author}
                                            onChange={(e) => setNewIdea({ ...newIdea, author: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                            placeholder="Ex: Aminata K."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-900 mb-2">Email</label>
                                        <input
                                            required
                                            type="email"
                                            value={newIdea.email}
                                            onChange={(e) => setNewIdea({ ...newIdea, email: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                            placeholder="votre@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-900 mb-2">Catégorie</label>
                                        <select
                                            value={newIdea.category}
                                            onChange={(e) => setNewIdea({ ...newIdea, category: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                        >
                                            {categories.filter(c => c !== "Tous").map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-900 mb-2">Niveau</label>
                                        <select
                                            value={newIdea.niveau}
                                            onChange={(e) => setNewIdea({ ...newIdea, niveau: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                        >
                                            <option value="L1">L1</option>
                                            <option value="L2">L2</option>
                                            <option value="L3">L3</option>
                                            <option value="M1">M1</option>
                                            <option value="M2">M2</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 pt-4">
                                        <Button
                                            disabled={isSubmitting}
                                            className="w-full h-14 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all active:scale-[0.98]"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Envoi en cours...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Soumettre mon idée
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${activeCategory === cat
                                ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100"
                                : "bg-white text-slate-500 border-slate-200 hover:border-blue-300"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredIdeas.map((idea) => (
                        <div key={idea.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between h-64 hover:shadow-xl hover:border-blue-100 transition-all duration-500 group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                        <Lightbulb size={20} />
                                    </div>
                                    <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-md uppercase tracking-widest">
                                        {idea.category}
                                    </span>
                                </div>
                                <p className="font-body text-slate-700 leading-relaxed italic line-clamp-4">
                                    "{idea.text}"
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-50">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                                    Par {idea.author}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

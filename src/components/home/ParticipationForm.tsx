import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, Book, Briefcase, FileText, Send } from "lucide-react";

interface ParticipationFormProps {
    poles: string[];
    responsibilites: string[];
}

export function ParticipationForm({ poles, responsibilites }: ParticipationFormProps) {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulation d'envoi
        setTimeout(() => {
            setLoading(false);
            toast({
                title: "Dossier envoyé avec succès !",
                description: "Nous reviendrons vers vous très prochainement par email.",
            });
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-10 animate-fade-in">
            {/* Section : Informations Personnelles */}
            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <User size={16} />
                    </div>
                    <h4 className="font-display font-bold text-lg">Identité</h4>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Nom Complet</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input required placeholder="Ex: Jean Dupont" className="pl-11 h-14 rounded-xl border-border bg-slate-50/50 focus:bg-white transition-all focus:ring-primary/20" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Numéro de téléphone</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input required type="tel" placeholder="Ex: +221 ..." className="pl-11 h-14 rounded-xl border-border bg-slate-50/50 focus:bg-white transition-all" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Universitaire</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input required type="email" placeholder="nom.prenom@uie.edu.sn" className="pl-11 h-14 rounded-xl border-border bg-slate-50/50 focus:bg-white transition-all" />
                    </div>
                </div>
            </div>

            {/* Section : Choix du Pôle */}
            <div className="space-y-6 pt-4">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                        <Briefcase size={16} />
                    </div>
                    <h4 className="font-display font-bold text-lg">Vœux d'Engagement</h4>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Pôle visé</label>
                        <div className="relative">
                            <Book className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                            <select className="flex h-14 w-full rounded-xl border border-input bg-slate-50/50 px-11 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none focus:bg-white transition-all">
                                {poles.map((pole) => (
                                    <option key={pole} value={pole}>{pole}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Poste souhaité</label>
                        <div className="relative">
                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                            <select className="flex h-14 w-full rounded-xl border border-input bg-slate-50/50 px-11 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none focus:bg-white transition-all">
                                {responsibilites.map((resp) => (
                                    <option key={resp} value={resp}>{resp}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section : Motivation */}
            <div className="space-y-6 pt-4">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <FileText size={16} />
                    </div>
                    <h4 className="font-display font-bold text-lg">Manifeste</h4>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Pourquoi vous ? (Motivation en 2-3 phrases)</label>
                    <Textarea
                        placeholder="Dites-nous ce qui vous passionne et ce que vous souhaitez apporter au Gouvernement..."
                        className="min-h-[120px] rounded-2xl border-border bg-slate-50/50 focus:bg-white transition-all resize-none p-6"
                    />
                </div>
            </div>

            <div className="pt-8">
                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-16 rounded-2xl bg-primary text-white font-bold text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                    {loading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            Envoyer mon dossier
                            <Send className="w-5 h-5" />
                        </>
                    )}
                </Button>
                <p className="text-center text-[10px] text-muted-foreground mt-6 uppercase tracking-widest font-bold">
                    En soumettant ce formulaire, vous acceptez d'être contacté par le Gouvernement UIE.
                </p>
            </div>
        </form>
    );
}

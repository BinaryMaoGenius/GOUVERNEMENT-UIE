import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Mail, GraduationCap, Briefcase, MessageSquare } from "lucide-react";

interface ParticipationFormProps {
    poles: string[];
    responsibilites: string[];
}

export function ParticipationForm({ poles, responsibilites }: ParticipationFormProps) {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            nom: formData.get("nom"),
            email: formData.get("email"),
            matricule: formData.get("matricule"),
            pole: formData.get("pole"),
            responsabilite: formData.get("responsabilite"),
            motivation: formData.get("motivation"),
        };

        try {
            // Simulation
            await new Promise(resolve => setTimeout(resolve, 2000));

            toast({
                title: "Candidature envoyée !",
                description: "Merci pour votre engagement. Nous vous reviendrons bientôt.",
            });
            (e.target as HTMLFormElement).reset();

        } catch (error) {
            toast({
                title: "Erreur",
                description: "Une erreur est survenue lors de l'envoi.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in p-2">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" /> Nom complet
                    </label>
                    <Input
                        name="nom"
                        placeholder="Jean Dupont"
                        required
                        className="h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all shadow-inner"
                    />
                </div>
                <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" /> Email institutionnel
                    </label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="jean.dupont@uie.edu"
                        required
                        className="h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all shadow-inner"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary" /> Matricule
                    </label>
                    <Input
                        name="matricule"
                        placeholder="UIE-202X-XXXX"
                        required
                        className="h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all shadow-inner"
                    />
                </div>
                <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" /> Pôle souhaité
                    </label>
                    <Select name="pole" required>
                        <SelectTrigger className="h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all shadow-inner">
                            <SelectValue placeholder="Choisir un pôle" />
                        </SelectTrigger>
                        <SelectContent>
                            {poles.map((pole) => (
                                <SelectItem key={pole} value={pole}>{pole}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" /> Responsabilité visée
                </label>
                <Select name="responsabilite" required>
                    <SelectTrigger className="h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all shadow-inner">
                        <SelectValue placeholder="Choisir un poste" />
                    </SelectTrigger>
                    <SelectContent>
                        {responsibilites.map((resp) => (
                            <SelectItem key={resp} value={resp}>{resp}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" /> Vos motivations
                </label>
                <Textarea
                    name="motivation"
                    placeholder="Pourquoi souhaitez-vous rejoindre ce pôle ? Quelles sont vos expériences ?"
                    className="min-h-[160px] rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all shadow-inner resize-none p-4 leading-relaxed"
                    required
                />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 rounded-2xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] mt-8"
            >
                {isSubmitting ? "Envoi en cours..." : (
                    <>Soumettre ma candidature <Send className="w-5 h-5 ml-2" /></>
                )}
            </Button>
        </form>
    );
}

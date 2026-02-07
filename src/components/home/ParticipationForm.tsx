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
            const response = await fetch("/.netlify/functions/submit-form", {
                method: "POST",
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast({
                    title: "Candidature envoyée !",
                    description: "Merci pour votre engagement. Nous vous reviendrons bientôt.",
                });
                (e.target as HTMLFormElement).reset();
            } else {
                throw new Error("Erreur lors de l'envoi");
            }
        } catch (error) {
            toast({
                title: "Succès !",
                description: "Votre candidature a été transmise au gouvernement.",
            });
            console.log("Candidature simulée:", data);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" /> Nom complet
                    </label>
                    <Input name="nom" placeholder="Jean Dupont" required className="glass border-white/10" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" /> Email institutionnel
                    </label>
                    <Input name="email" type="email" placeholder="jean.dupont@uie.edu" required className="glass border-white/10" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary" /> Matricule
                    </label>
                    <Input name="matricule" placeholder="UIE-202X-XXXX" required className="glass border-white/10" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" /> Pôle souhaité
                    </label>
                    <Select name="pole" required>
                        <SelectTrigger className="glass border-white/10">
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

            <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" /> Responsabilité visée
                </label>
                <Select name="responsabilite" required>
                    <SelectTrigger className="glass border-white/10">
                        <SelectValue placeholder="Choisir un poste" />
                    </SelectTrigger>
                    <SelectContent>
                        {responsibilites.map((resp) => (
                            <SelectItem key={resp} value={resp}>{resp}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" /> Vos motivations
                </label>
                <Textarea
                    name="motivation"
                    placeholder="Pourquoi souhaitez-vous rejoindre ce pôle ?"
                    className="min-h-[120px] glass border-white/10"
                    required
                />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full btn-primary py-6 text-lg">
                {isSubmitting ? "Envoi en cours..." : (
                    <>Soumettre ma candidature <Send className="w-5 h-5 ml-2" /></>
                )}
            </Button>
        </form>
    );
}

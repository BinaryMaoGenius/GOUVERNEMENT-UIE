import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
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
import { Users, Lightbulb, HandHeart, MessageSquare, CheckCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const actions = [
  {
    id: "pole",
    icon: Users,
    title: "Rejoindre un pôle",
    description: "Intègre une équipe selon tes centres d'intérêt",
    color: "bg-blue-500",
  },
  {
    id: "idea",
    icon: Lightbulb,
    title: "Proposer une activité",
    description: "Suggère un événement ou un projet au BDE",
    color: "bg-amber-500",
  },
  {
    id: "volunteer",
    icon: HandHeart,
    title: "Devenir bénévole",
    description: "Aide ponctuellement lors de nos événements",
    color: "bg-green-500",
  },
  {
    id: "suggestion",
    icon: MessageSquare,
    title: "Faire une suggestion",
    description: "Partage tes idées pour améliorer le BDE",
    color: "bg-purple-500",
  },
];

const poles = [
  "Gouvernance & Administration",
  "Communication & Relations",
  "Organisation & Mobilisation",
  "Culture & Sport",
  "Actions humanitaires",
  "Entrepreneuriat & Employabilité",
  "Langues & Identité",
  "Numérique & Droits",
];

const ParticipPage = () => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons très bientôt.",
    });
    setTimeout(() => {
      setSelectedAction(null);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-primary-light">
        <div className="container-section text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Participer
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Le BDE a besoin de toi ! Choisis comment tu veux t'impliquer 
            et rejoins le mouvement.
          </p>
        </div>
      </section>

      {/* Actions Grid */}
      <section className="py-12">
        <div className="container-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {actions.map((action) => (
              <button
                key={action.id}
                onClick={() => setSelectedAction(action.id)}
                className={`card-elevated p-6 text-left transition-all ${
                  selectedAction === action.id 
                    ? "ring-2 ring-primary" 
                    : "hover:shadow-card-hover"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {action.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      {selectedAction && (
        <section className="py-8 bg-secondary/50">
          <div className="container-section">
            <div className="max-w-lg mx-auto">
              {submitted ? (
                <div className="card-elevated p-8 text-center animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    Merci !
                  </h3>
                  <p className="text-muted-foreground">
                    Votre demande a été envoyée. Nous vous contacterons bientôt.
                  </p>
                </div>
              ) : (
                <div className="card-elevated p-6 animate-slide-up">
                  <h3 className="font-display font-semibold text-foreground mb-6">
                    {actions.find((a) => a.id === selectedAction)?.title}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">
                          Prénom
                        </label>
                        <Input placeholder="Votre prénom" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">
                          Nom
                        </label>
                        <Input placeholder="Votre nom" required />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Email
                      </label>
                      <Input type="email" placeholder="votre@email.com" required />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Téléphone
                      </label>
                      <Input type="tel" placeholder="+221 XX XXX XX XX" />
                    </div>

                    {(selectedAction === "pole" || selectedAction === "volunteer") && (
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">
                          Pôle souhaité
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir un pôle" />
                          </SelectTrigger>
                          <SelectContent>
                            {poles.map((pole) => (
                              <SelectItem key={pole} value={pole}>
                                {pole}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        {selectedAction === "idea" 
                          ? "Décrivez votre idée d'activité"
                          : selectedAction === "suggestion"
                          ? "Votre suggestion"
                          : "Message (optionnel)"}
                      </label>
                      <Textarea 
                        placeholder="Écrivez ici..." 
                        rows={4}
                        required={selectedAction === "idea" || selectedAction === "suggestion"}
                      />
                    </div>

                    <Button type="submit" className="w-full btn-accent">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer ma demande
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ParticipPage;

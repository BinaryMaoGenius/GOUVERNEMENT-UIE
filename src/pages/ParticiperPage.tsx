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
import { Users, Lightbulb, HandHeart, ArrowLeft, CheckCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const actions = [
  {
    id: "pole",
    icon: Users,
    title: "Rejoindre un pôle",
    description: "Governance, Culture de Sport, Solidarités",
    buttonText: "Je m'inscris !",
    color: "bg-blue-500",
  },
  {
    id: "idea",
    icon: Lightbulb,
    title: "Proposer une activité",
    description: "Nous pes bureau saur the Cloits free muerique bonimes cerras eau prie im mante. Oe tusqriés!",
    buttonText: "Je propose !",
    color: "bg-amber-500",
  },
  {
    id: "volunteer",
    icon: HandHeart,
    title: "Devenir bénévole",
    description: "Rejoignez notre équipe de bénévoles pour les événements.",
    buttonText: "Je m'engage !",
    color: "bg-green-500",
    hasImage: true,
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

const ParticiperPage = () => {
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
      {/* Header */}
      <section className="py-4">
        <div className="container-section">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-display font-semibold text-lg text-foreground">Participer</span>
          </Link>
        </div>
      </section>

      {/* Rejoindre un pôle */}
      <section className="py-4">
        <div className="container-section">
          <h2 className="font-display font-bold text-base mb-3">Rejoindre un pôle</h2>
          
          {/* Icons row */}
          <div className="flex gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-500" />
            </div>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <HandHeart className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Governance, Culture de Sport, Solidarités
          </p>
          <Button 
            className="w-full border-2 border-primary text-primary bg-transparent hover:bg-primary-light"
            onClick={() => setSelectedAction("pole")}
          >
            Je m'inscris !
          </Button>
        </div>
      </section>

      {/* Proposer une activité */}
      <section className="py-4">
        <div className="container-section">
          <h2 className="font-display font-bold text-base mb-3">Proposer une activité</h2>
          <div className="flex gap-3 items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-sm text-muted-foreground">
              Nous pes bureau saur the Cloits free muerique bonimes cerras eau prie im mante. Oe tusqriés!
            </p>
          </div>
          <Button 
            className="w-full border-2 border-primary text-primary bg-transparent hover:bg-primary-light"
            onClick={() => setSelectedAction("idea")}
          >
            Je propose !
          </Button>
        </div>
      </section>

      {/* Devenir bénévole */}
      <section className="py-4">
        <div className="container-section">
          <h2 className="font-display font-bold text-base mb-3">Devenir bénévole</h2>
          <div className="h-32 rounded-xl gradient-hero mb-4 flex items-center justify-center">
            <span className="text-primary-foreground/60 text-sm">Image bénévoles</span>
          </div>
          <Button 
            className="w-full border-2 border-primary text-primary bg-transparent hover:bg-primary-light"
            onClick={() => setSelectedAction("volunteer")}
          >
            Je m'engage !
          </Button>
        </div>
      </section>

      {/* Form Modal */}
      {selectedAction && (
        <section className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-end">
          <div className="bg-card w-full rounded-t-2xl p-6 max-h-[80vh] overflow-auto animate-slide-up">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Merci !
                </h3>
                <p className="text-muted-foreground">
                  Votre demande a été envoyée.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-display font-semibold text-foreground">
                    {selectedAction === "pole" && "Rejoindre un pôle"}
                    {selectedAction === "idea" && "Proposer une activité"}
                    {selectedAction === "volunteer" && "Devenir bénévole"}
                  </h3>
                  <button 
                    onClick={() => setSelectedAction(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Prénom</label>
                      <Input placeholder="Votre prénom" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Nom</label>
                      <Input placeholder="Votre nom" required />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                    <Input type="email" placeholder="votre@email.com" required />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Téléphone</label>
                    <Input type="tel" placeholder="+221 XX XXX XX XX" />
                  </div>

                  {(selectedAction === "pole" || selectedAction === "volunteer") && (
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Pôle souhaité</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir un pôle" />
                        </SelectTrigger>
                        <SelectContent>
                          {poles.map((pole) => (
                            <SelectItem key={pole} value={pole}>{pole}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {selectedAction === "idea" && (
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Votre idée</label>
                      <Textarea placeholder="Décrivez votre idée d'activité..." rows={4} required />
                    </div>
                  )}

                  <Button type="submit" className="w-full btn-primary">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer
                  </Button>
                </form>
              </>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ParticiperPage;

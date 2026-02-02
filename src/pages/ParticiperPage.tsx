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
import { Shield, Lightbulb, HandHeart, ArrowLeft, CheckCircle, Send, Crown, Star } from "lucide-react";
import { IdeaWall } from "@/components/home/IdeaWall";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const postes = [
  "Président(e)",
  "Vice-Président(e)",
  "Secrétaire Général(e)",
  "Secrétaire Général(e) Adjoint(e)",
  "Trésorier(ère)",
  "Trésorier(ère) Adjoint(e)",
  "Responsable Communication",
  "Responsable Organisation",
  "Responsable Culture & Sport",
  "Responsable Actions Humanitaires",
  "Responsable Entrepreneuriat",
  "Responsable Promotion des Langues",
  "Responsable Informatique",
  "Responsable Droit",
];

const poles = [
  "Communication & Relations",
  "Organisation & Mobilisation",
  "Culture & Sport",
  "Actions Humanitaires",
  "Entrepreneuriat",
  "Promotion des Langues",
  "Informatique",
  "Droit",
];

const ParticiperPage = () => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    // Collecte des données du formulaire via FormData
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const payload = {
      type: selectedAction,
      nom: formData.get('nom') as string,
      prenom: formData.get('prenom') as string,
      email: formData.get('email') as string,
      telephone: formData.get('telephone') as string,
      niveau: formData.get('niveau') as string,
      poste: formData.get('poste') as string,
      pole: formData.get('pole') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "Candidature envoyée !",
          description: "Vos informations ont été enregistrées avec succès.",
        });
        setTimeout(() => {
          setSelectedAction(null);
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      });
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-4">
        <div className="container-section">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display font-bold text-2xl text-foreground italic tracking-tight">Rejoignez l'Aventure</span>
          </Link>

          <div className="glass-dark rounded-[2.5rem] p-10 mb-12 border-accent/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Star size={160} />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h1 className="font-display font-bold text-4xl text-foreground mb-4 leading-tight">
                Forgez votre <span className="text-accent">Destin</span> Étudiant
              </h1>
              <p className="text-lg text-muted-foreground font-body max-w-xl leading-relaxed">
                Le Gouvernement UIE est un accélérateur de talents. Trouvez votre place et marquez l'histoire de notre campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IdeaWall />

      {/* Candidater à un poste */}
      <section className="py-6">
        <div className="container-section">
          <div className="glass-dark p-8 rounded-[2rem] border-accent/20 hover:border-accent/40 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground">Candidater à un poste</h2>
                <p className="text-sm text-accent uppercase tracking-widest font-bold">Bureau Exécutif ou Responsable</p>
              </div>
            </div>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Incarnez le leadership étudiant. Accompagnez Madina dans sa vision et gérez les pôles stratégiques de notre université.
            </p>
            <Button
              className="w-full h-14 rounded-2xl bg-white text-black hover:bg-white/90 font-bold shadow-[0_0_20px_rgba(255,191,0,0.2)]"
              onClick={() => setSelectedAction("candidature")}
            >
              Déposer mon Manifeste
            </Button>
          </div>
        </div>
      </section>

      {/* Rejoindre un pôle */}
      <section className="py-4">
        <div className="container-section">
          <div className="card-elevated p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-display font-bold text-base">Rejoindre un pôle</h2>
                <p className="text-xs text-muted-foreground">
                  8 pôles thématiques disponibles
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Intègre un pôle selon tes centres d'intérêt : communication, culture, sport, informatique...
            </p>
            <Button
              variant="outline"
              className="w-full border-2 border-primary text-primary"
              onClick={() => setSelectedAction("pole")}
            >
              Je m'inscris !
            </Button>
          </div>
        </div>
      </section>

      {/* Proposer une activité */}
      <section className="py-4">
        <div className="container-section">
          <div className="card-elevated p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-display font-bold text-base">Proposer une activité</h2>
                <p className="text-xs text-muted-foreground">
                  Partage tes idées d'événements
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Tu as une idée d'événement ? Soumets-la au Gouvernement UIE !
            </p>
            <Button
              variant="outline"
              className="w-full border-2 border-primary text-primary"
              onClick={() => setSelectedAction("idea")}
            >
              Je propose !
            </Button>
          </div>
        </div>
      </section>

      {/* Devenir bénévole */}
      <section className="py-4">
        <div className="container-section">
          <div className="card-elevated p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center">
                <HandHeart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-display font-bold text-base">Devenir bénévole</h2>
                <p className="text-xs text-muted-foreground">
                  Aide ponctuelle lors des événements
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Rejoins notre équipe de bénévoles et aide à organiser les événements du campus.
            </p>
            <Button
              variant="outline"
              className="w-full border-2 border-primary text-primary"
              onClick={() => setSelectedAction("volunteer")}
            >
              Je m'engage !
            </Button>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {selectedAction && (
        <section className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="glass-dark w-full max-w-2xl rounded-[3rem] p-8 md:p-12 max-h-[90vh] overflow-auto border-accent/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-scale-in">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Merci !
                </h3>
                <p className="text-muted-foreground">
                  Votre demande a été envoyée avec succès.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                  <h3 className="font-display font-bold text-2xl text-foreground italic">
                    {selectedAction === "candidature" && "Dossier de Candidature"}
                    {selectedAction === "pole" && "Intégration d'un Pôle"}
                    {selectedAction === "idea" && "Proposition d'Activité"}
                    {selectedAction === "volunteer" && "Engagement Bénévole"}
                  </h3>
                  <button
                    onClick={() => setSelectedAction(null)}
                    className="w-10 h-10 rounded-full glass-dark border-white/10 flex items-center justify-center text-muted-foreground hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Prénom</label>
                      <Input name="prenom" placeholder="Votre prénom" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Nom</label>
                      <Input name="nom" placeholder="Votre nom" required />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                    <Input name="email" type="email" placeholder="votre@email.com" required />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Téléphone</label>
                    <Input name="telephone" type="tel" placeholder="+223 XX XX XX XX" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Niveau d'études</label>
                    <Select name="niveau" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Votre niveau" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="L1">Licence 1</SelectItem>
                        <SelectItem value="L2">Licence 2</SelectItem>
                        <SelectItem value="L3">Licence 3</SelectItem>
                        <SelectItem value="M1">Master 1</SelectItem>
                        <SelectItem value="M2">Master 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedAction === "candidature" && (
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Poste souhaité</label>
                      <Select name="poste" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir un poste" />
                        </SelectTrigger>
                        <SelectContent>
                          {postes.map((poste) => (
                            <SelectItem key={poste} value={poste}>{poste}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {(selectedAction === "pole" || selectedAction === "volunteer") && (
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Pôle souhaité</label>
                      <Select name="pole">
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

                  {(selectedAction === "candidature" || selectedAction === "idea") && (
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        {selectedAction === "candidature" ? "Motivation" : "Votre idée"}
                      </label>
                      <Textarea
                        placeholder={selectedAction === "candidature"
                          ? "Décrivez vos motivations et ce que vous apporterez..."
                          : "Décrivez votre idée d'activité..."
                        }
                        rows={4}
                        name="message"
                        required
                      />
                    </div>
                  )}

                  <Button type="submit" className="w-full btn-primary">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer ma candidature
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

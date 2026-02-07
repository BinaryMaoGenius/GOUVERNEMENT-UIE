import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ParticipationForm } from "@/components/home/ParticipationForm";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "@/components/layout/BottomNav";
import {
  Heart,
  Users,
  Target,
  Rocket,
  Shield,
  Clock,
  ArrowLeft,
  CheckCircle,
  Crown,
  Star,
  X,
  Lightbulb,
  HandHeart
} from "lucide-react";

const responsibilites = [
  "Chef de Pôle",
  "Secrétaire de Pôle",
  "Responsable Communication",
  "Responsable Logistique",
  "Membre Actif",
  "Délégué Adjoint",
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

  useEffect(() => {
    if (selectedAction) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedAction]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container-section relative">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display font-bold text-2xl text-foreground italic tracking-tight">Rejoignez l'Aventure</span>
          </Link>

          <div className="glass-dark rounded-[2.5rem] p-10 border border-accent/20 relative overflow-hidden">
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

      {/* Main Options Grid */}
      <section className="py-12">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Candidature BE */}
            <div className="glass-dark p-8 rounded-[2rem] border-accent/20 hover:border-accent/40 transition-all group relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Crown size={80} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground">Candidater à un poste</h2>
                  <p className="text-xs text-accent uppercase tracking-widest font-bold">Bureau Exécutif</p>
                </div>
              </div>
              <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                Incarnez le leadership étudiant. Accompagnez Madina dans sa vision et gérez les pôles stratégiques.
              </p>
              <Button
                className="w-full h-14 rounded-2xl bg-white text-black hover:bg-white/90 font-bold shadow-xl"
                onClick={() => setSelectedAction("candidature")}
              >
                Déposer mon Manifeste
              </Button>
            </div>

            {/* Rejoindre un pôle */}
            <div className="card-elevated p-8 rounded-[2rem] border-white/5 group relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground">Rejoindre un pôle</h2>
                  <p className="text-xs text-muted-foreground">Membre actif</p>
                </div>
              </div>
              <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                Intègre l'un de nos 8 pôles thématiques (Communication, Culture, Sport, Informatique...)
              </p>
              <Button
                variant="outline"
                className="w-full h-14 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary/5 shadow-lg"
                onClick={() => setSelectedAction("pole")}
              >
                Devenir Membre
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Proposer activité */}
            <div className="card-elevated p-8 rounded-[2rem] border-white/5 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl">Proposer une activité</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Tu as une idée d'événement ? Soumets-la au Gouvernement UIE !
              </p>
              <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/5" onClick={() => setSelectedAction("idea")}>
                Proposer mon idée
              </Button>
            </div>

            {/* Devenir bénévole */}
            <div className="card-elevated p-8 rounded-[2rem] border-white/5 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                  <HandHeart className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl">Devenir bénévole</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Aide ponctuelle lors des événements du campus.
              </p>
              <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/5" onClick={() => setSelectedAction("volunteer")}>
                S'inscrire comme bénévole
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BottomNav hidden={selectedAction !== null} />

      {/* Form Modal */}
      {selectedAction && (
        <section className="fixed inset-0 bg-background/95 backdrop-blur-md z-[60] flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-dark w-full max-w-2xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 my-4 border border-white/10 shadow-2xl animate-fade-in relative">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Candidature Envoyée !</h3>
                <p className="text-muted-foreground mb-8">Votre dossier est maintenant entre les mains du bureau.</p>
                <Button onClick={() => { setSelectedAction(null); setSubmitted(false); }} className="btn-primary px-8">Retour au site</Button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-foreground italic tracking-tight">
                      {selectedAction === "candidature" && "Dossier de Candidature"}
                      {selectedAction === "pole" && "Intégration d'un Pôle"}
                      {selectedAction === "idea" && "Proposition d'Activité"}
                      {selectedAction === "volunteer" && "Engagement Bénévole"}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">Étape unique de candidature</p>
                  </div>
                  <button
                    onClick={() => setSelectedAction(null)}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <ParticipationForm
                  poles={poles}
                  responsibilites={responsibilites}
                />
              </>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ParticiperPage;

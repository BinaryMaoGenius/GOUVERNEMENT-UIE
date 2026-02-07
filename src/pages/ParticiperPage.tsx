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
  HandHeart,
  Sparkles
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
      {/* Hero Section - Clean Light Look */}
      <section className="relative py-20 overflow-hidden bg-slate-50/50">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>
        </div>

        <div className="container-section relative">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-12 group transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display font-medium text-lg uppercase tracking-widest italic">Retour à l'Essentiel</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3 h-3" />
              <span>Opportunités 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
              Prenez votre place au <span className="text-primary italic">Sommet</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-2xl leading-relaxed">
              Le Gouvernement UIE n'est pas qu'une structure, c'est un incubateur de leaders. Choisissez votre voie et transformez le campus.
            </p>
          </div>
        </div>
      </section>

      {/* Main Options Grid - Elegant & Symmetrical */}
      <section className="py-24">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Candidature BE */}
            <div className="group relative bg-white rounded-[3rem] p-12 border border-border shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col h-full relative z-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
                <div className="w-16 h-16 rounded-3xl bg-primary/5 text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <Crown className="w-8 h-8" />
                </div>
                <h2 className="font-display font-bold text-3xl text-foreground mb-4">Bureau Exécutif</h2>
                <p className="text-muted-foreground font-body mb-10 leading-relaxed text-lg">
                  Incarnez le leadership étudiant au plus haut niveau. Gérez les pôles stratégiques et définissez l'avenir du mandat de Madina.
                </p>
                <div className="mt-auto">
                  <Button
                    className="w-full h-16 rounded-2xl bg-primary text-white hover:bg-primary/90 font-bold shadow-xl shadow-primary/20"
                    onClick={() => setSelectedAction("candidature")}
                  >
                    Soumettre mon Manifeste
                  </Button>
                </div>
              </div>
            </div>

            {/* Rejoindre un pôle */}
            <div className="group relative bg-white rounded-[3rem] p-12 border border-border shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col h-full relative z-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
                <div className="w-16 h-16 rounded-3xl bg-accent/5 text-accent flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-black transition-all duration-500 shadow-sm">
                  <Shield className="w-8 h-8" />
                </div>
                <h2 className="font-display font-bold text-3xl text-foreground mb-4">Membre de Pôle</h2>
                <p className="text-muted-foreground font-body mb-10 leading-relaxed text-lg">
                  Mettez vos talents au service de l'un de nos 8 pôles thématiques. Une expérience concrète pour bâtir votre réseau et vos compétences.
                </p>
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full h-16 rounded-2xl border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold transition-all"
                    onClick={() => setSelectedAction("pole")}
                  >
                    Devenir Membre Actif
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Proposer activité */}
            <div className="bg-slate-50 border border-border/60 p-10 rounded-[2.5rem] group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white border border-border/50 text-amber-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-2xl">Porteur de Projet</h3>
              </div>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Tu as une idée révolutionnaire ou un événement à organiser ? Soumets ton projet et bénéficie du soutien logistique du Gouvernement.
              </p>
              <Button variant="ghost" className="h-12 text-primary hover:text-primary hover:bg-primary/5 font-bold group-hover:translate-x-1 transition-all" onClick={() => setSelectedAction("idea")}>
                Proposer mon idée →
              </Button>
            </div>

            {/* Devenir bénévole */}
            <div className="bg-slate-50 border border-border/60 p-10 rounded-[2.5rem] group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white border border-border/50 text-rose-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <HandHeart className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-2xl">Volontaire Ponctuel</h3>
              </div>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Pas le temps pour un engagement fixe ? Rejoins notre brigade de volontaires pour prêter main forte lors des grands événements du campus.
              </p>
              <Button variant="ghost" className="h-12 text-primary hover:text-primary hover:bg-primary/5 font-bold group-hover:translate-x-1 transition-all" onClick={() => setSelectedAction("volunteer")}>
                S'inscrire comme bénévole →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BottomNav hidden={selectedAction !== null} />

      {/* Form Modal - Lighter & More Spatial */}
      {selectedAction && (
        <section className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-[3rem] p-8 md:p-16 my-8 border border-border shadow-[0_32px_128px_rgba(0,0,0,0.1)] animate-slide-up relative">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-10 shadow-inner">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-4xl font-display font-bold text-foreground mb-6">Candidature Reçue</h3>
                <p className="text-lg text-muted-foreground mb-12 max-w-sm mx-auto">Votre dossier est désormais en cours d'examen par le secrétariat général.</p>
                <Button onClick={() => { setSelectedAction(null); setSubmitted(false); }} className="h-14 px-12 rounded-xl bg-primary text-white font-bold hover:scale-105 transition-all">
                  Terminer
                </Button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="font-display font-bold text-4xl text-foreground tracking-tight mb-2">
                      {selectedAction === "candidature" && "Rejoindre le BE"}
                      {selectedAction === "pole" && "Postuler à un Pôle"}
                      {selectedAction === "idea" && "Déposer un Projet"}
                      {selectedAction === "volunteer" && "Devenir Volontaire"}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Temps estimé : 2 minutes</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedAction(null)}
                    className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-all border border-border"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin">
                  <ParticipationForm
                    poles={poles}
                    responsibilites={responsibilites}
                  />
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ParticiperPage;

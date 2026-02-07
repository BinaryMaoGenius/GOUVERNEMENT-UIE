import { Layout } from "@/components/layout/Layout";
import { OrganigrammeSection } from "@/components/gouvernement/OrganigrammeSection";
import { OrganigramTree } from "@/components/gouvernement/OrganigramTree";
import { VicePresidentMessage } from "@/components/gouvernement/VicePresidentMessage";
import { GouvernementMissions } from "@/components/gouvernement/GouvernementMissions";
import {
  Shield,
  ArrowLeft,
  Star,
  Network,
  List
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const GouvernementPage = () => {
  const [viewMode, setViewMode] = useState<"list" | "tree">("tree");

  return (
    <Layout>
      {/* Header */}
      <section className="py-8">
        <div className="container-section">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Retour à l'accueil</span>
          </Link>

          {/* Hero */}
          <div className="glass-dark rounded-[2.5rem] p-12 mb-12 border border-accent/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Shield size={180} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-3xl gradient-hero flex items-center justify-center shadow-2xl">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-2">
                    Le Gouvernement <span className="text-accent italic">UIE</span>
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground font-body uppercase tracking-[0.4em] font-bold">
                    Mandat de Prestige 2025-2026
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-accent bg-accent/10 w-fit px-5 py-2.5 rounded-full border border-accent/20">
                <Star className="w-5 h-5 animate-pulse" />
                <p className="text-sm font-bold uppercase tracking-widest">Union • Implication • Excellence</p>
              </div>
            </div>
          </div>

          {/* Missions & Principles */}
          <GouvernementMissions />
        </div>
      </section>

      {/* Organigramme avec toggle */}
      <section className="py-20 bg-background/50">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Structure de Gouvernance</h2>
            <p className="text-muted-foreground">Découvrez l'équipe dévouée qui travaille quotidiennement pour vous.</p>
          </div>

          {/* Toggle buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setViewMode("tree")}
              className={`px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-500 flex items-center gap-3 ${viewMode === "tree"
                ? "bg-primary text-white shadow-2xl shadow-primary/20 scale-105"
                : "glass-dark text-muted-foreground hover:bg-white/5"
                }`}
            >
              <Network className="w-5 h-5" />
              Vue Hiérarchique
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-500 flex items-center gap-3 ${viewMode === "list"
                ? "bg-primary text-white shadow-2xl shadow-primary/20 scale-105"
                : "glass-dark text-muted-foreground hover:bg-white/5"
                }`}
            >
              <List className="w-5 h-5" />
              Vue Détaillée
            </button>
          </div>

          {/* Conditional rendering based on view mode */}
          <div className="animate-fade-in">
            {viewMode === "tree" ? <OrganigramTree /> : <OrganigrammeSection />}
          </div>
        </div>
      </section>

      {/* Message du Vice-Président */}
      <VicePresidentMessage />

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container-section">
          <div className="glass-dark rounded-[3rem] p-12 md:p-20 text-center border border-primary/20 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>

            <h3 className="font-display font-bold text-3xl md:text-5xl mb-6">
              Votre voix <span className="text-accent underline decoration-primary/20 underline-offset-8">compte</span>
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Le gouvernement est ouvert à tous. Que vous souhaitiez diriger ou simplement aider, votre place vous attend.
            </p>
            <Link
              to="/participer"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/20"
            >
              Rejoindre l'équipe
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GouvernementPage;

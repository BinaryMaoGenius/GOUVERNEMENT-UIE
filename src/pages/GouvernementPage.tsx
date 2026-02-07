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
  List,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const GouvernementPage = () => {
  const [viewMode, setViewMode] = useState<"list" | "tree">("tree");

  return (
    <Layout>
      {/* Institutional Header - Clean White/Slate */}
      <section className="pt-24 pb-16 bg-white border-b border-border">
        <div className="container-section">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-12 group transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Retour</span>
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-primary bg-primary/5 w-fit px-5 py-2 rounded-full border border-primary/10 mb-8">
                <Star className="w-4 h-4 animate-pulse" />
                <p className="text-xs font-bold uppercase tracking-[0.2em]">Excellence Institutionnelle</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tight mb-8">
                Le Gouvernement <span className="text-primary italic">UIE</span>
              </h1>
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl">
                Porteur d'une vision unifiée et résolument tournée vers l'avenir, le bureau 2025-2026 s'engage pour chaque étudiant.
              </p>
            </div>

            <div className="relative group perspective-1000 hidden lg:block">
              <div className="w-32 h-32 rounded-[2.5rem] bg-slate-50 border border-border flex items-center justify-center shadow-xl group-hover:rotate-y-12 transition-transform duration-700">
                <Shield className="w-14 h-14 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions & Principles - Light Accordions */}
      <section className="py-24 bg-slate-50/50">
        <div className="container-section">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-display font-bold mb-6 italic">Notre Engagement</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Découvrez les piliers de notre gouvernance et les missions qui animent notre quotidien au service de la communauté.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white border border-border rounded-2xl shadow-sm text-sm font-bold text-foreground/80">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  Transparence budgétaire
                </div>
                <div className="flex items-center gap-3 p-4 bg-white border border-border rounded-2xl shadow-sm text-sm font-bold text-foreground/80">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  Inclusion et parité
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <GouvernementMissions />
            </div>
          </div>
        </div>
      </section>

      {/* Structure Section - Polished Toggle */}
      <section className="py-24 bg-white">
        <div className="container-section text-center">
          <div className="max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold mb-6 leading-tight">Architecture du <span className="text-primary">Pouvoir Étudiant</span></h2>
            <div className="h-1.5 w-24 bg-primary/20 mx-auto rounded-full mb-8" />
            <p className="text-muted-foreground text-lg italic">
              Une organisation structurée en pôles d'excellence pour une efficacité maximale.
            </p>
          </div>

          {/* New Polished Toggle Switch */}
          <div className="inline-flex p-2 bg-slate-100/50 rounded-3xl border border-slate-200 mb-20">
            <button
              onClick={() => setViewMode("tree")}
              className={`px-10 py-4 rounded-2xl font-bold text-sm transition-all duration-500 flex items-center gap-3 ${viewMode === "tree"
                ? "bg-white text-primary shadow-xl scale-105"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <Network className="w-5 h-5" />
              Hiérarchie
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-10 py-4 rounded-2xl font-bold text-sm transition-all duration-500 flex items-center gap-3 ${viewMode === "list"
                ? "bg-white text-primary shadow-xl scale-105"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <List className="w-5 h-5" />
              Répertoire
            </button>
          </div>

          <div className="animate-fade-in py-8">
            {viewMode === "tree" ? <OrganigramTree /> : <OrganigrammeSection />}
          </div>
        </div>
      </section>

      {/* Vice-President Section (Already handled for light version) */}
      <div className="bg-slate-50/50">
        <VicePresidentMessage />
      </div>

      {/* Final Recruitment - Clean & Impactful */}
      <section className="py-32 relative overflow-hidden">
        <div className="container-section text-center relative z-10">
          <div className="bg-white p-16 md:p-24 rounded-[4rem] border border-border shadow-[0_32px_96px_rgba(0,0,0,0.06)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-primary/10 transition-colors" />

            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Rejoignez le <span className="text-primary">Cercle de l'UIE</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Le gouvernement n'attend pas d'être prêt, il attend d'être agi. Votre ambition est notre moteur.
            </p>
            <Link
              to="/participer"
              className="inline-flex h-20 items-center gap-4 bg-primary text-white px-14 py-6 rounded-3xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-primary/20 active:scale-95"
            >
              Soumettre ma candidature
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GouvernementPage;

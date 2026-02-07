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
      <section className="py-8 bg-slate-50">
        <div className="container-section">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Retour à l'accueil</span>
          </Link>

          {/* Hero */}
          <div className="bg-white rounded-[2.5rem] p-12 mb-12 border border-slate-200 relative overflow-hidden shadow-xl shadow-slate-100">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-blue-600">
              <Shield size={180} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-200">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-900 tracking-tight mb-2">
                    Le Gouvernement <span className="text-blue-600 italic">UIE</span>
                  </h1>
                  <p className="text-sm md:text-base text-slate-500 font-body uppercase tracking-[0.4em] font-bold">
                    Mandat de Prestige 2025-2026
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-blue-700 bg-blue-50 w-fit px-5 py-2.5 rounded-full border border-blue-100">
                <Star className="w-5 h-5 animate-pulse text-blue-500" />
                <p className="text-sm font-bold uppercase tracking-widest">Union • Implication • Excellence</p>
              </div>
            </div>
          </div>

          {/* Missions & Principles */}
          <GouvernementMissions />
        </div>
      </section>

      {/* Organigramme avec toggle */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 text-slate-900">Structure de Gouvernance</h2>
            <p className="text-slate-500">Découvrez l'équipe dévouée qui travaille quotidiennement pour vous.</p>
          </div>

          {/* Toggle buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setViewMode("tree")}
              className={`px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-500 flex items-center gap-3 ${viewMode === "tree"
                ? "bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105"
                : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
              <Network className="w-5 h-5" />
              Vue Hiérarchique
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-500 flex items-center gap-3 ${viewMode === "list"
                ? "bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105"
                : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900"
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
      <section className="py-24 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-blue-50/50 -z-10"></div>
        <div className="container-section">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 text-center border border-slate-200 relative overflow-hidden shadow-xl shadow-slate-100">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-50 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-50 rounded-full blur-[100px]"></div>

            <h3 className="font-display font-bold text-3xl md:text-5xl mb-6 text-slate-900">
              Votre voix <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">compte</span>
            </h3>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
              Le gouvernement est ouvert à tous. Que vous souhaitiez diriger ou simplement aider, votre place vous attend.
            </p>
            <Link
              to="/participer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-blue-200 hover:bg-blue-700"
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

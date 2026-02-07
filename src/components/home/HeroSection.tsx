import { Link } from "react-router-dom";
import { ArrowRight, Shield, Star, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";


export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 bg-white">
      {/* Background elements with Stellar Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
        {/* Stellar Background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="star-particle bg-blue-300 rounded-full absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `pulse ${Math.random() * 3 + 2}s infinite`,
                animationDelay: `${Math.random() * 5}s`
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8 animate-fade-in shadow-sm"
          >
            <Shield className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-900">Gouvernement Étudiant 2025-2026</span>
          </div>

          <h1
            className="section-title mb-6 animate-slide-up text-slate-900" style={{ animationDelay: "0.1s" }}
          >
            Bâtir l'Université de <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm italic">Demain</span>, Aujourd'hui.
          </h1>

          <p
            className="section-subtitle mb-8 animate-slide-up text-slate-600" style={{ animationDelay: "0.2s" }}
          >
            L'Université Internationale d'Excellence s'engage pour une gouvernance étudiante audacieuse, inclusive et résolument tournée vers l'avenir.
          </p>

          {/* Devise */}
          <div
            className="flex items-center justify-center md:justify-start gap-4 mb-10 text-slate-400 animate-fade-in" style={{ animationDelay: "0.4s" }}
          >
            <span className="h-[1px] w-8 bg-slate-200 hidden md:block"></span>
            <div className="flex items-center gap-3 font-body text-sm tracking-[0.2em] font-bold text-slate-500">
              <span>UNION</span>
              <span className="text-blue-400">•</span>
              <span>IMPLICATION</span>
              <span className="text-blue-400">•</span>
              <span>EXCELLENCE</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center md:justify-start gap-4 animate-slide-up" style={{ animationDelay: "0.6s" }}
          >
            <Link to="/participer">
              <Button className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-200">
                Devenir Acteur du Changement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/gouvernement">
              <Button variant="outline" className="h-14 px-8 rounded-full border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-medium transition-all hover:border-blue-200">
                <Users className="w-5 h-5 mr-2 text-blue-500" />
                Découvrir l'Équipe
              </Button>
            </Link>
          </div>

          {/* Stats contextuelles */}
          <div
            className="mt-16 pt-8 border-t border-slate-100 flex gap-12 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.8s" }}
          >
            <div className="group cursor-default">
              <p className="text-3xl font-display font-light text-slate-900 group-hover:text-blue-600 transition-colors">22</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Visionnaires</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl font-display font-light text-slate-900 group-hover:text-blue-600 transition-colors">8</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Pôles d'Action</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl font-display font-light text-slate-900 group-hover:text-blue-600 transition-colors">1</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Université d'Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ornament - Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Shield, Star, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";


export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 bg-background">
      {/* Background elements for "Legendary" feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[20%] right-[10%] w-[1px] h-[60%] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 animate-fade-in"
          >
            <Shield className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-accent/90">Gouvernement Étudiant 2025-2026</span>
          </div>

          <h1
            className="section-title mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}
          >
            Bâtir l'Université de <br className="hidden md:block" />
            <span className="text-gradient drop-shadow-sm italic">Demain</span>, Aujourd'hui.
          </h1>

          <p
            className="section-subtitle mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}
          >
            L'Université Internationale d'Excellence s'engage pour une gouvernance étudiante audacieuse, inclusive et résolument tournée vers l'avenir.
          </p>

          {/* Devise */}
          <div
            className="flex items-center justify-center md:justify-start gap-4 mb-10 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}
          >
            <span className="h-[1px] w-8 bg-white/10 hidden md:block"></span>
            <div className="flex items-center gap-3 font-body text-sm tracking-[0.2em] font-light">
              <span>UNION</span>
              <span className="text-accent">•</span>
              <span>IMPLICATION</span>
              <span className="text-accent">•</span>
              <span>EXCELLENCE</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center md:justify-start gap-4 animate-slide-up" style={{ animationDelay: "0.6s" }}
          >
            <Link to="/participer">
              <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Devenir Acteur du Changement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/gouvernement">
              <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-foreground transition-all">
                <Users className="w-5 h-5 mr-2 text-accent" />
                Découvrir l'Équipe
              </Button>
            </Link>
          </div>

          {/* Stats contextuelles */}
          <div
            className="mt-16 pt-8 border-t border-white/5 flex gap-12 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.8s" }}
          >
            <div className="group cursor-default">
              <p className="text-3xl font-display font-light text-foreground group-hover:text-accent transition-colors">22</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Visionnaires</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl font-display font-light text-foreground group-hover:text-accent transition-colors">8</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Pôles d'Action</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl font-display font-light text-foreground group-hover:text-accent transition-colors">1</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Université d'Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ornament - Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Shield, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 md:py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container-section relative">
        <div className="max-w-lg">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium mb-4 animate-slide-up">
            <Shield className="w-3 h-3" />
            Gouvernement Étudiant 2025-2026
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3 animate-slide-up">
            <span className="text-gradient">Gouvernement UIE</span>
          </h1>

          <p className="text-lg font-display text-foreground/80 mb-2 animate-slide-up" style={{ animationDelay: "0.05s" }}>
            Université Internationale d'Excellence
          </p>

          {/* Devise */}
          <div className="flex items-center gap-2 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Star className="w-4 h-4 text-accent" />
            <p className="text-muted-foreground font-medium">
              Union • Implication • Excellence
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/participer">
              <Button className="btn-primary text-base">
                Rejoindre le Gouvernement
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/gouvernement">
              <Button variant="outline" className="text-base">
                <Users className="w-4 h-4 mr-2" />
                Voir l'équipe
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-6 mt-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div>
              <p className="text-2xl font-display font-bold text-primary">22</p>
              <p className="text-xs text-muted-foreground">Membres</p>
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-accent">8</p>
              <p className="text-xs text-muted-foreground">Pôles</p>
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-green-600">∞</p>
              <p className="text-xs text-muted-foreground">Possibilités</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

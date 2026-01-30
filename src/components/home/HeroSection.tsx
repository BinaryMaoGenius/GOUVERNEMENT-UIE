import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 md:py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container-section relative">
        <div className="max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4 animate-slide-up">
            Bienvenue sur le site du{" "}
            <span className="text-gradient">Bureau des Étudiants</span> !
          </h1>

          <p className="text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Université Internationale Excellence
          </p>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/participer">
              <Button className="btn-primary text-base">
                Participer
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

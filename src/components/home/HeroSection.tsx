import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 bg-white">
      {/* Abstract Background Shapes - Clean & Institutional */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -mr-80 -mt-80 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -ml-60 -mb-60 opacity-60" />
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge Institutionnel */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary border border-blue-100 mb-8 animate-fade-in shadow-sm">
            <Shield className="w-4 h-4 fill-primary/10" />
            <span className="text-xs font-bold uppercase tracking-widest">Gouvernement UIE 2025-2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-8 leading-[1.1] tracking-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            L'Excellence au Service <br />
            de l' <span className="text-primary italic relative inline-block">
              Étudiant
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Une gouvernance transparente et engagée pour bâtir ensemble l'avenir de notre université.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/participer">
              <Button className="h-14 px-8 rounded-full bg-primary text-white font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1 w-full sm:w-auto">
                Rejoindre le Mouvement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/gouvernement">
              <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 text-slate-600 font-bold text-lg hover:border-primary hover:text-primary hover:bg-blue-50 transition-all w-full sm:w-auto">
                <Users className="w-5 h-5 mr-2" />
                Notre Équipe
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 md:h-24 text-slate-50" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
}

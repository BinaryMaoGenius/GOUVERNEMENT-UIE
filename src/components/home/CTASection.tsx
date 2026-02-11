import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-section">
        <div className="relative group p-1 md:p-1.5 rounded-[3rem] overflow-hidden">
          {/* Animated border/bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow opacity-30 blur-xl group-hover:opacity-50 transition-opacity" style={{ animationDuration: '10s' }} />

          <div className="relative bg-black rounded-[2.5rem] p-10 md:p-16 text-center border border-white/10 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                <Shield className="w-8 h-8 text-white" />
              </div>

              <h2 className="section-title text-3xl md:text-4xl text-white mb-6">
                Prêt à marquer l'histoire de l'UIE ?
              </h2>

              <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
                Le Gouvernement n'est pas qu'une institution, c'est une aventure humaine. Trouvez votre place parmi nous et portez la voix de vos camarades.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/participer">
                  <Button className="h-14 px-10 rounded-full bg-white text-black hover:bg-white/90 font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Déposer ma candidature
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfe9ceCcGUCqMft7La9s2wXulBSb8ASY9kA9T4tmPUe_6y7jg/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="h-14 px-10 rounded-full border-white/20 text-white hover:bg-white/10 font-bold text-lg transition-all hover:scale-105">
                    Donner mon avis
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-8">
      <div className="container-section">
        <div className="gradient-hero rounded-2xl p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-xl font-display font-bold text-primary-foreground mb-2">
            Rejoins le Gouvernement !
          </h2>
          <p className="text-sm text-primary-foreground/80 mb-4">
            Intègre un pôle et contribue à la vie étudiante de l'UIE.
          </p>

          <Link to="/participer">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full">
              Je candidate
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-8">
      <div className="container-section">
        <div className="gradient-hero rounded-2xl p-6 text-center">
          <h2 className="text-xl font-display font-bold text-primary-foreground mb-2">
            Rejoins le mouvement !
          </h2>
          <p className="text-sm text-primary-foreground/80 mb-4">
            Intègre un pôle et participe à la vie étudiante.
          </p>

          <Link to="/participer">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full">
              Je m'inscris
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

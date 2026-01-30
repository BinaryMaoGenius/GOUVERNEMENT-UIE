import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NextActivitySection() {
  const nextActivity = {
    title: "Sortie beach party",
    description: "Soirée entante 2024 avec tous les étudiants. Ambiance garantie !",
    date: "5 Mai 2024",
    time: "14h00 - 23h00",
    location: "Plage de Ngor",
    participants: 120,
    pole: "Culture & Sport",
  };

  return (
    <section className="py-8">
      <div className="container-section">
        <h2 className="section-title mb-6">Prochaine activité</h2>

        <div className="card-elevated overflow-hidden">
          {/* Image placeholder */}
          <div className="h-40 gradient-hero flex items-center justify-center">
            <span className="text-primary-foreground/80 text-sm">Image de l'activité</span>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Sam. {nextActivity.date}
              </span>
              <span className="text-xs text-muted-foreground">
                Seulement quelques places
              </span>
            </div>
            
            <h3 className="text-lg font-display font-bold text-foreground mb-3">
              {nextActivity.title}
            </h3>

            <Link to="/participer">
              <Button className="btn-primary w-full">
                S'inscrire
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

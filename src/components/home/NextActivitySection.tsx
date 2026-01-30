import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NextActivitySection() {
  const nextActivity = {
    title: "Journée d'intégration",
    description: "Une journée festive pour accueillir les nouveaux étudiants avec des jeux, animations et rencontres.",
    date: "15 Février 2025",
    time: "09h00 - 18h00",
    location: "Campus principal",
    participants: 150,
    pole: "Organisation & Mobilisation",
  };

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container-section">
        <div className="text-center mb-8">
          <h2 className="section-title">Prochaine activité</h2>
          <p className="section-subtitle">Ne manquez pas notre prochain événement</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Date Card */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl gradient-hero flex flex-col items-center justify-center text-primary-foreground">
                  <span className="text-3xl font-bold">15</span>
                  <span className="text-sm font-medium">Fév</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                  {nextActivity.pole}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                  {nextActivity.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {nextActivity.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{nextActivity.date} • {nextActivity.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{nextActivity.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{nextActivity.participants} participants</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/participer">
                    <Button className="btn-primary w-full sm:w-auto">
                      S'inscrire
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/activites">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Voir toutes les activités
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

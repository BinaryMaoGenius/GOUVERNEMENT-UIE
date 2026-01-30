import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, Users, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const activities = [
  {
    id: 1,
    title: "Sortie beach party",
    description: "Soirée entante 2024. Trem pous des dosion casle, u pas des seuvermaine sat coventsprovdiomater, tit tav arite irestipe past ans pole a coretallent a edi acces.",
    date: "5 Mai 2024",
    location: "Plage de Ngor",
    participants: 120,
    pole: "Culture & Sport",
    status: "upcoming",
    image: true,
  },
  {
    id: 2,
    title: "Tournoi de football",
    description: "Compétition sportive inter-facultés ouverte à tous les étudiants.",
    date: "20 Avril 2024",
    location: "Terrain universitaire",
    participants: 128,
    pole: "Culture & Sport",
    status: "upcoming",
    image: false,
  },
  {
    id: 3,
    title: "Don de sang",
    description: "Collecte de sang en partenariat avec la Croix-Rouge.",
    date: "10 Janvier 2024",
    location: "Centre médical",
    participants: 80,
    pole: "Humanitaire",
    status: "past",
    image: true,
  },
  {
    id: 4,
    title: "Atelier entreprex",
    description: "Ateliers de préparation aux entretiens d'embauche.",
    date: "5 Janvier 2024",
    location: "Salle de conférence",
    participants: 75,
    pole: "Entrepreneuriat",
    status: "past",
    image: true,
  },
];

const filters = ["À venir", "Réalisées", "Réalisees"];

const ActivitesPage = () => {
  const [activeFilter, setActiveFilter] = useState("À venir");

  const filteredActivities = activities.filter((activity) => {
    if (activeFilter === "À venir") return activity.status === "upcoming";
    return activity.status === "past";
  });

  return (
    <Layout>
      {/* Header */}
      <section className="py-4">
        <div className="container-section">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-display font-semibold text-lg text-foreground">Activités</span>
          </Link>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.slice(0, 2).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:bg-secondary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities List */}
      <section className="py-4">
        <div className="container-section space-y-4">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="card-elevated overflow-hidden">
              {activity.image && (
                <div className="h-32 gradient-hero flex items-center justify-center">
                  <span className="text-primary-foreground/60 text-sm">Image</span>
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{activity.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{activity.date}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{activity.description}</p>
                  </div>
                </div>

                {activity.status === "upcoming" && (
                  <Button className="w-full btn-primary mt-4">
                    Voir les détails
                  </Button>
                )}

                {activity.status === "past" && (
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {activity.participants} participants
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ActivitesPage;

import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, Users, Filter, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    id: 1,
    title: "Journée d'intégration",
    description: "Accueil des nouveaux étudiants avec jeux et animations",
    date: "15 Février 2025",
    location: "Campus principal",
    participants: 150,
    pole: "Organisation",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Tournoi de football inter-facultés",
    description: "Compétition sportive ouverte à toutes les facultés",
    date: "22 Février 2025",
    location: "Terrain universitaire",
    participants: 80,
    pole: "Culture & Sport",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Forum de l'emploi",
    description: "Rencontres avec des entreprises et ateliers CV",
    date: "1 Mars 2025",
    location: "Amphithéâtre A",
    participants: 200,
    pole: "Entrepreneuriat",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Don de sang",
    description: "Collecte de sang en partenariat avec la Croix-Rouge",
    date: "10 Janvier 2025",
    location: "Centre médical",
    participants: 45,
    pole: "Humanitaire",
    status: "past",
  },
  {
    id: 5,
    title: "Atelier langues locales",
    description: "Initiation au wolof et au pulaar",
    date: "5 Janvier 2025",
    location: "Salle B12",
    participants: 30,
    pole: "Langues",
    status: "past",
  },
];

const poles = ["Tous", "Organisation", "Culture & Sport", "Entrepreneuriat", "Humanitaire", "Langues", "Communication", "Numérique"];

const ActivitesPage = () => {
  const [filter, setFilter] = useState("Tous");
  const [showUpcoming, setShowUpcoming] = useState(true);

  const filteredActivities = activities.filter((activity) => {
    const matchesPole = filter === "Tous" || activity.pole === filter;
    const matchesStatus = showUpcoming ? activity.status === "upcoming" : activity.status === "past";
    return matchesPole && matchesStatus;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-primary-light">
        <div className="container-section text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Activités
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos événements à venir et revivez les moments forts de notre mandat.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-16 bg-background z-40">
        <div className="container-section">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Status Toggle */}
            <div className="flex gap-2 bg-secondary rounded-xl p-1">
              <button
                onClick={() => setShowUpcoming(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  showUpcoming ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
                }`}
              >
                <Clock className="w-4 h-4 inline mr-2" />
                À venir
              </button>
              <button
                onClick={() => setShowUpcoming(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !showUpcoming ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
                }`}
              >
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Réalisées
              </button>
            </div>

            {/* Pole Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              {poles.slice(0, 5).map((pole) => (
                <button
                  key={pole}
                  onClick={() => setFilter(pole)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    filter === pole
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {pole}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities List */}
      <section className="py-8">
        <div className="container-section">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucune activité trouvée pour ce filtre.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredActivities.map((activity) => (
                <div key={activity.id} className="card-elevated p-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center ${
                        activity.status === "upcoming" ? "gradient-hero text-primary-foreground" : "bg-secondary text-muted-foreground"
                      }`}>
                        <span className="text-lg font-bold">{activity.date.split(" ")[0]}</span>
                        <span className="text-xs">{activity.date.split(" ")[1].slice(0, 3)}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                          {activity.pole}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-1 truncate">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {activity.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {activity.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {activity.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {activity.participants}
                        </span>
                      </div>
                    </div>
                  </div>
                  {activity.status === "upcoming" && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <Button className="w-full btn-primary">
                        S'inscrire
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ActivitesPage;

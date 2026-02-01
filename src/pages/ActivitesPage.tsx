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
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display font-bold text-2xl text-foreground italic tracking-tight">Le Journal des Actions</span>
          </Link>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.slice(0, 2).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFilter === filter
                    ? "bg-accent text-black shadow-[0_0_15px_rgba(255,191,0,0.3)]"
                    : "glass-dark text-muted-foreground hover:text-white border-white/5"
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
            <div key={activity.id} className="glass-dark rounded-[2.5rem] overflow-hidden border-white/5 hover:border-accent/20 transition-all duration-300 group">
              {activity.image && (
                <div className="h-48 gradient-hero relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                    <Calendar size={64} className="text-white" />
                  </div>
                </div>
              )}
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display font-bold text-xl text-foreground leading-tight">{activity.title}</h3>
                      <span className="text-[10px] font-bold text-accent glass-dark px-3 py-1 rounded-full border-accent/20 uppercase tracking-[0.2em]">{activity.pole}</span>
                    </div>
                    <p className="text-xs text-muted-foreground/60 mb-4 font-body uppercase tracking-widest font-bold">{activity.date} • {activity.location}</p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{activity.description}</p>
                  </div>
                </div>

                {activity.status === "upcoming" && (
                  <Button className="w-full h-12 rounded-2xl bg-white text-black hover:bg-white/90 font-bold mt-8 shadow-lg">
                    Réserver ma place
                  </Button>
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

import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ActivityCard, Activity } from "@/components/home/ActivityCard";

const activities: Activity[] = [
  {
    id: 1,
    title: "Beach Party 2024",
    description: "La soirée détente incontournable de l'année. Rejoignez-nous pour un moment de partage, de musique et de convivialité sur la plage.",
    date: "5 Mai 2024",
    location: "Plage de Ngor",
    participants: 120,
    pole: "Culture & Sport",
    status: "upcoming",
    image: true,
  },
  {
    id: 2,
    title: "Tournoi de Football",
    description: "La compétition sportive inter-facultés tant attendue. Venez défendre vos couleurs et montrer vos talents sur le terrain universitaire.",
    date: "20 Avril 2024",
    location: "Terrain universitaire",
    participants: 128,
    pole: "Culture & Sport",
    status: "upcoming",
    image: true,
  },
  {
    id: 3,
    title: "Don de Sang",
    description: "Une action humanitaire cruciale en partenariat avec la Croix-Rouge d'excellence. Donnez un peu de votre temps pour sauver des vies.",
    date: "10 Janvier 2024",
    location: "Centre médical",
    participants: 80,
    pole: "Humanitaire",
    status: "past",
    image: true,
  },
  {
    id: 4,
    title: "Atelier Entrepreneuriat",
    description: "Des ateliers pratiques de préparation aux entretiens d'embauche et de coaching professionnel pour booster votre future carrière.",
    date: "5 Janvier 2024",
    location: "Salle de conférence",
    participants: 75,
    pole: "Entrepreneuriat",
    status: "past",
    image: true,
  },
];

const filters = ["À venir", "Réalisées"];

const ActivitesPage = () => {
  const [activeFilter, setActiveFilter] = useState("À venir");

  const filteredActivities = activities.filter((activity) => {
    if (activeFilter === "À venir") return activity.status === "upcoming";
    return activity.status === "past";
  });

  return (
    <Layout>
      {/* Header */}
      <section className="py-12">
        <div className="container-section">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display font-bold text-2xl text-foreground italic tracking-tight">Le Journal des Actions</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2">Activités & Événements</h1>
              <p className="text-muted-foreground">Suivez les initiatives du Gouvernement UIE au fil de l'année.</p>
            </div>

            {/* Filters */}
            <div className="flex gap-3 bg-white/5 p-1.5 rounded-2xl w-fit border border-white/5">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeFilter === filter
                    ? "bg-accent text-black shadow-lg shadow-accent/20"
                    : "text-muted-foreground hover:text-white"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Activities List */}
          <div className="grid lg:grid-cols-2 gap-8 animate-fade-in">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))
            ) : (
              <div className="lg:col-span-2 glass-dark p-20 text-center rounded-[3rem] border border-white/5">
                <p className="text-xl text-muted-foreground italic">Aucune activité prévue pour le moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ActivitesPage;

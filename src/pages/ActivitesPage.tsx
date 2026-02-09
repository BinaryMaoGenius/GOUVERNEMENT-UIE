import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ActivityCard, Activity } from "@/components/home/ActivityCard";

const activities: Activity[] = [
  {
    id: 1,
    title: "Journées d'Intégration Sportive",
    description: "Deux jours de compétitions et de jeux pour accueillir les nouveaux étudiants dans la fraternité.",
    date: "A déterminer",
    location: "Campus UIE",
    participants: 0,
    pole: "Cohésion",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
  },
  {
    id: 2,
    title: "Journée d'Intégration Culturelle",
    description: "Concours de Miss, talents, spectacles et artistes invités pour célébrer notre diversité.",
    date: "A déterminer",
    location: "Amphithéâtre",
    participants: 0,
    pole: "Culture",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000",
  },
  {
    id: 3,
    title: "La Voix des Étudiants",
    description: "Une journée dédiée au dialogue direct entre les étudiants et l'administration pour recueillir vos besoins.",
    date: "Mensuel",
    location: "Campus UIE",
    participants: 0,
    pole: "Dialogue",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000",
  },
  {
    id: 4,
    title: "Semaine de l'Entrepreneuriat",
    description: "Rencontres avec des entrepreneurs, coaching de projets et formations pratiques.",
    date: "Grandes pauses",
    location: "Centre d'innovation",
    participants: 0,
    pole: "Entrepreneuriat",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
  },
  {
    id: 5,
    title: "Matchs Inter-Filières",
    description: "Chaque vendredi, vivez la passion du sport avec nos tournois de football.",
    date: "Tous les vendredis",
    location: "Terrain UIE",
    participants: 0,
    pole: "Sport",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1517466782571-8bc46960cf7c?q=80&w=1000",
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
      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="container-section">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display font-bold text-2xl text-slate-900 italic tracking-tight">Le Journal des Actions</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2 text-slate-900">Activités & Événements</h1>
              <p className="text-slate-500">Suivez les initiatives du Gouvernement UIE au fil de l'année.</p>
            </div>

            {/* Filters */}
            <div className="flex gap-3 bg-white p-1.5 rounded-2xl w-fit border border-slate-200 shadow-sm">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeFilter === filter
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
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
              <div className="lg:col-span-2 bg-white p-20 text-center rounded-[3rem] border border-slate-200 shadow-sm">
                <p className="text-xl text-slate-400 italic">Aucune activité prévue pour le moment.</p>
              </div>
            )}
          </div>
        </div>
        {/* Spacer for BottomNav on mobile */}
        <div className="h-24 md:hidden"></div>
      </section>
    </Layout>
  );
};

export default ActivitesPage;

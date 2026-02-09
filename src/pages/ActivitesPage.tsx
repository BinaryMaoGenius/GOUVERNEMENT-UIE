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
    image: "data:image/jpeg;base64,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",
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
    image: "https://uiemali.ac/wp-content/uploads/2024/01/ALYF5249-copie-1-1536x1024.jpg",
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
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000",
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

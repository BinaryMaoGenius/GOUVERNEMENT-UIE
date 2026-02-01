import { Link } from "react-router-dom";
import {
  MessageSquare,
  UsersRound,
  Music,
  Heart,
  Briefcase,
  Languages,
  Monitor,
  Scale,
  ArrowRight
} from "lucide-react";

const poles = [
  {
    icon: MessageSquare,
    name: "Communication",
    color: "bg-blue-500",
  },
  {
    icon: UsersRound,
    name: "Organisation",
    color: "bg-green-500",
  },
  {
    icon: Music,
    name: "Culture & Sport",
    color: "bg-orange-500",
  },
  {
    icon: Heart,
    name: "Humanitaire",
    color: "bg-red-500",
  },
  {
    icon: Briefcase,
    name: "Entrepreneuriat",
    color: "bg-purple-500",
  },
  {
    icon: Languages,
    name: "Langues",
    color: "bg-teal-500",
  },
  {
    icon: Monitor,
    name: "Informatique",
    color: "bg-indigo-500",
  },
  {
    icon: Scale,
    name: "Droit",
    color: "bg-amber-600",
  },
];

export function PolesSection() {
  return (
    <section className="py-16 relative">
      <div className="container-section relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="max-w-xl">
            <h2 className="section-title text-2xl">Nos 8 Pôles d'Action</h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Des pôles spécialisés pour répondre à tous les besoins de la vie étudiante, de la culture à l'entrepreneuriat.
            </p>
          </div>
          <Link to="/gouvernement" className="text-accent hover:text-accent/80 text-sm font-semibold tracking-wider flex items-center gap-2 transition-colors">
            TOUT DÉCOUVRIR <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {poles.map((pole, index) => (
            <Link
              key={pole.name}
              to="/gouvernement"
              className="flex flex-col items-center text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${pole.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <pole.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-body font-medium text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">
                {pole.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

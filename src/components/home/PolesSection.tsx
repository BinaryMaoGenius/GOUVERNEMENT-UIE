import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  UsersRound, 
  Music, 
  Heart, 
  Briefcase, 
  Languages, 
  Monitor,
  Scale
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
    <section className="py-8">
      <div className="container-section">
        <h2 className="font-display font-bold text-lg text-foreground mb-4">
          Nos 8 Pôles
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {poles.map((pole) => (
            <Link
              key={pole.name}
              to="/gouvernement"
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-14 h-14 rounded-xl ${pole.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                <pole.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-medium text-muted-foreground line-clamp-2">
                {pole.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

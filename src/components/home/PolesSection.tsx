import { Link } from "react-router-dom";
import { 
  Shield, 
  Megaphone, 
  Users, 
  Palette, 
  Heart, 
  Briefcase, 
  Languages, 
  Laptop
} from "lucide-react";

const poles = [
  {
    icon: Shield,
    name: "Gouvernance",
    color: "bg-blue-500",
  },
  {
    icon: Palette,
    name: "Culture & Sport",
    color: "bg-orange-500",
  },
  {
    icon: Megaphone,
    name: "Communication",
    color: "bg-purple-500",
  },
  {
    icon: Users,
    name: "Organisation",
    color: "bg-green-500",
  },
  {
    icon: Heart,
    name: "Humanitaire",
    color: "bg-red-500",
  },
  {
    icon: Briefcase,
    name: "Entrepreneuriat",
    color: "bg-amber-600",
  },
  {
    icon: Languages,
    name: "Langues",
    color: "bg-teal-500",
  },
  {
    icon: Laptop,
    name: "Numérique",
    color: "bg-indigo-500",
  },
];

export function PolesSection() {
  return (
    <section className="py-8">
      <div className="container-section">
        <div className="grid grid-cols-4 gap-3">
          {poles.map((pole) => (
            <Link
              key={pole.name}
              to="/programme"
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

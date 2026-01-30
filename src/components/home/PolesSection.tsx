import { Link } from "react-router-dom";
import { 
  Shield, 
  Megaphone, 
  Users, 
  Palette, 
  Heart, 
  Briefcase, 
  Languages, 
  Laptop,
  ArrowRight
} from "lucide-react";

const poles = [
  {
    icon: Shield,
    name: "Gouvernance",
    description: "Administration et gestion du BDE",
    color: "bg-blue-500",
  },
  {
    icon: Megaphone,
    name: "Communication",
    description: "Relations et visibilité",
    color: "bg-purple-500",
  },
  {
    icon: Users,
    name: "Organisation",
    description: "Mobilisation étudiante",
    color: "bg-green-500",
  },
  {
    icon: Palette,
    name: "Culture & Sport",
    description: "Activités culturelles et sportives",
    color: "bg-orange-500",
  },
  {
    icon: Heart,
    name: "Humanitaire",
    description: "Actions solidaires",
    color: "bg-red-500",
  },
  {
    icon: Briefcase,
    name: "Entrepreneuriat",
    description: "Insertion professionnelle",
    color: "bg-amber-600",
  },
  {
    icon: Languages,
    name: "Langues",
    description: "Identité et diversité",
    color: "bg-teal-500",
  },
  {
    icon: Laptop,
    name: "Numérique",
    description: "Droits et outils digitaux",
    color: "bg-indigo-500",
  },
];

export function PolesSection() {
  return (
    <section className="py-16">
      <div className="container-section">
        <div className="text-center mb-10">
          <h2 className="section-title">Nos pôles d'action</h2>
          <p className="section-subtitle">8 équipes pour vous accompagner</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {poles.map((pole) => (
            <Link
              key={pole.name}
              to="/programme"
              className="card-elevated p-4 md:p-6 text-center group"
            >
              <div className={`w-12 h-12 rounded-xl ${pole.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <pole.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm md:text-base mb-1">
                {pole.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">
                {pole.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/programme">
            <button className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              Voir le programme complet
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

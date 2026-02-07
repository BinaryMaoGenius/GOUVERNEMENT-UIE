import { Link, useLocation } from "react-router-dom";
import { Home, Shield, Calendar, FileText, HandHeart, Lightbulb } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Activités", href: "/activites", icon: Calendar },
  { label: "Programme", href: "/programme", icon: FileText },
  { label: "Idées", href: "/#mur-des-idees", icon: Lightbulb },
  { label: "Participer", href: "/participer", icon: HandHeart },
];

interface BottomNavProps {
  hidden?: boolean;
}

export function BottomNav({ hidden = false }: BottomNavProps) {
  const location = useLocation();

  if (hidden) return null;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-slate-200 safe-area-bottom transition-transform duration-300 shadow-[0_-5px_10px_rgba(0,0,0,0.02)]">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${isActive
                ? "text-blue-600 bg-blue-50"
                : "text-slate-400 hover:text-slate-900"
                }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-blue-600 fill-blue-600/20" : ""}`} />
              <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-area-bottom transition-transform duration-300">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

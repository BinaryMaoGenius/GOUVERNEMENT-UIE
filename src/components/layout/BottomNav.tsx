import { Link, useLocation } from "react-router-dom";
import { Home, Users, Calendar, FileText, HandHeart } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Le BDE", href: "/bde", icon: Users },
  { label: "Activités", href: "/activites", icon: Calendar },
  { label: "Programme", href: "/programme", icon: FileText },
  { label: "Participer", href: "/participer", icon: HandHeart },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
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

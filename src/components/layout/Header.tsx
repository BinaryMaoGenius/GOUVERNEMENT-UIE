import { Link, useLocation } from "react-router-dom";
import { Search, Bell, GraduationCap } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Le BDE", href: "/bde" },
  { label: "Activités", href: "/activites" },
  { label: "Programme", href: "/programme" },
  { label: "Participer", href: "/participer" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="container-section">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-primary leading-none">
                BDE
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight">
                Bureau des Étudiants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "bg-primary-light text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Icons */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Rechercher">
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-lg hover:bg-secondary transition-colors relative" aria-label="Notifications">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

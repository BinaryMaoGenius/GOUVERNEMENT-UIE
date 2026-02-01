import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Bell, Shield } from "lucide-react";
import { SearchDialog } from "./SearchDialog";
import { NotificationsPopover } from "./NotificationsPopover";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Gouvernement", href: "/gouvernement" },
  { label: "Activités", href: "/activites" },
  { label: "Programme", href: "/programme" },
  { label: "Participer", href: "/participer" },
];

export function Header() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="container-section">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-primary leading-none">
                GOV UIE
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight">
                Union • Implication • Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.href
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
            <button
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Rechercher"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>

            <NotificationsPopover>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Notifications">
                <Bell className="w-5 h-5 text-muted-foreground" />
              </button>
            </NotificationsPopover>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}


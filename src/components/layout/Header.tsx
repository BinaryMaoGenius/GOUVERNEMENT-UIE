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
    <header className="sticky top-0 z-50 w-full glass-dark border-b border-white/5">
      <div className="container-section">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-foreground leading-none tracking-tight">
                GOV <span className="text-accent italic">UIE</span>
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight uppercase tracking-widest font-body font-light">
                Union • Implication • Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === item.href
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop/Mobile Icons */}
          <div className="flex items-center gap-3">
            <button
              className="p-2.5 rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all duration-300"
              aria-label="Rechercher"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>

            <NotificationsPopover>
              <button className="p-2.5 rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all duration-300 relative" aria-label="Notifications">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-black"></span>
              </button>
            </NotificationsPopover>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}


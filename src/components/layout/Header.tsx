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
  { label: "Services", href: "/services" },
  { label: "Mur des idées", href: "/#mur-des-idees" },
  { label: "Participer", href: "/participer" },
];

export function Header() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="container-section">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-slate-900 leading-none tracking-tight">
                GOV <span className="text-blue-600 italic">UIE</span>
              </span>
              <span className="text-[10px] text-slate-500 leading-tight uppercase tracking-widest font-body font-bold">
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
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${location.pathname === item.href
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop/Mobile Icons */}
          <div className="flex items-center gap-3">
            <button
              className="p-2.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all duration-300"
              aria-label="Rechercher"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>

            <NotificationsPopover>
              <button className="p-2.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all duration-300 relative" aria-label="Notifications">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
            </NotificationsPopover>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}


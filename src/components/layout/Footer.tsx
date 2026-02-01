import { Link } from "react-router-dom";
import { Shield, Github, Twitter, Instagram, Mail, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-foreground tracking-tight">
                GOV <span className="text-accent italic">UIE</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-body leading-relaxed max-w-xs">
              L'excellence au service de la communauté universitaire. Un gouvernement engagé pour un avenir audacieux.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-display font-semibold mb-6 uppercase tracking-widest text-xs">Navigation</h3>
            <ul className="space-y-4">
              {['Accueil', 'Gouvernement', 'Activités', 'Programme', 'Participer'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-muted-foreground hover:text-accent text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-display font-semibold mb-6 uppercase tracking-widest text-xs">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground font-body">
              <li>Université Internationale d'Excellence</li>
              <li>Campus de Bamako, Mali</li>
              <li>contact@gov-uie.edu</li>
              <li>+223 78 28 28 42</li>
            </ul>
          </div>

          {/* Status */}
          <div className="glass-dark p-6 rounded-2xl border border-white/5">
            <h3 className="text-foreground font-display font-semibold mb-2 text-sm italic">Status du Gouvernement</h3>
            <div className="flex items-center gap-2 text-green-500 text-xs font-bold mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              ACTIF • SESSION 2025-2026
            </div>
            <p className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">
              Dernière mise à jour : 01 Février 2026
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© 2026 Gouvernement UIE. Tous droits réservés.</p>
          <p>Union • Implication • Excellence</p>
        </div>
      </div>
    </footer>
  );
}

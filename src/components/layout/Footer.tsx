import { Link } from "react-router-dom";
import { Shield, Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="hidden md:block bg-foreground text-primary-foreground">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-lg block leading-tight">
                  Gouvernement UIE
                </span>
                <span className="text-xs text-primary-foreground/70">
                  Union • Implication • Excellence
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              Le Gouvernement des Étudiants de l'Université Internationale d'Excellence 
              œuvre pour animer la vie estudiantine, développer le leadership 
              et promouvoir les valeurs d'engagement et de solidarité.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "/" },
                { label: "Gouvernement", href: "/gouvernement" },
                { label: "Activités", href: "/activites" },
                { label: "Programme", href: "/programme" },
                { label: "Participer", href: "/participer" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                <span>contact@uiemali.ac</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+223 78 28 28 42</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Badalabougou, Colline du Savoir</span>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 mt-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Gouvernement UIE - Université Internationale d'Excellence. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

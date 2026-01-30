import { Link } from "react-router-dom";
import { GraduationCap, Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">
                BDE Université
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              Le Bureau des Étudiants œuvre pour améliorer la vie étudiante, 
              organiser des activités enrichissantes et représenter les intérêts 
              de tous les étudiants.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "/" },
                { label: "Le BDE", href: "/bde" },
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
                <span>bde@universite.edu</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+221 XX XXX XX XX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Campus universitaire, Bâtiment A</span>
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
          <p>© {new Date().getFullYear()} Bureau des Étudiants. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

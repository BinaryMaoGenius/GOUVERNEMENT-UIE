import { Link } from "react-router-dom";
import { Shield, Github, Twitter, Instagram, Mail, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 relative overflow-hidden border-t border-slate-200">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-200">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-slate-900 tracking-tight">
                GOV <span className="text-blue-600 italic">UIE</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm font-body leading-relaxed max-w-xs">
              L'excellence au service de la communauté universitaire. Un gouvernement engagé pour un avenir audacieux.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-slate-900 font-display font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h3>
            <ul className="space-y-4">
              {['Accueil', 'Gouvernement', 'Activités', 'Programme', 'Participer'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-slate-500 hover:text-blue-600 text-sm transition-colors flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-display font-bold mb-6 uppercase tracking-widest text-xs">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-500 font-body">
              <li>Université Internationale d'Excellence</li>
              <li>Campus de Bamako, Mali</li>
              <li>contact@gov-uie.edu</li>
              <li>+223 78 28 28 42</li>
            </ul>
          </div>

          {/* Status */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-900 font-display font-bold mb-2 text-sm italic">Status du Gouvernement</h3>
            <div className="flex items-center gap-2 text-green-600 text-xs font-bold mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-200" />
              ACTIF • SESSION 2025-2026
            </div>
            <p className="text-[10px] text-slate-400 font-body uppercase tracking-wider font-bold">
              Dernière mise à jour : 01 Février 2026
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 uppercase tracking-[0.3em] font-bold">
          <p>© 2026 Gouvernement UIE. Excellence Garantie.</p>
          <div className="flex items-center gap-4 text-blue-600">
            <span className="w-1 h-1 bg-blue-600 rounded-full animate-ping" />
            <p>Union • Implication • Excellence</p>
            <span className="w-1 h-1 bg-blue-600 rounded-full animate-ping" />
          </div>
        </div>

        {/* Global Royal Lueur at the very bottom */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-full h-[100px] bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />
      </div>
    </footer>
  );
}

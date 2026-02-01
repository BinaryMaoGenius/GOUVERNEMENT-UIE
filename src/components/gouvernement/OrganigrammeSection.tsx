import { Crown, Users, FileText, Wallet, MessageSquare, UsersRound, Music, Heart, Briefcase, Languages, Monitor, Scale } from "lucide-react";

interface Member {
  role: string;
  name: string;
  isAdjoint?: boolean;
}

interface Pole {
  title: string;
  icon: React.ElementType;
  color: string;
  responsable: string;
  adjoint: string;
}

const bureauExecutif: Member[] = [
  { role: "Présidente", name: "Madina Ali Touré" },
  { role: "Vice-Président", name: "Ibrahim Traoré" },
  { role: "Secrétaire Générale", name: "Fatoumata Daou" },
  { role: "Secrétaire Général Adjoint", name: "Amadou Diallo", isAdjoint: true },
  { role: "Trésorier", name: "Oumar Sidibé" },
  { role: "Trésorière Adjointe", name: "Kadiatou Sow", isAdjoint: true },
];

const poles: Pole[] = [
  { title: "Communication", icon: MessageSquare, color: "bg-blue-500", responsable: "Djénèba Sidibé", adjoint: "Aliou Traoré" },
  { title: "Organisation", icon: UsersRound, color: "bg-green-500", responsable: "Bakary Keïta", adjoint: "Saran Bagayoko" },
  { title: "Culture & Sport", icon: Music, color: "bg-orange-500", responsable: "Mariam Doumbia", adjoint: "Cheick O. Koné" },
  { title: "Humanitaire", icon: Heart, color: "bg-red-500", responsable: "Kadidia Sylla", adjoint: "Abdoulaye Maïga" },
  { title: "Entrepreneuriat", icon: Briefcase, color: "bg-purple-500", responsable: "Seydou Kouyaté", adjoint: "Fanta Diarra" },
  { title: "Langues", icon: Languages, color: "bg-teal-500", responsable: "Hawa Touré", adjoint: "Modibo Sidibé" },
  { title: "Informatique", icon: Monitor, color: "bg-indigo-500", responsable: "Drissa Keïta", adjoint: "Salimata Barry" },
  { title: "Droit & Éthique", icon: Scale, color: "bg-amber-600", responsable: "Boubacar Sow", adjoint: "Awa Diakité" },
];

export function OrganigrammeSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container-section relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl italic mb-4">La Structure du Pouvoir</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm uppercase tracking-widest">
            <Users className="w-4 h-4 text-accent" />
            <span>22 Visionnaires au Service de l'Excellence</span>
          </div>
        </div>

        {/* Bureau Exécutif */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl glass-dark flex items-center justify-center border-accent/20">
              <Crown className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground uppercase tracking-wider">Haut Commandement</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* President Card */}
            <div className="md:col-span-3 glass-dark p-8 rounded-[2.5rem] border-accent/20 relative overflow-hidden group hover:scale-[1.01] transition-all duration-500 shadow-[0_0_50px_rgba(255,191,0,0.1)]">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Crown size={120} />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="w-24 h-24 rounded-full gradient-hero p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <Crown className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-accent font-body text-xs uppercase tracking-[0.4em] mb-2 font-bold">Présidente du Gouvernement</p>
                  <p className="font-display font-bold text-4xl text-foreground tracking-tight mb-2">Madina Ali Touré</p>
                  <p className="text-muted-foreground font-body italic text-lg leading-relaxed max-w-2xl">
                    "Notre engagement est le socle de notre réussite commune. Ensemble, bâtissons l'université de demain."
                  </p>
                </div>
              </div>
            </div>

            {/* Other Executive Members */}
            {bureauExecutif.slice(1).map((member, index) => (
              <div key={index} className="glass-dark rounded-2xl p-6 border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${member.isAdjoint ? "bg-white/5 text-muted-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                    }`}>
                    {member.role.includes("Vice") && <Users className="w-5 h-5" />}
                    {member.role.includes("Secrétaire") && <FileText className="w-5 h-5" />}
                    {member.role.includes("Trésorier") && <Wallet className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{member.role}</p>
                    <p className="font-display font-bold text-lg text-foreground">{member.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pôles Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl glass-dark flex items-center justify-center border-white/10">
              <UsersRound className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground uppercase tracking-wider">Les Pôles Stratégiques</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {poles.map((pole, index) => (
              <div key={index} className="glass-dark rounded-3xl p-6 border-white/5 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${pole.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <pole.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-foreground leading-tight">{pole.title}</h4>
                </div>

                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Responsable</p>
                    <p className="text-sm font-semibold text-foreground">{pole.responsable}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 opacity-80">
                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Adjoint</p>
                    <p className="text-sm font-semibold text-foreground">{pole.adjoint}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
  { role: "Présidente", name: "MADINA ALI TOURÉ" },
  { role: "Vice-Président", name: "MOHAMED SOGODOGO" },
  { role: "Secrétaire Général", name: "SIDIKI TRAORE" },
  { role: "Secrétaire Générale Adjointe", name: "BINTOU TOUMAGNON", isAdjoint: true },
  { role: "Trésorière", name: "FATOU TIMBINÉ" },
  { role: "Trésorier Adjoint", name: "MAH MALLÉ", isAdjoint: true },
];

const poles: Pole[] = [
  { title: "Communication", icon: MessageSquare, color: "bg-blue-500", responsable: "À élire", adjoint: "À élire" },
  { title: "Organisation", icon: UsersRound, color: "bg-green-500", responsable: "À élire", adjoint: "À élire" },
  { title: "Culture & Sport", icon: Music, color: "bg-orange-500", responsable: "À élire", adjoint: "À élire" },
  { title: "Humanitaire", icon: Heart, color: "bg-red-500", responsable: "À élire", adjoint: "À élire" },
  { title: "Entrepreneuriat", icon: Briefcase, color: "bg-purple-500", responsable: "À élire", adjoint: "À élire" },
  { title: "Langues", icon: Languages, color: "bg-teal-500", responsable: "À élire", adjoint: "À élire" },
  { title: "Informatique", icon: Monitor, color: "bg-indigo-500", responsable: "À élire", adjoint: "À élire" },
  { title: "Droit & Éthique", icon: Scale, color: "bg-amber-600", responsable: "À élire", adjoint: "À élire" },
];

export function OrganigrammeSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50"></div>
      <div className="container-section relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl italic mb-4 text-slate-900">La Structure du Pouvoir</h2>
          <div className="flex items-center justify-center gap-2 text-slate-500 font-body text-sm uppercase tracking-widest font-bold">
            <Users className="w-4 h-4 text-blue-600" />
            <span>22 Visionnaires au Service de l'Excellence</span>
          </div>
        </div>

        {/* Bureau Exécutif */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
              <Crown className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 uppercase tracking-wider">Haut Commandement</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* President Card */}
            <div className="md:col-span-3 bg-white p-5 md:p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:scale-[1.01] transition-all duration-500 shadow-xl shadow-slate-100">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-blue-600 group-hover:opacity-10 transition-opacity">
                <Crown size={120} />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="w-24 h-24 rounded-full bg-slate-100 p-1 shadow-lg ring-4 ring-slate-50 overflow-hidden">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border border-slate-100">
                    <img
                      src="/images/Madina.jpeg"
                      alt="MADINA ALI TOURÉ"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-blue-600 font-body text-xs uppercase tracking-[0.4em] mb-2 font-bold">Présidente du Gouvernement</p>
                  <p className="font-display font-bold text-4xl text-slate-900 tracking-tight mb-2">MADINA ALI TOURÉ</p>
                  <p className="text-slate-500 font-body italic text-lg leading-relaxed max-w-2xl">
                    "Notre engagement est le socle de notre réussite commune. Ensemble, bâtissons l'université de demain."
                  </p>
                </div>
              </div>
            </div>

            {/* Other Executive Members */}
            {bureauExecutif.slice(1).map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors overflow-hidden ${member.isAdjoint ? "bg-slate-50 text-slate-500" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                    }`}>
                    {member.role === "Vice-Président" ? (
                      <Users className="w-5 h-5" />
                    ) : (
                      <>
                        {member.role.includes("Secrétaire") && <FileText className="w-5 h-5" />}
                        {member.role.includes("Trésorier") && <Wallet className="w-5 h-5" />}
                      </>
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{member.role}</p>
                    <p className="font-display font-bold text-lg text-slate-900">{member.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pôles Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
              <UsersRound className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 uppercase tracking-wider">Les Pôles Stratégiques</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {poles.map((pole, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${pole.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <pole.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 leading-tight">{pole.title}</h4>
                </div>

                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Responsable</p>
                    <p className="text-sm font-bold text-slate-800">{pole.responsable}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 opacity-80">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Adjoint</p>
                    <p className="text-sm font-bold text-slate-800">{pole.adjoint}</p>
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

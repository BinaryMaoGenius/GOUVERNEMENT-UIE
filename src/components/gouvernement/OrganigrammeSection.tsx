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
  members: Member[];
}

const bureauExecutif: Member[] = [
  { role: "Président", name: "À élire" },
  { role: "Vice-Président(e)", name: "À élire" },
  { role: "Secrétaire Général(e)", name: "À élire" },
  { role: "Secrétaire Général(e) Adjoint(e)", name: "À élire", isAdjoint: true },
  { role: "Trésorier(ère)", name: "À élire" },
  { role: "Trésorier(ère) Adjoint(e)", name: "À élire", isAdjoint: true },
];

const poles: Pole[] = [
  {
    title: "Communication & Relations",
    icon: MessageSquare,
    color: "bg-blue-500",
    members: [
      { role: "Responsable", name: "À élire" },
      { role: "Adjoint(e)", name: "À élire", isAdjoint: true },
    ],
  },
  {
    title: "Organisation & Mobilisation",
    icon: UsersRound,
    color: "bg-green-500",
    members: [
      { role: "Responsable", name: "À élire" },
      { role: "Adjoint(e)", name: "À élire", isAdjoint: true },
    ],
  },
  {
    title: "Culture & Sport",
    icon: Music,
    color: "bg-orange-500",
    members: [
      { role: "Responsable", name: "À élire" },
      { role: "Adjoint(e)", name: "À élire", isAdjoint: true },
    ],
  },
  {
    title: "Actions Humanitaires",
    icon: Heart,
    color: "bg-red-500",
    members: [
      { role: "Responsable", name: "À élire" },
      { role: "Adjoint(e)", name: "À élire", isAdjoint: true },
    ],
  },
  {
    title: "Entrepreneuriat",
    icon: Briefcase,
    color: "bg-purple-500",
    members: [
      { role: "Responsable", name: "À élire" },
      { role: "Adjoint(e)", name: "À élire", isAdjoint: true },
    ],
  },
  {
    title: "Promotion des Langues",
    icon: Languages,
    color: "bg-teal-500",
    members: [
      { role: "Responsable", name: "À élire" },
      { role: "Adjoint(e)", name: "À élire", isAdjoint: true },
    ],
  },
  {
    title: "Informatique",
    icon: Monitor,
    color: "bg-indigo-500",
    members: [
      { role: "Responsable", name: "À élire" },
      { role: "Adjoint(e)", name: "À élire", isAdjoint: true },
    ],
  },
  {
    title: "Droit",
    icon: Scale,
    color: "bg-amber-600",
    members: [
      { role: "Responsable", name: "À élire" },
      { role: "Adjoint(e)", name: "À élire", isAdjoint: true },
    ],
  },
];

export function OrganigrammeSection() {
  return (
    <section className="py-8">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-display font-bold text-foreground mb-2">
            Structure du Gouvernement
          </h2>
          <p className="text-sm text-muted-foreground">
            22 membres au service des étudiants
          </p>
        </div>

        {/* Bureau Exécutif - Top Leadership */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Crown className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground">Bureau Exécutif</h3>
          </div>

          {/* President Card - Highlighted */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-4 mb-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <Crown className="w-7 h-7" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">Président(e)</p>
                <p className="text-sm opacity-90">Chef du Gouvernement UIE</p>
              </div>
            </div>
          </div>

          {/* Other Executive Members */}
          <div className="grid grid-cols-2 gap-3">
            {bureauExecutif.slice(1).map((member, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-3 border ${
                  member.isAdjoint ? "border-border/50" : "border-primary/20"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    member.isAdjoint ? "bg-muted" : "bg-primary/10"
                  }`}>
                    {member.role.includes("Vice") && <Users className="w-4 h-4 text-primary" />}
                    {member.role.includes("Secrétaire") && <FileText className="w-4 h-4 text-primary" />}
                    {member.role.includes("Trésorier") && <Wallet className="w-4 h-4 text-primary" />}
                  </div>
                  <div className="min-w-0">
                    <p className={`font-medium text-xs truncate ${
                      member.isAdjoint ? "text-muted-foreground" : "text-foreground"
                    }`}>
                      {member.role}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{member.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pôles */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-foreground">Les 8 Pôles</h3>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {poles.map((pole, index) => {
              const Icon = pole.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg ${pole.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-semibold text-sm text-foreground mb-2">
                        {pole.title}
                      </p>
                      <div className="flex gap-2">
                        {pole.members.map((member, mIndex) => (
                          <div
                            key={mIndex}
                            className={`flex-1 rounded-lg p-2 ${
                              member.isAdjoint ? "bg-muted/50" : "bg-primary/5"
                            }`}
                          >
                            <p className="text-[10px] font-medium text-muted-foreground">
                              {member.role}
                            </p>
                            <p className="text-xs text-foreground truncate">{member.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <p className="text-2xl font-display font-bold text-primary">22</p>
            <p className="text-xs text-muted-foreground">Membres</p>
          </div>
          <div className="bg-accent/5 rounded-xl p-4 text-center">
            <p className="text-2xl font-display font-bold text-accent">8</p>
            <p className="text-xs text-muted-foreground">Pôles</p>
          </div>
          <div className="bg-green-500/10 rounded-xl p-4 text-center">
            <p className="text-2xl font-display font-bold text-green-600">1</p>
            <p className="text-xs text-muted-foreground">Objectif</p>
          </div>
        </div>
      </div>
    </section>
  );
}

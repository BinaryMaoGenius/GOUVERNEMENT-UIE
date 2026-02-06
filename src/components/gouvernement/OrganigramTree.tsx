import { Crown, Users, FileText, Wallet, MessageSquare, UsersRound, Music, Heart, Briefcase, Languages, Monitor, Scale } from "lucide-react";

interface Member {
    role: string;
    name: string;
    level: number;
}

interface Pole {
    title: string;
    icon: React.ElementType;
    color: string;
    responsable: string;
}

const orgData = {
    president: {
        role: "Présidente",
        name: "Madina Ali Touré",
        level: 0,
    },
    bureau: [
        { role: "Vice-Président", name: "Ibrahim Traoré", level: 1, icon: Users },
        { role: "Secrétaire Générale", name: "Fatoumata Daou", level: 1, icon: FileText },
        { role: "SG Adjoint", name: "Amadou Diallo", level: 1, icon: FileText },
        { role: "Trésorier", name: "Oumar Sidibé", level: 1, icon: Wallet },
        { role: "Trésorière Adj.", name: "Kadiatou Sow", level: 1, icon: Wallet },
    ],
    poles: [
        { title: "Communication", icon: MessageSquare, color: "bg-blue-500", responsable: "Djénèba S.", level: 2 },
        { title: "Organisation", icon: UsersRound, color: "bg-green-500", responsable: "Bakary K.", level: 2 },
        { title: "Culture & Sport", icon: Music, color: "bg-orange-500", responsable: "Mariam D.", level: 2 },
        { title: "Humanitaire", icon: Heart, color: "bg-red-500", responsable: "Kadidia S.", level: 2 },
        { title: "Entrepreneuriat", icon: Briefcase, color: "bg-purple-500", responsable: "Seydou K.", level: 2 },
        { title: "Langues", icon: Languages, color: "bg-teal-500", responsable: "Hawa T.", level: 2 },
        { title: "Informatique", icon: Monitor, color: "bg-indigo-500", responsable: "Drissa K.", level: 2 },
        { title: "Droit & Éthique", icon: Scale, color: "bg-amber-600", responsable: "Boubacar S.", level: 2 },
    ],
};

export function OrganigramTree() {
    return (
        <div className="py-12 relative overflow-hidden">
            <div className="container-section">
                {/* Title */}
                <div className="text-center mb-12">
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2 italic">
                        Hiérarchie du Gouvernement
                    </h3>
                    <p className="text-sm text-muted-foreground">Structure organisationnelle</p>
                </div>

                {/* Tree Structure */}
                <div className="relative">
                    {/* Level 0 - Présidente */}
                    <div className="flex justify-center mb-8 md:mb-12">
                        <div className="relative">
                            <div className="glass-dark p-6 md:p-8 rounded-3xl border-accent/30 shadow-[0_0_30px_rgba(255,191,0,0.15)] hover:scale-105 transition-all duration-300 max-w-xs">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-hero p-1 shadow-xl">
                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                            <Crown className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-accent font-body text-xs uppercase tracking-widest mb-1 font-bold">
                                            {orgData.president.role}
                                        </p>
                                        <p className="font-display font-bold text-lg md:text-xl text-foreground">
                                            {orgData.president.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Vertical line down */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 md:h-12 bg-gradient-to-b from-accent/50 to-transparent" />
                        </div>
                    </div>

                    {/* Level 1 - Bureau Exécutif */}
                    <div className="relative mb-8 md:mb-12">
                        {/* Horizontal line */}
                        <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mt-8 md:mt-0">
                            {orgData.bureau.map((member, index) => (
                                <div key={index} className="relative">
                                    {/* Vertical line up on desktop */}
                                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0.5 h-8 bg-gradient-to-t from-primary/30 to-transparent hidden md:block" />

                                    <div className="glass-dark p-4 rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                                <member.icon className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[9px] md:text-[10px] font-bold text-accent uppercase tracking-wider mb-1">
                                                    {member.role}
                                                </p>
                                                <p className="font-display font-bold text-xs md:text-sm text-foreground leading-tight">
                                                    {member.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Vertical line down */}
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-6 md:h-8 bg-gradient-to-b from-primary/20 to-transparent" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Level 2 - Pôles */}
                    <div className="relative">
                        {/* Horizontal line */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
                            {orgData.poles.map((pole, index) => (
                                <div key={index} className="relative">
                                    {/* Vertical line up on desktop */}
                                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0.5 h-6 md:h-8 bg-gradient-to-t from-white/10 to-transparent hidden md:block" />

                                    <div className="glass-dark p-4 rounded-2xl border-white/5 hover:border-white/20 transition-all duration-300 group">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${pole.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                                <pole.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                            </div>
                                            <div className="text-center">
                                                <p className="font-display font-bold text-xs md:text-sm text-foreground mb-1 leading-tight">
                                                    {pole.title}
                                                </p>
                                                <p className="text-[9px] md:text-[10px] text-muted-foreground">
                                                    {pole.responsable}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-accent" />
                        <span>Présidence</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span>Bureau Exécutif</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <span>Pôles Stratégiques</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

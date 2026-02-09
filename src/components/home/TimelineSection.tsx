import { GraduationCap, Briefcase, Award, Star, History } from "lucide-react";

const events = [
    {
        year: "2020",
        title: "Début du Parcours Académique",
        description: "Intégration de l'Université Internationale d'Excellence avec une ambition claire : l'excellence.",
        icon: GraduationCap,
    },
    {
        year: "2022",
        title: "Engagement Associatif",
        description: "Responsable de pôle, MADINA a su fédérer les étudiants autour de projets culturels majeurs.",
        icon: Star,
    },
    {
        year: "2024",
        title: "Leadership Reconnu",
        description: "Multiplication des initiatives pour l'inclusion des femmes dans la gouvernance étudiante.",
        icon: Award,
    },
    {
        year: "2025",
        title: "Élection à la Présidence",
        description: "Portée par une vision d'avenir, elle devient la voix de toute une communauté.",
        icon: Briefcase,
    },
];

export function TimelineSection() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container-section relative z-10">
                <div className="flex items-center gap-4 mb-16 justify-center md:justify-start">
                    <History className="text-accent animate-spin-slow" style={{ animationDuration: '6s' }} />
                    <h2 className="section-title text-3xl italic m-0">Le Parcours de la Candidate</h2>
                </div>

                <div className="relative border-l-2 border-white/5 ml-4 md:ml-8 space-y-12 pb-8">
                    {events.map((event, index) => (
                        <div key={index} className="relative pl-10 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-background border-2 border-accent shadow-[0_0_10px_rgba(255,191,0,0.5)] z-20" />
                            <div className="absolute left-[-2px] top-5 w-[1px] h-full bg-gradient-to-b from-accent to-transparent z-10" />

                            <div className="glass-dark p-6 rounded-3xl border border-white/5 hover:border-accent/30 transition-all duration-300 hover:translate-x-2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-2xl bg-accent/10">
                                        <event.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <span className="text-accent font-display font-bold text-2xl tracking-tighter">{event.year}</span>
                                        <h3 className="font-display font-bold text-xl text-foreground">{event.title}</h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground font-body leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

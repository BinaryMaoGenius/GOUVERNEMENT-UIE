import { Globe, BookOpen } from "lucide-react";

const expressions = [
    { phrase: "An k'an bolo di n'gon ma", lang: "Bambara", meaning: "Donnons-nous la main", context: "Appel à l'union étudiante" },
    { phrase: "I ni ce", lang: "Bambara", meaning: "Merci / Travail bien fait", context: "Reconnaissance du mérite" },
    { phrase: "Hèrè", lang: "Bambara", meaning: "La Paix", context: "Climat social sur le campus" },
];

export function CultureSection() {
    return (
        <section className="py-20 bg-secondary/20 relative overflow-hidden">
            <div className="container-section relative z-10">
                <div className="flex flex-col items-center mb-12 text-center">
                    <h2 className="section-title text-3xl italic mb-2">L'Âme de l'Excellence</h2>
                    <p className="text-muted-foreground font-body max-w-xl">
                        Notre gouvernement célèbre la diversité. Découvrez les expressions qui guident notre action.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-accent to-transparent mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expressions.map((exp, i) => (
                        <div key={i} className="glass-dark p-8 rounded-[2.5rem] border-white/5 hover:border-accent/20 transition-all duration-300 group hover:-translate-y-2">
                            <div className="flex items-center gap-3 mb-4">
                                <Globe className="w-5 h-5 text-accent animate-pulse" />
                                <span className="text-xs font-bold text-accent uppercase tracking-widest">{exp.lang}</span>
                            </div>
                            <p className="text-2xl font-display font-bold text-foreground mb-2 italic">"{exp.phrase}"</p>
                            <p className="text-muted-foreground italic mb-6">« {exp.meaning} »</p>
                            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-muted-foreground">
                                <BookOpen size={14} className="text-accent/50" />
                                <span>{exp.context}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

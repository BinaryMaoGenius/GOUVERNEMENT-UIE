import { Users, Quote } from "lucide-react";

export function VicePresidentMessage() {
    return (
        <section className="py-12 md:py-16 relative overflow-hidden">
            <div className="container-section">
                <div className="glass-dark rounded-[2.5rem] p-8 md:p-12 border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Quote size={120} />
                    </div>

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-12 bg-gradient-to-b from-primary to-accent rounded-full" />
                            <div>
                                <p className="text-primary font-body text-xs uppercase tracking-[0.3em] font-bold">
                                    Message du Vice-Président
                                </p>
                                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground italic">
                                    Un Mot d'Ibrahim Traoré
                                </h3>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Avatar */}
                            <div className="flex-shrink-0 mx-auto md:mx-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl gradient-hero p-1 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center overflow-hidden">
                                        <Users className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="flex-1">
                                <div className="relative">
                                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent/20" />
                                    <blockquote className="text-base md:text-lg text-muted-foreground font-body leading-relaxed italic pl-6 md:pl-8">
                                        <p className="mb-4">
                                            Chers étudiants, notre force réside dans notre unité et notre détermination à bâtir ensemble une université d'excellence.
                                        </p>
                                        <p>
                                            Chaque jour, nous travaillons pour que vos voix soient entendues et que vos aspirations deviennent réalité. Ensemble, nous écrivons l'histoire de l'UIE.
                                        </p>
                                    </blockquote>
                                </div>

                                {/* Signature */}
                                <div className="mt-6 pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1">
                                            <p className="font-display font-bold text-lg text-foreground">
                                                Ibrahim Traoré
                                            </p>
                                            <p className="text-sm text-primary font-medium">
                                                Vice-Président du Gouvernement UIE
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Users className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

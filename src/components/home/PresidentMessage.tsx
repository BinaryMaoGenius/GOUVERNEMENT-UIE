import { Quote, UserCircle } from "lucide-react";

export function PresidentMessage() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-section relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-title text-3xl mb-2 italic">Une Vision Partagée</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="glass-dark rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl animate-scale-in">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Quote size={180} />
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
            {/* Photo placeholder with ornamental frame */}
            <div className="flex-shrink-0 flex flex-col items-center transition-all duration-500 hover:scale-105">
              <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-accent to-primary animate-spin-slow" style={{ animationDuration: '8s' }}>
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center text-primary-foreground bg-background shadow-inner overflow-hidden border-2 border-background">
                  <UserCircle size={64} className="text-muted-foreground/50" />
                  {/* Replace icon with <img src="/path/to/photo.jpg" alt="Madina Ali Touré" className="w-full h-full object-cover" /> */}
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="font-display font-bold text-2xl text-foreground tracking-tight">Madina Ali Touré</p>
                <p className="font-body text-[10px] uppercase tracking-[0.3em] text-accent mt-1">Élue Présidente 2025</p>
              </div>
            </div>

            {/* Message with elegant typography */}
            <div className="flex-1 space-y-6 text-lg leading-relaxed font-body text-foreground/80 font-light">
              <p className="text-foreground font-medium mb-4 italic text-xl">
                "Chers membres de la communauté, Chers camarades..."
              </p>

              <div className="space-y-4 text-base md:text-lg">
                <p>
                  À travers cette lettre, je souhaite vous partager ma vision, mes objectifs et les valeurs qui m’ont conduite à me présenter à l’élection présidentielle de notre université.
                </p>
                <p>
                  Être étudiante aujourd’hui, c’est plus que suivre un cursus académique. C’est porter une voix, défendre des idées et croire que le changement est possible. En tant que femme, j’ai fait le choix de me lever et d’assumer pleinement mon ambition.
                </p>
                <p>
                  Mon objectif est clair : contribuer à une université plus inclusive, plus équitable et plus proche des réalités des étudiants. Une université où le leadership n’a ni genre ni barrières.
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="font-display italic text-foreground text-xl">
                  Avec respect et détermination,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

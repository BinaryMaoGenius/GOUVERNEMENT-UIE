import { Link } from "react-router-dom";
import { Calendar, MapPin, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NextActivitySection() {
  const nextActivity = {
    title: "Rupture Collective (Iftar)",
    description: "Un moment sacré de partage et de fraternité. Rejoignez la communauté UIE pour rompre le jeûne ensemble dans une ambiance conviviale et chaleureuse.",
    date: "Ramadan 2026",
    time: "Au coucher du soleil",
    location: "Esplanade du Campus UIE",
    participants: 1000,
    pole: "Culture & Cohésion",
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container-section relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl italic mb-2">Cérémonial à venir</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-dark rounded-[3rem] overflow-hidden border-accent/20 relative invitation-edge royal-shadow group">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Côté Invitation (Texte) */}
              <div className="p-10 md:p-16 flex flex-col justify-center border-r border-white/5">
                <div className="flex items-center gap-2 text-accent mb-6">
                  <Sparkles size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Invitation Exclusive</span>
                </div>

                <h3 className="section-title text-4xl mb-6 leading-tight group-hover:text-accent transition-colors">
                  {nextActivity.title}
                </h3>

                <p className="text-muted-foreground font-body text-sm mb-8 leading-relaxed">
                  {nextActivity.description}
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4 text-sm text-foreground/80">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span>{nextActivity.date} — {nextActivity.time}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-foreground/80">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>{nextActivity.location}</span>
                  </div>
                </div>

                <Link to="/participer">
                  <Button className="h-14 px-10 rounded-2xl bg-white text-black font-bold hover:bg-accent hover:text-black transition-all shadow-xl group-hover:scale-105">
                    <Send className="w-4 h-4 mr-2" />
                    Réserver ma place
                  </Button>
                </Link>
              </div>

              {/* Côté Visuel (Image/Gradient) */}
              <div className="relative min-h-[300px] flex items-center justify-center p-12 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581073107630-95747d589483?q=80&w=1000"
                  alt="Rupture Collective UIE"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]" />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                    <span className="text-white font-display text-4xl italic">G</span>
                  </div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-[0.3em]">Ambassadeurs de l'Excellence</p>
                </div>

                {/* Décoration de coin */}
                <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/10" />
                <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

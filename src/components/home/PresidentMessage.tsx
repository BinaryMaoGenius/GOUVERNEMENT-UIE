import { Quote } from "lucide-react";

export function PresidentMessage() {
  return (
    <section className="py-16 bg-primary-light">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Photo placeholder */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl gradient-hero flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  AB
                </div>
              </div>

              {/* Message */}
              <div className="flex-1">
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  Notre engagement est simple : être à votre écoute et créer ensemble 
                  un campus où chaque étudiant trouve sa place. Ce mandat est le vôtre, 
                  participez et construisons l'avenir ensemble !
                </blockquote>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    Amadou Ba
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Président du BDE • Mandat 2024-2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

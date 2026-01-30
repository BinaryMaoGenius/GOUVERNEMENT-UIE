export function PresidentMessage() {
  return (
    <section className="py-8">
      <div className="container-section">
        <div className="card-elevated p-4">
          <div className="flex gap-4 items-start">
            {/* Photo placeholder */}
            <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
              AB
            </div>

            {/* Message */}
            <div className="flex-1">
              <p className="text-sm text-foreground leading-relaxed mb-2">
                "Notre engagement est simple : être à votre écoute et créer ensemble 
                un campus où chaque étudiant trouve sa place."
              </p>
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Amadou Ba</span> • Président du BDE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Quote, UserCircle } from "lucide-react";

export function PresidentMessage() {
  return (
    <section className="py-8">
      <div className="container-section">
        <h2 className="font-display font-bold text-xl mb-4">Le mot de la candidate</h2>
        <div className="card-elevated p-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Quote size={120} />
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start relative z-10">
            {/* Photo placeholder */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full gradient-hero flex items-center justify-center text-primary-foreground mb-3 shadow-lg border-4 border-background">
                <UserCircle size={48} />
                {/* Remplacez la div ci-dessus par <img src="/path/to/photo.jpg" alt="Madina Ali Touré" className="w-full h-full object-cover rounded-full" /> quand vous aurez la photo */}
              </div>
              <div className="text-center">
                <p className="font-bold text-lg text-primary">Madina Ali Touré</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Candidate à la présidence</p>
              </div>
            </div>

            {/* Message */}
            <div className="flex-1 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">
                Chers membres de la communauté universitaire, Chers camarades,
              </p>

              <p>
                À travers cette lettre, je souhaite vous partager ma vision, mes objectifs et les valeurs qui m’ont conduite à me présenter à l’élection présidentielle de notre université.
              </p>
              <p>
                Être étudiante aujourd’hui, c’est plus que suivre un cursus académique. C’est porter une voix, défendre des idées et croire que le changement est possible, même dans les espaces où l’on nous a longtemps fait croire que notre place était limitée. En tant que femme, j’ai fait le choix de me lever, de m’engager et d’assumer pleinement mon ambition : montrer que les femmes ont toute leur place dans le leadership universitaire.
              </p>
              <p>
                Mon objectif est clair : contribuer à une université plus inclusive, plus équitable et plus proche des réalités des étudiants. Une université où chaque voix compte, où le mérite prime sur les préjugés, et où le leadership n’a ni genre ni barrières.
              </p>
              <p>
                Ma vision est celle d’un leadership fondé sur l’écoute, la transparence et l’action. Je crois en une gouvernance universitaire qui valorise les talents, encourage l’excellence académique et soutient les initiatives étudiantes, en particulier celles portées par les jeunes et les femmes.
              </p>
              <p>
                Me présenter à cette élection n’est pas seulement un choix personnel, c’est un message : celui de l’audace, de la confiance en soi et de l’espoir. C’est la preuve que les femmes peuvent diriger, décider et inspirer, même dans les milieux où elles sont encore sous-représentées.
              </p>
              <p>
                Je crois fermement que le leadership universitaire doit refléter la diversité de ses étudiants. Ensemble, nous pouvons bâtir une université plus forte, plus juste et tournée vers l’avenir.
              </p>

              <p className="font-medium text-foreground pt-2">
                Je vous remercie pour votre attention, votre soutien et votre confiance.<br />
                Avec respect et détermination,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

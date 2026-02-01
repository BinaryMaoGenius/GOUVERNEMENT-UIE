import { Layout } from "@/components/layout/Layout";
import { OrganigrammeSection } from "@/components/gouvernement/OrganigrammeSection";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Shield, 
  Target, 
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Users,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const missions = [
  "Contribuer à l'animation de la vie estudiantine au sein de l'UIE",
  "Favoriser le développement de l'autonomie, de l'initiative et du leadership",
  "Promouvoir les valeurs liées à l'engagement et au volontariat",
  "Sensibiliser les étudiants sur les enjeux qui les concernent",
  "Favoriser le dialogue entre les étudiants et l'administration",
];

const engagements = [
  "Participer activement à l'organisation d'évènements académiques, culturels et sportifs",
  "Acquérir des compétences en gestion, organisation et leadership",
  "Contribuer au rayonnement de l'UIE à travers des initiatives structurées",
  "Être un relais officiel entre les étudiants et l'administration",
];

const GouvernementPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-4">
        <div className="container-section">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Retour</span>
          </Link>

          {/* Hero */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display font-bold text-xl text-foreground">
                  Gouvernement UIE
                </h1>
                <p className="text-sm text-muted-foreground">
                  Présidence des Étudiants 2025-2026
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Star className="w-4 h-4" />
              <p className="text-sm font-medium">Union • Implication • Excellence</p>
            </div>
          </div>

          {/* Accordion sections */}
          <Accordion type="single" collapsible defaultValue="mission" className="space-y-3">
            <AccordionItem value="mission" className="card-elevated px-4 border-none">
              <AccordionTrigger className="hover:no-underline py-3">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-display font-semibold text-foreground text-sm">
                    Notre Mission
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="space-y-2">
                  {missions.map((mission, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{mission}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="engagement" className="card-elevated px-4 border-none">
              <AccordionTrigger className="hover:no-underline py-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-display font-semibold text-foreground text-sm">
                    Pourquoi s'engager ?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="space-y-2">
                  {engagements.map((engagement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{engagement}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fonctionnement" className="card-elevated px-4 border-none">
              <AccordionTrigger className="hover:no-underline py-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="font-display font-semibold text-foreground text-sm">
                    Fonctionnement
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm text-muted-foreground space-y-3">
                <p>
                  Le Gouvernement UIE est apolitique, à but non lucratif et fonctionne selon un mode de gouvernance démocratique.
                </p>
                <p>
                  Le/la Président(e) et le/la Vice-Président(e) ne doivent pas tous deux être en fin de cycle (Licence 3), afin d'assurer la continuité des actions.
                </p>
                <p>
                  Les étudiants en Licence 2 ou Licence 3 sont éligibles au poste de Président(e). Les étudiants en Licence 1 peuvent occuper tout autre poste au sein du bureau.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Organigramme complet */}
      <OrganigrammeSection />

      {/* CTA */}
      <section className="py-6">
        <div className="container-section">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-center text-primary-foreground">
            <h3 className="font-display font-bold text-lg mb-2">
              Rejoins le Gouvernement UIE !
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Candidate pour un poste et contribue à la vie étudiante
            </p>
            <Link 
              to="/participer"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-2 rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Postuler maintenant
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GouvernementPage;

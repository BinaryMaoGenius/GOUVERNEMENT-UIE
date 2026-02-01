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
          <div className="glass-dark rounded-[2.5rem] p-10 mb-12 border-accent/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Shield size={160} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-xl">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="font-display font-bold text-3xl text-foreground tracking-tight">
                    Le Gouvernement <span className="text-accent italic">UIE</span>
                  </h1>
                  <p className="text-sm text-muted-foreground font-body uppercase tracking-[0.3em] font-bold">
                    Mandat de Prestige 2025-2026
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-accent bg-accent/5 w-fit px-4 py-2 rounded-full border border-accent/10">
                <Star className="w-4 h-4 animate-pulse" />
                <p className="text-xs font-bold uppercase tracking-widest">Union • Implication • Excellence</p>
              </div>
            </div>
          </div>

          {/* Accordion sections */}
          <Accordion type="single" collapsible defaultValue="mission" className="space-y-6">
            <AccordionItem value="mission" className="glass-dark px-6 border-white/5 rounded-3xl overflow-hidden hover:border-primary/20 transition-all">
              <AccordionTrigger className="hover:no-underline py-5 group">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-display font-bold text-foreground text-lg italic">
                    Notre Mission
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-4">
                  {missions.map((mission, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{mission}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="engagement" className="glass-dark px-6 border-white/5 rounded-3xl overflow-hidden hover:border-accent/20 transition-all">
              <AccordionTrigger className="hover:no-underline py-5 group">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-display font-bold text-foreground text-lg italic">
                    L'Appel à l'Engagement
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-4">
                  {engagements.map((engagement, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{engagement}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fonctionnement" className="glass-dark px-6 border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all">
              <AccordionTrigger className="hover:no-underline py-5 group">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-display font-bold text-foreground text-lg italic">
                    Principes Fondamentaux
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm text-muted-foreground font-body space-y-4 leading-relaxed p-4">
                <p>
                  Le Gouvernement UIE est une institution apolitique et fraternelle, dédiée au bien-être de chaque étudiant.
                </p>
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 italic">
                  "L'alternance et la continuité sont les piliers de notre gouvernance."
                </div>
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

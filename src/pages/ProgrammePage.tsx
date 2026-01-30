import { Layout } from "@/components/layout/Layout";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Shield, 
  Megaphone, 
  Users, 
  Palette, 
  Heart, 
  Briefcase, 
  Languages, 
  Laptop,
  Target,
  Calendar,
  TrendingUp
} from "lucide-react";

const poles = [
  {
    icon: Shield,
    name: "Gouvernance & Administration",
    color: "bg-blue-500",
    objectives: [
      "Assurer une gestion transparente du BDE",
      "Maintenir une communication constante avec l'administration",
      "Organiser des assemblées générales régulières",
    ],
    activities: [
      "Réunions hebdomadaires du bureau",
      "Bilans trimestriels publics",
      "Permanences étudiantes",
    ],
    results: [
      "100% de transparence financière",
      "4 assemblées générales par an",
      "Présence continue au bureau",
    ],
  },
  {
    icon: Megaphone,
    name: "Communication & Relations",
    color: "bg-purple-500",
    objectives: [
      "Améliorer la visibilité du BDE",
      "Créer des partenariats durables",
      "Tenir les étudiants informés",
    ],
    activities: [
      "Gestion des réseaux sociaux",
      "Newsletter mensuelle",
      "Rencontres avec les partenaires",
    ],
    results: [
      "5000+ abonnés sur les réseaux",
      "10 partenariats signés",
      "Communication hebdomadaire",
    ],
  },
  {
    icon: Users,
    name: "Organisation & Mobilisation",
    color: "bg-green-500",
    objectives: [
      "Fédérer la communauté étudiante",
      "Organiser des événements majeurs",
      "Renforcer la vie de campus",
    ],
    activities: [
      "Journée d'intégration",
      "Soirées thématiques",
      "Événements inter-universitaires",
    ],
    results: [
      "1000+ étudiants mobilisés",
      "15 événements organisés",
      "Participation record",
    ],
  },
  {
    icon: Palette,
    name: "Culture & Sport",
    color: "bg-orange-500",
    objectives: [
      "Promouvoir les activités culturelles",
      "Développer la pratique sportive",
      "Valoriser les talents étudiants",
    ],
    activities: [
      "Tournois sportifs",
      "Concerts et spectacles",
      "Ateliers artistiques",
    ],
    results: [
      "6 tournois organisés",
      "3 concerts par semestre",
      "Club de talents créé",
    ],
  },
  {
    icon: Heart,
    name: "Actions humanitaires",
    color: "bg-red-500",
    objectives: [
      "Développer la solidarité étudiante",
      "Soutenir les causes sociales",
      "Sensibiliser aux enjeux humanitaires",
    ],
    activities: [
      "Collectes de dons",
      "Journées de sensibilisation",
      "Partenariats avec des ONG",
    ],
    results: [
      "2 collectes par semestre",
      "500+ personnes aidées",
      "3 partenariats ONG",
    ],
  },
  {
    icon: Briefcase,
    name: "Entrepreneuriat & Employabilité",
    color: "bg-amber-600",
    objectives: [
      "Faciliter l'insertion professionnelle",
      "Encourager l'entrepreneuriat étudiant",
      "Créer des ponts avec le monde du travail",
    ],
    activities: [
      "Forums de l'emploi",
      "Ateliers CV et entretien",
      "Rencontres avec des entrepreneurs",
    ],
    results: [
      "2 forums par an",
      "200 CV relus",
      "50 stages facilités",
    ],
  },
  {
    icon: Languages,
    name: "Langues & Identité",
    color: "bg-teal-500",
    objectives: [
      "Valoriser la diversité culturelle",
      "Promouvoir les langues locales",
      "Renforcer l'identité étudiante",
    ],
    activities: [
      "Cours de langues locales",
      "Journées culturelles",
      "Échanges interculturels",
    ],
    results: [
      "3 langues enseignées",
      "4 journées culturelles",
      "100+ participants",
    ],
  },
  {
    icon: Laptop,
    name: "Numérique & Droits",
    color: "bg-indigo-500",
    objectives: [
      "Défendre les droits étudiants",
      "Améliorer les outils numériques",
      "Former aux compétences digitales",
    ],
    activities: [
      "Permanences juridiques",
      "Formations numériques",
      "Développement d'outils",
    ],
    results: [
      "Site BDE opérationnel",
      "50+ étudiants formés",
      "Guide des droits publié",
    ],
  },
];

const ProgrammePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-primary-light">
        <div className="container-section text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Programme du mandat
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez en détail les objectifs, activités et résultats attendus 
            pour chacun de nos 8 pôles d'action.
          </p>
        </div>
      </section>

      {/* Poles */}
      <section className="py-12">
        <div className="container-section">
          <Accordion type="single" collapsible className="space-y-4">
            {poles.map((pole, index) => (
              <AccordionItem 
                key={pole.name} 
                value={`pole-${index}`} 
                className="card-elevated px-4 md:px-6 border-none"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${pole.color} flex items-center justify-center`}>
                      <pole.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-display font-semibold text-foreground text-left">
                      {pole.name}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid gap-6 md:grid-cols-3 mt-4">
                    {/* Objectifs */}
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-sm text-foreground">Objectifs</h4>
                      </div>
                      <ul className="space-y-2">
                        {pole.objectives.map((obj, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Activités */}
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-accent" />
                        <h4 className="font-semibold text-sm text-foreground">Activités prévues</h4>
                      </div>
                      <ul className="space-y-2">
                        {pole.activities.map((act, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Résultats */}
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <h4 className="font-semibold text-sm text-foreground">Résultats attendus</h4>
                      </div>
                      <ul className="space-y-2">
                        {pole.results.map((res, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default ProgrammePage;

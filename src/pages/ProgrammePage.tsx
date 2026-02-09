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
  TrendingUp,
  Award
} from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip as RechartsTooltip } from 'recharts';

const poles = [
  {
    icon: Users,
    name: "Axe 1 : Intégration & Cohésion",
    color: "bg-blue-600",
    objectives: [
      "Assurer une meilleure intégration des nouveaux étudiants",
      "Renforcer l'esprit de communauté UIE",
      "Valoriser les talents étudiants dès la rentrée"
    ],
    activities: [
      "Journées d'intégration sportive (Vendredi/Samedi)",
      "Soirée culturelle (Miss, Spectacles, Artistes)",
      "Concours de débat pour les nouveaux arrivants"
    ],
    results: [
      "100% des nouveaux étudiants intégrés",
      "Détection des talents dès le premier semestre",
      "Solidarité inter-promotions accrue"
    ],
    progress: 0,
  },
  {
    icon: Megaphone,
    name: "Axe 2 : Expression & Dialogue",
    color: "bg-indigo-600",
    objectives: [
      "Recueillir les préoccupations réelles des étudiants",
      "Servir de pont entre l'administration et les étudiants",
      "Garantir la transparence des actions du gouvernement"
    ],
    activities: [
      "Journée 'La Voix des Étudiants'",
      "Mise en place de la Semaine de Solutions",
      "Présentation des bilans semestriels publics"
    ],
    results: [
      "Amélioration du climat universitaire",
      "Prise en compte de 100% des doléances valides",
      "Transparence totale sur la gestion du mandat"
    ],
    progress: 0,
  },
  {
    icon: Briefcase,
    name: "Axe 3 : Développement & Entrepreneuriat",
    color: "bg-purple-600",
    objectives: [
      "Promouvoir l'esprit entrepreneurial sur le campus",
      "Accompagner les porteurs de projets étudiants",
      "Améliorer l'employabilité des futurs diplômés"
    ],
    activities: [
      "Semaine de l'Entrepreneuriat (pendant les pauses)",
      "Mise en relation avec des réseaux d'entrepreneurs",
      "Sessions de formations pratiques et workshops"
    ],
    results: [
      "Augmentation du nombre de projets étudiants lancés",
      "Meilleure préparation au monde professionnel",
      "Création d'un écosystème d'innovation UIE"
    ],
    progress: 0,
  },
  {
    icon: Heart,
    name: "Axe 4 : Sport & Bien-être",
    color: "bg-red-600",
    objectives: [
      "Améliorer le bien-être physique et mental des étudiants",
      "Renforcer la fraternité par le sport",
      "Célébrer les moments de partage spirituel"
    ],
    activities: [
      "Matchs de football inter-filières chaque vendredi",
      "Rupture collective pendant le mois de Ramadan",
      "Challenges sportifs inter-universitaires"
    ],
    results: [
      "Participation active de toutes les filières",
      "Cohésion sociale renforcée par les événements",
      "Réduction du stress académique par le sport"
    ],
    progress: 0,
  },
  {
    icon: Palette,
    name: "Axe 5 : Culture & Solidarité",
    color: "bg-orange-600",
    objectives: [
      "Célébrer la diversité et les valeurs humaines",
      "Inculquer le sens de la citoyenneté et du don",
      "Améliorer le niveau linguistique des étudiants"
    ],
    activities: [
      "Journée Culturelle 'Célébrer l'Homme'",
      "Campagne de collecte et dons pour l'orphelinat",
      "Création de clubs d'anglais et symposiums"
    ],
    results: [
      "Engagement social accru de la communauté",
      "Amélioration des compétences linguistiques",
      "Rayonnement culturel de l'université"
    ],
    progress: 0,
  },
  {
    icon: Target,
    name: "Axe 6 : Communication & Organisation",
    color: "bg-teal-600",
    objectives: [
      "Fluidifier la circulation de l'information",
      "Assurer une organisation rigoureuse des événements",
      "Accroître l'engagement numérique des étudiants"
    ],
    activities: [
      "Structuration des canaux d'information officiels",
      "Digitilisation du suivi des activités",
      "Communication dynamique en temps réel"
    ],
    results: [
      "Zéro perte d'information majeure",
      "Participation record aux événements planifiés",
      "Satisfaction étudiante sur la communication"
    ],
    progress: 0,
  },
];

const ProgrammePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
        </div>
        <div className="container-section relative z-10 text-center">
          <h1 className="section-title text-4xl md:text-5xl italic mb-6 text-slate-900">
            Le Manifeste de l'Excellence
          </h1>
          <p className="text-slate-500 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Découvrez notre vision stratégique pour chaque pôle. Un programme bâti par des étudiants, pour des étudiants.
          </p>
        </div>
      </section>

      {/* Poles */}
      <section className="py-12 bg-white min-h-screen">
        <div className="container-section">
          <Accordion type="single" collapsible className="space-y-4">
            {poles.map((pole, index) => (
              <AccordionItem
                key={pole.name}
                value={`pole-${index}`}
                className="bg-white px-6 md:px-8 border border-slate-200 rounded-[2rem] overflow-hidden mb-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${pole.color} flex items-center justify-center shadow-sm`}>
                        <pole.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-display font-bold text-slate-900 text-left text-lg">
                        {pole.name}
                      </span>
                    </div>
                    <div className="hidden md:flex items-center gap-4 mr-4">
                      <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 transition-all duration-1000"
                          style={{ width: `${pole.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-blue-600">{pole.progress}%</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid gap-6 md:grid-cols-4 mt-4">
                    {/* Visualisation Chart */}
                    <div className="bg-slate-50 rounded-xl p-4 flex flex-col items-center justify-center min-h-[150px] border border-slate-100">
                      <div className="w-full h-32">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={[
                                { name: 'Complété', value: pole.progress },
                                { name: 'Restant', value: 100 - pole.progress }
                              ]}
                              innerRadius={25}
                              outerRadius={40}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              <Cell fill="#2563EB" />
                              <Cell fill="#F1F5F9" />
                            </Pie>
                            <RechartsTooltip
                              contentStyle={{ backgroundColor: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px', color: '#0F172A', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                              itemStyle={{ color: '#0F172A' }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="text-center mt-2">
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Réalisation</p>
                        <p className="text-xl font-display font-bold text-slate-900">{pole.progress}%</p>
                      </div>
                    </div>
                    {/* Objectifs */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-4 h-4 text-blue-600" />
                        <h4 className="font-bold text-sm text-slate-900">Objectifs</h4>
                      </div>
                      <ul className="space-y-2">
                        {pole.objectives.map((obj, i) => (
                          <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Activités */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <h4 className="font-bold text-sm text-slate-900">Activités prévues</h4>
                      </div>
                      <ul className="space-y-2">
                        {pole.activities.map((act, i) => (
                          <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Résultats */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <h4 className="font-bold text-sm text-slate-900">Résultats attendus</h4>
                      </div>
                      <ul className="space-y-2">
                        {pole.results.map((res, i) => (
                          <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
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
        {/* Spacer for BottomNav on mobile */}
        <div className="h-24 md:hidden"></div>
      </section>
    </Layout >
  );
};

export default ProgrammePage;

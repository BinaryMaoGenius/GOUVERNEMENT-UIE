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
    progress: 75,
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
    progress: 60,
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
    progress: 90,
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
    progress: 45,
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
    progress: 70,
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
    progress: 55,
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
    progress: 80,
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
    progress: 100,
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
      </section>
    </Layout >
  );
};

export default ProgrammePage;

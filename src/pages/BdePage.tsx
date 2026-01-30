import { Layout } from "@/components/layout/Layout";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Target, Users, Award } from "lucide-react";

const teamMembers = [
  { name: "Amadou Ba", role: "Président", initials: "AB" },
  { name: "Fatou Diallo", role: "Vice-Présidente", initials: "FD" },
  { name: "Moussa Ndiaye", role: "Secrétaire Général", initials: "MN" },
  { name: "Aïssatou Sow", role: "Trésorière", initials: "AS" },
  { name: "Omar Diop", role: "Chargé Communication", initials: "OD" },
  { name: "Mariama Fall", role: "Chargée Activités", initials: "MF" },
];

const BdePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-primary-light">
        <div className="container-section text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Le Bureau des Étudiants
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez qui nous sommes, notre mission et comment nous travaillons 
            pour améliorer votre vie étudiante.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="role" className="card-elevated px-6 border-none">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-display font-semibold text-foreground">
                      Rôle et mission
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  <p className="mb-3">
                    Le BDE est l'organe représentatif des étudiants au sein de l'université. 
                    Notre mission principale est de :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Représenter les intérêts des étudiants auprès de l'administration</li>
                    <li>Organiser des activités culturelles, sportives et sociales</li>
                    <li>Favoriser l'entraide et la solidarité entre étudiants</li>
                    <li>Contribuer à l'insertion professionnelle des étudiants</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fonctionnement" className="card-elevated px-6 border-none">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-display font-semibold text-foreground">
                      Fonctionnement du mandat
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  <p className="mb-3">
                    Le mandat du BDE s'étend sur une année académique (2024-2025). 
                    Notre fonctionnement repose sur :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Des réunions hebdomadaires du bureau exécutif</li>
                    <li>Des assemblées générales trimestrielles ouvertes à tous</li>
                    <li>Une gestion transparente des ressources</li>
                    <li>Une collaboration active avec l'administration universitaire</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="organisation" className="card-elevated px-6 border-none">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-display font-semibold text-foreground">
                      Organisation interne
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  <p className="mb-3">
                    Le BDE est structuré en 8 pôles thématiques, chacun dirigé par 
                    un responsable et composé de membres bénévoles :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Pôle Gouvernance & Administration</li>
                    <li>Pôle Communication & Relations</li>
                    <li>Pôle Organisation & Mobilisation</li>
                    <li>Pôle Culture & Sport</li>
                    <li>Pôle Actions humanitaires</li>
                    <li>Pôle Entrepreneuriat & Employabilité</li>
                    <li>Pôle Langues & Identité</li>
                    <li>Pôle Numérique & Droits</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-secondary/50">
        <div className="container-section">
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h2 className="section-title">L'équipe dirigeante</h2>
            <p className="section-subtitle">Les visages de votre BDE</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="card-elevated p-4 text-center">
                <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold text-lg">
                  {member.initials}
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm">
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BdePage;

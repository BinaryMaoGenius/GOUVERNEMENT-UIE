import { Layout } from "@/components/layout/Layout";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Shield, 
  Target, 
  Users, 
  Megaphone, 
  Palette, 
  Heart, 
  Briefcase, 
  Languages, 
  Laptop,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  { name: "Président", role: "Président", initials: "P" },
  { name: "Vice-Président(e)", role: "Trésorier", initials: "VP" },
  { name: "Secrétaire Géniale", role: "Trésorier", initials: "SG" },
  { name: "Trésorier", role: "Generale", initials: "T" },
  { name: "Trésorier", role: "Rightnys", initials: "T" },
];

const poles = [
  { icon: Shield, name: "Gouvernance & Administration", description: "Frem poumdare a scanmbrix ume sarties, occasion et adjouinta u opratulaties." },
  { icon: Megaphone, name: "Communication & Relations", description: "Frem poun odmes pan asse bonoruas, asnier mou plains. Et melisen ot bureen." },
  { icon: Users, name: "Organisation & Mobilisation", description: "Frem poun romat sc bordent 2 maides, sctusative e confienn sam mone moncas." },
  { icon: Palette, name: "Culture & Sport", description: "Frem pounrodhui fac mega ofien cassies, emne umas e remutasant sat gacaidé husen." },
  { icon: Heart, name: "Actions humanitaires", description: "Frem poun valser tamcousllier casdes, per tabat catailles et I'amner hafay qu..." },
  { icon: Languages, name: "Langues & Identité", description: "Frem poumdission tenet e meter goudois net quoi se tralter sattan pariteatbas..." },
  { icon: Laptop, name: "Numérique & Droits", description: "Frem poumhatire tabit, e amiers memo mon pur tatat anestals, sumess lampen..." },
];

const BdePage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-4">
        <div className="container-section">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-display font-semibold text-lg text-foreground">Le BDE</span>
          </Link>

          {/* Accordion sections */}
          <Accordion type="single" collapsible defaultValue="role" className="space-y-3">
            <AccordionItem value="role" className="card-elevated px-4 border-none">
              <AccordionTrigger className="hover:no-underline py-3">
                <span className="font-display font-semibold text-foreground text-sm">
                  Notre rôle
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm text-muted-foreground">
                <p>
                  Frem ipeos be dose pertele ralizés des sertilice aismulsion maqisert nagamment mont, 
                  generatises quarteles «sprevidiehund u.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Organigramme */}
      <section className="py-6">
        <div className="container-section">
          <div className="flex flex-col items-center">
            {/* Président */}
            <div className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold text-sm mb-4">
              Président
            </div>
            
            {/* Ligne de connexion */}
            <div className="w-px h-4 bg-border"></div>
            <div className="w-48 h-px bg-border"></div>
            
            {/* Vice et Secrétaire */}
            <div className="flex gap-8 mt-4">
              <div className="text-center">
                <div className="border border-border px-4 py-2 rounded-lg text-sm font-medium">Vice-Président(e)</div>
                <div className="text-xs text-muted-foreground mt-1">Trésorier</div>
              </div>
              <div className="text-center">
                <div className="border border-border px-4 py-2 rounded-lg text-sm font-medium">Secrétaire Géniale</div>
                <div className="text-xs text-muted-foreground mt-1">Trésorier</div>
              </div>
            </div>

            {/* Trésoriers */}
            <div className="flex gap-8 mt-4">
              <div className="text-center">
                <div className="border border-border px-4 py-2 rounded-lg text-sm font-medium">Trésorier</div>
                <div className="text-xs text-muted-foreground mt-1">Generale</div>
              </div>
              <div className="text-center">
                <div className="border border-border px-4 py-2 rounded-lg text-sm font-medium">Trésorier</div>
                <div className="text-xs text-muted-foreground mt-1">Rightnys</div>
              </div>
            </div>

            <Link to="/bde" className="text-primary text-sm font-medium mt-6 hover:underline">
              Voir le Bureau complet →
            </Link>
          </div>
        </div>
      </section>

      {/* Notre équipe (pôles) */}
      <section className="py-6">
        <div className="container-section">
          <h2 className="font-display font-bold text-lg mb-4">Notre équipe</h2>
          
          <div className="space-y-3">
            {poles.map((pole) => (
              <Link 
                key={pole.name}
                to="/programme"
                className="card-elevated p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <pole.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-foreground">{pole.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{pole.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BdePage;

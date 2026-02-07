import { Target, Users, BookOpen, CheckCircle2 } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface ItemSection {
    title: string;
    items: string[];
    icon: any;
    color: string;
}

const missionsData: ItemSection[] = [
    {
        title: "Notre Mission",
        icon: Target,
        color: "text-primary",
        items: [
            "Contribuer à l'animation de la vie estudiantine au sein de l'UIE",
            "Favoriser le développement de l'autonomie, de l'initiative et du leadership",
            "Promouvoir les valeurs liées à l'engagement et au volontariat",
            "Sensibiliser les étudiants sur les enjeux qui les concernent",
            "Favoriser le dialogue entre les étudiants et l'administration",
        ]
    },
    {
        title: "L'Appel à l'Engagement",
        icon: Users,
        color: "text-accent",
        items: [
            "Participer activement à l'organisation d'évènements académiques, culturels et sportifs",
            "Acquérir des compétences en gestion, organisation et leadership",
            "Contribuer au rayonnement de l'UIE à travers des initiatives structurées",
            "Être un relais officiel entre les étudiants et l'administration",
        ]
    }
];

export function GouvernementMissions() {
    return (
        <Accordion type="single" collapsible defaultValue="Notre Mission" className="space-y-6">
            {missionsData.map((section) => (
                <AccordionItem
                    key={section.title}
                    value={section.title}
                    className="glass-dark px-6 border-white/5 rounded-3xl overflow-hidden hover:border-primary/20 transition-all"
                >
                    <AccordionTrigger className="hover:no-underline py-5 group">
                        <div className="flex items-center gap-3">
                            <section.icon className={`w-5 h-5 ${section.color} group-hover:scale-110 transition-transform`} />
                            <span className="font-display font-bold text-foreground text-lg italic">
                                {section.title}
                            </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                        <div className="space-y-4">
                            {section.items.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <CheckCircle2 className={`w-4 h-4 ${section.color} mt-0.5 flex-shrink-0`} />
                                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}

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
                    <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 italic text-primary">
                        "L'alternance et la continuité sont les piliers de notre gouvernance."
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

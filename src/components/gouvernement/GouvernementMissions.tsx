import { Target, Users, BookOpen, CheckCircle2, ChevronDown } from "lucide-react";
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
    bgColor: string;
}

const missionsData: ItemSection[] = [
    {
        title: "Notre Mission",
        icon: Target,
        color: "text-primary",
        bgColor: "bg-primary/5",
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
        bgColor: "bg-accent/5",
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
        <Accordion type="single" collapsible defaultValue="Notre Mission" className="space-y-4">
            {missionsData.map((section) => (
                <AccordionItem
                    key={section.title}
                    value={section.title}
                    className="bg-white border border-border rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                >
                    <AccordionTrigger className="hover:no-underline py-6 px-8 group text-left">
                        <div className="flex items-center gap-5">
                            <div className={`w-12 h-12 rounded-2xl ${section.bgColor} ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <section.icon className="w-6 h-6" />
                            </div>
                            <span className="font-display font-bold text-foreground text-xl italic leading-tight">
                                {section.title}
                            </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-8 px-8 px-8">
                        <div className="space-y-3">
                            {section.items.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-border transition-colors">
                                    <CheckCircle2 className={`w-5 h-5 ${section.color} mt-0.5 flex-shrink-0`} />
                                    <p className="text-base text-muted-foreground font-body leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}

            <AccordionItem value="fonctionnement" className="bg-white border border-border rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                <AccordionTrigger className="hover:no-underline py-6 px-8 group text-left">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <span className="font-display font-bold text-foreground text-xl italic leading-tight">
                            Principes Fondamentaux
                        </span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 px-8">
                    <div className="space-y-6 text-base text-muted-foreground font-body leading-relaxed p-2">
                        <p>
                            Le Gouvernement UIE est une institution apolitique et fraternelle, dédiée au bien-être et à l'épanouissement de chaque étudiant au sein du campus.
                        </p>
                        <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary italic text-primary font-medium text-lg bg-gradient-to-r from-primary/5 to-transparent">
                            "L'alternance démocratique et la continuité institutionnelle sont les piliers inaliénables de notre gouvernance."
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

import { Link } from "react-router-dom";
import { ArrowRight, HandHeart, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    icon: Users,
    title: "Rejoindre un pôle",
    description: "Intègre une équipe selon tes intérêts",
  },
  {
    icon: Lightbulb,
    title: "Proposer une idée",
    description: "Suggère une activité ou un projet",
  },
  {
    icon: HandHeart,
    title: "Devenir bénévole",
    description: "Aide lors de nos événements",
  },
];

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container-section">
        <div className="gradient-hero rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
            Envie de t'impliquer ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Le BDE a besoin de toi ! Que tu veuilles organiser des événements, 
            aider ponctuellement ou proposer des idées, il y a toujours une place pour toi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {actions.map((action) => (
              <div
                key={action.title}
                className="bg-primary-foreground/10 backdrop-blur rounded-xl p-4 text-left"
              >
                <action.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-primary-foreground mb-1">
                  {action.title}
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  {action.description}
                </p>
              </div>
            ))}
          </div>

          <Link to="/participer">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8">
              Participer maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

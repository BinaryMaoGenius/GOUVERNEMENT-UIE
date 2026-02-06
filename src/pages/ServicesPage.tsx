import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Car, Package, UtensilsCrossed, ArrowRight, Clock, MapPin } from "lucide-react";

const services = [
    {
        id: "moov",
        title: "Moov Transport",
        description: "Déplacez-vous facilement dans le campus avec nos voitures Moov",
        icon: Car,
        href: "/services/moov",
        color: "from-blue-500 to-cyan-500",
        features: ["Rapide et sûr", "Tarifs étudiants", "Disponible 24/7"],
    },
    {
        id: "teliman",
        title: "Telimani Livraison",
        description: "Faites livrer vos colis et documents partout dans l'université",
        icon: Package,
        href: "/services/telimani",
        color: "from-purple-500 to-pink-500",
        features: ["Livraison express", "Suivi en temps réel", "Prix abordables"],
    },
    {
        id: "restaurant",
        title: "Restaurants UIE",
        description: "Commandez vos repas préférés et faites-vous livrer",
        icon: UtensilsCrossed,
        href: "/services/restaurant",
        color: "from-orange-500 to-red-500",
        features: ["Large choix", "Livraison rapide", "Paiement flexible"],
    },
];

const ServicesPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 gradient-hero opacity-10"></div>
                <div className="container-section relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
                            Services UIE
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Profitez de nos services de transport, livraison et restauration
                            directement depuis votre campus
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="container-section">
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={service.id}
                                    to={service.href}
                                    className="group relative overflow-hidden rounded-3xl glass-dark border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                >
                                    {/* Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    <div className="relative p-8">
                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                                            Commander maintenant
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-16 glass-dark">
                <div className="container-section">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-display font-bold mb-8 text-center">
                            Comment ça marche ?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-primary">1</span>
                                </div>
                                <h3 className="font-bold mb-2">Choisissez votre service</h3>
                                <p className="text-sm text-muted-foreground">
                                    Sélectionnez Moov, Telimani ou Restaurant selon vos besoins
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-primary">2</span>
                                </div>
                                <h3 className="font-bold mb-2">Passez votre commande</h3>
                                <p className="text-sm text-muted-foreground">
                                    Remplissez le formulaire avec vos informations
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-primary">3</span>
                                </div>
                                <h3 className="font-bold mb-2">Recevez votre service</h3>
                                <p className="text-sm text-muted-foreground">
                                    Suivez votre commande en temps réel jusqu'à la livraison
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16">
                <div className="container-section">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                            <div className="text-muted-foreground">Commandes par jour</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold gradient-text mb-2">15min</div>
                            <div className="text-muted-foreground">Temps moyen</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold gradient-text mb-2">4.8/5</div>
                            <div className="text-muted-foreground">Satisfaction client</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                            <div className="text-muted-foreground">Disponibilité</div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServicesPage;

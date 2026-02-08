import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Car, Package, UtensilsCrossed, ArrowRight, Clock, MapPin, CheckCircle2 } from "lucide-react";

const services = [
    {
        id: "moov",
        title: "Moov Transport",
        description: "Déplacez-vous facilement dans le campus avec nos voitures Moov",
        icon: Car,
        href: "/services/moov",
        color: "from-blue-500 to-cyan-500",
        shadow: "shadow-blue-200",
        features: ["Rapide et sûr", "Tarifs étudiants", "Disponible 24/7"],
    },
    {
        id: "teliman",
        title: "Telimani Livraison",
        description: "Faites livrer vos colis et documents partout dans l'université",
        icon: Package,
        href: "/services/telimani",
        color: "from-purple-500 to-pink-500",
        shadow: "shadow-purple-200",
        features: ["Livraison express", "Suivi en temps réel", "Prix abordables"],
    },
    {
        id: "restaurant",
        title: "Restaurants UIE",
        description: "Commandez vos repas préférés et faites-vous livrer",
        icon: UtensilsCrossed,
        href: "/services/restaurant",
        color: "from-orange-500 to-red-500",
        shadow: "shadow-orange-200",
        features: ["Large choix", "Livraison rapide", "Paiement flexible"],
    },
];

const ServicesPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white opacity-50"></div>
                <div className="container-section relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Campus Connecté</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">
                            Services <span className="text-primary">UIE</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-body leading-relaxed">
                            Profitez de nos services de transport, livraison et restauration
                            directement depuis votre campus. Une expérience unifiée pour simplifier votre vie étudiante.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container-section">
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 opacity-80 cursor-not-allowed transition-all duration-500"
                                >
                                    <div className="relative p-10 h-full flex flex-col">
                                        {/* Badge A Venir */}
                                        <div className="absolute top-6 right-6">
                                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                                À venir
                                            </span>
                                        </div>

                                        {/* Icon (Grayscale) */}
                                        <div className={`w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center mb-8 shadow-inner`}>
                                            <Icon className="w-10 h-10 text-slate-400" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-8 line-clamp-2">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="mt-auto space-y-4 text-slate-400">
                                            <div className="space-y-3 mb-8">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 text-sm font-medium">
                                                        <div className={`w-2 h-2 rounded-full bg-slate-300`}></div>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA Disabled */}
                                            <div className="flex items-center gap-2 font-bold opacity-50">
                                                Bientôt disponible
                                                <Clock className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container-section">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold mb-4 text-slate-900">
                                Comment ça marche ?
                            </h2>
                            <p className="text-muted-foreground">Une expérience fluide en 3 étapes simples</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

                            <div className="text-center group">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 z-10 relative">
                                    <span className="text-3xl font-display font-bold text-primary">1</span>
                                </div>
                                <h3 className="font-bold text-lg mb-3">Choisissez votre service</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Sélectionnez Moov, Telimani ou Restaurant selon vos besoins immédiats.
                                </p>
                            </div>
                            <div className="text-center group">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 z-10 relative">
                                    <span className="text-3xl font-display font-bold text-primary">2</span>
                                </div>
                                <h3 className="font-bold text-lg mb-3">Passez votre commande</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Remplissez le formulaire intuitif avec vos informations en quelques secondes.
                                </p>
                            </div>
                            <div className="text-center group">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 z-10 relative">
                                    <span className="text-3xl font-display font-bold text-primary">3</span>
                                </div>
                                <h3 className="font-bold text-lg mb-3">Recevez votre service</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Suivez votre commande ou trajet en temps réel jusqu'à la finalisation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-white">
                <div className="container-section">
                    <div className="grid md:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="pt-8 md:pt-0">
                            <div className="text-5xl font-display font-bold text-slate-900 mb-2">500+</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Commandes / jour</div>
                        </div>
                        <div className="pt-8 md:pt-0 pl-0 md:pl-12">
                            <div className="text-5xl font-display font-bold text-slate-900 mb-2">15<span className="text-2xl">min</span></div>
                            <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Temps moyen</div>
                        </div>
                        <div className="pt-8 md:pt-0 pl-0 md:pl-12">
                            <div className="text-5xl font-display font-bold text-slate-900 mb-2">4.8</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Note moyenne</div>
                        </div>
                        <div className="pt-8 md:pt-0 pl-0 md:pl-12">
                            <div className="text-5xl font-display font-bold text-slate-900 mb-2">24/7</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Disponibilité</div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServicesPage;

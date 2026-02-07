import { Link } from "react-router-dom";
import { Car, Package, UtensilsCrossed, ArrowRight } from "lucide-react";

export function ServicesSection() {
    const services = [
        {
            title: "Moov Transport",
            description: "Des voitures Moov à votre service pour vous déplacer sur le campus.",
            icon: Car,
            href: "/services/moov",
            color: "bg-blue-500",
            iconColor: "text-blue-500",
            bg: "bg-blue-50",
            image: "/images/moov2.jpeg"
        },
        {
            title: "Telimani Livraison",
            description: "Besoin de livrer un colis ? Nos coursiers Telimani sont là.",
            icon: Package,
            href: "/services/telimani",
            color: "bg-purple-500",
            iconColor: "text-purple-500",
            bg: "bg-purple-50",
            image: "/images/telimani.jpeg"
        },
        {
            title: "Faites-vous livrer",
            description: "Commandez vos plats préférés et recevez-les via Telimani.",
            icon: UtensilsCrossed,
            href: "/services/restaurant",
            color: "bg-orange-500",
            iconColor: "text-orange-500",
            bg: "bg-orange-50",
            image: "/images/images.jpeg"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="container-section relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">
                        Services Connectés
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Simplifiez votre vie sur le campus avec nos services intégrés de transport, livraison et restauration.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={service.href}
                            className="group relative overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                <div className="absolute bottom-4 left-6 right-6">
                                    <h3 className="text-xl font-display font-bold text-white mb-2">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className={`w-12 h-12 rounded-2xl ${service.bg} flex items-center justify-center mb-4 shadow-sm`}>
                                    <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                                </div>
                                <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm group-hover:gap-4 transition-all">
                                    Accéder au service <ArrowRight className="w-4 h-4 text-primary" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

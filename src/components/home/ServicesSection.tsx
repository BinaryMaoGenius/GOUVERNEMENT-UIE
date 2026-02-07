import { Link } from "react-router-dom";
import { Car, Package, UtensilsCrossed, ArrowRight } from "lucide-react";

export function ServicesSection() {
    const services = [
        {
            title: "Moov Transport",
            description: "Des voitures Moov à votre service pour vous déplacer sur le campus.",
            icon: Car,
            href: "/services/moov",
            color: "blue",
            image: "/images/moov2.jpeg"
        },
        {
            title: "Telimani Livraison",
            description: "Besoin de livrer un colis ? Nos coursiers Telimani sont là.",
            icon: Package,
            href: "/services/telimani",
            color: "purple",
            image: "/images/telimani.jpeg"
        },
        {
            title: "Faites-vous livrer",
            description: "Commandez vos plats préférés et recevez-les via Telimani.",
            icon: UtensilsCrossed,
            href: "/services/restaurant",
            color: "orange",
            image: "/images/images.jpeg"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container-section relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
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
                            className="group relative overflow-hidden rounded-3xl glass-dark border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`} />
                                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${service.color === "blue" ? "bg-blue-500" :
                                            service.color === "purple" ? "bg-purple-500" :
                                                "bg-orange-500"
                                        }`}>
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white shadow-sm">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-4 transition-all">
                                    Accéder au service <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

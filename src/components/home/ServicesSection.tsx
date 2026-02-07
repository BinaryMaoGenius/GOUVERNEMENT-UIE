import { Link } from "react-router-dom";
import { Car, Package, UtensilsCrossed, ArrowRight } from "lucide-react";

export function ServicesSection() {
    const services = [
        {
            title: "Moov Transport",
            description: "Des voitures Moov à votre service pour vous déplacer sur le campus.",
            icon: Car,
            href: "/services/moov",
            color: "text-blue-600",
            bgColor: "bg-blue-100",
            image: "/images/moov2.jpeg"
        },
        {
            title: "Telimani Livraison",
            description: "Besoin de livrer un colis ? Nos coursiers Telimani sont là.",
            icon: Package,
            href: "/services/telimani",
            color: "text-indigo-600",
            bgColor: "bg-indigo-100",
            image: "/images/telimani.jpeg"
        },
        {
            title: "Faites-vous livrer",
            description: "Commandez vos plats préférés et recevez-les via Telimani.",
            icon: UtensilsCrossed,
            href: "/services/restaurant",
            color: "text-orange-600",
            bgColor: "bg-orange-100",
            image: "/images/images.jpeg"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container-section relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Vie Étudiante</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">
                        Services Connectés
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Simplifiez votre quotidien sur le campus avec nos solutions intégrées.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={service.href}
                            className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </div>

                            <div className="p-8">
                                <div className={`w-14 h-14 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 shadow-sm`}>
                                    <service.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                                    Découvrir
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

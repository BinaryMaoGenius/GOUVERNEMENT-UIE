import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Car, MapPin, Clock, DollarSign, User, Phone, ArrowRight, Shield, Star } from "lucide-react";
import { moovLocations, basePrice, basePricePerKm } from "@/data/moov-locations";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const MoovPage = () => {
    const { toast } = useToast();
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [estimatedPrice, setEstimatedPrice] = useState(0);
    const [loading, setLoading] = useState(false);

    const calculatePrice = (pickupId: string, destId: string) => {
        if (!pickupId || !destId || pickupId === destId) {
            setEstimatedPrice(0);
            return;
        }
        // Simulation simple du prix
        const distance = Math.abs(parseInt(pickupId.split("-")[1]) - parseInt(destId.split("-")[1]));
        const price = basePrice + distance * basePricePerKm;
        setEstimatedPrice(price);
    };

    const handlePickupChange = (value: string) => {
        setPickup(value);
        calculatePrice(value, destination);
    };

    const handleDestinationChange = (value: string) => {
        setDestination(value);
        calculatePrice(pickup, value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!pickup || !destination || !name || !phone) {
            toast({
                title: "Information manquante",
                description: "Veuillez remplir tous les champs du formulaire.",
                variant: "destructive",
            });
            setLoading(false);
            return;
        }

        if (pickup === destination) {
            toast({
                title: "Trajet invalide",
                description: "Le point de départ et la destination doivent être différents.",
                variant: "destructive",
            });
            setLoading(false);
            return;
        }

        // Simulation d'attente réseau
        setTimeout(() => {
            toast({
                title: "Commande confirmée !",
                description: `Un chauffeur arrive dans 5 min. Prix estimé: ${estimatedPrice} FCFA`,
            });
            setLoading(false);
            // Reset
            setPickup("");
            setDestination("");
            setName("");
            setPhone("");
            setEstimatedPrice(0);
        }, 1500);
    };

    return (
        <Layout>
            {/* Header Section - Modern White/Blue */}
            <section className="pt-24 pb-12 bg-white border-b border-gray-100">
                <div className="container-section">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">
                            <ArrowRight className="w-4 h-4 rotate-180" />
                            Retour
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-6">
                                <Car className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Mobilité Campus</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                                Moov <span className="text-primary italic">Transport</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Déplacez-vous en toute sérénité au sein de l'université. Un service rapide, sûr et économique pour tous les étudiants.
                            </p>
                        </div>

                        {/* Decorative Image Card */}
                        <div className="relative group w-full max-w-md hidden md:block">
                            <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] rotate-6 scale-95 transition-transform group-hover:rotate-3" />
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img src="/images/moov2.jpeg" alt="Moov Car" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                {/* Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                </div>

                <div className="container-section relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Booking Form - Card Elevated */}
                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-display font-bold">Réserver un trajet</h2>
                                        <p className="text-muted-foreground text-sm">Complétez les informations ci-dessous</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <Label htmlFor="pickup" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Départ</Label>
                                            <Select value={pickup} onValueChange={handlePickupChange}>
                                                <SelectTrigger id="pickup" className="h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all text-base">
                                                    <SelectValue placeholder="Choisir le point de départ" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {moovLocations.map((location: any) => (
                                                        <SelectItem key={location.id} value={location.id}>{location.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-3">
                                            <Label htmlFor="destination" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Arrivée</Label>
                                            <Select value={destination} onValueChange={handleDestinationChange}>
                                                <SelectTrigger id="destination" className="h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all text-base">
                                                    <SelectValue placeholder="Choisir la destination" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {moovLocations.map((location: any) => (
                                                        <SelectItem key={location.id} value={location.id}>{location.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    {estimatedPrice > 0 && (
                                        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-between animate-fade-in">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Estimation</span>
                                                <span className="text-3xl font-display font-bold text-primary">{estimatedPrice} FCFA</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-medium text-blue-700 bg-white px-4 py-2 rounded-xl shadow-sm">
                                                <Clock className="w-4 h-4" />
                                                ~ 5-10 min
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-4 pt-4 border-t border-slate-100">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Passager</Label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <Input
                                                        id="name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        placeholder="Votre nom complet"
                                                        className="pl-11 h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Contact</Label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <Input
                                                        id="phone"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        placeholder="+221 ..."
                                                        type="tel"
                                                        className="pl-11 h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={loading || estimatedPrice === 0}
                                        className="w-full h-16 rounded-xl bg-primary text-white font-bold text-lg hover:bg-blue-700 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1"
                                    >
                                        {loading ? "Recherche d'un chauffeur..." : "Commander mon Moov"}
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Info / Benefits Column */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-10 -mt-10" />
                                <h3 className="font-display font-bold text-xl mb-6">Pourquoi choisir Moov ?</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">Rapidité éclair</h4>
                                            <p className="text-sm text-muted-foreground">Un chauffeur disponible en moins de 5 minutes sur tout le campus.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                            <DollarSign className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">Tarif Étudiant</h4>
                                            <p className="text-sm text-muted-foreground">Des prix fixes et subventionnés, sans surprise à l'arrivée.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">Sécurité Totale</h4>
                                            <p className="text-sm text-muted-foreground">Tous nos chauffeurs sont certifiés et les trajets sont suivis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-[2rem] text-white shadow-xl shadow-primary/20">
                                <div className="flex items-center gap-3 mb-4">
                                    <Star className="w-6 h-6 fill-accent text-accent" />
                                    <span className="font-bold uppercase tracking-widest text-xs">Avis Étudiants</span>
                                </div>
                                <p className="text-lg font-display italic mb-4">"Moov a changé ma vie sur le campus. Je ne suis plus jamais en retard aux amphis le matin !"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium">Sarah M., L3 Droit</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MoovPage;

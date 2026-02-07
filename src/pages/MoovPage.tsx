import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Car, MapPin, Clock, DollarSign, User, Phone, ArrowRight, Loader2, Navigation, CheckCircle2 } from "lucide-react";
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

type RideStatus = "idle" | "searching" | "arriving" | "in-transit" | "arrived";

const MoovPage = () => {
    const { toast } = useToast();
    const [status, setStatus] = useState<RideStatus>("idle");
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [estimatedPrice, setEstimatedPrice] = useState(0);

    const calculatePrice = (pickupId: string, destId: string) => {
        if (!pickupId || !destId || pickupId === destId) {
            setEstimatedPrice(0);
            return;
        }
        // Simulation simple du prix (dans une vraie app, on utiliserait les coordonnées GPS)
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

        if (!pickup || !destination || !name || !phone) {
            toast({
                title: "Erreur",
                description: "Veuillez remplir tous les champs",
                variant: "destructive",
            });
            return;
        }

        if (pickup === destination) {
            toast({
                title: "Erreur",
                description: "Le point de départ et la destination doivent être différents",
                variant: "destructive",
            });
            return;
        }

        // Start ride simulation
        setStatus("searching");
        toast({
            title: "Recherche en cours",
            description: "Nous cherchons le chauffeur le plus proche...",
        });

        setTimeout(() => {
            setStatus("arriving");
            toast({
                title: "Chauffeur trouvé !",
                description: "Votre Moov arrive dans 2 minutes.",
            });
        }, 3000);

        setTimeout(() => {
            setStatus("in-transit");
            toast({
                title: "En route",
                description: "Trajet vers votre destination commencé.",
            });
        }, 8000);

        setTimeout(() => {
            setStatus("arrived");
            toast({
                title: "Arrivé à destination",
                description: "Merci d'avoir voyagé avec Moov UIE.",
            });
        }, 15000);
    };

    const resetRide = () => {
        setStatus("idle");
        setPickup("");
        setDestination("");
        setName("");
        setPhone("");
        setEstimatedPrice(0);
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-70"></div>
                <div className="container-section relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-200 relative overflow-hidden group">
                            <Car className="w-10 h-10 text-white relative z-10" />
                            <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
                            Moov Transport
                        </h1>
                        <p className="text-xl text-muted-foreground font-body">
                            Déplacez-vous facilement dans le campus avec nos voitures Moov
                        </p>
                    </div>
                </div>
            </section>

            {/* Booking Form / Tracking */}
            <section className="py-16">
                <div className="container-section">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl relative overflow-hidden">

                            {status === "idle" ? (
                                <>
                                    <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                            <Navigation className="w-5 h-5" />
                                        </div>
                                        Réserver un trajet
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                                        {/* Locations */}
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="pickup" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 ml-1">
                                                    <MapPin className="w-3 h-3" />
                                                    Point de départ
                                                </Label>
                                                <Select value={pickup} onValueChange={handlePickupChange}>
                                                    <SelectTrigger id="pickup" className="h-14 rounded-xl bg-blue-50/50 border-blue-100 focus:bg-white transition-all">
                                                        <SelectValue placeholder="Sélectionnez votre position" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {moovLocations.map((location) => (
                                                            <SelectItem key={location.id} value={location.id}>
                                                                {location.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="destination" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-600 ml-1">
                                                    <MapPin className="w-3 h-3" />
                                                    Destination
                                                </Label>
                                                <Select value={destination} onValueChange={handleDestinationChange}>
                                                    <SelectTrigger id="destination" className="h-14 rounded-xl bg-cyan-50/50 border-cyan-100 focus:bg-white transition-all">
                                                        <SelectValue placeholder="Où allez-vous ?" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {moovLocations.map((location) => (
                                                            <SelectItem key={location.id} value={location.id}>
                                                                {location.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        {/* Price Estimate */}
                                        {estimatedPrice > 0 && (
                                            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-between shadow-sm animate-scale-in">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm">
                                                        <DollarSign className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold uppercase text-muted-foreground">Prix estimé</p>
                                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                            <Clock className="w-3 h-3" />
                                                            <span>~ 5-10 min</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="text-2xl font-display font-bold text-blue-600">
                                                    {estimatedPrice} FCFA
                                                </span>
                                            </div>
                                        )}

                                        {/* Personal Info */}
                                        <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                                                    Nom complet
                                                </Label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <Input
                                                        id="name"
                                                        type="text"
                                                        className="pl-11 h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all"
                                                        placeholder="Votre nom"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                                                    Téléphone
                                                </Label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <Input
                                                        id="phone"
                                                        type="tel"
                                                        className="pl-11 h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all"
                                                        placeholder="+225..."
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            className="w-full h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg shadow-xl shadow-blue-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                            disabled={!pickup || !destination || !name || !phone || estimatedPrice === 0}
                                        >
                                            Réserver maintenant
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-8 space-y-12 animate-fade-in">
                                    <div className="relative inline-block">
                                        <div className={`w-40 h-40 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${status === "arrived"
                                                ? "border-green-500 bg-green-50"
                                                : "border-blue-200 bg-blue-50"
                                            }`}>
                                            {status === "searching" && <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />}
                                            {status === "arriving" && <Car className="w-16 h-16 text-blue-600 animate-pulse" />}
                                            {status === "in-transit" && <Navigation className="w-16 h-16 text-cyan-600 animate-bounce" />}
                                            {status === "arrived" && <CheckCircle2 className="w-16 h-16 text-green-500" />}
                                        </div>
                                        {/* Status Ripple */}
                                        {status !== "arrived" && (
                                            <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-20 animate-ping" />
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-display font-bold mb-4 tracking-tight">
                                            {status === "searching" && "Recherche d'un chauffeur..."}
                                            {status === "arriving" && "Votre chauffeur arrive"}
                                            {status === "in-transit" && "En route vers la destination"}
                                            {status === "arrived" && "Vous êtes arrivé !"}
                                        </h3>
                                        <div className="flex justify-center gap-2">
                                            {[1, 2, 3, 4].map((step) => {
                                                const isActive = (
                                                    (status === "searching" && step <= 1) ||
                                                    (status === "arriving" && step <= 2) ||
                                                    (status === "in-transit" && step <= 3) ||
                                                    (status === "arrived" && step <= 4)
                                                );
                                                return (
                                                    <div key={step} className={`h-2 w-12 rounded-full transition-all duration-700 ${isActive ? "bg-blue-600 shadow-lg shadow-blue-200" : "bg-slate-100"}`} />
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-left space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="w-3 h-3 rounded-full bg-blue-600 box-content border-4 border-blue-100" />
                                                <div className="w-0.5 h-10 bg-slate-200" />
                                                <div className="w-3 h-3 rounded-full bg-cyan-600 box-content border-4 border-cyan-100" />
                                            </div>
                                            <div className="flex-1 space-y-8">
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Départ</p>
                                                    <p className="font-medium text-foreground">
                                                        {moovLocations.find(l => l.id === pickup)?.name}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Arrivée</p>
                                                    <p className="font-medium text-foreground">
                                                        {moovLocations.find(l => l.id === destination)?.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                                <User className="w-4 h-4" />
                                                Passager: {name.split(' ')[0]}
                                            </div>
                                            <p className="font-bold text-lg text-blue-600">{estimatedPrice} FCFA</p>
                                        </div>
                                    </div>

                                    {status === "arrived" && (
                                        <Button
                                            onClick={resetRide}
                                            className="w-full h-16 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800"
                                        >
                                            Réserver un autre trajet
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-white">
                <div className="container-section">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center group">
                            <div className="w-20 h-20 rounded-[2rem] bg-blue-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Clock className="w-10 h-10 text-blue-600" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3">Rapide et efficace</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Arrivée en moins de 5 minutes partout dans le campus.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 rounded-[2rem] bg-cyan-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                <DollarSign className="w-10 h-10 text-cyan-600" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3">Tarifs étudiants</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Prix abordables spécialement conçus pour les étudiants.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 rounded-[2rem] bg-indigo-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Car className="w-10 h-10 text-indigo-600" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3">Sûr et confortable</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Chauffeurs vérifiés et véhicules bien entretenus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MoovPage;

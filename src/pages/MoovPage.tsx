import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Car, MapPin, Clock, DollarSign, User, Phone, ArrowRight } from "lucide-react";
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

const MoovPage = () => {
    const { toast } = useToast();
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

        // Simuler l'envoi de la commande
        toast({
            title: "Commande envoyée !",
            description: `Votre chauffeur Moov arrive dans 5 minutes. Prix estimé: ${estimatedPrice} FCFA`,
        });

        // Réinitialiser le formulaire
        setPickup("");
        setDestination("");
        setName("");
        setPhone("");
        setEstimatedPrice(0);
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/moov2.jpeg"
                        alt="Moov Transport"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20"></div>
                </div>
                <div className="container-section relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-xl relative overflow-hidden group">
                            <img
                                src="/images/moov2.jpeg"
                                alt="Moov"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-blue-500/10 transition-colors duration-500"></div>
                            <Car className="w-10 h-10 text-white relative z-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
                            Moov Transport
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Déplacez-vous facilement dans le campus avec nos voitures Moov
                        </p>
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="py-16">
                <div className="container-section">
                    <div className="max-w-2xl mx-auto">
                        <div className="glass-dark rounded-3xl p-8 border border-white/10">
                            <h2 className="text-2xl font-display font-bold mb-6">
                                Réserver un trajet
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Pickup Location */}
                                <div className="space-y-2">
                                    <Label htmlFor="pickup" className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-blue-500" />
                                        Point de départ
                                    </Label>
                                    <Select value={pickup} onValueChange={handlePickupChange}>
                                        <SelectTrigger id="pickup">
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
                                    {pickup && (
                                        <p className="text-sm text-muted-foreground">
                                            {moovLocations.find((l) => l.id === pickup)?.description}
                                        </p>
                                    )}
                                </div>

                                {/* Destination */}
                                <div className="space-y-2">
                                    <Label htmlFor="destination" className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-cyan-500" />
                                        Destination
                                    </Label>
                                    <Select value={destination} onValueChange={handleDestinationChange}>
                                        <SelectTrigger id="destination">
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
                                    {destination && (
                                        <p className="text-sm text-muted-foreground">
                                            {moovLocations.find((l) => l.id === destination)?.description}
                                        </p>
                                    )}
                                </div>

                                {/* Price Estimate */}
                                {estimatedPrice > 0 && (
                                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <DollarSign className="w-5 h-5 text-blue-500" />
                                                <span className="font-medium">Prix estimé</span>
                                            </div>
                                            <span className="text-2xl font-bold text-blue-500">
                                                {estimatedPrice} FCFA
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                                            <Clock className="w-4 h-4" />
                                            <span>Temps estimé: 5-10 minutes</span>
                                        </div>
                                    </div>
                                )}

                                {/* Personal Info */}
                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            Nom complet
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Votre nom"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            Téléphone
                                        </Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+225 XX XX XX XX XX"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-6 text-lg"
                                    disabled={!pickup || !destination || !name || !phone || estimatedPrice === 0}
                                >
                                    Réserver maintenant
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 glass-dark">
                <div className="container-section">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center">
                        Pourquoi choisir Moov ?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Rapide et efficace</h3>
                            <p className="text-sm text-muted-foreground">
                                Arrivée en moins de 5 minutes partout dans le campus
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Tarifs étudiants</h3>
                            <p className="text-sm text-muted-foreground">
                                Prix abordables spécialement conçus pour les étudiants
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                                <Car className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Sûr et confortable</h3>
                            <p className="text-sm text-muted-foreground">
                                Chauffeurs vérifiés et véhicules bien entretenus
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MoovPage;

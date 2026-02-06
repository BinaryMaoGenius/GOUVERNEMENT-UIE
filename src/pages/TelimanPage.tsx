import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Package, MapPin, User, Phone, FileText, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const TelimanPage = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        description: "",
        pickupAddress: "",
        deliveryAddress: "",
    });

    const estimatedPrice = 1000; // Prix de base pour Telimani

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.description || !formData.pickupAddress || !formData.deliveryAddress) {
            toast({
                title: "Erreur",
                description: "Veuillez remplir tous les champs",
                variant: "destructive",
            });
            return;
        }

        // Simuler l'envoi de la commande
        toast({
            title: "Commande Telimani envoyée !",
            description: `Votre livreur arrive dans 10 minutes pour récupérer votre colis. Prix: ${estimatedPrice} FCFA`,
        });

        // Réinitialiser le formulaire
        setFormData({
            name: "",
            phone: "",
            description: "",
            pickupAddress: "",
            deliveryAddress: "",
        });
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/telimani.jpeg"
                        alt="Telimani Livraison"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20"></div>
                </div>
                <div className="container-section relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-xl relative overflow-hidden group">
                            <img
                                src="/images/telimani.jpeg"
                                alt="Telimani"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/10 transition-colors duration-500"></div>
                            <Package className="w-10 h-10 text-white relative z-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
                            Telimani Livraison
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Faites livrer vos colis et documents partout dans l'université
                        </p>
                    </div>
                </div>
            </section>

            {/* Order Form */}
            <section className="py-16">
                <div className="container-section">
                    <div className="max-w-2xl mx-auto">
                        <div className="glass-dark rounded-3xl p-8 border border-white/10">
                            <h2 className="text-2xl font-display font-bold mb-6">
                                Commander une livraison
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Personal Info */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            Nom complet
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Votre nom"
                                            value={formData.name}
                                            onChange={handleChange}
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
                                            name="phone"
                                            type="tel"
                                            placeholder="+225 XX XX XX XX XX"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Package Description */}
                                <div className="space-y-2">
                                    <Label htmlFor="description" className="flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-purple-500" />
                                        Description du colis
                                    </Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        placeholder="Décrivez ce que vous souhaitez faire livrer (documents, nourriture, vêtements, etc.)"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={4}
                                        required
                                    />
                                </div>

                                {/* Addresses */}
                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <div className="space-y-2">
                                        <Label htmlFor="pickupAddress" className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-purple-500" />
                                            Adresse de récupération
                                        </Label>
                                        <Input
                                            id="pickupAddress"
                                            name="pickupAddress"
                                            type="text"
                                            placeholder="Où récupérer le colis ? (ex: Résidence A, Chambre 205)"
                                            value={formData.pickupAddress}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="deliveryAddress" className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-pink-500" />
                                            Adresse de livraison
                                        </Label>
                                        <Input
                                            id="deliveryAddress"
                                            name="deliveryAddress"
                                            type="text"
                                            placeholder="Où livrer le colis ? (ex: Bibliothèque, Bureau 12)"
                                            value={formData.deliveryAddress}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Price Info */}
                                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="w-5 h-5 text-purple-500" />
                                            <span className="font-medium">Prix de livraison</span>
                                        </div>
                                        <span className="text-2xl font-bold text-purple-500">
                                            {estimatedPrice} FCFA
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Livraison express en 15-20 minutes
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-6 text-lg"
                                >
                                    Commander la livraison
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
                        Pourquoi choisir Telimani ?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                                <Package className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Livraison express</h3>
                            <p className="text-sm text-muted-foreground">
                                Vos colis livrés en moins de 20 minutes
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Suivi en temps réel</h3>
                            <p className="text-sm text-muted-foreground">
                                Suivez votre colis à chaque étape
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Prix abordables</h3>
                            <p className="text-sm text-muted-foreground">
                                Tarifs étudiants très compétitifs
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TelimanPage;

import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Package, MapPin, User, Phone, FileText, DollarSign, ArrowRight, Bike, CheckCircle2, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type DeliveryStatus = "idle" | "searching" | "delivering" | "delivered";

const TelimanPage = () => {
    const { toast } = useToast();
    const [status, setStatus] = useState<DeliveryStatus>("idle");
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

        // Start delivery simulation
        setStatus("searching");
        toast({
            title: "Recherche en cours",
            description: "Nous contactons les livreurs à proximité...",
        });

        setTimeout(() => {
            setStatus("delivering");
            toast({
                title: "Livreur trouvé !",
                description: "Un Telimani est en route pour récupérer votre colis.",
            });
        }, 3000);

        setTimeout(() => {
            setStatus("delivered");
            toast({
                title: "Livraison terminée",
                description: "Votre colis a été livré avec succès.",
            });
        }, 8000);
    };

    const resetOrder = () => {
        setStatus("idle");
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
            <section className="relative py-16 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-70"></div>
                <div className="container-section relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-200 relative overflow-hidden group">
                            <Package className="w-10 h-10 text-white relative z-10" />
                            <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
                            Telimani Livraison
                        </h1>
                        <p className="text-xl text-muted-foreground font-body">
                            Faites livrer vos colis et documents partout dans l'université
                        </p>
                    </div>
                </div>
            </section>

            {/* Order Form / Tracking */}
            <section className="py-16">
                <div className="container-section">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl relative overflow-hidden">

                            {status === "idle" ? (
                                <>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                                            <Package className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-display font-bold">
                                            Commander une livraison
                                        </h2>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                                        {/* Personal Info */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                                                    Nom complet
                                                </Label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        className="pl-11 h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all"
                                                        placeholder="Votre nom"
                                                        value={formData.name}
                                                        onChange={handleChange}
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
                                                        name="phone"
                                                        type="tel"
                                                        className="pl-11 h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all"
                                                        placeholder="+225 XX XX XX XX XX"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Package Description */}
                                        <div className="space-y-2">
                                            <Label htmlFor="description" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                                                Description du colis
                                            </Label>
                                            <Textarea
                                                id="description"
                                                name="description"
                                                className="min-h-[100px] rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all resize-none p-4"
                                                placeholder="Décrivez ce que vous souhaitez faire livrer..."
                                                value={formData.description}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* Addresses */}
                                        <div className="space-y-4 pt-4 border-t border-slate-100">
                                            <div className="space-y-2">
                                                <Label htmlFor="pickupAddress" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-600 ml-1">
                                                    <MapPin className="w-3 h-3" />
                                                    Adresse de récupération
                                                </Label>
                                                <Input
                                                    id="pickupAddress"
                                                    name="pickupAddress"
                                                    className="h-12 rounded-xl bg-purple-50/50 border-purple-100 focus:bg-white transition-all"
                                                    placeholder="Où récupérer le colis ?"
                                                    value={formData.pickupAddress}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="deliveryAddress" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-600 ml-1">
                                                    <MapPin className="w-3 h-3" />
                                                    Adresse de livraison
                                                </Label>
                                                <Input
                                                    id="deliveryAddress"
                                                    name="deliveryAddress"
                                                    className="h-12 rounded-xl bg-pink-50/50 border-pink-100 focus:bg-white transition-all"
                                                    placeholder="Où livrer le colis ?"
                                                    value={formData.deliveryAddress}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Price Info */}
                                        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 flex items-center justify-between shadow-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 shadow-sm">
                                                    <DollarSign className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold uppercase text-muted-foreground">Coût estimé</p>
                                                    <p className="font-bold text-foreground">Livraison Express</p>
                                                </div>
                                            </div>
                                            <span className="text-2xl font-display font-bold text-purple-600">
                                                {estimatedPrice} FCFA
                                            </span>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg shadow-xl shadow-purple-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            Commander la livraison
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-8 space-y-12 animate-fade-in">
                                    <div className="relative inline-block">
                                        <div className={`w-40 h-40 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${status === "delivered"
                                                ? "border-green-500 bg-green-50"
                                                : "border-purple-200 bg-purple-50"
                                            }`}>
                                            {status === "searching" && <Loader2 className="w-16 h-16 text-purple-500 animate-spin" />}
                                            {status === "delivering" && <Bike className="w-16 h-16 text-purple-600 animate-bounce" />}
                                            {status === "delivered" && <CheckCircle2 className="w-16 h-16 text-green-500" />}
                                        </div>
                                        {/* Status Ripple */}
                                        {status !== "delivered" && (
                                            <div className="absolute inset-0 rounded-full border-4 border-purple-400 opacity-20 animate-ping" />
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-display font-bold mb-4 tracking-tight">
                                            {status === "searching" && "Recherche d'un livreur..."}
                                            {status === "delivering" && "Livraison en cours"}
                                            {status === "delivered" && "Colis livré !"}
                                        </h3>
                                        <div className="flex justify-center gap-2">
                                            {[1, 2, 3].map((step) => {
                                                const isActive = (
                                                    (status === "searching" && step <= 1) ||
                                                    (status === "delivering" && step <= 2) ||
                                                    (status === "delivered" && step <= 3)
                                                );
                                                return (
                                                    <div key={step} className={`h-2 w-20 rounded-full transition-all duration-700 ${isActive ? "bg-purple-600 shadow-lg shadow-purple-200" : "bg-slate-100"}`} />
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-left space-y-6">
                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                                            <div className="flex-1">
                                                <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">De</p>
                                                <p className="font-medium text-foreground">{formData.pickupAddress}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-5 h-5 text-pink-600 mt-1" />
                                            <div className="flex-1">
                                                <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Vers</p>
                                                <p className="font-medium text-foreground">{formData.deliveryAddress}</p>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                                <Clock className="w-4 h-4" />
                                                Estimated time: 15 min
                                            </div>
                                            <p className="font-bold text-lg text-purple-600">{estimatedPrice} FCFA</p>
                                        </div>
                                    </div>

                                    {status === "delivered" && (
                                        <Button
                                            onClick={resetOrder}
                                            className="w-full h-16 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800"
                                        >
                                            Effectuer une autre livraison
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
                            <div className="w-20 h-20 rounded-[2rem] bg-purple-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Package className="w-10 h-10 text-purple-600" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3">Livraison express</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Vos colis livrés en moins de 20 minutes partout sur le campus.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 rounded-[2rem] bg-pink-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                <MapPin className="w-10 h-10 text-pink-600" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3">Suivi en temps réel</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Gardez un œil sur votre colis à chaque étape du trajet.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 rounded-[2rem] bg-blue-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                <DollarSign className="w-10 h-10 text-blue-600" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3">Tarifs étudiants</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Des prix négociés spécialement pour la communauté UIE.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TelimanPage;

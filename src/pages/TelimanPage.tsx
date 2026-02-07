import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Package, MapPin, Truck, Phone, ArrowRight, User, Weight, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const TelimanPage = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1); // 1: Info Colis, 2: Info Livraison, 3: Confirmation

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(3);
            toast({
                title: "Livraison programmée !",
                description: "Un coursier Telimani va prendre en charge votre colis.",
            });
        }, 1500);
    };

    return (
        <Layout>
            {/* Header Section */}
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 mb-6">
                                <Package className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Logistique Campus</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                                Telimani <span className="text-primary italic">Livraison</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Envoyez et recevez vos colis en un clin d'œil. Un service de coursier interne fiable pour vos documents et paquets.
                            </p>
                        </div>

                        <div className="relative group w-full max-w-sm hidden md:block">
                            <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-3xl transform scale-90" />
                            <div className="relative bg-white rounded-[2rem] p-8 border border-indigo-100 shadow-xl shadow-indigo-100/50">
                                <Truck className="w-24 h-24 text-indigo-600 mx-auto mb-4" />
                                <div className="text-center font-bold text-indigo-900">Suivi en temps réel</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container-section">
                    <div className="max-w-4xl mx-auto">

                        {/* Stepper */}
                        <div className="flex items-center justify-center mb-12">
                            <div className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${step >= 1 ? "border-primary bg-primary text-white" : "border-muted text-muted-foreground"}`}>1</div>
                                <span className="text-sm font-medium hidden sm:block">Colis</span>
                            </div>
                            <div className={`w-16 h-0.5 mx-4 ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
                            <div className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${step >= 2 ? "border-primary bg-primary text-white" : "border-muted text-muted-foreground"}`}>2</div>
                                <span className="text-sm font-medium hidden sm:block">Livraison</span>
                            </div>
                            <div className={`w-16 h-0.5 mx-4 ${step >= 3 ? "bg-primary" : "bg-muted"}`} />
                            <div className={`flex items-center gap-2 ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${step >= 3 ? "border-primary bg-primary text-white" : "border-muted text-muted-foreground"}`}>3</div>
                                <span className="text-sm font-medium hidden sm:block">Confirmation</span>
                            </div>
                        </div>

                        {step === 3 ? (
                            <div className="bg-white rounded-[2.5rem] p-12 text-center shadow-lg border border-slate-100 animate-slide-up">
                                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500">
                                    <CheckCircle className="w-12 h-12" />
                                </div>
                                <h2 className="text-3xl font-display font-bold mb-4">Commande Confirmée !</h2>
                                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                    Votre demande de livraison a été prise en compte. Un coursier va vous contacter dans quelques instants.
                                </p>
                                <Button onClick={() => setStep(1)} className="bg-primary text-white rounded-xl px-8 py-6 font-bold hover:shadow-lg transition-all">
                                    Nouvelle Livraison
                                </Button>
                            </div>
                        ) : (
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in relative overflow-hidden">
                                {/* Decorative Top Line */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-indigo-500" />

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {step === 1 && (
                                        <div className="space-y-6 animate-fade-in">
                                            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                                <Package className="text-primary" /> Informations sur le Colis
                                            </h3>

                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Description</Label>
                                                    <Input placeholder="Ex: Documents administratifs, Clés..." className="h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all" />
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Poids (kg est.)</Label>
                                                        <div className="relative">
                                                            <Weight className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                            <Input type="number" placeholder="0.5" className="pl-11 h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Fragile ?</Label>
                                                        <Select>
                                                            <SelectTrigger className="h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all">
                                                                <SelectValue placeholder="Non" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="no">Non</SelectItem>
                                                                <SelectItem value="yes">Oui</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Instructions Spéciales</Label>
                                                    <Textarea placeholder="Code porte, étage, personne à contacter..." className="min-h-[100px] rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all p-4 resize-none" />
                                                </div>
                                            </div>

                                            <div className="pt-4 flex justify-end">
                                                <Button type="button" onClick={() => setStep(2)} className="bg-primary text-white rounded-xl h-14 px-8 font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
                                                    Suivant <ArrowRight className="w-5 h-5" />
                                                </Button>
                                            </div>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div className="space-y-6 animate-fade-in">
                                            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                                <MapPin className="text-primary" /> Détails de Livraison
                                            </h3>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                                    <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-wider mb-2">
                                                        <div className="w-2 h-2 rounded-full bg-primary" /> Départ (Ramassage)
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Input placeholder="Lieu de ramassage" className="bg-white border-slate-200 h-12 rounded-lg" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Input placeholder="Nom du contact" className="bg-white border-slate-200 h-12 rounded-lg" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Input placeholder="Téléphone" className="bg-white border-slate-200 h-12 rounded-lg" />
                                                    </div>
                                                </div>

                                                <div className="space-y-4 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                                                    <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-wider mb-2">
                                                        <div className="w-2 h-2 rounded-full bg-indigo-600" /> Arrivée (Destinataire)
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Input placeholder="Lieu de livraison" className="bg-white border-indigo-100 h-12 rounded-lg focus:ring-indigo-200" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Input placeholder="Nom du destinataire" className="bg-white border-indigo-100 h-12 rounded-lg focus:ring-indigo-200" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Input placeholder="Téléphone" className="bg-white border-indigo-100 h-12 rounded-lg focus:ring-indigo-200" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-8 flex justify-between">
                                                <Button type="button" variant="ghost" onClick={() => setStep(1)} className="text-muted-foreground font-bold hover:text-foreground">
                                                    Retour
                                                </Button>
                                                <Button type="submit" disabled={loading} className="bg-primary text-white rounded-xl h-14 px-8 font-bold hover:bg-blue-700 transition-all shadow-xl shadow-primary/20">
                                                    {loading ? "Traitement..." : "Confirmer la Livraison"}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TelimanPage;

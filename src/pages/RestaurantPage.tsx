import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { UtensilsCrossed, Star, Clock, ShoppingCart, Plus, Minus, Search, ArrowRight, ChefHat, Bike } from "lucide-react";
import { restaurants, Restaurant, MenuItem } from "@/data/restaurants-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const RestaurantPage = () => {
    const { toast } = useToast();
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [searchQuery, setSearchQuery] = useState("");
    const [cart, setCart] = useState<{ item: MenuItem; quantity: number }[]>([]);

    const categories = ["Tous", ...new Set(restaurants.flatMap((r) => r.categories))];

    const addToCart = (item: MenuItem) => {
        setCart((prevCart) => {
            const existing = prevCart.find((c) => c.item.id === item.id);
            if (existing) {
                return prevCart.map((c) =>
                    c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
                );
            }
            return [...prevCart, { item, quantity: 1 }];
        });
        toast({
            title: "Ajouté au panier",
            description: `${item.name} a été ajouté à votre commande.`,
        });
    };

    const removeFromCart = (itemId: string) => {
        setCart((prevCart) => {
            const existing = prevCart.find((c) => c.item.id === itemId);
            if (existing && existing.quantity > 1) {
                return prevCart.map((c) =>
                    c.item.id === itemId ? { ...c, quantity: c.quantity - 1 } : c
                );
            }
            return prevCart.filter((c) => c.item.id !== itemId);
        });
    };

    const totalAmount = cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);

    const filteredRestaurants = restaurants.filter((r) => {
        const matchesCategory = selectedCategory === "Tous" || r.categories.includes(selectedCategory);
        const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.menu.some(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const handleCheckout = () => {
        toast({
            title: "Commande confirmée !",
            description: `Votre commande de ${totalAmount} FCFA est en cours de préparation.`,
        });
        setCart([]);
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-70"></div>
                <div className="container-section relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-200 relative overflow-hidden group">
                            <ChefHat className="w-10 h-10 text-white relative z-10" />
                            <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
                            Restaurants UIE
                        </h1>
                        <p className="text-xl text-muted-foreground font-body">
                            Commandez vos repas préférés des restaurants du campus
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-6 sticky top-16 z-30 bg-white/80 backdrop-blur-xl border-y border-slate-200 shadow-sm">
                <div className="container-section">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                            {categories.map((cat) => (
                                <Button
                                    key={cat}
                                    variant={selectedCategory === cat ? "default" : "outline"}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`rounded-full whitespace-nowrap transition-all ${selectedCategory === cat
                                            ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-200"
                                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-72">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Rechercher un plat..."
                                className="pl-11 h-11 rounded-full bg-slate-50 border-slate-200 focus:bg-white transition-all shadow-inner"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-section py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Restaurants List */}
                    <div className="lg:col-span-2 space-y-12">
                        {filteredRestaurants.map((restaurant) => (
                            <div key={restaurant.id} className="space-y-6">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <div>
                                        <h2 className="text-2xl font-display font-bold text-slate-900 flex items-center gap-3">
                                            {restaurant.name}
                                            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 rounded-full px-3">
                                                Ouvert
                                            </Badge>
                                        </h2>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                <span className="font-bold text-slate-700">{restaurant.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{restaurant.deliveryTime}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Bike className="w-4 h-4 text-blue-500" />
                                                <span className="text-blue-600 font-medium">Frais 500 FCFA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {restaurant.menu
                                        .filter(item => selectedCategory === "Tous" || item.category === selectedCategory)
                                        .map((item) => (
                                            <div
                                                key={item.id}
                                                className="group flex gap-4 p-4 rounded-2xl bg-white border border-slate-100/100 shadow-sm hover:shadow-lg hover:border-orange-100 transition-all duration-300"
                                            >
                                                <div className="w-24 h-24 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
                                                    {item.image ? (
                                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    ) : (
                                                        <UtensilsCrossed className="w-8 h-8 text-slate-300" />
                                                    )}
                                                </div>
                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <h4 className="font-bold text-slate-900 leading-tight mb-1 group-hover:text-orange-600 transition-colors">{item.name}</h4>
                                                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-end justify-between mt-2">
                                                        <span className="font-display font-bold text-lg text-orange-600">
                                                            {item.price} <span className="text-xs font-medium text-muted-foreground">FCFA</span>
                                                        </span>
                                                        <Button
                                                            size="icon"
                                                            variant="secondary"
                                                            className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 hover:bg-orange-600 hover:text-white transition-colors shadow-sm"
                                                            onClick={() => addToCart(item)}
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Checkout / Cart Side Panel */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-40">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                                        <ShoppingCart className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-slate-900">Votre Panier</h3>
                                </div>
                                <span className="text-xs font-bold bg-slate-100 px-2.5 py-1 rounded-full text-slate-600">
                                    {cart.reduce((acc, item) => acc + item.quantity, 0)} articles
                                </span>
                            </div>

                            {cart.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-slate-200">
                                        <UtensilsCrossed className="w-8 h-8 text-slate-300" />
                                    </div>
                                    <p className="font-medium text-slate-900 mb-1">Votre panier est vide</p>
                                    <p className="text-sm text-muted-foreground">Ajoutez de délicieux plats pour commencer</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                                        {cart.map((c) => (
                                            <div key={c.item.id} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{c.item.name}</h4>
                                                    <p className="text-xs text-muted-foreground">
                                                        {c.item.price * c.quantity} FCFA
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm border border-slate-100">
                                                    <button
                                                        className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-600 transition-colors"
                                                        onClick={() => removeFromCart(c.item.id)}
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-sm font-bold w-4 text-center text-slate-900">
                                                        {c.quantity}
                                                    </span>
                                                    <button
                                                        className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-600 transition-colors"
                                                        onClick={() => addToCart(c.item)}
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-slate-100 space-y-3">
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>Sous-total</span>
                                            <span className="font-medium text-slate-900">{totalAmount} FCFA</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>Frais de livraison</span>
                                            <span className="font-medium text-slate-900">500 FCFA</span>
                                        </div>
                                        <div className="flex justify-between items-end pt-2">
                                            <span className="text-base font-bold text-slate-900">Total</span>
                                            <span className="text-2xl font-display font-bold text-orange-600">{totalAmount + 500} FCFA</span>
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-xl shadow-xl shadow-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                        onClick={handleCheckout}
                                    >
                                        Confirmer la commande
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RestaurantPage;

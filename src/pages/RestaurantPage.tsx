import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { UtensilsCrossed, Star, Clock, ShoppingCart, Plus, Minus, Search, ArrowRight } from "lucide-react";
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
            <section className="relative py-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-10"></div>
                <div className="container-section relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-6">
                            <UtensilsCrossed className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 gradient-text">
                            Restaurants UIE
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Commandez vos repas préférés des restaurants du campus
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-8 bg-black/20 sticky top-16 z-30 backdrop-blur-md border-b border-white/5">
                <div className="container-section">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                            {categories.map((cat) => (
                                <Button
                                    key={cat}
                                    variant={selectedCategory === cat ? "default" : "outline"}
                                    onClick={() => setSelectedCategory(cat)}
                                    className="rounded-full whitespace-nowrap"
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Rechercher un plat..."
                                className="pl-10 rounded-full"
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
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-display font-bold">{restaurant.name}</h2>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                <span>{restaurant.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{restaurant.deliveryTime}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                                    Min. {restaurant.minimumOrder} FCFA
                                                </Badge>
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
                                                className="group flex gap-4 p-4 rounded-2xl glass-dark border border-white/5 hover:border-white/10 transition-all duration-300"
                                            >
                                                <div className="w-20 h-20 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden">
                                                    {item.image ? (
                                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <UtensilsCrossed className="w-8 h-8 text-muted-foreground/20" />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold mb-1">{item.name}</h4>
                                                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                                                        {item.description}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-display font-bold text-primary">
                                                            {item.price} FCFA
                                                        </span>
                                                        <Button
                                                            size="icon"
                                                            variant="secondary"
                                                            className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white"
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
                        <div className="glass-dark rounded-3xl p-6 border border-white/10 sticky top-40">
                            <div className="flex items-center gap-3 mb-6">
                                <ShoppingCart className="w-6 h-6 text-primary" />
                                <h3 className="text-xl font-display font-bold">Votre Panier</h3>
                            </div>

                            {cart.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                                        <ShoppingCart className="w-8 h-8 text-muted-foreground/30" />
                                    </div>
                                    <p className="text-muted-foreground">Votre panier est vide</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                                        {cart.map((c) => (
                                            <div key={c.item.id} className="flex items-center justify-between gap-4">
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-medium">{c.item.name}</h4>
                                                    <p className="text-xs text-muted-foreground">
                                                        {c.item.price * c.quantity} FCFA
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        size="icon"
                                                        variant="outline"
                                                        className="w-7 h-7 rounded-md border-white/10 hover:bg-white/5"
                                                        onClick={() => removeFromCart(c.item.id)}
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </Button>
                                                    <span className="text-sm font-bold min-w-[1.5rem] text-center">
                                                        {c.quantity}
                                                    </span>
                                                    <Button
                                                        size="icon"
                                                        variant="outline"
                                                        className="w-7 h-7 rounded-md border-white/10 hover:bg-white/5"
                                                        onClick={() => addToCart(c.item)}
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-white/10 space-y-2">
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>Sous-total</span>
                                            <span>{totalAmount} FCFA</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>Frais de livraison</span>
                                            <span>500 FCFA</span>
                                        </div>
                                        <div className="flex justify-between text-lg font-display font-bold pt-2">
                                            <span>Total</span>
                                            <span className="text-primary">{totalAmount + 500} FCFA</span>
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-2xl"
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

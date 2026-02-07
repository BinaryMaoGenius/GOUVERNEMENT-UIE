import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Search, MapPin, Star, Clock, ShoppingBag, Plus, Minus, UtensilsCrossed, ArrowRight, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { restaurants } from "@/data/restaurants-data";

const RestaurantPage = () => {
    const { toast } = useToast();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [cart, setCart] = useState<Array<{ id: number; name: string; price: number; quantity: number; image: string }>>([]);

    const categories = ["Tous", "Fast Food", "Africain", "Asiatique", "Snack", "Boissons"];

    const addToCart = (item: any) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...item, quantity: 1 }];
        });
        toast({
            title: "Ajouté au panier",
            description: `${item.name} a été ajouté.`,
        });
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(i => i.id !== id));
    };

    const updateQuantity = (id: number, delta: number) => {
        setCart(prev => prev.map(i => {
            if (i.id === id) {
                return { ...i, quantity: Math.max(1, i.quantity + delta) };
            }
            return i;
        }));
    };

    const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const filteredRestaurants = restaurants.filter(r =>
        (selectedCategory === "Tous" || r.category === selectedCategory) &&
        (r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.menu.some(m => m.name.toLowerCase().includes(searchQuery.toLowerCase())))
    );

    return (
        <Layout>
            {/* Header */}
            <section className="pt-24 pb-8 bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="container-section">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                        <div>
                            <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-3">
                                <UtensilsCrossed className="text-primary w-8 h-8" />
                                Campus <span className="text-primary italic">Eats</span>
                            </h1>
                            <p className="text-muted-foreground text-sm mt-1">Commandez et faites-vous livrer sur le campus.</p>
                        </div>

                        {/* Search & Cart Actions */}
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="relative flex-1 md:w-80">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    placeholder="Rechercher un plat, un resto..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 h-12 bg-slate-50 border-slate-200 rounded-xl focus:bg-white transition-all"
                                />
                            </div>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button className="h-12 w-12 rounded-xl bg-orange-50 text-orange-600 border border-orange-100 hover:bg-orange-100 relative">
                                        <ShoppingBag className="w-5 h-5" />
                                        {cartCount > 0 && (
                                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-bounce">
                                                {cartCount}
                                            </span>
                                        )}
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
                                    <SheetHeader className="border-b pb-4 mb-4">
                                        <SheetTitle className="font-display font-bold text-2xl flex items-center gap-2">
                                            <ShoppingBag className="text-orange-600" /> Votre Panier
                                        </SheetTitle>
                                    </SheetHeader>

                                    <div className="flex-1 overflow-y-auto pr-2">
                                        {cart.length === 0 ? (
                                            <div className="text-center py-20 opacity-50">
                                                <UtensilsCrossed className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                                                <p>Votre panier est vide</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                {cart.map(item => (
                                                    <div key={item.id} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-bold text-sm mb-1 line-clamp-1">{item.name}</h4>
                                                            <p className="text-orange-600 font-bold text-sm">{item.price} FCFA</p>
                                                            <div className="flex items-center gap-3 mt-2">
                                                                <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-primary disabled:opacity-50">
                                                                    <Minus className="w-3 h-3" />
                                                                </button>
                                                                <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                                <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-primary">
                                                                    <Plus className="w-3 h-3" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-500 self-start">
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <SheetFooter className="border-t pt-4 mt-auto">
                                        <div className="w-full space-y-4">
                                            <div className="flex justify-between items-center text-lg font-bold">
                                                <span>Total</span>
                                                <span className="text-primary">{cartTotal} FCFA</span>
                                            </div>
                                            <Button disabled={cart.length === 0} className="w-full h-14 rounded-xl bg-primary text-white font-bold text-lg hover:bg-blue-700 shadow-xl shadow-primary/20">
                                                Commander via Telimani
                                                <ArrowRight className="w-5 h-5 ml-2" />
                                            </Button>
                                        </div>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>

                    {/* Categories Filter */}
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat
                                        ? "bg-primary text-white shadow-md shadow-primary/20"
                                        : "bg-slate-50 text-muted-foreground border border-slate-100 hover:bg-white hover:border-slate-300"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Restaurants Grid */}
            <section className="py-12 bg-slate-50 min-h-screen">
                <div className="container-section">
                    <div className="space-y-12">
                        {filteredRestaurants.map((restaurant) => (
                            <div key={restaurant.id} className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-sm overflow-hidden">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="text-2xl font-display font-bold flex items-center gap-2">
                                            {restaurant.name}
                                            <div className="flex text-xs font-bold bg-yellow-400/10 text-yellow-600 px-2 py-0.5 rounded-md">
                                                <Star className="w-3 h-3 mr-1 fill-yellow-500 text-yellow-500" />
                                                {restaurant.rating}
                                            </div>
                                        </h2>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {restaurant.deliveryTime}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                            <span>Min. {restaurant.minimumOrder} FCFA</span>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="hidden sm:flex border-slate-200 text-slate-500">
                                        {restaurant.category}
                                    </Badge>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {restaurant.menu.map((item) => (
                                        <div key={item.id} className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-slate-100 transition-colors border border-slate-100">
                                            <div className="aspect-[4/3] overflow-hidden relative">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                <button
                                                    onClick={() => addToCart(item)}
                                                    className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                                                >
                                                    <Plus className="w-5 h-5" />
                                                </button>
                                            </div>
                                            <div className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-bold text-foreground text-sm line-clamp-1">{item.name}</h3>
                                                    <span className="font-bold text-orange-600 text-sm whitespace-nowrap">{item.price} F</span>
                                                </div>
                                                <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default RestaurantPage;

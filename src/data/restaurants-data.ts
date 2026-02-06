export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image?: string;
    available: boolean;
}

export interface Restaurant {
    id: string;
    name: string;
    description: string;
    image?: string;
    categories: string[];
    menu: MenuItem[];
    rating: number;
    deliveryTime: string;
    minimumOrder: number;
}

export const restaurants: Restaurant[] = [
    {
        id: "resto-1",
        name: "Cafétéria Principale UIE",
        description: "La cafétéria principale de l'université avec une grande variété de plats locaux et internationaux",
        rating: 4.5,
        deliveryTime: "15-25 min",
        minimumOrder: 1000,
        categories: ["Plats locaux", "Fast Food", "Boissons"],
        menu: [
            {
                id: "item-1",
                name: "Riz Sauce Arachide",
                description: "Riz accompagné de sauce arachide avec viande",
                price: 1500,
                category: "Plats locaux",
                available: true,
            },
            {
                id: "item-2",
                name: "Attiéké Poisson",
                description: "Attiéké avec poisson braisé et sauce tomate",
                price: 2000,
                category: "Plats locaux",
                available: true,
            },
            {
                id: "item-3",
                name: "Foutou Sauce Graine",
                description: "Foutou d'igname avec sauce graine",
                price: 1800,
                category: "Plats locaux",
                available: true,
            },
            {
                id: "item-4",
                name: "Burger Complet",
                description: "Burger avec frites et boisson",
                price: 2500,
                category: "Fast Food",
                available: true,
            },
            {
                id: "item-5",
                name: "Chawarma",
                description: "Chawarma poulet ou viande",
                price: 1500,
                category: "Fast Food",
                available: true,
            },
            {
                id: "item-6",
                name: "Jus Naturel",
                description: "Jus de fruits frais (bissap, gingembre, orange)",
                price: 500,
                category: "Boissons",
                available: true,
            },
        ],
    },
    {
        id: "resto-2",
        name: "Maquis Le Palmier",
        description: "Spécialités grillades et plats africains",
        rating: 4.7,
        deliveryTime: "20-30 min",
        minimumOrder: 2000,
        categories: ["Grillades", "Plats locaux"],
        menu: [
            {
                id: "item-7",
                name: "Poulet Braisé",
                description: "Demi poulet braisé avec attiéké ou alloco",
                price: 3000,
                category: "Grillades",
                available: true,
            },
            {
                id: "item-8",
                name: "Poisson Braisé",
                description: "Poisson braisé avec accompagnement au choix",
                price: 3500,
                category: "Grillades",
                available: true,
            },
            {
                id: "item-9",
                name: "Alloco Complet",
                description: "Alloco avec œuf, poisson et piment",
                price: 1500,
                category: "Plats locaux",
                available: true,
            },
        ],
    },
    {
        id: "resto-3",
        name: "Snack Express",
        description: "Sandwichs, pâtisseries et boissons pour un repas rapide",
        rating: 4.2,
        deliveryTime: "10-15 min",
        minimumOrder: 500,
        categories: ["Sandwichs", "Pâtisseries", "Boissons"],
        menu: [
            {
                id: "item-10",
                name: "Sandwich Jambon Fromage",
                description: "Pain baguette avec jambon, fromage et crudités",
                price: 1000,
                category: "Sandwichs",
                available: true,
            },
            {
                id: "item-11",
                name: "Croissant",
                description: "Croissant au beurre frais",
                price: 500,
                category: "Pâtisseries",
                available: true,
            },
            {
                id: "item-12",
                name: "Pain au Chocolat",
                description: "Pain au chocolat chaud",
                price: 600,
                category: "Pâtisseries",
                available: true,
            },
            {
                id: "item-13",
                name: "Café Expresso",
                description: "Café expresso ou cappuccino",
                price: 800,
                category: "Boissons",
                available: true,
            },
        ],
    },
];

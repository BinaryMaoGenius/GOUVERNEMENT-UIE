export interface Location {
    id: string;
    name: string;
    description: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}

export const moovLocations: Location[] = [
    {
        id: "loc-1",
        name: "Entrée Principale UIE",
        description: "Porte principale de l'université",
    },
    {
        id: "loc-2",
        name: "Bibliothèque Centrale",
        description: "Devant la bibliothèque universitaire",
    },
    {
        id: "loc-3",
        name: "Résidence Universitaire A",
        description: "Cité universitaire - Bloc A",
    },
    {
        id: "loc-4",
        name: "Résidence Universitaire B",
        description: "Cité universitaire - Bloc B",
    },
    {
        id: "loc-5",
        name: "Amphithéâtre Principal",
        description: "Grand amphithéâtre 500 places",
    },
    {
        id: "loc-6",
        name: "Cafétéria Principale",
        description: "Restaurant universitaire",
    },
    {
        id: "loc-7",
        name: "Terrain de Sport",
        description: "Complexe sportif UIE",
    },
    {
        id: "loc-8",
        name: "Faculté des Sciences",
        description: "Bâtiment des sciences",
    },
    {
        id: "loc-9",
        name: "Faculté de Droit",
        description: "Bâtiment de droit et sciences politiques",
    },
    {
        id: "loc-10",
        name: "Faculté d'Économie",
        description: "Bâtiment des sciences économiques",
    },
    {
        id: "loc-11",
        name: "Parking Principal",
        description: "Grand parking visiteurs",
    },
    {
        id: "loc-12",
        name: "Infirmerie",
        description: "Centre de santé universitaire",
    },
];

export const basePricePerKm = 200; // Prix de base par kilomètre
export const basePrice = 500; // Prix de base minimum

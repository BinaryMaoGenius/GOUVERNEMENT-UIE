export interface SearchItem {
    id: string;
    title: string;
    description: string;
    url: string;
    category: "page" | "activity" | "member" | "pole";
    keywords: string[];
}

export const searchIndex: SearchItem[] = [
    // Pages principales
    {
        id: "home",
        title: "Accueil",
        description: "Page d'accueil du Gouvernement UIE",
        url: "/",
        category: "page",
        keywords: ["accueil", "home", "principal", "gouvernement", "uie"],
    },
    {
        id: "gouvernement",
        title: "Gouvernement",
        description: "Structure et membres du Gouvernement UIE",
        url: "/gouvernement",
        category: "page",
        keywords: ["gouvernement", "structure", "organigramme", "membres", "bureau", "exécutif"],
    },
    {
        id: "activites",
        title: "Activités",
        description: "Événements et activités du campus",
        url: "/activites",
        category: "page",
        keywords: ["activités", "événements", "events", "calendrier", "programme"],
    },
    {
        id: "programme",
        title: "Programme",
        description: "Programme et objectifs du mandat",
        url: "/programme",
        category: "page",
        keywords: ["programme", "objectifs", "mandat", "vision", "projets"],
    },
    {
        id: "participer",
        title: "Participer",
        description: "Rejoindre le Gouvernement UIE",
        url: "/participer",
        category: "page",
        keywords: ["participer", "candidater", "rejoindre", "postuler", "bénévole", "engagement"],
    },

    // Membres du Bureau Exécutif
    {
        id: "presidente",
        title: "Madina Ali Touré - Présidente",
        description: "Présidente du Gouvernement UIE",
        url: "/gouvernement",
        category: "member",
        keywords: ["présidente", "madina", "ali", "touré", "chef", "leader"],
    },
    {
        id: "vice-president",
        title: "Mohamed Sogodogo - Vice-Président",
        description: "Vice-Président du Gouvernement UIE",
        url: "/gouvernement",
        category: "member",
        keywords: ["vice-président", "mohamed", "sogodogo", "adjoint"],
    },
    {
        id: "secretaire-generale",
        title: "Sidiki - Secrétaire Général",
        description: "Secrétaire Général du Gouvernement UIE",
        url: "/gouvernement",
        category: "member",
        keywords: ["secrétaire", "général", "sidiki"],
    },
    {
        id: "secretaire-general-adjoint",
        title: "Bintou Toumagnon - Secrétaire Générale Adjointe",
        description: "Secrétaire Générale Adjointe",
        url: "/gouvernement",
        category: "member",
        keywords: ["secrétaire", "générale", "adjointe", "bintou", "toumagnon"],
    },
    {
        id: "tresoriere",
        title: "Fatou Timbiné - Trésorière",
        description: "Trésorière du Gouvernement UIE",
        url: "/gouvernement",
        category: "member",
        keywords: ["trésorière", "fatou", "timbiné", "finances", "budget"],
    },
    {
        id: "tresorier-adjoint",
        title: "Mah Mallé - Trésorier Adjoint",
        description: "Trésorier Adjoint",
        url: "/gouvernement",
        category: "member",
        keywords: ["trésorier", "adjoint", "mah", "mallé", "finances"],
    },

    // Pôles
    {
        id: "pole-communication",
        title: "Pôle Communication",
        description: "Communication et Relations - Djénèba Sidibé",
        url: "/gouvernement",
        category: "pole",
        keywords: ["communication", "relations", "médias", "réseaux sociaux", "djénèba", "sidibé"],
    },
    {
        id: "pole-organisation",
        title: "Pôle Organisation",
        description: "Organisation et Mobilisation - Bakary Keïta",
        url: "/gouvernement",
        category: "pole",
        keywords: ["organisation", "mobilisation", "logistique", "bakary", "keïta"],
    },
    {
        id: "pole-culture-sport",
        title: "Pôle Culture & Sport",
        description: "Culture et Sport - Mariam Doumbia",
        url: "/gouvernement",
        category: "pole",
        keywords: ["culture", "sport", "activités", "culturelles", "sportives", "mariam", "doumbia"],
    },
    {
        id: "pole-humanitaire",
        title: "Pôle Humanitaire",
        description: "Actions Humanitaires - Kadidia Sylla",
        url: "/gouvernement",
        category: "pole",
        keywords: ["humanitaire", "solidarité", "actions", "social", "kadidia", "sylla"],
    },
    {
        id: "pole-entrepreneuriat",
        title: "Pôle Entrepreneuriat",
        description: "Entrepreneuriat - Seydou Kouyaté",
        url: "/gouvernement",
        category: "pole",
        keywords: ["entrepreneuriat", "entreprise", "business", "innovation", "seydou", "kouyaté"],
    },
    {
        id: "pole-langues",
        title: "Pôle Langues",
        description: "Promotion des Langues - Hawa Touré",
        url: "/gouvernement",
        category: "pole",
        keywords: ["langues", "linguistique", "multilinguisme", "hawa", "touré"],
    },
    {
        id: "pole-informatique",
        title: "Pôle Informatique",
        description: "Informatique - Drissa Keïta",
        url: "/gouvernement",
        category: "pole",
        keywords: ["informatique", "technologie", "digital", "numérique", "drissa", "keïta"],
    },
    {
        id: "pole-droit",
        title: "Pôle Droit & Éthique",
        description: "Droit et Éthique - Boubacar Sow",
        url: "/gouvernement",
        category: "pole",
        keywords: ["droit", "éthique", "juridique", "justice", "boubacar", "sow"],
    },

    // Activités (exemples)
    {
        id: "journee-integration",
        title: "Journée d'Intégration",
        description: "Accueil des nouveaux étudiants",
        url: "/activites",
        category: "activity",
        keywords: ["intégration", "accueil", "nouveaux", "étudiants", "rentrée"],
    },
    {
        id: "tournoi-football",
        title: "Tournoi de Football",
        description: "Compétition sportive inter-promotions",
        url: "/activites",
        category: "activity",
        keywords: ["football", "tournoi", "sport", "compétition"],
    },
    {
        id: "soiree-culturelle",
        title: "Soirée Culturelle",
        description: "Célébration de la diversité culturelle",
        url: "/activites",
        category: "activity",
        keywords: ["culture", "soirée", "diversité", "spectacle"],
    },
    {
        id: "mur-idees",
        title: "Mur des Idées",
        description: "Partagez vos idées et suggestions",
        url: "/#mur-des-idees",
        category: "activity",
        keywords: ["idées", "suggestions", "propositions", "mur", "participation"],
    },
];

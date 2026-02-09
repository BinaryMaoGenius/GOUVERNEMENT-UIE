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
        title: "MADINA ALI TOURÉ - Présidente",
        description: "Présidente du Gouvernement UIE",
        url: "/gouvernement",
        category: "member",
        keywords: ["présidente", "madina", "ali", "touré", "chef", "leader"],
    },
    {
        id: "vice-president",
        title: "MOHAMED SOGODOGO - Vice-Président",
        description: "Vice-Président du Gouvernement UIE",
        url: "/gouvernement",
        category: "member",
        keywords: ["vice-président", "mohamed", "sogodogo", "adjoint"],
    },
    {
        id: "secretaire-generale",
        title: "SIDIKI TRAORE - Secrétaire Général",
        description: "Secrétaire Général du Gouvernement UIE",
        url: "/gouvernement",
        category: "member",
        keywords: ["secrétaire", "général", "sidiki", "traore"],
    },
    {
        id: "secretaire-general-adjoint",
        title: "BINTOU TOUMAGNON - Secrétaire Générale Adjointe",
        description: "Secrétaire Générale Adjointe",
        url: "/gouvernement",
        category: "member",
        keywords: ["secrétaire", "générale", "adjointe", "bintou", "toumagnon"],
    },
    {
        id: "tresoriere",
        title: "FATOU TIMBINÉ - Trésorière",
        description: "Trésorière du Gouvernement UIE",
        url: "/gouvernement",
        category: "member",
        keywords: ["trésorière", "fatou", "timbiné", "finances", "budget"],
    },
    {
        id: "tresorier-adjoint",
        title: "MAH MALLÉ - Trésorier Adjoint",
        description: "Trésorier Adjoint",
        url: "/gouvernement",
        category: "member",
        keywords: ["trésorier", "adjoint", "mah", "mallé", "finances"],
    },

    // Pôles (Postes à pourvoir)
    {
        id: "pole-com",
        title: "Pôle Communication - À élire",
        description: "Poste à pourvoir au sein du gouvernement",
        url: "/gouvernement",
        category: "pole",
        keywords: ["communication", "élections", "candidature"],
    },

    // Activités du Programme
    {
        id: "integration-sportive",
        title: "Journées d'Intégration Sportive",
        description: "Compétitions et jeux pour les nouveaux étudiants",
        url: "/activites",
        category: "activity",
        keywords: ["intégration", "sport", "nouveaux", "étudiants"],
    },
    {
        id: "voix-etudiants",
        title: "La Voix des Étudiants",
        description: "Dialogue direct entre étudiants et administration",
        url: "/activites",
        category: "activity",
        keywords: ["dialogue", "voix", "administration", "préoccupations"],
    },
    {
        id: "semaine-entrepreneuriat",
        title: "Semaine de l'Entrepreneuriat",
        description: "Formations et rencontres avec des entrepreneurs",
        url: "/activites",
        category: "activity",
        keywords: ["entrepreneuriat", "business", "projets", "formation"],
    },
];

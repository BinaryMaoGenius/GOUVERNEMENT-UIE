import { useState, useEffect } from "react";

export interface Notification {
    id: string;
    title: string;
    description: string;
    time: string;
    type: "activity" | "announcement" | "deadline" | "success";
    url: string;
    isRead: boolean;
    timestamp: number;
}

const NOTIFICATIONS_KEY = "gouv-uie-notifications";
const NOTIFICATIONS_READ_KEY = "gouv-uie-notifications-read";

const defaultNotifications: Notification[] = [
    {
        id: "1",
        title: "Nouvelle Activité",
        description: "Journée d'Intégration le 15 février",
        time: "Il y a 2h",
        type: "activity",
        url: "/activites",
        isRead: false,
        timestamp: Date.now() - 2 * 60 * 60 * 1000,
    },
    {
        id: "2",
        title: "Élections en cours",
        description: "Votez pour le nouveau bureau exécutif",
        time: "Hier",
        type: "announcement",
        url: "/participer",
        isRead: false,
        timestamp: Date.now() - 24 * 60 * 60 * 1000,
    },
    {
        id: "3",
        title: "Date limite",
        description: "Candidatures closes dans 3 jours",
        time: "Il y a 1 jour",
        type: "deadline",
        url: "/participer",
        isRead: false,
        timestamp: Date.now() - 24 * 60 * 60 * 1000,
    },
    {
        id: "4",
        title: "Nouveau Programme",
        description: "Le programme 2025-2026 est disponible",
        time: "Il y a 3 jours",
        type: "announcement",
        url: "/programme",
        isRead: true,
        timestamp: Date.now() - 3 * 24 * 60 * 60 * 1000,
    },
];

export function useNotifications() {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    // Load notifications from localStorage
    useEffect(() => {
        const stored = localStorage.getItem(NOTIFICATIONS_KEY);
        const readIds = localStorage.getItem(NOTIFICATIONS_READ_KEY);

        if (stored) {
            try {
                const parsedNotifications = JSON.parse(stored) as Notification[];
                const parsedReadIds = readIds ? JSON.parse(readIds) : [];

                // Update read status based on stored read IDs
                const updatedNotifications = parsedNotifications.map((notif) => ({
                    ...notif,
                    isRead: parsedReadIds.includes(notif.id),
                }));

                setNotifications(updatedNotifications);
            } catch (e) {
                console.error("Error loading notifications:", e);
                setNotifications(defaultNotifications);
            }
        } else {
            setNotifications(defaultNotifications);
        }
    }, []);

    // Save notifications to localStorage whenever they change
    useEffect(() => {
        if (notifications.length > 0) {
            localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));

            const readIds = notifications.filter((n) => n.isRead).map((n) => n.id);
            localStorage.setItem(NOTIFICATIONS_READ_KEY, JSON.stringify(readIds));
        }
    }, [notifications]);

    // Listen for storage events (sync across tabs)
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === NOTIFICATIONS_KEY && e.newValue) {
                try {
                    const parsedNotifications = JSON.parse(e.newValue) as Notification[];
                    setNotifications(parsedNotifications);
                } catch (error) {
                    console.error("Error parsing notifications from storage:", error);
                }
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const markAsRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
        );
    };

    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    };

    const deleteNotification = (id: string) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    const addNotification = (notification: Omit<Notification, "id" | "timestamp">) => {
        const newNotification: Notification = {
            ...notification,
            id: Date.now().toString(),
            timestamp: Date.now(),
        };

        setNotifications((prev) => [newNotification, ...prev]);
    };

    const unreadCount = notifications.filter((n) => !n.isRead).length;

    return {
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        deleteNotification,
        addNotification,
    };
}

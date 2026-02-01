import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, Calendar, Users, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Notification {
    id: string;
    title: string;
    description: string;
    time: string;
    type: "activity" | "announcement" | "deadline";
    url: string;
    isRead: boolean;
}

const initialNotifications: Notification[] = [
    {
        id: "1",
        title: "Nouvelle Activité",
        description: "Journée d'Intégration le 15 février",
        time: "Il y a 2h",
        type: "activity",
        url: "/activites",
        isRead: false,
    },
    {
        id: "2",
        title: "Élections en cours",
        description: "Votez pour le nouveau bureau exécutif",
        time: "Hier",
        type: "announcement",
        url: "/participer",
        isRead: false,
    },
    {
        id: "3",
        title: "Date limite",
        description: "Candidatures closes dans 3 jours",
        time: "Il y a 1 jour",
        type: "deadline",
        url: "/participer",
        isRead: false,
    },
    {
        id: "4",
        title: "Nouveau Programme",
        description: "Le programme 2025-2026 est disponible",
        time: "Il y a 3 jours",
        type: "announcement",
        url: "/programme",
        isRead: true,
    },
];

interface NotificationsPopoverProps {
    children: React.ReactNode;
}

export function NotificationsPopover({ children }: NotificationsPopoverProps) {
    const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
    const [open, setOpen] = useState(false);

    const unreadCount = notifications.filter((n) => !n.isRead).length;

    const markAsRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
        );
    };

    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    };

    const getNotificationIcon = (type: string) => {
        switch (type) {
            case "activity":
                return <Calendar className="w-4 h-4" />;
            case "announcement":
                return <Users className="w-4 h-4" />;
            case "deadline":
                return <FileText className="w-4 h-4" />;
            default:
                return <Bell className="w-4 h-4" />;
        }
    };

    const getNotificationColor = (type: string) => {
        switch (type) {
            case "activity":
                return "bg-blue-500/10 text-blue-500";
            case "announcement":
                return "bg-green-500/10 text-green-500";
            case "deadline":
                return "bg-orange-500/10 text-orange-500";
            default:
                return "bg-primary/10 text-primary";
        }
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className="relative inline-block">
                    {children}
                    {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                            {unreadCount > 9 ? "9+" : unreadCount}
                        </span>
                    )}
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h3 className="font-display font-semibold text-sm">Notifications</h3>
                    {unreadCount > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={markAllAsRead}
                            className="h-auto p-0 text-xs text-primary hover:text-primary/80"
                        >
                            Tout marquer comme lu
                        </Button>
                    )}
                </div>

                <div className="max-h-[400px] overflow-y-auto">
                    {notifications.length === 0 ? (
                        <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                            Aucune notification
                        </div>
                    ) : (
                        notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`px-4 py-3 border-b last:border-b-0 hover:bg-secondary/50 transition-colors ${!notification.isRead ? "bg-primary/5" : ""
                                    }`}
                            >
                                <Link
                                    to={notification.url}
                                    onClick={() => {
                                        markAsRead(notification.id);
                                        setOpen(false);
                                    }}
                                    className="block"
                                >
                                    <div className="flex items-start gap-3">
                                        <div
                                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getNotificationColor(
                                                notification.type
                                            )}`}
                                        >
                                            {getNotificationIcon(notification.type)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <p className="font-medium text-sm text-foreground">
                                                    {notification.title}
                                                </p>
                                                {!notification.isRead && (
                                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1" />
                                                )}
                                            </div>
                                            <p className="text-xs text-muted-foreground mb-1">
                                                {notification.description}
                                            </p>
                                            <p className="text-[10px] text-muted-foreground">
                                                {notification.time}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>

                {notifications.length > 0 && (
                    <div className="px-4 py-2 border-t bg-secondary/30">
                        <Link
                            to="/activites"
                            onClick={() => setOpen(false)}
                            className="text-xs text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-1"
                        >
                            Voir toutes les notifications
                        </Link>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    );
}

import { Link } from "react-router-dom";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, Calendar, Users, FileText, AlertCircle, CheckCircle2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNotifications } from "@/hooks/useNotifications";

interface NotificationsPopoverProps {
    children: React.ReactNode;
}

export function NotificationsPopover({ children }: NotificationsPopoverProps) {
    const { notifications, unreadCount, markAsRead, markAllAsRead, deleteNotification } = useNotifications();

    const getNotificationIcon = (type: string) => {
        switch (type) {
            case "activity":
                return <Calendar className="w-4 h-4" />;
            case "announcement":
                return <Users className="w-4 h-4" />;
            case "deadline":
                return <AlertCircle className="w-4 h-4" />;
            case "success":
                return <CheckCircle2 className="w-4 h-4" />;
            default:
                return <Bell className="w-4 h-4" />;
        }
    };

    const getNotificationColor = (type: string) => {
        switch (type) {
            case "activity":
                return "bg-blue-500/10 text-blue-500 border-blue-500/20";
            case "announcement":
                return "bg-green-500/10 text-green-500 border-green-500/20";
            case "deadline":
                return "bg-orange-500/10 text-orange-500 border-orange-500/20";
            case "success":
                return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
            default:
                return "bg-primary/10 text-primary border-primary/20";
        }
    };

    const handleNotificationClick = (id: string, url: string) => {
        markAsRead(id);
    };

    const handleDelete = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        e.stopPropagation();
        deleteNotification(id);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="relative inline-block">
                    {children}
                    {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-primary-foreground text-[10px] font-bold flex items-center justify-center animate-pulse shadow-lg">
                            {unreadCount > 9 ? "9+" : unreadCount}
                        </span>
                    )}
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-80 md:w-96 p-0" align="end" sideOffset={8}>
                <div className="flex items-center justify-between px-4 py-3 border-b bg-secondary/30">
                    <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-primary" />
                        <h3 className="font-display font-semibold text-sm">Notifications</h3>
                        {unreadCount > 0 && (
                            <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                                {unreadCount}
                            </span>
                        )}
                    </div>
                    {unreadCount > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={markAllAsRead}
                            className="h-auto p-0 text-xs text-primary hover:text-primary/80 hover:bg-transparent"
                        >
                            Tout marquer
                        </Button>
                    )}
                </div>

                <div className="max-h-[400px] md:max-h-[500px] overflow-y-auto">
                    {notifications.length === 0 ? (
                        <div className="px-4 py-12 text-center">
                            <Bell className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-30" />
                            <p className="text-sm text-muted-foreground font-medium mb-1">Aucune notification</p>
                            <p className="text-xs text-muted-foreground">Vous êtes à jour !</p>
                        </div>
                    ) : (
                        notifications.map((notification, index) => (
                            <div
                                key={notification.id}
                                className={`group border-b last:border-b-0 hover:bg-secondary/50 transition-all duration-200 ${!notification.isRead ? "bg-primary/5" : ""
                                    }`}
                                style={{
                                    animation: `slideIn 0.3s ease-out ${index * 0.05}s both`,
                                }}
                            >
                                <Link
                                    to={notification.url}
                                    onClick={() => handleNotificationClick(notification.id, notification.url)}
                                    className="block px-4 py-3"
                                >
                                    <div className="flex items-start gap-3">
                                        <div
                                            className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border ${getNotificationColor(
                                                notification.type
                                            )}`}
                                        >
                                            {getNotificationIcon(notification.type)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <p className="font-medium text-sm text-foreground leading-tight">
                                                    {notification.title}
                                                </p>
                                                {!notification.isRead && (
                                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5 animate-pulse" />
                                                )}
                                            </div>
                                            <p className="text-xs text-muted-foreground mb-1.5 leading-relaxed">
                                                {notification.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[10px] text-muted-foreground">
                                                    {notification.time}
                                                </p>
                                                <button
                                                    onClick={(e) => handleDelete(e, notification.id)}
                                                    className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-all"
                                                    aria-label="Supprimer"
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>

                {notifications.length > 0 && (
                    <div className="px-4 py-3 border-t bg-secondary/30">
                        <Link
                            to="/activites"
                            className="text-xs text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-1 transition-colors"
                        >
                            Voir toutes les activités
                        </Link>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    );
}

// Add keyframes for animation in global CSS or tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
document.head.appendChild(style);


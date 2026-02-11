import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Activity {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    participants: number;
    pole: string;
    status: string;
    image: string | boolean;
    isNew?: boolean;
}

interface ActivityCardProps {
    activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
    return (
        <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 group shadow-sm">
            {activity.image && (
                <div className="h-48 gradient-hero relative overflow-hidden">
                    {typeof activity.image === 'string' ? (
                        <img
                            src={activity.image}
                            alt={activity.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                            <Calendar size={64} className="text-white" />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-4 right-4 flex gap-2">
                        {activity.isNew && (
                            <div className="bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
                                Nouveau
                            </div>
                        )}
                        <div className="bg-accent text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                            {activity.pole}
                        </div>
                    </div>
                </div>
            )}
            <div className="p-8">
                <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <Calendar className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-display font-bold text-2xl text-foreground leading-tight group-hover:text-accent transition-colors">
                                {activity.title}
                            </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-widest font-bold font-body">
                                <Calendar className="w-3 h-3 text-accent" />
                                {activity.date}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-widest font-bold font-body">
                                <MapPin className="w-3 h-3 text-accent" />
                                {activity.location}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-widest font-bold font-body">
                                <Users className="w-3 h-3 text-accent" />
                                {activity.participants} Participants
                            </div>
                        </div>
                        <p className="text-muted-foreground font-body leading-relaxed line-clamp-3 mb-6">
                            {activity.description}
                        </p>
                    </div>
                </div>

                {activity.status === "upcoming" && (
                    <Button className="w-full h-14 rounded-2xl bg-white text-black hover:bg-white/90 font-bold shadow-xl shadow-white/5 transition-all active:scale-[0.98]">
                        Réserver ma place
                    </Button>
                )}
            </div>
        </div>
    );
}

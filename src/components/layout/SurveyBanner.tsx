import { ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";

export function SurveyBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden shadow-lg border-b border-white/10">
            {/* Animated background particles */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container-section relative z-10 py-3.5 px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <div className="flex items-center gap-3">
                        <div className="hidden xs:flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl backdrop-blur-md animate-bounce-slow">
                            <span className="text-xl">📢</span>
                        </div>
                        <div>
                            <p className="text-white font-display font-bold leading-tight">
                                Sondage Étudiant 2026
                            </p>
                            <p className="text-blue-100 text-[11px] sm:text-xs font-medium uppercase tracking-wider">
                                Votre avis est essentiel pour nous
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfe9ceCcGUCqMft7La9s2wXulBSb8ASY9kA9T4tmPUe_6y7jg/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-2.5 rounded-full text-sm font-black hover:bg-blue-50 transition-all hover:scale-105 shadow-[0_4px_15px_rgba(255,255,255,0.3)] active:scale-95 group ring-4 ring-white/10"
                        >
                            REMPLIR LE FORMULAIRE
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="p-2 text-white/60 hover:text-white transition-colors"
                            aria-label="Fermer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

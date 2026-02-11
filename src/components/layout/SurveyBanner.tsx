import { ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";

export function SurveyBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-blue-600 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-indigo-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container-section relative z-10 py-3">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 flex items-center justify-center gap-3 text-white overflow-hidden">
                        <span className="hidden sm:inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full animate-bounce">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        </span>
                        <p className="text-sm md:text-base font-bold tracking-wide truncate">
                            📢 <span className="italic">Votre avis compte !</span> Remplissez l'enquête de satisfaction étudiant
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfe9ceCcGUCqMft7La9s2wXulBSb8ASY9kA9T4tmPUe_6y7jg/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-white text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-md active:scale-95 group"
                        >
                            Participer
                            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-white/80 hover:text-white transition-colors p-1"
                        aria-label="Fermer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}

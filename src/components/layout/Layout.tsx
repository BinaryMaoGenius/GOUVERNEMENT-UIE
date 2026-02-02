import { ReactNode, useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BottomNav } from "./BottomNav";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("page-transition-enter-active");

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    if (location !== displayLocation) {
      setTransitionStage("page-transition-enter");
      setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("page-transition-enter-active");
      }, 500);
    }
  }, [location, displayLocation]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground dark">
      <div className="bg-red-600 text-white text-[10px] text-center py-0.5 font-bold z-[100]">VÉRIFICATION MISE À JOUR : OK</div>
      <Header />
      <main className={`flex-1 pb-20 md:pb-0 relative ${transitionStage}`}>
        {children}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

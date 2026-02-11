import { ReactNode, useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BottomNav } from "./BottomNav";
import { SurveyBanner } from "./SurveyBanner";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
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

    // Reset scroll to top on page change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-primary/10 selection:text-primary">
      <div className="sticky top-0 z-[60]">
        <SurveyBanner />
      </div>
      <Header />
      <main className="flex-1 pb-20 md:pb-0 relative animate-fade-in">
        {children}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy loading of pages for performance optimization
const Index = lazy(() => import("./pages/Index"));
const GouvernementPage = lazy(() => import("./pages/GouvernementPage"));
const ActivitesPage = lazy(() => import("./pages/ActivitesPage"));
const ProgrammePage = lazy(() => import("./pages/ProgrammePage"));
const ParticiperPage = lazy(() => import("./pages/ParticiperPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const MoovPage = lazy(() => import("./pages/MoovPage"));
const TelimanPage = lazy(() => import("./pages/TelimanPage"));
const RestaurantPage = lazy(() => import("./pages/RestaurantPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gouvernement" element={<GouvernementPage />} />
            <Route path="/activites" element={<ActivitesPage />} />
            <Route path="/programme" element={<ProgrammePage />} />
            <Route path="/participer" element={<ParticiperPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/moov" element={<MoovPage />} />
            <Route path="/services/telimani" element={<TelimanPage />} />
            <Route path="/services/restaurant" element={<RestaurantPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

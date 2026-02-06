import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GouvernementPage from "./pages/GouvernementPage";
import ActivitesPage from "./pages/ActivitesPage";
import ProgrammePage from "./pages/ProgrammePage";
import ParticiperPage from "./pages/ParticiperPage";
import ServicesPage from "./pages/ServicesPage";
import MoovPage from "./pages/MoovPage";
import TelimanPage from "./pages/TelimanPage";
import RestaurantPage from "./pages/RestaurantPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

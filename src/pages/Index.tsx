import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { NextActivitySection } from "@/components/home/NextActivitySection";
import { PolesSection } from "@/components/home/PolesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { OrganigrammeSection } from "@/components/gouvernement/OrganigrammeSection";
import { PresidentMessage } from "@/components/home/PresidentMessage";
import { TimelineSection } from "@/components/home/TimelineSection";
import { CultureSection } from "@/components/home/CultureSection";
import { IdeaWall } from "@/components/home/IdeaWall";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <NextActivitySection />
      <PolesSection />
      <ServicesSection />
      <PresidentMessage />
      <IdeaWall />
      <TimelineSection />
      <CultureSection />
      <OrganigrammeSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

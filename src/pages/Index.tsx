import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { NextActivitySection } from "@/components/home/NextActivitySection";
import { PolesSection } from "@/components/home/PolesSection";
import { OrganigrammeSection } from "@/components/gouvernement/OrganigrammeSection";
import { PresidentMessage } from "@/components/home/PresidentMessage";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <NextActivitySection />
      <PolesSection />
      <OrganigrammeSection />
      <PresidentMessage />
      <CTASection />
    </Layout>
  );
};

export default Index;

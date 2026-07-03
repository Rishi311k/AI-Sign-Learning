import MainLayout from "../../layouts/MainLayout";
import HeroSection from "../../components/landing/HeroSection";
import FeaturesSection from "../../components/landing/FeaturesSection";
import HowItWorksSection from "../../components/landing/HowItWorksSection";
import AILiveDemoSection from "../../components/landing/AILiveDemoSection";
import StatisticsSection from "../../components/landing/StatisticsSection";
import TestimonialsSection from "../../components/landing/TestimonialsSection";
import FAQSection from "../../components/landing/FAQSection";
import CTASection from "../../components/landing/CTASection";
import ContactSection from "../../components/landing/ContactSection";

function LandingPage() {
  return (
    <MainLayout>
      <HeroSection /> 
      <FeaturesSection />
      <HowItWorksSection />
      <AILiveDemoSection />
      <StatisticsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </MainLayout>
  );
}

export default LandingPage;
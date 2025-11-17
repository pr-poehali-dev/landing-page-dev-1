import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import PriceCallToAction from '@/components/PriceCallToAction';
import PricingSection from '@/components/PricingSection';
import PaymentSection from '@/components/PaymentSection';
import TeamSection from '@/components/TeamSection';
import AdditionalServicesSection from '@/components/AdditionalServicesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PriceCallToAction />
      <PricingSection />
      <PaymentSection />
      <TeamSection />
      <AdditionalServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
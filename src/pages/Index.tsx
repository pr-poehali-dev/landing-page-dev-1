import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import PriceCallToAction from '@/components/PriceCallToAction';
import PricingSection from '@/components/PricingSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PriceCallToAction />
      <PricingSection />
    </div>
  );
};

export default Index;
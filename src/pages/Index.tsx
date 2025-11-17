import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import PriceCallToAction from '@/components/PriceCallToAction';
import PricingSection from '@/components/PricingSection';
import PaymentSection from '@/components/PaymentSection';
import TeamSection from '@/components/TeamSection';
import AdditionalServicesSection from '@/components/AdditionalServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import LandingStructureSection from '@/components/LandingStructureSection';
import SeoTextSection from '@/components/SeoTextSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

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
      <TestimonialsSection />
      <WhyChooseUsSection />
      <LandingStructureSection />
      <SeoTextSection />
      <Footer />
    </div>
  );
};

export default Index;
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ClientLogos from '@/components/ClientLogos';
import IndustriesSection from '@/components/IndustriesSection';
import LatestReports from '@/components/LatestReports';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

// import HeroSection from '@/components/HeroSection';
// import ServicesSection from '@/components/ServicesSection';
// import ClientLogos from '@/components/ClientLogos';
// import IndustriesSection from '@/components/IndustriesSection';
// import LatestReports from '@/components/LatestReports';
// import StatsSection from '@/components/StatsSection';
// import TestimonialsSection from '@/components/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ClientLogos />
      <IndustriesSection />
      <LatestReports />
      <StatsSection />
      <TestimonialsSection />
    </>
  );
}

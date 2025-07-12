import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import DashboardSection from "@/components/sections/dashboard-section"
import PricingSection from "@/components/sections/pricing-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import FAQSection from "@/components/sections/faq-section"
import Footer from "@/components/sections/footer"
import CtaSection from "@/components/sections/cta-section"
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-14">
        <HeroSection />
        <DashboardSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}

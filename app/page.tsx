import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import DashboardSection from "@/components/sections/dashboard-section"

export default function Home() {
  return (
    <div  className= "min-h-screen">
     <Header />
     <HeroSection />
     <DashboardSection />
     <FeaturesSection />
  </div>
  );
}

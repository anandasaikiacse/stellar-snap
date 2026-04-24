import { HomeHeroSection } from "@/components/HomeHeroSection";
import { GalleryShowcaseSection } from "@/components/GalleryShowcaseSection";
import Testimonials from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingTable } from "@clerk/nextjs";
import { PricingSection } from "@/components/PricingSection";

export default function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <GalleryShowcaseSection />
      <HowItWorksSection />
      <Testimonials />
      <PricingSection />
      <Footer />
    </main>
  );
}

import { PublicNavBar } from "@/components/layout/PublicNavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <PublicNavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-footer text-text-body">
      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col">
        {/* Step 5 Hero Carousel */}
        <HeroSection />

        {/* Step 6 About Section */}
        <AboutSection />

        {/* Step 7 Programs Section */}
        <ProgramsSection />

        {/* Step 8 FAQ Section */}
        <FaqSection />

        {/* Step 9 Contact/CTA Section */}
        <CtaSection />
      </main>

      {/* Step 10 Footer (no bottom bar) */}
      <Footer />
    </div>
  );
}

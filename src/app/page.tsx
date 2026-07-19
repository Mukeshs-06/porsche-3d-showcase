import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerformanceSection from "@/components/PerformanceSection";
import InteriorSection from "@/components/InteriorSection";
import SpecsSection from "@/components/SpecsSection";
import ConfiguratorSection from "@/components/ConfiguratorSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative bg-[#050507] text-white min-h-screen selection:bg-amber-500/30 selection:text-amber-200">
      <CustomCursor />
      <Navbar />
      <Hero />
      <PerformanceSection />
      <InteriorSection />
      <SpecsSection />
      <ConfiguratorSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
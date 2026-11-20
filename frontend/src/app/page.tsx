
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import TapSection from "@/components/home/TapSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import WaitlistSection from "@/components/home/WaitlistSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="home">
        <HeroSection />
      </div>

      <div id="products">
        <ProductsSection />
      </div>

      <div id="tap">
        <TapSection />
      </div>

      <div id="collections">
        <CollectionsSection />
      </div>

      <div id="waitlist">
        <WaitlistSection />
      </div>
    </main>
  );
}
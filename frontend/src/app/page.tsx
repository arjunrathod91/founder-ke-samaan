import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar"
import CollectionsSection from "@/components/home/CollectionsSection";
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import TapSection from "@/components/home/TapSection";
import WaitlistSection from "@/components/home/WaitlistSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <header></header>

      <HeroSection/>
      <section id="home"></section>

      <ProductsSection/>
      <section id="products"></section>

      <TapSection/>
      <section id="tap"></section>

      <CollectionsSection/>
      <section id="collections"></section>

      <WaitlistSection/>
      <section id="waitlist"></section>

      <Footer/>
      <footer></footer>
    </main>
  );
}

import ShopHero from "@/components/shop/ShopHero";
import ProductGrid from "@/components/shop/ProductGrid";
import CustomSetSection from "@/components/shop/CustomSetSection";

export default function ShopPage() {
  return (
    <main>
      <ShopHero />
      <ProductGrid />
      <CustomSetSection />
    </main>
  );
}
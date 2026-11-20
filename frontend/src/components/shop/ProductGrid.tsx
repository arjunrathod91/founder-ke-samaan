
"use client";

import { useState } from "react";

import ProductCard from "@/components/shop/ProductCard";
import ProductFilters, {
  type ProductCategory,
} from "@/components/shop/ProductFilters";

const products = [
  {
    id: 1,
    category: "Wear",
    label: "WEAR",
    name: "Founder tee",
    description:
      "Peeche naam, aage kaam. Bold back print with a small front mark.",
    price: "[PRICE]",
    backgroundColor: "bg-brand-yellow",
  },
  {
    id: 2,
    category: "Wear",
    label: "WEAR",
    name: "Builder cap",
    description:
      "Safar mein bhi brand. For flights, cafes and conferences.",
    price: "[PRICE]",
    backgroundColor: "bg-brand-red",
  },
  {
    id: 3,
    category: "Carry",
    label: "CARRY",
    name: "Carry bag",
    description:
      "Laptop bhi, pitch bhi. One bag for the whole founder day.",
    price: "[PRICE]",
    backgroundColor: "bg-brand-teal",
  },
  {
    id: 4,
    category: "Carry",
    label: "CARRY",
    name: "Sticker pack",
    description:
      "Chipkao, dikhao. Laptop, bottle, bike, everywhere.",
    price: "[PRICE]",
    backgroundColor: "bg-brand-yellow",
  },
  {
    id: 5,
    category: "Smart",
    label: "SMART",
    name: "NFC card",
    description:
      "Tap karo, startup dekho. Opens your page in one tap.",
    price: "[PRICE]",
    backgroundColor: "bg-brand-red",
  },
  {
    id: 6,
    category: "Smart",
    label: "SMART",
    name: "NFC bag tag",
    description:
      "Clip it on a bag or lanyard. Same tap, anywhere you travel.",
    price: "[PRICE]",
    backgroundColor: "bg-brand-teal",
  },
  {
    id: 7,
    category: "Digital",
    label: "DIGITAL",
    name: "Digital tee",
    description:
      "Profile pe bhi pehno. Banner and avatar for LinkedIn, X and Zoom.",
    price: "[PRICE]",
    backgroundColor: "bg-brand-yellow",
  },
  {
    id: 8,
    category: "Kits",
    label: "KITS",
    name: "Day One kit",
    description:
      "Tee, cap, NFC card and stickers together, for a founder starting out.",
    price: "[PRICE]",
    backgroundColor: "bg-brand-red",
  },
  {
    id: 9,
    category: "Kits",
    label: "KITS",
    name: "Co-Founder ke Samaan",
    description:
      "Matching kits for your whole founding team. Ask us about sizes and quantity.",
    price: "[PRICE]",
    backgroundColor: "bg-brand-teal",
    buttonLabel: "See team kits",
  },
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section className="bg-brand-cream px-5 pb-16 sm:px-8 lg:px-12">
      {/* Product Filters */}
      <ProductFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        productCount={filteredProducts.length}
      />

      {/* Product Cards */}
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            category={product.label}
            name={product.name}
            description={product.description}
            price={product.price}
            backgroundColor={product.backgroundColor}
            buttonLabel={product.buttonLabel || "Notify me"}
          />
        ))}
      </div>
    </section>
  );
}
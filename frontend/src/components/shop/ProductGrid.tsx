
"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

import ProductCard from "@/components/shop/ProductCard";
import ProductFilters, {
  type ProductCategory,
} from "@/components/shop/ProductFilters";

// ==========================================
// SUPABASE CLIENT
// ==========================================

const supabase = createClient();

// ==========================================
// PRODUCT DATA
// ==========================================

type Product = {
  id: number;
  category: Exclude<ProductCategory, "All">;
  label: string;
  name: string;
  description: string;
  price: string;
  backgroundColor: string;
  buttonLabel?: string;
};

const products: Product[] = [
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

// ==========================================
// COMPONENT
// ==========================================

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("All");

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [email, setEmail] = useState("");
  const [building, setBuilding] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // ========================================
  // FILTER PRODUCTS
  // ========================================

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  // ========================================
  // MODAL HANDLERS
  // ========================================

function openProductModal(product: Product) {
  console.log("Opening product modal:", product.name);

  setSelectedProduct(product);
  setEmail("");
  setBuilding("");
  setMessage("");
  setIsSuccess(false);
}

  function closeProductModal() {
    if (isSubmitting) return;

    setSelectedProduct(null);
    setEmail("");
    setBuilding("");
    setMessage("");
    setIsSuccess(false);
  }

  // ========================================
  // SUBMIT PRODUCT REQUEST
  // ========================================

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedProduct || isSubmitting) return;

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedBuilding = building.trim();

    if (!trimmedEmail || !trimmedBuilding) {
      setMessage("Please fill in all the fields.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const { error } = await supabase
        .from("product_requests")
        .insert({
          product_id: selectedProduct.id,
          product_name: selectedProduct.name,
          product_category: selectedProduct.category,
          email: trimmedEmail,
          building: trimmedBuilding,
        });

      if (error) {
        console.error("Supabase insert error:", error);
        throw error;
      }

      setIsSuccess(true);
      setMessage("Your request has been submitted successfully!");

      setEmail("");
      setBuilding("");
    } catch (error) {
      console.error("Product request submission failed:", error);

      setMessage(
        "We couldn't submit your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  // ========================================
  // RENDER
  // ========================================

  return (
    <>
      <section className="bg-brand-cream px-5 pb-16 sm:px-8 lg:px-12">
        <ProductFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          productCount={filteredProducts.length}
        />

        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              category={product.label}
              name={product.name}
              description={product.description}
              price={product.price}
              backgroundColor={product.backgroundColor}
              buttonLabel={product.buttonLabel ?? "Notify me"}
              onAction={() => openProductModal(product)}
            />
          ))}
        </div>
      </section>

      {/* ====================================
          PRODUCT REQUEST MODAL
      ==================================== */}

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeProductModal();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border-2 border-brand-black bg-brand-cream p-6 shadow-[7px_7px_0px_#17130F] sm:p-8"
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={closeProductModal}
              disabled={isSubmitting}
              aria-label="Close modal"
              className="absolute right-5 top-5 text-2xl font-bold text-brand-black disabled:opacity-50"
            >
              &times;
            </button>

            {/* MODAL HEADER */}

            <p className="font-body text-xs font-bold uppercase tracking-[0.15em] text-brand-teal">
              Product Interest
            </p>

            <h2
              id="product-modal-title"
              className="mt-3 pr-8 font-heading text-3xl font-extrabold text-brand-black"
            >
              {selectedProduct.name}
            </h2>

            <p className="mt-2 font-body text-sm text-brand-black/70">
              Interested in this product? Tell us a little about yourself.
              We&apos;ll notify you when it&apos;s available.
            </p>

            {/* SUCCESS STATE */}

            {isSuccess ? (
              <div className="mt-6 rounded-xl border-2 border-brand-black bg-brand-yellow p-5">
                <p className="font-heading text-xl font-bold text-brand-black">
                  Thank you!
                </p>

                <p className="mt-2 font-body text-sm text-brand-black">
                  {message}
                </p>

                <button
                  type="button"
                  onClick={closeProductModal}
                  className="mt-5 w-full rounded-full border-2 border-brand-black bg-brand-black px-5 py-3 font-body text-sm font-bold text-white transition hover:opacity-90"
                >
                  Done
                </button>
              </div>
            ) : (
              /* REQUEST FORM */

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
              >
                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="product-request-email"
                    className="mb-2 block font-body text-sm font-bold text-brand-black"
                  >
                    Your email
                  </label>

                  <input
                    id="product-request-email"
                    type="email"
                    placeholder="you@startup.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border-2 border-brand-black bg-white px-4 py-3 font-body text-sm text-brand-black outline-none transition focus:ring-2 focus:ring-brand-yellow"
                  />
                </div>

                {/* WHAT ARE YOU BUILDING */}

                <div>
                  <label
                    htmlFor="product-request-building"
                    className="mb-2 block font-body text-sm font-bold text-brand-black"
                  >
                    What are you building?
                  </label>

                  <textarea
                    id="product-request-building"
                    placeholder="Tell us about your startup, project or idea..."
                    value={building}
                    onChange={(event) => setBuilding(event.target.value)}
                    required
                    rows={4}
                    maxLength={1000}
                    className="w-full resize-none rounded-lg border-2 border-brand-black bg-white px-4 py-3 font-body text-sm text-brand-black outline-none transition placeholder:text-brand-black/40 focus:ring-2 focus:ring-brand-yellow"
                  />
                </div>

                {/* ERROR MESSAGE */}

                {message && (
                  <p
                    role="alert"
                    className="text-sm font-bold text-brand-red"
                  >
                    {message}
                  </p>
                )}

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full border-2 border-brand-black bg-brand-yellow px-5 py-3 font-body text-sm font-bold text-brand-black shadow-[3px_3px_0px_#17130F] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Notify me"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

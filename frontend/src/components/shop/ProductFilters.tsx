
"use client";

export type ProductCategory =
  | "All"
  | "Wear"
  | "Carry"
  | "Smart"
  | "Digital"
  | "Kits";

interface ProductFiltersProps {
  activeCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
  productCount: number;
}

const categories: ProductCategory[] = [
  "All",
  "Wear",
  "Carry",
  "Smart",
  "Digital",
  "Kits",
];

export default function ProductFilters({
  activeCategory,
  onCategoryChange,
  productCount,
}: ProductFiltersProps) {
  return (
    <section className="bg-brand-cream px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                aria-pressed={isActive}
                className={`
                  rounded-full cursor-pointer border-2 border-brand-black
                  px-4 py-1.5
                  font-body text-sm font-semibold
                  transition-colors duration-200
                  ${
                    isActive
                      ? "bg-brand-black text-brand-cream"
                      : "bg-brand-cream text-brand-black hover:bg-brand-yellow"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product Count */}
        <p className="whitespace-nowrap font-body text-sm font-medium text-brand-black">
          Showing {productCount} products
        </p>

      </div>
    </section>
  );
}

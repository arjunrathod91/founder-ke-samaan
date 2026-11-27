
import Image from "next/image";
import ProductIllustration from "./ProductIllustration";

export interface ProductCardProps {
  productId: number;
  category: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  imageAlt?: string;
  backgroundColor?: string;
  buttonLabel?: string;
  onAction?: () => void;
}

export default function ProductCard({
  productId,
  category,
  name,
  description,
  price,
  image,
  imageAlt,
  backgroundColor = "bg-brand-yellow",
  buttonLabel = "Notify me",
  onAction,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border-2 border-brand-black bg-brand-cream shadow-[5px_5px_0px_#17130F] transition-transform duration-200 hover:-translate-y-1">

      {/* Product Visual */}
      <div
        className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden ${backgroundColor}`}
      >
        {image ? (
          <Image
            src={image}
            alt={imageAlt || name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full p-5 transition-transform duration-300 group-hover:scale-105">
            <ProductIllustration productId={productId} />
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5">

        <p className="font-body text-xs font-bold uppercase tracking-[0.15em] text-brand-teal">
          {category}
        </p>

        <h3 className="mt-2 font-heading text-xl font-bold text-brand-black sm:text-2xl">
          {name}
        </h3>

        <p className="mt-2 min-h-12 font-body text-sm leading-relaxed text-brand-black/80">
          {description}
        </p>

        {/* Price and Action */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-brand-black/20 pt-4">
          <span className="font-heading text-lg font-bold text-brand-black">
            {price}
          </span>

          <button
            type="button"
            onClick={onAction}
            className="rounded-full border-2 border-brand-black bg-brand-yellow px-4 py-2 font-body text-xs font-bold text-brand-black transition-colors hover:bg-brand-red hover:text-white sm:text-sm"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </article>
  );
}

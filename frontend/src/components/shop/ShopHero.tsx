
import Link from "next/link";

export default function ShopHero() {
  return (
    <section className="border-b-2 border-brand-black bg-brand-yellow px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1280px]">

        {/* Section Label */}
        <p className="mb-5 font-body text-xs font-bold uppercase tracking-[0.15em]">
          Shop / Drop 01
        </p>

        {/* Heading */}
        <h1 className="max-w-4xl font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-brand-black sm:text-6xl lg:text-7xl">
          Pehno. Chipkao. Tap karo.
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-brand-black sm:text-lg">
          Everything a founder carries, in one limited first drop of 50
          to 100 pieces.
        </p>

        {/* Checkout Notice */}
        <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full bg-brand-black px-5 py-3 font-body text-xs font-semibold text-brand-cream sm:text-sm">
          <span>Checkout opens soon.</span>

          <Link
            href="/waitlist"
            className="underline underline-offset-4 transition-colors hover:text-brand-yellow"
          >
            Join the waitlist to get the link first
          </Link>
        </div>

      </div>
    </section>
  );
}
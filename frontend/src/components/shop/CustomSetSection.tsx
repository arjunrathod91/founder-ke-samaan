
import Link from "next/link";

export default function CustomSetSection() {
  return (
    <section className="bg-brand-yellow px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-2xl border-2 border-brand-black bg-brand-red p-6 shadow-[5px_5px_0px_#17130F] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">

          {/* Content */}
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Apna naam, apna samaan.
            </h2>

            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-white sm:text-lg">
              Want your own startup name on the tee, cap or NFC page?
              Tell us what you&apos;re building and we&apos;ll make a custom set.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-7 shrink-0 lg:mt-0">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-black bg-brand-yellow px-6 py-3 font-body text-sm font-bold text-brand-black transition-all duration-200 hover:-translate-y-1 hover:bg-brand-cream"
            >
              Custom set maango
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
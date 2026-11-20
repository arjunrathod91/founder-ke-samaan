
import Link from "next/link";

export default function StoryCTA() {
  return (
    <section className="bg-brand-yellow px-6 py-12 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 rounded-2xl border-2 border-brand-black bg-brand-red p-8 shadow-[var(--shadow-hard)] md:flex-row md:items-center md:px-12 md:py-10">
        <div>
          <h2 className="font-heading text-3xl font-black leading-tight text-brand-cream md:text-5xl">
            Kahani ka hissa bano.
          </h2>

          <p className="mt-3 max-w-lg font-body text-sm font-medium leading-relaxed text-brand-cream">
            Join the waitlist and be one of the first hundred to
            wear what you&apos;re building.
          </p>
        </div>

        <Link
          href="/waitlist"
          className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-brand-black bg-brand-yellow px-7 py-3 font-body text-sm font-bold text-brand-black transition-transform hover:-translate-y-1"
        >
          Waitlist mein jodo
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function TapCTA() {
  return (
    <section className="bg-[#FFD83D] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl border-[3px] border-[#15110F] bg-[#E3261E] p-7 shadow-[6px_7px_0_#15110F] sm:p-10 lg:flex-row lg:items-center lg:px-12 lg:py-12">

        <div>
          <h2 className="font-bricolage text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ek tap. Poori kahani.
          </h2>

          <p className="mt-4 max-w-xl font-hind text-sm leading-relaxed text-white sm:text-base">
            Join the waitlist and tell us what you&apos;re building.
            We&apos;ll set up your first tap page with the drop.
          </p>
        </div>

        <Link
          href="/waitlist"
          className="shrink-0 rounded-full border-2 border-[#15110F] bg-[#FFD83D] px-7 py-3 font-hind text-sm font-bold text-[#15110F] shadow-[3px_4px_0_#15110F] transition-transform hover:translate-y-1 hover:shadow-none"
        >
          Waitlist mein jodo
        </Link>

      </div>
    </section>
  );
}

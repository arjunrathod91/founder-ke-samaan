
export default function WaitlistContact() {
  return (
    <section className="bg-brand-black px-6 py-16 text-brand-cream md:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-3 md:gap-10">

        {/* Find Us */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
            Find Us
          </span>

          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            @founderkesamaan
          </h2>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-cream/70">
            Instagram and X. Tag us with
            <span className="font-semibold text-brand-yellow">
              {" "}#FounderKeSamaan.
            </span>
          </p>
        </div>

        {/* Email */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
            Email
          </span>

          <h2 className="mt-5 break-words text-2xl font-bold md:text-3xl">
            [EMAIL ADDRESS]
          </h2>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-cream/70">
            For questions, custom sets and press.
          </p>
        </div>

        {/* Teams */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
            Teams and Events
          </span>

          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            Planning a kit for many?
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-brand-cream/70">
            Book a pilot on the Teams page.
          </p>

          <a
            href="/teams"
            className="mt-5 inline-block font-bold text-brand-yellow underline underline-offset-4 transition hover:text-brand-red"
          >
            Book a pilot
          </a>
        </div>

      </div>
    </section>
  );
}

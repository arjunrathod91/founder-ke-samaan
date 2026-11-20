
const benefits = [
  "Early access to Drop 01",
  "Your own tap page set up with the drop",
  "Custom name on your set, if you want one",
];

const interests = [
  "Tee",
  "Cap",
  "Bag",
  "Stickers",
  "NFC card",
  "Digital tee",
  "Team kit",
];

export default function WaitlistHero() {
  return (
    <section className="bg-brand-yellow px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left Content */}
        <div>
          <span className="mb-5 block text-xs font-bold uppercase tracking-[0.2em]">
            Waitlist and Contact
          </span>

          <h1 className="max-w-xl font-heading text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
            Pehle 100
            <br />
            mein aao.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg">
            Drop 01 is limited to 50 to 100 pieces. Join the
            waitlist and you&apos;ll get the link before anyone
            else.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-brand-black bg-brand-red" />
                <span className="text-sm font-medium md:text-base">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Waitlist Form */}
        <div className="rounded-[24px] border-2 border-brand-black bg-brand-cream p-6 shadow-[5px_5px_0px_#17130F] md:p-8">
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@startup.com"
                required
                className="w-full rounded-full border-2 border-brand-black bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-brand-yellow"
              />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-bold">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-full border-2 border-brand-black bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-brand-yellow"
              />
            </div>

            {/* Startup */}
            <div>
              <label htmlFor="startup" className="mb-2 block text-sm font-bold">
                What are you building?
              </label>
              <input
                id="startup"
                name="startup"
                type="text"
                placeholder="One line is enough"
                className="w-full rounded-full border-2 border-brand-black bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-brand-yellow"
              />
            </div>

            {/* Interests */}
            <fieldset>
              <legend className="mb-3 text-sm font-bold">
                I&apos;m interested in
              </legend>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className="flex cursor-pointer items-center gap-2 rounded-full border-2 border-brand-black bg-brand-yellow px-3 py-2 text-sm font-semibold transition hover:bg-brand-red"
                  >
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      className="accent-brand-black"
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Custom Message */}
            <div>
              <label
                htmlFor="customMessage"
                className="mb-2 block text-sm font-bold"
              >
                Custom name or message (optional)
              </label>
              <textarea
                id="customMessage"
                name="customMessage"
                rows={3}
                placeholder="Want your startup name on it? Tell us here."
                className="w-full resize-none rounded-xl border-2 border-brand-black bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-brand-yellow"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-full border-2 border-brand-black bg-brand-red px-6 py-3 font-bold text-white shadow-[2px_3px_0px_#17130F] transition hover:translate-y-[2px] hover:shadow-none"
            >
              Waitlist mein jodo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

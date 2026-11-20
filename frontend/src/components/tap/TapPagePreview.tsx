
const features = [
  "One line: what you're building",
  "Pitch deck or product demo link",
  "Calendar: book a call in one tap",
  "Socials: LinkedIn, X, Instagram",
  "Waitlist or lead form to capture who's interested",
];

export default function TapPagePreview() {
  return (
    <section className="border-b-2 border-[#15110F] bg-[#FFD83D] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left Content */}
        <div>
          <h2 className="max-w-md font-bricolage text-4xl font-extrabold leading-tight text-[#15110F] sm:text-5xl">
            Page mein kya hoga?
          </h2>

          <p className="mt-5 max-w-lg font-hind text-base leading-relaxed text-[#15110F]">
            You decide what a stranger sees after the tap.
            Start with one line and add more as the startup grows.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 font-hind text-sm font-medium text-[#15110F] sm:text-base"
              >
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E3261E]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#15110F]" />
                </span>

                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Startup Page Preview */}
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-[2rem] border-[4px] border-[#15110F] bg-[#15110F] p-2 shadow-[7px_8px_0_#E3261E]">

            <div className="rounded-[1.5rem] bg-[#FFF9ED] px-6 py-8">
              <p className="font-bricolage text-xs font-bold tracking-widest text-[#087F70]">
                FOUNDER KE SAMAAN
              </p>

              <h3 className="mt-7 font-bricolage text-3xl font-extrabold leading-tight text-[#15110F]">
                [STARTUP
                <br />
                NAME]
              </h3>

              <p className="mt-3 font-hind text-sm text-[#15110F]">
                What we&apos;re building: [ONE LINE]
              </p>

              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  className="w-full rounded-full border-2 border-[#15110F] bg-[#E3261E] px-4 py-3 font-hind text-sm font-bold text-white"
                >
                  View the deck
                </button>

                <button
                  type="button"
                  className="w-full rounded-full border-2 border-[#15110F] bg-[#FFF9ED] px-4 py-3 font-hind text-sm font-bold text-[#15110F]"
                >
                  Book a call
                </button>

                <button
                  type="button"
                  className="w-full rounded-full border-2 border-[#15110F] bg-[#FFF9ED] px-4 py-3 font-hind text-sm font-bold text-[#15110F]"
                >
                  Join the waitlist
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


const steps = [
  {
    number: "1",
    title: 'Koi poochta hai: "Founder ka kya samaan?"',
  },
  {
    number: "2",
    title: 'Aap bolte ho: "Tap karke dekho."',
  },
  {
    number: "3",
    title: "Unka phone kholta hai aapka page: what you build, deck, calendar, waitlist.",
  },
];

export default function TapSection() {
  return (
    <section id="tap" className="bg-[#FFD83D] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">

        {/* Left content */}
        <div>
          <h2 className="font-bricolage text-4xl font-extrabold leading-[0.9] tracking-tight text-[#17130F] sm:text-5xl lg:text-6xl">
            Tap karo, story
            <br />
            suno.
          </h2>

          <div className="mt-8 space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#17130F] font-hind text-xs font-bold text-[#FFD83D]">
                  {step.number}
                </span>

                <p className="max-w-[490px] pt-1 font-hind text-sm font-semibold leading-relaxed text-[#17130F] sm:text-base">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockup */}
        <div className="mx-auto w-full max-w-[320px] lg:ml-auto">
          <div className="rotate-[2deg] rounded-[32px] border-[5px] border-[#17130F] bg-[#FFF9E9] p-4 shadow-[8px_8px_0_#DF251D]">
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-[#17130F]" />

            <p className="font-hind text-[9px] font-extrabold tracking-widest text-[#087F6B]">
              FOUNDER KE SAMAAN
            </p>

            <h3 className="mt-5 font-bricolage text-2xl font-extrabold leading-none text-[#17130F]">
              [STARTUP
              <br />
              NAME]
            </h3>

            <p className="mt-3 font-hind text-xs text-[#17130F]">
              What we&apos;re building: [ONE LINE]
            </p>

            <div className="mt-5 space-y-2">
              <div className="rounded-full bg-[#DF251D] px-3 py-2 text-center font-hind text-xs font-bold text-white">
                View the deck
              </div>
              <div className="rounded-full border border-[#17130F] px-3 py-2 text-center font-hind text-xs font-bold">
                Book a call
              </div>
              <div className="rounded-full border border-[#17130F] px-3 py-2 text-center font-hind text-xs font-bold">
                Join the waitlist
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "Koi poochta hai",
    description:
      '"Founder ka kya samaan?" The name makes strangers curious, so you don’t have to pitch first.',
  },
  {
    number: "02",
    title: 'Aap bolte ho "tap karo"',
    description:
      "They touch their phone to your card, tag or cap. No app, no typing, nothing to install.",
  },
  {
    number: "03",
    title: "Aapka page khulta hai",
    description:
      "Your startup page opens: what you build, your deck, your calendar and a way to stay in touch.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#17130F] px-5 py-20 text-[#F5EEDC] sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14">
          <p className="font-hind text-xs font-bold uppercase tracking-[0.2em] text-[#FFD83D]">
            SIMPLE AS THAT
          </p>

          <h2 className="mt-4 font-bricolage text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Teen kadam.
            <br />
            Bas.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t border-[#F5EEDC]/30 pt-6"
            >
              <span className="font-bricolage text-5xl font-extrabold text-[#FFD83D]">
                {step.number}
              </span>

              <h3 className="mt-8 font-bricolage text-2xl font-bold sm:text-3xl">
                {step.title}
              </h3>

              <p className="mt-4 max-w-sm font-hind text-base leading-relaxed text-[#F5EEDC]/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
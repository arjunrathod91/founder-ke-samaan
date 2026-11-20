
const steps = [
  {
    number: "1",
    title: "Koi poochta hai",
    description:
      '"Founder ka kya samaan?" The name makes strangers curious, so you don’t have to pitch first.',
    color: "bg-[#FFD83D]",
  },
  {
    number: "2",
    title: 'Aap bolte ho "tap karo"',
    description:
      "They touch their phone to your card, tag or cap. No app, no typing, nothing to install.",
    color: "bg-[#E3261E]",
  },
  {
    number: "3",
    title: "Aapka page khulta hai",
    description:
      "Your startup page opens: what you build, your deck, your calendar and a way to stay in touch.",
    color: "bg-[#087F70]",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-b-2 border-[#15110F] bg-[#FFF9ED] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">

        <h2 className="font-bricolage text-4xl font-extrabold text-[#15110F] sm:text-5xl">
          Teen kadam. Bas.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`${step.color} rounded-2xl border-[2.5px] border-[#15110F] p-6 shadow-[4px_5px_0_#15110F]`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#15110F] bg-[#15110F] font-bricolage text-lg font-bold text-[#FFD83D]">
                {step.number}
              </span>

              <h3 className="mt-5 font-bricolage text-xl font-extrabold text-[#15110F] sm:text-2xl">
                {step.title}
              </h3>

              <p className="mt-3 font-hind text-sm leading-relaxed text-[#15110F]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

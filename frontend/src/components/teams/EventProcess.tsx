
const steps = [
  {
    number: "01",
    title: "Kit chuno",
    description:
      "Solo, team or cohort, sized for your event.",
  },
  {
    number: "02",
    title: "Page banao",
    description:
      "One line, one offer, one way to reach you.",
  },
  {
    number: "03",
    title: "Pehan ke jao",
    description:
      "Conference, demo day, flight, cafe. Let people ask.",
  },
  {
    number: "04",
    title: "Follow up karo",
    description:
      "See who tapped and reach out while it is fresh. Lead tracking is planned for the Event Kit.",
  },
];

export default function EventProcess() {
  return (
    <section className="border-y-2 border-[#17130F] bg-[#FFD83D] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10">
          <h2 className="text-4xl font-black tracking-tight text-[#17130F] md:text-5xl">
            Event se follow-up tak.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border-2 border-[#17130F] bg-[#FFF9E9] p-6 shadow-[5px_5px_0_#17130F] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#17130F] text-sm font-black text-[#FFD83D]">
                {step.number}
              </div>

              <h3 className="text-xl font-black text-[#17130F] md:text-2xl">
                {step.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-relaxed text-[#17130F]/75">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

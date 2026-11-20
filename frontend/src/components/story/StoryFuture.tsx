
const milestones = [
  {
    number: "1",
    title: "Drop 01",
    description:
      "A limited first run of 50 to 100 pieces, with founder stories attached.",
  },
  {
    number: "2",
    title: "Teams and events",
    description:
      "Kits for founding teams, incubators and the events you attend.",
  },
  {
    number: "3",
    title: "Builder ke Samaan",
    description:
      "The same energy for creators, indie hackers and freelancers.",
  },
];

export default function StoryFuture() {
  return (
    <section className="border-b-2 border-brand-black bg-brand-yellow px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mb-8 font-heading text-4xl font-black md:text-5xl">
          Aage kya?
        </h2>

        <div className="max-w-3xl space-y-4">
          {milestones.map((milestone) => (
            <article
              key={milestone.number}
              className="flex items-center gap-4 rounded-xl border-2 border-brand-black bg-brand-cream p-4 shadow-[var(--shadow-hard)]"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-black font-heading text-sm font-black text-brand-yellow">
                {milestone.number}
              </div>

              <div>
                <h3 className="font-heading text-base font-black md:text-lg">
                  {milestone.title}
                </h3>

                <p className="font-body text-xs font-medium leading-relaxed md:text-sm">
                  {milestone.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
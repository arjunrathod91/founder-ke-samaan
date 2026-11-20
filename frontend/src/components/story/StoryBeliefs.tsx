
const beliefs = [
  {
    number: "01",
    title: "Merch nahi, identity.",
    description:
      'You’re not buying a cap. You’re saying "I’m building something."',
    color: "bg-brand-yellow",
  },
  {
    number: "02",
    title: "Curiosity ads se bada.",
    description:
      "A good question from a stranger beats another ad. Wear the question.",
    color: "bg-brand-red",
  },
  {
    number: "03",
    title: "Har jagah, har safar mein.",
    description:
      "Flights, cafes, conferences. The brand travels where you do.",
    color: "bg-brand-teal",
  },
];

export default function StoryBeliefs() {
  return (
    <section className="border-b-2 border-brand-black bg-brand-yellow px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mb-8 font-heading text-4xl font-black md:text-5xl">
          Hum kya maante hain
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {beliefs.map((belief) => (
            <article
              key={belief.number}
              className={`${belief.color} rounded-2xl border-2 border-brand-black p-6 shadow-[var(--shadow-hard)]`}
            >
              <p className="mb-4 font-body text-xs font-bold">
                {belief.number}
              </p>

              <h3 className="mb-3 font-heading text-xl font-black leading-tight md:text-2xl">
                {belief.title}
              </h3>

              <p className="font-body text-sm font-medium leading-relaxed">
                {belief.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

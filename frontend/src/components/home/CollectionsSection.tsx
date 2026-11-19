
const collections = [
  {
    name: "Stealth Mode",
    category: "Pre-launch founders",
    description: '"I\'m building something you don\'t know yet."',
  },
  {
    name: "Day One",
    category: "First-time founders",
    description: "The beginning of the journey.",
  },
  {
    name: "First 100",
    category: "Early traction founders",
    description: "Proof of momentum.",
  },
  {
    name: "Bootstrapped",
    category: "Self-funded builders",
    description: "Pride in independence.",
  },
  {
    name: "Pitch Day",
    category: "Fundraising founders",
    description: "High-stakes founder identity.",
  },
  {
    name: "Co-Founder ke Samaan",
    category: "Founding teams",
    description: "Matching kits for the whole team.",
  },
];

export default function CollectionsSection() {
  return (
    <section id="collections" className="bg-[#17130F] px-5 py-14 text-[#FFD83D] sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1440px]">

        <h2 className="font-bricolage text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Kaun si kahani pehnoge?
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item) => (
            <article
              key={item.name}
              className="rounded-xl border border-[#FFD83D] p-5 transition-colors hover:bg-[#FFD83D] hover:text-[#17130F] sm:p-6"
            >
              <p className="font-hind text-[10px] font-semibold opacity-70">
                {item.category}
              </p>

              <h3 className="mt-2 font-bricolage text-xl font-extrabold sm:text-2xl">
                {item.name}
              </h3>

              <p className="mt-2 font-hind text-xs leading-relaxed sm:text-sm">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

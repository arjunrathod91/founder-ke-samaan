
const teamPacks = [
  {
    label: "FOR ONE FOUNDER",
    name: "Solo Founder Kit",
    price: "[PRICE]",
    features: [
      "Tee and cap",
      "NFC card and sticker pack",
      "Your own tap page",
    ],
    bg: "bg-[#FFD83D]",
  },
  {
    label: "FOR FOUNDING TEAMS",
    name: "Co-Founder ke Samaan",
    price: "[PRICE]",
    features: [
      "Matching kits for [N] people",
      "One shared tap page",
      "Team-wide lead tracking (planned)",
    ],
    bg: "bg-[#E5242A]",
  },
  {
    label: "FOR INCUBATORS AND COMMUNITIES",
    name: "Cohort Pack",
    price: "[PRICE]",
    features: [
      "Bulk kits for a whole cohort",
      "Your program&apos;s name on the design",
      "A tap page for every startup",
    ],
    bg: "bg-[#087F70]",
  },
];

export default function TeamPacks() {
  return (
    <section
      id="team-packs"
      className="bg-[#FFF9E9] px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10">
          <h2 className="text-4xl font-black tracking-tight text-[#17130F] md:text-5xl">
            Teen packs.
          </h2>

          <p className="mt-3 text-sm font-medium text-[#17130F]/70 md:text-base">
            Start with one event. Grow to a team or a whole cohort.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {teamPacks.map((pack) => (
            <div
              key={pack.name}
              className={`${pack.bg} flex flex-col rounded-2xl border-2 border-[#17130F] p-6 shadow-[5px_5px_0_#17130F] transition-transform duration-200 hover:-translate-y-1`}
            >
              <p className="text-[10px] font-black tracking-[0.15em]">
                {pack.label}
              </p>

              <h3 className="mt-4 text-2xl font-black leading-tight md:text-3xl">
                {pack.name}
              </h3>

              <p className="mt-3 text-xl font-black">
                {pack.price}
              </p>

              <ul className="mt-5 space-y-3">
                {pack.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm font-medium"
                  >
                    <span aria-hidden="true">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

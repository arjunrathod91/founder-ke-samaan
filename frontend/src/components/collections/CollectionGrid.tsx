
import Link from "next/link";

const collections = [
  {
    number: "01",
    category: "01 / PRE-LAUNCH FOUNDERS",
    title: "Stealth Mode",
    tagline: "\"I'm building something you don't know yet.\"",
    concept:
      "Blacked-out, minimal, with a small line that says to ask later. Mystery as the design.",
    button: "Notify me for Stealth Mode",
    bg: "bg-[#17120f]",
    text: "text-[#fff9eb]",
    accent: "text-[#ffdf3e]",
    shadow: "shadow-[5px_5px_0px_#df251d]",
    buttonStyle: "bg-[#ffdf3e] text-[#17120f]",
  },
  {
    number: "02",
    category: "02 / FIRST-TIME FOUNDERS",
    title: "Day One",
    tagline: "The beginning of the journey.",
    concept:
      "A bold \"Day 01\" mark with space to add your own start date. For the day you quit the plan B.",
    button: "Notify me for Day One",
    bg: "bg-[#fff9eb]",
    text: "text-[#17120f]",
    accent: "text-[#df251d]",
    shadow: "shadow-[5px_5px_0px_#17120f]",
    buttonStyle: "bg-[#17120f] text-[#ffdf3e]",
  },
  {
    number: "03",
    category: "03 / EARLY TRACTION FOUNDERS",
    title: "First 100",
    tagline: "Proof of momentum.",
    concept:
      "A big \"100\" for the first hundred users, customers or sign-ups. Wear the number you earned.",
    button: "Notify me for First 100",
    bg: "bg-[#df251d]",
    text: "text-[#fff9eb]",
    accent: "text-[#ffdf3e]",
    shadow: "shadow-[5px_5px_0px_#17120f]",
    buttonStyle: "bg-[#ffdf3e] text-[#17120f]",
  },
  {
    number: "04",
    category: "04 / SELF-FUNDED BUILDERS",
    title: "Bootstrapped",
    tagline: "Pride in independence.",
    concept:
      "Workwear-style stitching and a \"no investors, no problem\" attitude. Earned, not handed over.",
    button: "Notify me for Bootstrapped",
    bg: "bg-[#087e70]",
    text: "text-[#fff9eb]",
    accent: "text-[#ffdf3e]",
    shadow: "shadow-[5px_5px_0px_#17120f]",
    buttonStyle: "bg-[#ffdf3e] text-[#17120f]",
  },
  {
    number: "05",
    category: "05 / FUNDRAISING FOUNDERS",
    title: "Pitch Day",
    tagline: "High-stakes founder identity.",
    concept:
      "Clean, sharp and a little formal for demo days and investor rooms. Confident, not loud.",
    button: "Notify me for Pitch Day",
    bg: "bg-[#ffdf3e]",
    text: "text-[#17120f]",
    accent: "text-[#df251d]",
    shadow: "shadow-[5px_5px_0px_#17120f]",
    buttonStyle: "bg-[#17120f] text-[#ffdf3e]",
  },
  {
    number: "06",
    category: "06 / FOUNDING TEAMS",
    title: "Co-Founder ke Samaan",
    tagline: "Matching team kits.",
    concept:
      "One design, split across the team, so two or three of you read as a set when you stand together.",
    button: "See team kits",
    bg: "bg-[#fff9eb]",
    text: "text-[#17120f]",
    accent: "text-[#087e70]",
    shadow: "shadow-[5px_5px_0px_#df251d]",
    buttonStyle: "bg-[#17120f] text-[#ffdf3e]",
    href: "/teams",
  },
];

export default function CollectionsGrid() {
  return (
    <section className="bg-[#fff9eb] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.number}
              className={`flex flex-col rounded-2xl border-2 border-[#17120f] p-6 ${collection.bg} ${collection.text} ${collection.shadow}`}
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="max-w-[75%] font-hind text-[10px] font-bold tracking-wider">
                  {collection.category}
                </p>

                <span
                  className={`font-bricolage text-4xl font-extrabold ${collection.accent}`}
                >
                  {collection.number}
                </span>
              </div>

              <h2 className="font-bricolage text-2xl font-extrabold leading-tight md:text-3xl">
                {collection.title}
              </h2>

              <p className="mt-2 font-hind text-sm font-semibold">
                {collection.tagline}
              </p>

              <p className="mt-3 flex-1 font-hind text-sm leading-relaxed opacity-90">
                Concept: {collection.concept}
              </p>

              <Link
                href={collection.href || "/waitlist"}
                className={`mt-7 w-fit rounded-full border-2 border-[#17120f] px-5 py-2 font-hind text-xs font-bold transition-transform hover:-translate-y-1 ${collection.buttonStyle}`}
              >
                {collection.button}
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl font-hind text-xs leading-relaxed text-[#17120f]">
          Collection concepts are design directions for Drop 01. Final
          pieces, prints and prices will be confirmed before the drop opens.
        </p>
      </div>
    </section>
  );
}

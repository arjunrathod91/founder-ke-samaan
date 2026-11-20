
const placements = [
  "NFC card",
  "Bag tag",
  "Tee and cap",
  "Stickers (with QR)",
  "Digital tee",
];

export default function TapPlacements() {
  return (
    <section className="border-b-2 border-[#15110F] bg-[#15110F] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">

        <h2 className="font-bricolage text-4xl font-extrabold text-[#FFD83D] sm:text-5xl">
          Kahan kahan tap?
        </h2>

        <p className="mt-4 max-w-xl font-hind text-sm leading-relaxed text-[#FFF9ED] sm:text-base">
          The same tap works on anything you carry, so the
          conversation can start anywhere.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {placements.map((placement) => (
            <span
              key={placement}
              className="rounded-full border-2 border-[#FFD83D] px-5 py-2.5 font-hind text-sm font-bold text-[#FFD83D] transition-colors hover:bg-[#FFD83D] hover:text-[#15110F]"
            >
              {placement}
            </span>
          ))}
        </div>

        <p className="mt-6 font-hind text-xs text-[#FFF9ED]/70">
          Exact placements for each piece will be confirmed before Drop 01.
        </p>

      </div>
    </section>
  );
}

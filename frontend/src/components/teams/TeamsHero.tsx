
import Link from "next/link";

export default function TeamsHero() {
  return (
    <section className="border-b-2 border-[#17130F] bg-[#FFD83D] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <p className="mb-5 text-xs font-black uppercase tracking-[0.2em]">
          Teams and Events
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#17130F] md:text-7xl lg:text-8xl">
          Poori team.
          <br />
          Ek set.
        </h1>

        <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-[#17130F] md:text-lg">
          Kits for founding teams, incubator cohorts and the
          events you attend. Wear the same story, tap the same
          page, and let the room come to you.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#pilot-form"
            className="rounded-full border-2 border-[#17130F] bg-[#E5242A] px-7 py-3 text-sm font-bold text-white shadow-[3px_3px_0_#17130F] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Pilot book karo
          </Link>

          <Link
            href="#team-packs"
            className="rounded-full border-2 border-[#17130F] bg-[#FFF9E9] px-7 py-3 text-sm font-bold text-[#17130F] shadow-[3px_3px_0_#17130F] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Packs dekho
          </Link>
        </div>
      </div>
    </section>
  );
}

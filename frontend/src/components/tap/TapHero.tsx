
import Link from "next/link";

export default function TapHero() {
  return (
    <section className="overflow-hidden border-b-2 border-[#15110F] bg-[#FFD83D]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">

        {/* Left Content */}
        <div>
          <p className="mb-5 font-hind text-xs font-bold uppercase tracking-[0.2em]">
            The Tap
          </p>

          <h1 className="max-w-xl font-bricolage text-5xl font-extrabold leading-[0.95] tracking-tight text-[#15110F] sm:text-6xl lg:text-7xl">
            Tap karo,
            <br />
            story suno.
          </h1>

          <p className="mt-6 max-w-lg font-hind text-base leading-relaxed text-[#15110F] sm:text-lg">
            The name starts the conversation. The tap finishes it.
            One touch of a phone opens the page where you explain
            what you&apos;re building.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/waitlist"
              className="rounded-full border-2 border-[#15110F] bg-[#E3261E] px-7 py-3 font-hind text-sm font-bold text-white shadow-[3px_4px_0_#15110F] transition-transform hover:translate-y-1 hover:shadow-none"
            >
              Apna tap page banao
            </Link>

            <Link
              href="/shop"
              className="rounded-full border-2 border-[#15110F] bg-[#FFF9ED] px-7 py-3 font-hind text-sm font-bold text-[#15110F] shadow-[3px_4px_0_#15110F] transition-transform hover:translate-y-1 hover:shadow-none"
            >
              Smart pieces dekho
            </Link>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center py-8">

          <div className="absolute h-64 w-64 rounded-full bg-[#E3261E]/20 blur-3xl" />

          {/* NFC Card */}
          <div className="relative z-10 w-[65%] -rotate-6 rounded-2xl border-[3px] border-[#15110F] bg-[#15110F] p-5 shadow-[7px_8px_0_#E3261E] sm:p-7">
            <div className="flex items-center justify-between">
              <span className="font-bricolage text-xs font-bold tracking-widest text-[#FFD83D]">
                FOUNDER KE SAMAAN
              </span>
              <span className="text-2xl text-[#FFD83D]">)))</span>
            </div>

            <div className="mt-12">
              <div className="h-1 w-12 rounded-full bg-[#087F70]" />
              <p className="mt-3 font-bricolage text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                YOUR
                <br />
                STORY.
              </p>
            </div>
          </div>

          {/* Smartphone */}
          <div className="relative z-20 -ml-12 w-[42%] rotate-6 rounded-[2rem] border-[4px] border-[#15110F] bg-[#FFF9ED] p-3 shadow-[6px_7px_0_#15110F] sm:-ml-16">
            <div className="mx-auto mb-4 h-2 w-12 rounded-full bg-[#15110F]" />

            <p className="font-bricolage text-[9px] font-extrabold tracking-wide">
              FOUNDER KE SAMAAN
            </p>

            <div className="mt-5 rounded-lg bg-[#FFD83D] p-3">
              <p className="font-bricolage text-sm font-extrabold leading-tight sm:text-base">
                YOUR
                <br />
                STARTUP
                <br />
                NAME
              </p>
            </div>

            <div className="mt-4 space-y-2">
              <div className="rounded-full bg-[#E3261E] py-2 text-center text-[8px] font-bold text-white">
                View the deck
              </div>
              <div className="rounded-full border border-[#15110F] py-2 text-center text-[8px] font-bold">
                Book a call
              </div>
              <div className="rounded-full border border-[#15110F] py-2 text-center text-[8px] font-bold">
                Join the waitlist
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

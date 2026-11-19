
import Link from "next/link";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-[#FFD83D] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-8 rounded-2xl border-2 border-[#17130F] bg-[#DF251D] p-6 text-white shadow-[7px_7px_0_#17130F] sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">

          <div>
            <h2 className="font-bricolage text-4xl font-extrabold leading-[0.9] sm:text-5xl lg:text-6xl">
              Pehle 100 mein
              <br />
              aao.
            </h2>

            <p className="mt-4 max-w-[390px] font-hind text-sm leading-relaxed sm:text-base">
              Pehli drop limited hai. Waitlist join karo, link
              sabse pehle milega.
            </p>
          </div>

          <div>
            <label
              htmlFor="waitlist-email"
              className="mb-2 block font-hind text-xs font-bold"
            >
              Email
            </label>

            <input
              id="waitlist-email"
              type="email"
              placeholder="you@startup.com"
              className="w-full rounded-full border-2 border-[#17130F] bg-[#FFF9E9] px-5 py-3 font-hind text-sm text-[#17130F] outline-none placeholder:text-[#777] focus:ring-2 focus:ring-[#FFD83D]"
            />

            <Link
              href="mailto:hello@founderkesamaan.in?subject=Waitlist%20Registration"
              className="mt-3 block rounded-full border-2 border-[#17130F] bg-[#17130F] px-5 py-3 text-center font-hind text-sm font-bold text-[#FFD83D] transition-colors hover:bg-black"
            >
              Waitlist mein jodo
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}


import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#FFD83D]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-12">

        {/* Heading and content */}
        <div>
          <h1
            className="font-bricolage text-[clamp(4rem,9vw,7.5rem)] font-extrabold leading-[0.76] tracking-[-0.065em] text-[#17130F]"
          >
            Founder
            <br />
            ke
            <br />
            Samaan.
          </h1>

          <p className="mt-5 font-hind text-2xl font-extrabold leading-tight text-[#DF251D] sm:text-3xl">
            फाउंडर के सामान
          </p>

          <p className="mt-4 max-w-[440px] font-hind text-sm font-medium leading-relaxed text-[#17130F] sm:text-base">
            Wear what you&apos;re building. Tee, cap, bag, sticker
            aur NFC card, sab ek jagah.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="#waitlist"
              className="rounded-full border-2 border-black bg-[#DF251D] px-6 py-2.5 font-hind text-sm font-bold text-white shadow-[4px_4px_0_#17130F] transition-all hover:translate-y-1 hover:shadow-none"
            >
              Pehle 100 mein aao
            </Link>

            <Link
              href="#products"
              className="rounded-full border-2 border-black bg-[#FFF9E9] px-6 py-2.5 font-hind text-sm font-bold text-black shadow-[4px_4px_0_#17130F] transition-all hover:translate-y-1 hover:shadow-none"
            >
              Kya milega?
            </Link>
          </div>
        </div>

        {/* Product illustration */}
        <div className="relative mx-auto w-full max-w-[550px] lg:ml-auto">
          <div className="absolute -top-4 left-2 z-10 -rotate-6 rounded-xl border-2 border-black bg-[#087F6B] px-4 py-2 font-hind text-xs font-bold text-white shadow-[4px_4px_0_#17130F] sm:left-5 sm:text-sm">
            Founder ka kya samaan?
          </div>

          <div className="rotate-[2deg] rounded-[22px] border-[3px] border-black bg-[#FFF9E9] p-4 shadow-[8px_8px_0_#17130F] sm:p-6">
            <div className="flex aspect-[1.75/1] items-center justify-center">
              <svg
                viewBox="0 0 500 350"
                className="h-full w-full max-w-[440px]"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Founder Ke Samaan red T-shirt"
              >
                <path
                  d="M165 42 L90 72 L25 145 L85 195 L125 158 L125 315 L375 315 L375 158 L415 195 L475 145 L410 72 L335 42 C320 75 290 92 250 92 C210 92 180 75 165 42Z"
                  fill="#DF251D"
                  stroke="#17130F"
                  strokeWidth="8"
                  strokeLinejoin="round"
                />
                <path
                  d="M165 42 C180 75 210 92 250 92 C290 92 320 75 335 42"
                  fill="none"
                  stroke="#17130F"
                  strokeWidth="7"
                />

                <g
                  fontFamily="Arial, sans-serif"
                  fontSize="27"
                  fontWeight="900"
                  textAnchor="middle"
                >
                  <text x="250" y="175" fill="white">FOUNDER</text>
                  <text x="250" y="210" fill="#FFD83D">KE</text>
                  <text x="250" y="245" fill="white">SAMAAN</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import Link from "next/link";

function FounderNoticeboard() {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <svg
        viewBox="0 0 836 639"
        className="block h-auto w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Founder Ke Samaan community noticeboard"
      >
        {/* Vertical hanging lines */}
        <g fill="none" strokeLinecap="round" strokeWidth="5">
          <g stroke="#17130F">
            <path d="M254 151 V578" />
            <path d="M358 128 V605" />
            <path d="M464 115 V565" />
            <path d="M570 157 V605" />
            <path d="M675 115 V566" />
          </g>

          <g stroke="#FFF9E9" strokeWidth="4">
            <path d="M257 151 V583" />
            <path d="M361 128 V610" />
            <path d="M467 115 V570" />
            <path d="M573 157 V610" />
            <path d="M678 115 V571" />
          </g>
        </g>

        {/* Horizontal hanging lines */}
        <g fill="none" strokeLinecap="round" strokeWidth="5">
          <g stroke="#17130F">
            <path d="M138 232 L760 238" />
            <path d="M138 342 L760 342" />
            <path d="M145 438 L760 429" />
            <path d="M154 529 L772 529" />
          </g>

          <g stroke="#FFF9E9" strokeWidth="4">
            <path d="M143 237 L765 243" />
            <path d="M143 347 L765 347" />
            <path d="M150 443 L765 434" />
            <path d="M159 534 L777 534" />
          </g>
        </g>

        {/* Green founder sign */}
        <g transform="rotate(-6 200 155)">
          <path
            d="M38 124 H350 Q378 124 378 151 V171 Q378 197 350 197 H38 Q20 197 20 178 V146 Q20 124 38 124Z"
            fill="#17130F"
          />

          <path
            d="M38 119 H350 Q378 119 378 146 V166 Q378 192 350 192 H38 Q20 192 20 173 V141 Q20 119 38 119Z"
            fill="#087F70"
            stroke="#17130F"
            strokeWidth="4"
          />

          <text
            x="45"
            y="163"
            fill="white"
            fontSize="23"
            fontWeight="900"
            fontFamily="Bricolage Grotesque, sans-serif"
          >
            Founder ka kya samaan?
          </text>
        </g>

        {/* Red community card */}
        <g transform="rotate(4 578 277)">
          <rect
            x="390"
            y="204"
            width="377"
            height="153"
            rx="13"
            fill="#17130F"
          />

          <rect
            x="390"
            y="198"
            width="377"
            height="153"
            rx="13"
            fill="#FFF9E9"
            stroke="#17130F"
            strokeWidth="4"
          />

          <path
            d="M403 198 H754 Q767 198 767 211 V270 H390 V211 Q390 198 403 198Z"
            fill="#DF251D"
            stroke="#17130F"
            strokeWidth="3"
          />

          <text
            x="407"
            y="232"
            fill="white"
            fontSize="21"
            fontWeight="900"
            fontFamily="Bricolage Grotesque, sans-serif"
          >
            KAUN JOIN KARE?
          </text>

          <g fill="white">
            <circle cx="706" cy="225" r="6.5" />
            <circle cx="726" cy="225" r="6.5" />
            <circle cx="746" cy="225" r="6.5" />
          </g>

          <text
            x="406"
            y="288"
            fill="#17130F"
            fontSize="19"
            fontWeight="900"
            fontFamily="Bricolage Grotesque, sans-serif"
          >
            Ideas Wale. Builders Wale.
          </text>

          <text
            x="406"
            y="312"
            fill="#17130F"
            fontSize="12"
            fontWeight="700"
            fontFamily="Bricolage Grotesque, sans-serif"
          >
            Founders · Creators · Indie Builders · Teams
          </text>
        </g>

        {/* NFC symbol */}
        <g transform="translate(384 354)">
          <circle
            cx="0"
            cy="0"
            r="36"
            fill="#17130F"
            stroke="#FFF9E9"
            strokeWidth="2"
          />

          <path
            d="M-10 -13 Q-25 0 -10 13 L0 23"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M10 -13 Q25 0 10 13 L0 23"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M-4 -8 L7 8"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>

        {/* Blue brand tag */}
        <g transform="rotate(2 608 434)">
          <rect
            x="508"
            y="416"
            width="200"
            height="43"
            rx="22"
            fill="#17130F"
          />

          <rect
            x="508"
            y="410"
            width="200"
            height="43"
            rx="22"
            fill="#2855D9"
            stroke="#17130F"
            strokeWidth="2"
          />

          <circle cx="526" cy="431" r="4" fill="white" />

          <text
            x="538"
            y="435"
            fontSize="10"
            fontWeight="900"
            fontFamily="monospace"
            fill="white"
          >
            APNA BRAND. APNA STYLE.
          </text>
        </g>

        {/* Green action board */}
        <g transform="rotate(-4 350 490)">
          <rect
            x="240"
            y="435"
            width="220"
            height="112"
            rx="11"
            fill="#17130F"
          />

          <rect
            x="238"
            y="430"
            width="220"
            height="112"
            rx="11"
            fill="#087F70"
            stroke="#17130F"
            strokeWidth="4"
          />

          <text
            x="253"
            y="463"
            fill="white"
            fontSize="17"
            fontWeight="900"
            fontFamily="Bricolage Grotesque, sans-serif"
          >
            KYA KARNA HAI?
          </text>

          <path
            d="M255 481 H441"
            stroke="#17130F"
            strokeWidth="2"
          />

          <text
            x="256"
            y="507"
            fill="white"
            fontSize="14"
            fontWeight="800"
            fontFamily="Bricolage Grotesque, sans-serif"
          >
            Apna Kaam Dikhao !
          </text>
        </g>

        {/* Black push pin - custom SVG path */}
        <g transform="translate(300 55) scale(0.12)">
          {/* White offset backing */}
          <path
            d="M572 132
              Q550 125 538 151
              Q525 181 533 228
              L415 385
              Q355 378 310 405
              Q268 431 275 449
              Q276 458 282 461
              L411 565
              L287 731
              Q267 766 263 798
              Q295 778 322 753
              L443 590
              L579 697
              Q598 706 614 668
              Q635 625 611 536
              L727 381
              Q779 378 807 340
              Q819 322 800 305
              L582 137
              Q577 133 572 132 Z"
            transform="translate(12 18)"
            fill="#FFFFFF"
          />

          {/* Main pin */}
          <path
            d="M572 132
              Q550 125 538 151
              Q525 181 533 228
              L415 385
              Q355 378 310 405
              Q268 431 275 449
              Q276 458 282 461
              L411 565
              L287 731
              Q267 766 263 798
              Q295 778 322 753
              L443 590
              L579 697
              Q598 706 614 668
              Q635 625 611 536
              L727 381
              Q779 378 807 340
              Q819 322 800 305
              L582 137
              Q577 133 572 132 Z"
            fill="#000000"
          />
        </g>

        {/* Red T-shirt - custom SVG path */}
        <g transform="translate(665 475) scale(0.16)">
          {/* Black extruded shadow */}
          <path
            d="M343 230
              L203 308
              L267 406
              L339 379
              L229 781
              L543 869
              L654 474
              L665 475
              L703 532
              L806 480
              L732 343
              L660 277
              Q638 289 617 294
              Q577 300 544 288
              Q474 259 446 235
              L434 213 Z"
            transform="translate(15 20)"
            fill="#000000"
            stroke="#000000"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Main red shirt */}
          <path
            d="M343 230
              L203 308
              L267 406
              L339 379
              L229 781
              L543 869
              L654 474
              L665 475
              L703 532
              L806 480
              L732 343
              L660 277
              Q638 289 617 294
              Q577 300 544 288
              Q474 259 446 235
              L434 213 Z"
            fill="#E5242A"
            stroke="#17130F"
            strokeWidth="12"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#FFD83D]">
      <div className="mx-auto grid max-w-[1600px] items-center gap-8 px-5 py-12 sm:px-6 sm:py-14 lg:min-h-[690px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:px-10 lg:py-10 xl:px-12 2xl:px-16">

        {/* Left content */}
        <div className="relative z-10 min-w-0">
          <h1 className="font-bricolage text-[clamp(4.5rem,8.5vw,9rem)] font-bold leading-[0.95] tracking-tighter text-[#17130F]">
            Founder ke
            <br />
            Samaan.
          </h1>

          <p className="mt-5 font-hind text-3xl font-extrabold leading-tight text-[#DF251D] sm:text-4xl lg:text-5xl">
            फाउंडर के सामान
          </p>

          <p className="mt-7 max-w-[720px] font-hind text-xl font-semibold leading-relaxed text-[#17130F] sm:text-2xl lg:text-[34px] lg:leading-[1.35]">
            Wear what you&apos;re building. Tee, cap, bag, sticker
            <br className="hidden xl:block" />
            aur NFC card, sab ek jagah.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="#waitlist"
              className="rounded-full border-[3px] border-[#17130F] bg-[#DF251D] px-8 py-4 font-hind text-lg font-extrabold text-white shadow-[5px_5px_0_#17130F] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:text-xl"
            >
              Pehle 100 mein aao
            </Link>

            <Link
              href="#products"
              className="rounded-full border-[3px] border-[#17130F] bg-[#2855D9] px-8 py-4 font-hind text-lg font-extrabold text-white shadow-[5px_5px_0_#17130F] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:text-xl"
            >
              Kya milega?
            </Link>
          </div>
        </div>

        {/* Right noticeboard */}
        <div className="relative mx-auto mt-8 w-full min-w-0 max-w-[760px] lg:mt-0 lg:ml-auto">
          <FounderNoticeboard />
        </div>

      </div>
    </section>
  );
}

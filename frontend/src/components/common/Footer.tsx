
import Link from "next/link";

const exploreLinks = [
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "Tap (NFC)", href: "#tap" },
];

const companyLinks = [
  { label: "Teams and events", href: "/teams" },
  { label: "Our story", href: "#story" },
  { label: "Contact and waitlist", href: "#waitlist" },
];

export default function Footer() {
  return (
    <footer className="bg-[#17130F] px-5 pb-5 pt-12 text-[#FFD83D] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px]">

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-bricolage text-lg font-extrabold tracking-tight sm:text-xl"
            >
              FOUNDER KE SAMAAN
            </Link>

            <p className="mt-2 font-hind text-xs text-white">
              Wear what you&apos;re building.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-hind text-xs font-extrabold">
              Explore
            </h3>

            <div className="mt-3 flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-hind text-xs text-white hover:text-[#FFD83D]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-hind text-xs font-extrabold">
              Company
            </h3>

            <div className="mt-3 flex flex-col gap-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-hind text-xs text-white hover:text-[#FFD83D]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom footer */}
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/20 pt-4 sm:flex-row sm:items-center">
          <p className="font-hind text-[10px] text-white">
            Founder Kay Samaan / founderkesamaan.in
          </p>

          <p className="font-hind text-[10px] text-white">
            @founderkesamaan&nbsp;&nbsp; #FounderKeSamaan
          </p>
        </div>
      </div>
    </footer>
  );
}

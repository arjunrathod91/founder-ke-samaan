
"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Tap", href: "/tap" },
  { label: "Teams", href: "/teams" },
  { label: "Story", href: "/story" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#FFD83D] text-[#17130F]">
      {/* Announcement */}
      <div className="bg-black px-3 py-1 text-center">
        <p className="font-hind text-[10px] font-bold text-[#FFD83D]">
          Pehli drop: sirf 50 se 100 pieces. Founder stories ke saath.
        </p>
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="rounded-full border-2 border-black bg-[#FFF9E9] px-4 py-1.5 font-hind text-[11px] font-extrabold shadow-[3px_3px_0_#17130F] sm:text-xs"
        >
          FOUNDER KE SAMAAN
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-5 md:flex lg:gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-hind text-xs font-bold hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/waitlist"
            className="rounded-full border-2 border-black bg-[#DF251D] px-5 py-1.5 font-hind text-xs font-bold text-white shadow-[3px_3px_0_#17130F] hover:translate-y-0.5 hover:shadow-none"
          >
            Waitlist
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-black bg-[#FFF9E9] md:hidden"
        >
          <span className={`h-0.5 w-4 bg-black transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`h-0.5 w-4 bg-black transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile links */}
      {open && (
        <div
          id="mobile-nav"
          className="absolute left-0 top-full w-full border-y-2 border-black bg-[#FFD83D] px-6 py-6 shadow-[0_4px_0_#17130F] md:hidden"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-hind text-sm font-bold"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/waitlist"
              onClick={() => setOpen(false)}
              className="rounded-full border-2 border-black bg-[#DF251D] px-5 py-3 text-center font-hind text-sm font-bold text-white shadow-[3px_3px_0_#17130F]"
            >
              Waitlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

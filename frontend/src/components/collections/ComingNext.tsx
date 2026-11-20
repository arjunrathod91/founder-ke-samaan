
import Link from "next/link";

export default function ComingNext() {
  return (
    <section className="border-y-2 border-[#17120f] bg-[#ffdf3e] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border-2 border-[#17120f] bg-[#17120f] p-8 shadow-[6px_6px_0px_#df251d] md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <p className="mb-3 font-hind text-xs font-bold uppercase tracking-[0.18em] text-[#ffdf3e]">
              Coming Next / 07
            </p>

            <h2 className="font-bricolage text-3xl font-extrabold leading-tight text-[#ffdf3e] md:text-5xl">
              Builder ke Samaan
            </h2>

            <p className="mt-4 max-w-xl font-hind text-sm leading-relaxed text-[#fff9eb] md:text-base">
              For creators, indie hackers and freelancers who build in
              public but don&apos;t call themselves founders. Same
              energy, wider tribe.
            </p>
          </div>

          <Link
            href="/waitlist"
            className="shrink-0 rounded-full border-2 border-[#17120f] bg-[#ffdf3e] px-6 py-3 font-hind text-sm font-bold text-[#17120f] transition-transform hover:-translate-y-1 hover:shadow-[3px_3px_0px_#df251d]"
          >
            Tell me when it&apos;s live
          </Link>
        </div>
      </div>
    </section>
  );
}

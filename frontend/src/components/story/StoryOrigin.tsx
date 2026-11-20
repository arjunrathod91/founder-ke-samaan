
export default function StoryOrigin() {
  return (
    <section className="border-b-2 border-brand-black bg-brand-black px-6 py-16 text-brand-cream md:py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <h2 className="font-heading text-4xl font-black leading-[0.95] text-brand-yellow md:text-5xl">
            Shuruaat
            <br />
            kaise hui
          </h2>

          <p className="mt-5 max-w-sm font-body text-sm font-medium leading-relaxed">
            A short, honest note from the founders goes here,
            in their own words.
          </p>
        </div>

        {/* Founders Story */}
        <div className="rounded-2xl border-2 border-brand-yellow p-6 md:p-8">
          <p className="font-body text-sm font-medium leading-relaxed">
            [FOUNDERS&apos; STORY: why you started, what you noticed
            at events and online, and the first idea.]
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            {/* Founder 1 */}
            <div className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow font-heading text-lg font-black text-brand-black">
                F
              </div>

              <div>
                <h3 className="font-heading text-sm font-black">
                  [FOUNDER NAME]
                </h3>
                <p className="font-body text-xs text-brand-cream/70">
                  [Role]
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow font-heading text-lg font-black text-brand-black">
                F
              </div>

              <div>
                <h3 className="font-heading text-sm font-black">
                  [FOUNDER NAME]
                </h3>
                <p className="font-body text-xs text-brand-cream/70">
                  [Role]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

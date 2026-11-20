
export default function StoryHero() {
  return (
    <section className="border-b-2 border-brand-black bg-brand-yellow px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Hero Content */}
        <div>
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.2em]">
            Our Story
          </p>

          <h1 className="font-heading text-6xl font-black leading-[0.88] tracking-tight md:text-8xl">
            Naam ki
            <br />
            kahani.
          </h1>

          <p className="mt-5 max-w-md font-body text-sm font-medium leading-relaxed md:text-base">
            Everyone building something starts to feel like the
            founder of their own life. We made the things that let
            you say so, out loud.
          </p>
        </div>

        {/* Samaan Definition Card */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-xs rotate-[-3deg] rounded-2xl border-2 border-brand-black bg-brand-cream px-8 py-7 text-center shadow-[var(--shadow-hard)]">
            <p className="font-body text-sm font-bold uppercase tracking-wider">
              SAMAAN (सामान)
            </p>

            <p className="mt-2 font-heading text-2xl font-black leading-tight md:text-3xl">
              things, stuff,
              <br />
              belongings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

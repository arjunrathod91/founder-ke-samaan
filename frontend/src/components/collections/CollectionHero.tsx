
export default function CollectionsHero() {
  return (
    <section className="border-b-2 border-brand-black bg-brand-yellow">
      <div className="mx-auto max-w-[var(--container-width)] px-6 py-16 md:py-20">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.18em] text-brand-black">
          Collections
        </p>

        <h1 className="max-w-3xl font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-brand-black md:text-7xl">
          Kaun si kahani
          <br />
          pehnoge?
        </h1>

        <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-brand-black md:text-lg">
          Every founder is in a different chapter. Each collection marks
          one, so what you wear says where you are.
        </p>
      </div>
    </section>
  );
}


export default function StoryMeaning() {
  return (
    <section className="border-b-2 border-brand-black bg-brand-cream px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        {/* Heading */}
        <div>
          <h2 className="font-heading text-4xl font-black leading-[0.95] md:text-5xl">
            Naam ka
            <br />
            matlab
          </h2>
        </div>

        {/* Description */}
        <div className="space-y-4 font-body text-sm font-medium leading-relaxed md:text-base">
          <p>
            Founder ke Samaan means a founder&apos;s stuff: the things a
            founder carries, wears and shows. It sounds like phrases
            we already say, &quot;office ke samaan&quot;,
            &quot;gym ke samaan&quot;, &quot;travel ke samaan&quot;.
          </p>

          <p>
            We kept it in Hinglish on purpose. It is familiar, a
            little funny, and it makes a stranger ask,
            &quot;Founder ka kya samaan?&quot; That question is where
            every conversation starts.
          </p>

          <p>
            Say it as &quot;Founder Kay Samaan&quot;. We spell it out
            in full everywhere so it is easy to find, share and
            remember.
          </p>
        </div>
      </div>
    </section>
  );
}

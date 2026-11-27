
"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

const collections = [
  {
    number: "01",
    category: "01 / PRE-LAUNCH FOUNDERS",
    title: "Stealth Mode",
    tagline: "\"I'm building something you don't know yet.\"",
    concept:
      "Blacked-out, minimal, with a small line that says to ask later. Mystery as the design.",
    button: "Notify me for Stealth Mode",
    bg: "bg-[#17120f]",
    text: "text-[#fff9eb]",
    accent: "text-[#ffdf3e]",
    shadow: "shadow-[5px_5px_0px_#df251d]",
    buttonStyle: "bg-[#ffdf3e] text-[#17120f]",
  },
  {
    number: "02",
    category: "02 / FIRST-TIME FOUNDERS",
    title: "Day One",
    tagline: "The beginning of the journey.",
    concept:
      "A bold \"Day 01\" mark with space to add your own start date. For the day you quit the plan B.",
    button: "Notify me for Day One",
    bg: "bg-[#fff9eb]",
    text: "text-[#17120f]",
    accent: "text-[#df251d]",
    shadow: "shadow-[5px_5px_0px_#17120f]",
    buttonStyle: "bg-[#17120f] text-[#ffdf3e]",
  },
  {
    number: "03",
    category: "03 / EARLY TRACTION FOUNDERS",
    title: "First 100",
    tagline: "Proof of momentum.",
    concept:
      "A big \"100\" for the first hundred users, customers or sign-ups. Wear the number you earned.",
    button: "Notify me for First 100",
    bg: "bg-[#df251d]",
    text: "text-[#fff9eb]",
    accent: "text-[#ffdf3e]",
    shadow: "shadow-[5px_5px_0px_#17120f]",
    buttonStyle: "bg-[#ffdf3e] text-[#17120f]",
  },
  {
    number: "04",
    category: "04 / SELF-FUNDED BUILDERS",
    title: "Bootstrapped",
    tagline: "Pride in independence.",
    concept:
      "Workwear-style stitching and a \"no investors, no problem\" attitude. Earned, not handed over.",
    button: "Notify me for Bootstrapped",
    bg: "bg-[#087e70]",
    text: "text-[#fff9eb]",
    accent: "text-[#ffdf3e]",
    shadow: "shadow-[5px_5px_0px_#17120f]",
    buttonStyle: "bg-[#ffdf3e] text-[#17120f]",
  },
  {
    number: "05",
    category: "05 / FUNDRAISING FOUNDERS",
    title: "Pitch Day",
    tagline: "High-stakes founder identity.",
    concept:
      "Clean, sharp and a little formal for demo days and investor rooms. Confident, not loud.",
    button: "Notify me for Pitch Day",
    bg: "bg-[#ffdf3e]",
    text: "text-[#17120f]",
    accent: "text-[#df251d]",
    shadow: "shadow-[5px_5px_0px_#17120f]",
    buttonStyle: "bg-[#17120f] text-[#ffdf3e]",
  },
  {
    number: "06",
    category: "06 / FOUNDING TEAMS",
    title: "Co-Founder ke Samaan",
    tagline: "Matching team kits.",
    concept:
      "One design, split across the team, so two or three of you read as a set when you stand together.",
    button: "See team kits",
    bg: "bg-[#fff9eb]",
    text: "text-[#17120f]",
    accent: "text-[#087e70]",
    shadow: "shadow-[5px_5px_0px_#df251d]",
    buttonStyle: "bg-[#17120f] text-[#ffdf3e]",
    href: "/teams",
  },
];

type Collection = (typeof collections)[number];

export default function CollectionsGrid() {
  const [selectedCollection, setSelectedCollection] =
    useState<Collection | null>(null);

  const [email, setEmail] = useState("");
  const [building, setBuilding] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function openModal(collection: Collection) {
    setSelectedCollection(collection);
    setEmail("");
    setBuilding("");
    setMessage("");
    setIsSuccess(false);
  }

  function closeModal() {
    if (isSubmitting) return;

    setSelectedCollection(null);
    setEmail("");
    setBuilding("");
    setMessage("");
    setIsSuccess(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedCollection || isSubmitting) return;

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedBuilding = building.trim();

    if (!trimmedEmail || !trimmedBuilding) {
      setMessage("Please fill in all the fields.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const { error } = await supabase
        .from("collection_requests")
        .insert({
          collection_number: selectedCollection.number,
          collection_name: selectedCollection.title,
          email: trimmedEmail,
          building: trimmedBuilding,
        });

      if (error) throw error;

      setIsSuccess(true);
      setMessage("Your request has been submitted successfully!");
      setEmail("");
      setBuilding("");
    } catch (error) {
      console.error("Collection request submission failed:", error);
      setMessage(
        "We couldn't submit your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-[#fff9eb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <article
                key={collection.number}
                className={`flex flex-col rounded-2xl border-2 border-[#17120f] p-6 ${collection.bg} ${collection.text} ${collection.shadow}`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <p className="max-w-[75%] font-hind text-[10px] font-bold tracking-wider">
                    {collection.category}
                  </p>

                  <span
                    className={`font-bricolage text-4xl font-extrabold ${collection.accent}`}
                  >
                    {collection.number}
                  </span>
                </div>

                <h2 className="font-bricolage text-2xl font-extrabold leading-tight md:text-3xl">
                  {collection.title}
                </h2>

                <p className="mt-2 font-hind text-sm font-semibold">
                  {collection.tagline}
                </p>

                <p className="mt-3 flex-1 font-hind text-sm leading-relaxed opacity-90">
                  Concept: {collection.concept}
                </p>

                {collection.href ? (
                  <a
                    href={collection.href}
                    className={`mt-7 w-fit rounded-full border-2 border-[#17120f] px-5 py-2 font-hind text-xs font-bold transition-transform hover:-translate-y-1 ${collection.buttonStyle}`}
                  >
                    {collection.button}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => openModal(collection)}
                    className={`mt-7 w-fit rounded-full border-2 border-[#17120f] px-5 py-2 font-hind text-xs font-bold transition-transform hover:-translate-y-1 ${collection.buttonStyle}`}
                  >
                    {collection.button}
                  </button>
                )}
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-3xl font-hind text-xs leading-relaxed text-[#17120f]">
            Collection concepts are design directions for Drop 01.
            Final pieces, prints and prices will be confirmed before
            the drop opens.
          </p>
        </div>
      </section>

      {/* Collection Request Modal */}
      {selectedCollection && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="collection-modal-title"
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border-2 border-[#17120f] bg-[#fff9eb] p-6 shadow-[7px_7px_0px_#17120f] sm:p-8"
          >
            <button
              type="button"
              onClick={closeModal}
              disabled={isSubmitting}
              aria-label="Close modal"
              className="absolute right-5 top-5 text-2xl font-bold text-[#17120f] disabled:opacity-50"
            >
              &times;
            </button>

            <p className="font-hind text-xs font-bold uppercase tracking-[0.15em] text-[#087e70]">
              Collection Interest
            </p>

            <h2
              id="collection-modal-title"
              className="mt-3 pr-8 font-bricolage text-3xl font-extrabold text-[#17120f]"
            >
              {selectedCollection.title}
            </h2>

            <p className="mt-2 font-hind text-sm text-[#17120f]/70">
              Interested in this collection? Tell us a little about
              yourself. We&apos;ll notify you when it&apos;s available.
            </p>

            {isSuccess ? (
              <div className="mt-6 rounded-xl border-2 border-[#17120f] bg-[#ffdf3e] p-5">
                <p className="font-bricolage text-xl font-bold text-[#17120f]">
                  Thank you!
                </p>

                <p className="mt-2 font-hind text-sm text-[#17120f]">
                  {message}
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-5 w-full rounded-full border-2 border-[#17120f] bg-[#17120f] px-5 py-3 font-hind text-sm font-bold text-white transition hover:opacity-90"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
              >
                <div>
                  <label
                    htmlFor="collection-request-email"
                    className="mb-2 block font-hind text-sm font-bold text-[#17120f]"
                  >
                    Your email
                  </label>

                  <input
                    id="collection-request-email"
                    type="email"
                    placeholder="you@startup.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border-2 border-[#17120f] bg-white px-4 py-3 font-hind text-sm text-[#17120f] outline-none focus:ring-2 focus:ring-[#ffdf3e]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="collection-request-building"
                    className="mb-2 block font-hind text-sm font-bold text-[#17120f]"
                  >
                    What are you building?
                  </label>

                  <textarea
                    id="collection-request-building"
                    placeholder="Tell us about your startup, project or idea..."
                    value={building}
                    onChange={(event) => setBuilding(event.target.value)}
                    required
                    rows={4}
                    maxLength={1000}
                    className="w-full resize-none rounded-lg border-2 border-[#17120f] bg-white px-4 py-3 font-hind text-sm text-[#17120f] outline-none focus:ring-2 focus:ring-[#ffdf3e]"
                  />
                </div>

                {message && (
                  <p role="alert" className="text-sm font-bold text-[#df251d]">
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full border-2 border-[#17120f] bg-[#ffdf3e] px-5 py-3 font-hind text-sm font-bold text-[#17120f] shadow-[3px_3px_0px_#17120f] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Notify me"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}


"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does it work on every phone?",
    answer:
      "It works on most recent smartphones that support NFC. For everything else, each piece also carries a QR code, so anyone with a camera can reach your page.",
  },
  {
    question: "Do people need to install an app?",
    answer:
      "No. A tap or a scan simply opens your page in the phone browser. There is nothing to download or sign up for.",
  },
  {
    question: "Can I change what the page shows later?",
    answer:
      "Yes. The card or tag points to your page, so you edit the page instead of the product. Update your deck, your offer or your one-liner whenever things change.",
  },
  {
    question: "Will I see who tapped?",
    answer:
      "Tap and lead tracking are part of the Event Kit for teams and events, where taps, leads and follow-ups land in one dashboard. See the Teams page for details.",
  },
  {
    question: "What does a stranger see?",
    answer:
      "Only what you choose to put on your page. Nothing else about you is shared by the tap itself.",
  },
];

export default function TapFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="border-b-2 border-[#15110F] bg-[#FFD83D] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-4xl">

        <h2 className="font-bricolage text-4xl font-extrabold text-[#15110F] sm:text-5xl">
          Sawaal jawaab
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border-[2px] border-[#15110F] bg-[#FFF9ED] shadow-[3px_3px_0_#15110F]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer" 
                >
                  <span className="font-bricolage text-base font-bold text-[#15110F] sm:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#15110F] font-bold text-[#FFD83D]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#15110F]/20 px-5 py-4">
                    <p className="font-hind text-sm leading-relaxed text-[#15110F] sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

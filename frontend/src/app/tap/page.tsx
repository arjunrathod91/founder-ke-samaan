
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import TapHero from "@/components/tap/TapHero";
import HowItWorks from "@/components/tap/HowItWorks";
import TapPagePreview from "@/components/tap/TapPagePreview";
import TapPlacements from "@/components/tap/TapPlacements";
import TapFAQ from "@/components/tap/TapFAQ";
import TapCTA from "@/components/tap/TapCTA";

export default function TapPage() {
  return (
    <main className="min-h-screen">
      <TapHero />

      <HowItWorks />

      <TapPagePreview />

      <TapPlacements />

      <TapFAQ />

      <TapCTA />
    </main>
  );
}

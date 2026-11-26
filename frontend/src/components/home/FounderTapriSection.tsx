
"use client";

import {
  useCallback,
  useEffect,
  useState,
  type FormEvent,
} from "react";
import { createClient } from "@/lib/supabase/client";

// ==========================================
// CONSTANTS
// ==========================================

const tabs = [
  "Founders",
  "Launches",
  "Discussions",
  "Updates",
  "Polls",
] as const;

type Tab = (typeof tabs)[number];

type Founder = {
  id: string;
  name: string;
  building: string | null;
  industry: string | null;
  looking_for: string | string[] | null;
  created_at: string;
};

const industries = [
  "Fintech",
  "SaaS",
  "AI / Machine Learning",
  "EdTech",
  "HealthTech",
  "E-commerce",
  "FoodTech",
  "Developer Tools",
  "Marketing",
  "D2C",
  "Social Impact",
  "Other",
];

const lookingForOptions = [
  "Co-founder",
  "Investors",
  "Early Customers",
  "Mentors",
  "Developers",
  "Designers",
  "Collaborators",
  "Networking",
];

const avatarColors = [
  "#087F70",
  "#E5242A",
  "#2855D9",
  "#A45A21",
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function getLookingForTags(
  value: Founder["looking_for"]
): string[] {
  if (Array.isArray(value)) {
    return value.filter(
      (item): item is string => typeof item === "string"
    );
  }

  if (typeof value !== "string" || !value.trim()) {
    return [];
  }

  // Also support JSON-encoded arrays.
  try {
    const parsed: unknown = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed.filter(
        (item): item is string => typeof item === "string"
      );
    }
  } catch {
    // Normal text value.
  }

  return [value];
}

function formatRelativeTime(date: string) {
  const diff = Date.now() - new Date(date).getTime();

  if (!Number.isFinite(diff)) return "Recently";

  const minutes = Math.floor(diff / 60000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);

  if (hours < 24) return `${hours} hr ago`;

  const days = Math.floor(hours / 24);

  if (days < 7) return `${days} days ago`;

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ==========================================
// FOUNDER CARD
// ==========================================

function FounderCard({
  founder,
  index,
}: {
  founder: Founder;
  index: number;
}) {
  const color = avatarColors[index % avatarColors.length];
  const lookingFor = getLookingForTags(founder.looking_for);

  return (
    <article className="rounded-[20px] border-[3px] border-[#17130F] bg-[#FFF9E9] p-3.5 sm:p-4">

      {/* FOUNDER DETAILS */}

      <div className="flex items-center gap-3.5">

        <div
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#17130F] text-lg font-extrabold text-white"
          style={{ backgroundColor: color }}
        >
          {getInitials(founder.name)}
        </div>

        <div className="min-w-0">
          <h3 className="font-bricolage text-lg font-extrabold leading-tight sm:text-xl">
            {founder.name}
          </h3>

          <p className="mt-0.5 font-hind text-sm text-[#625D53]">
            {formatRelativeTime(founder.created_at)}
          </p>
        </div>

      </div>

      {/* WHAT THEY ARE BUILDING */}

      {founder.building && (
        <p className="mt-2.5 break-words font-hind text-base font-medium sm:text-lg">
          {founder.building}
        </p>
      )}

      {/* INDUSTRY */}

      {founder.industry && (
        <div className="mt-3">
          <span className="rounded-full border-2 border-[#17130F] bg-[#FFD83D] px-3 py-1 font-hind text-xs font-bold sm:text-sm">
            {founder.industry}
          </span>
        </div>
      )}

      {/* LOOKING FOR */}

      {lookingFor.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">

          {lookingFor.map((item, itemIndex) => (
            <span
              key={`${item}-${itemIndex}`}
              className="rounded-full border-2 border-[#17130F] bg-[#087F70] px-3 py-1 font-hind text-xs font-bold text-white sm:text-sm"
            >
              Looking for: {item}
            </span>
          ))}

        </div>
      )}

    </article>
  );
}

// ==========================================
// EMPTY STATE
// ==========================================

function EmptyState({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="px-4 py-16 text-center">

      <h3 className="font-bricolage text-xl font-extrabold">
        {title}
      </h3>

      <p className="mt-2 font-hind text-sm text-[#625D53]">
        {message}
      </p>

    </div>
  );
}

// ==========================================
// JOIN FOUNDER TAPRI FORM
// ==========================================

function JoinFounderForm({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [name, setName] = useState("");
  const [building, setBuilding] = useState("");
  const [industry, setIndustry] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ----------------------------------------
  // FORM SUBMISSION
  // ----------------------------------------

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!consent) {
      setError("Please provide consent to display your profile.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const supabase = createClient();

      const { error: insertError } = await supabase
        .from("founders")
        .insert({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          building: building.trim(),
          industry,
          looking_for: [lookingFor],
          consent: true,
        });

      if (insertError) {
        throw insertError;
      }

      setSubmitted(true);

      // Refresh the public founder list.
      onSuccess();

    } catch (err) {
      console.error("Founder registration error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );

    } finally {
      setSubmitting(false);
    }
  };

  // ----------------------------------------
  // FORM STYLES
  // ----------------------------------------

  const inputClass =
    "w-full rounded-full border-[3px] border-[#17130F] bg-[#FFF9E9] px-5 py-3.5 font-hind text-base text-[#17130F] outline-none transition placeholder:text-[#817B70] focus:ring-2 focus:ring-[#FFD83D] sm:text-lg";

  const labelClass =
    "mb-2 block font-hind text-sm font-extrabold text-white sm:text-base";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#17130F]/80 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(e) => {
        if (
          e.target === e.currentTarget &&
          !submitting
        ) {
          onClose();
        }
      }}
    >

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-founder-title"
        className="relative my-auto grid w-full max-w-[1100px] grid-cols-1 overflow-hidden rounded-[28px] border-[3px] border-[#17130F] bg-[#E5242A] shadow-[8px_8px_0_#17130F] lg:grid-cols-2"
      >

        {/* LEFT SIDE */}

        <div className="flex flex-col justify-between p-6 text-white sm:p-10 lg:p-12">

          <div>

            <div className="mb-8 inline-flex rounded-full border-2 border-white/50 px-4 py-2 font-hind text-xs font-bold uppercase tracking-wider">
              Founder Ke Samaan
            </div>

            <h2
              id="join-founder-title"
              className="font-bricolage text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Pehle 100 mein aao.
            </h2>

            <p className="mt-7 max-w-md font-hind text-lg font-semibold leading-relaxed sm:text-xl">
              Apna naam, kya bana rahe ho, aur kya chahiye.
              Consent do, aur aap seedhe Founder Tapri par
              dikhenge.
            </p>

          </div>

          <div className="mt-10 hidden lg:block">

            <p className="font-bricolage text-2xl font-extrabold text-[#FFD83D]">
              Build together. Grow together.
            </p>

            <p className="mt-2 font-hind text-sm text-white/80">
              Every great startup begins with a conversation.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative p-6 sm:p-10 lg:p-12">

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
            aria-label="Close form"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xl font-bold text-white transition hover:bg-white hover:text-[#E5242A] disabled:opacity-50"
          >
            ×
          </button>

          {/* SUCCESS STATE */}

          {submitted ? (

            <div className="flex min-h-[500px] flex-col items-center justify-center text-center text-white">

              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#17130F] bg-[#FFD83D] text-4xl font-extrabold text-[#17130F]">
                ✓
              </div>

              <h3 className="font-bricolage text-4xl font-extrabold">
                Welcome to the Tapri!
              </h3>

              <p className="mt-4 max-w-sm font-hind text-lg">
                Your founder profile has been submitted.
                See you at Founder Tapri!
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-8 rounded-full border-[3px] border-[#17130F] bg-[#17130F] px-10 py-4 font-hind font-extrabold text-[#FFD83D] transition hover:bg-[#FFD83D] hover:text-[#17130F]"
              >
                Back to Founder Tapri
              </button>

            </div>

          ) : (

            <>

              {/* FORM HEADING */}

              <div className="mb-7 pr-12">

                <h3 className="font-bricolage text-3xl font-extrabold text-white">
                  Join the community.
                </h3>

                <p className="mt-1 font-hind text-sm text-white/80">
                  Tell us a little about yourself and what
                  you&apos;re building.
                </p>

              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* NAME */}

                <div>
                  <label
                    htmlFor="founder-name"
                    className={labelClass}
                  >
                    Name
                  </label>

                  <input
                    id="founder-name"
                    type="text"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                    className={inputClass}
                  />
                </div>

                {/* BUILDING */}

                <div>
                  <label
                    htmlFor="founder-building"
                    className={labelClass}
                  >
                    What are you building?
                  </label>

                  <input
                    id="founder-building"
                    type="text"
                    required
                    maxLength={200}
                    value={building}
                    onChange={(e) => setBuilding(e.target.value)}
                    placeholder="One line about your startup"
                    className={inputClass}
                  />
                </div>

                {/* INDUSTRY */}

                <div>
                  <label
                    htmlFor="founder-industry"
                    className={labelClass}
                  >
                    Industry
                  </label>

                  <select
                    id="founder-industry"
                    required
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>

                    {industries.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}

                  </select>
                </div>

                {/* LOOKING FOR */}

                <div>
                  <label
                    htmlFor="founder-looking"
                    className={labelClass}
                  >
                    Looking for
                  </label>

                  <select
                    id="founder-looking"
                    required
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      What are you looking for?
                    </option>

                    {lookingForOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}

                  </select>
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="founder-email"
                    className={labelClass}
                  >
                    Email
                  </label>

                  <input
                    id="founder-email"
                    type="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@startup.com"
                    autoComplete="email"
                    className={inputClass}
                  />
                </div>

                {/* CONSENT */}

                <label className="flex cursor-pointer items-start gap-3 py-1 font-hind text-sm font-bold leading-relaxed text-white">

                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-5 w-5 shrink-0 accent-[#FFD83D]"
                  />

                  <span>
                    Haan, mera naam aur startup details Founder
                    Tapri par public dikhao.
                  </span>

                </label>

                {/* ERROR */}

                {error && (
                  <p
                    role="alert"
                    className="rounded-xl border-2 border-white bg-[#17130F] p-3 font-hind text-sm font-semibold text-white"
                  >
                    {error}
                  </p>
                )}

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full border-[3px] border-[#17130F] bg-[#17130F] px-5 py-4 font-bricolage text-lg font-extrabold text-[#FFD83D] transition hover:bg-[#FFD83D] hover:text-[#17130F] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? "Joining..."
                    : "Founder Tapri mein judo"}
                </button>

                <p className="text-center font-hind text-xs text-white/70">
                  Your email will not be displayed publicly.
                </p>

              </form>

            </>
          )}

        </div>

      </div>

    </div>
  );
}

// ==========================================
// MAIN FOUNDER TAPRI COMPONENT
// ==========================================

export default function FounderTapriSection() {

  const [activeTab, setActiveTab] = useState<Tab>("Founders");

  const [founders, setFounders] = useState<Founder[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const [showJoinForm, setShowJoinForm] = useState(false);

  // ----------------------------------------
  // FETCH PUBLIC FOUNDERS
  // ----------------------------------------

  const fetchFounders = useCallback(async () => {

    const supabase = createClient();

    setError("");

    try {

      const { data, error } = await supabase
        .from("public_founders")
        .select(`
          id,
          name,
          building,
          industry,
          looking_for,
          created_at
        `)
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setFounders((data || []) as Founder[]);

    } catch (err) {

      console.error("Error fetching founders:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while fetching founders."
      );

    } finally {

      setLoading(false);
      setRefreshing(false);

    }

  }, []);

  // ----------------------------------------
  // INITIAL FETCH
  // ----------------------------------------

  useEffect(() => {
    fetchFounders();
  }, [fetchFounders]);

  // ----------------------------------------
  // STATISTICS
  // ----------------------------------------

  const totalFounders = founders.length;

  const last24Hours = founders.filter((founder) => {

    const createdAt = new Date(founder.created_at).getTime();

    return (
      Number.isFinite(createdAt) &&
      createdAt >= Date.now() - 24 * 60 * 60 * 1000 &&
      createdAt <= Date.now()
    );

  }).length;

  // ----------------------------------------
  // REFRESH
  // ----------------------------------------

  const handleRefresh = () => {
    setRefreshing(true);
    fetchFounders();
  };

  // ----------------------------------------
  // RENDER
  // ----------------------------------------

  return (

    <section className="bg-[#FFD83D] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">

      <div className="mx-auto max-w-[1600px]">

        {/* SECTION INTRO */}

        <div className="mb-10 flex flex-col items-start justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">

          <div>

            <p className="mb-4 inline-block rounded-full border-2 border-[#17130F] bg-[#FFF9E9] px-4 py-2 font-hind text-sm font-extrabold">
              THE FOUNDERS&apos; CORNER
            </p>

            <h2 className="font-bricolage text-5xl font-extrabold leading-[0.98] tracking-tight text-[#17130F] sm:text-6xl lg:text-[76px]">
              Tapri pe kya
              <br />
              chal raha hai?
            </h2>

            <p className="mt-5 max-w-xl font-hind text-xl font-medium leading-relaxed text-[#17130F] sm:text-2xl">
              A peek into the founders, launches and
              conversations happening here.
            </p>

          </div>

          {/* JOIN BUTTON */}

          <button
            type="button"
            onClick={() => setShowJoinForm(true)}
            className="group flex shrink-0 items-center gap-3 rounded-full border-[3px] border-[#17130F] bg-[#17130F] px-7 py-4 font-bricolage text-base font-extrabold text-[#FFD83D] shadow-[5px_5px_0_#17130F] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:px-9 sm:py-5 sm:text-lg"
          >
            Join Founder Ki Tapri

            <span className="text-xl transition-transform group-hover:translate-x-1">
              →
            </span>

          </button>

        </div>

        {/* FOUNDER TAPRI DASHBOARD */}

        <div className="overflow-hidden rounded-[28px] border-[3px] border-[#17130F] bg-[#FFF9E9] shadow-[10px_10px_0_#17130F]">

          {/* HEADER */}

          <header className="flex items-center justify-between border-b-[3px] border-[#17130F] bg-[#17130F] px-5 py-4 sm:px-6">

            <h3 className="font-bricolage text-xl font-extrabold text-[#FFD83D]">
              Founder Tapri
            </h3>

            <div className="flex items-center gap-2 font-hind text-sm font-bold text-white">

              <span className="h-3 w-3 rounded-full bg-[#087F70]" />

              Live

            </div>

          </header>

          {/* STATISTICS */}

          <div className="grid grid-cols-2 border-b-[3px] border-[#17130F]">

            <div className="border-r-[3px] border-[#17130F] bg-[#FFF9E9] px-4 py-5 sm:px-6 sm:py-6">

              <p className="font-bricolage text-5xl font-extrabold leading-none sm:text-7xl">
                {loading ? "--" : totalFounders}
              </p>

              <p className="mt-2 font-hind text-sm text-[#625D53] sm:text-base">
                founders joined
              </p>

            </div>

            <div className="bg-[#2855D9] px-4 py-5 text-white sm:px-6 sm:py-6">

              <p className="font-bricolage text-5xl font-extrabold leading-none sm:text-7xl">
                {loading ? "--" : last24Hours}
              </p>

              <p className="mt-2 font-hind text-sm sm:text-base">
                joined in last 24 hours
              </p>

            </div>

          </div>

          {/* TABS */}

          <nav className="grid grid-cols-5 border-b-[3px] border-[#17130F]">

            {tabs.map((tab) => (

              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`flex min-h-[58px] items-center justify-center border-r-2 border-[#17130F] px-1 py-2 font-hind text-[10px] font-extrabold last:border-r-0 sm:text-sm lg:text-base ${
                  activeTab === tab
                    ? "bg-[#17130F] text-[#FFD83D]"
                    : "bg-[#FFF9E9] text-[#17130F] hover:bg-[#FFD83D]"
                }`}
              >
                {tab}
              </button>

            ))}

          </nav>

          {/* TAB CONTENT */}

          <div className="max-h-[520px] min-h-[200px] overflow-y-auto bg-white">

            {/* FOUNDERS */}

            {activeTab === "Founders" && (

              <div className="space-y-3.5 p-3.5 sm:p-4">

                {loading ? (

                  <EmptyState
                    title="Loading founders..."
                    message="Fetching the latest founder registrations."
                  />

                ) : error ? (

                  <EmptyState
                    title="Unable to load founders"
                    message={error}
                  />

                ) : founders.length === 0 ? (

                  <EmptyState
                    title="No founders yet!"
                    message="Be the first to join Founder Ke Samaan."
                  />

                ) : (

                  founders.map((founder, index) => (

                    <FounderCard
                      key={founder.id}
                      founder={founder}
                      index={index}
                    />

                  ))

                )}

              </div>

            )}

            {/* OTHER TABS */}

            {activeTab !== "Founders" && (

              <EmptyState
                title={`${activeTab} coming soon!`}
                message="We're working on this section. Stay tuned!"
              />

            )}

          </div>

          {/* FOOTER */}

          <footer className="flex flex-wrap items-center justify-between gap-3 border-t-[3px] border-[#17130F] bg-[#FFF9E9] px-4 py-3.5 sm:px-5">

            <p className="font-hind text-xs font-medium text-[#625D53] sm:text-sm">
              Showing registered founders from our community.
            </p>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={loading || refreshing}
              className="font-hind text-xs font-bold text-[#087F70] transition hover:underline disabled:cursor-not-allowed disabled:opacity-50"
            >
              {refreshing ? "Refreshing..." : "↻ Refresh"}
            </button>

          </footer>

        </div>

      </div>

      {/* JOIN FORM MODAL */}

      {showJoinForm && (

        <JoinFounderForm
          onClose={() => setShowJoinForm(false)}
          onSuccess={fetchFounders}
        />

      )}

    </section>

  );
}

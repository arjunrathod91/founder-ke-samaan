
"use client";

import { useState } from "react";

const tabs = [
  "Founders",
  "Launches",
  "Discussions",
  "Updates",
  "Polls",
] as const;

type Tab = (typeof tabs)[number];

const founders = [
  {
    initials: "AM",
    name: "Aarav Mehta",
    time: "12 min ago",
    idea: "Rent-a-tailor app for Pune hostels",
    industry: "D2C and retail",
    lookingFor: "Looking for: First customers",
    color: "#087F70",
  },
  {
    initials: "SI",
    name: "Sneha Iyer",
    time: "48 min ago",
    idea: "AI notes for school teachers",
    industry: "Edtech",
    lookingFor: "Looking for: Co-founder",
    color: "#E5242A",
  },
  {
    initials: "RV",
    name: "Rohan Verma",
    time: "2 hr ago",
    idea: "UPI-based bill splitter for flatmates",
    industry: "Fintech",
    lookingFor: "Looking for: Funding",
    color: "#087F70",
  },
];

const launches = [
  {
    initials: "PK",
    name: "Priya Kulkarni",
    time: "25 min ago",
    title: "Launched: LocalKart",
    description: "A platform connecting local shops with nearby customers.",
    category: "E-commerce",
    color: "#087F70",
  },
  {
    initials: "AS",
    name: "Aditya Shah",
    time: "1 hr ago",
    title: "Launched: DevTrack",
    description: "A simple tool to track your coding journey and projects.",
    category: "SaaS",
    color: "#2855D9",
  },
  {
    initials: "NK",
    name: "Neha Kapoor",
    time: "3 hr ago",
    title: "Launched: StudyMate",
    description: "Helping students find their perfect study partners.",
    category: "Edtech",
    color: "#E5242A",
  },
];

const discussions = [
  {
    initials: "RK",
    name: "Rahul Kumar",
    time: "15 min ago",
    title: "How did you find your first 10 customers?",
    description: "Looking to learn from founders who started from zero.",
    replies: "12 replies",
    color: "#2855D9",
  },
  {
    initials: "MS",
    name: "Meera Shah",
    time: "1 hr ago",
    title: "Is building in public actually worth it?",
    description: "Share your experience with personal branding.",
    replies: "8 replies",
    color: "#087F70",
  },
  {
    initials: "AP",
    name: "Ankit Patel",
    time: "4 hr ago",
    title: "Solo founder or co-founder?",
    description: "What works better when starting your first business?",
    replies: "21 replies",
    color: "#E5242A",
  },
];

const updates = [
  {
    initials: "FK",
    name: "Founder Ke Samaan",
    time: "Today",
    title: "Founder Tapri is getting started!",
    description: "Meet founders, share your work and find your people.",
    color: "#087F70",
  },
  {
    initials: "FK",
    name: "Founder Ke Samaan",
    time: "Yesterday",
    title: "New founder profiles are here.",
    description: "Showcase your idea, journey and what you are building.",
    color: "#2855D9",
  },
];

const polls = [
  {
    initials: "AM",
    name: "Aman Mishra",
    time: "30 min ago",
    title: "What is your biggest challenge as a founder?",
    options: ["Finding customers", "Finding co-founders", "Funding", "Building the product"],
    votes: "86 votes",
    color: "#087F70",
  },
  {
    initials: "PS",
    name: "Pooja Singh",
    time: "2 hr ago",
    title: "How do you prefer to build your startup?",
    options: ["Solo", "With a co-founder", "With a small team"],
    votes: "54 votes",
    color: "#E5242A",
  },
];

// Reusable activity card
function ActivityCard({
  initials,
  name,
  time,
  color,
  children,
}: {
  initials: string;
  name: string;
  time: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-[18px] border-[3px] border-[#17130F] bg-[#FFF9E9] p-3.5 sm:p-4">
      <div className="flex items-center gap-3.5">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-[#17130F] text-base font-extrabold text-white"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>

        <div className="min-w-0">
          <h3 className="font-bricolage text-lg font-extrabold leading-tight text-[#17130F] sm:text-xl">
            {name}
          </h3>
          <p className="mt-0.5 font-hind text-sm font-medium text-[#625D53]">
            {time}
          </p>
        </div>
      </div>

      {children}
    </article>
  );
}

// Reusable badge
function Tag({
  children,
  color = "#2855D9",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className="inline-flex rounded-full border-[2px] border-[#17130F] px-3 py-1 font-hind text-xs font-bold text-white sm:text-sm"
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}

// FOUNDERS COMPONENT
function FoundersContent() {
  return (
    <div className="space-y-3.5 p-3.5 sm:p-4">
      {founders.map((founder) => (
        <ActivityCard
          key={founder.initials}
          {...founder}
        >
          <p className="mt-2.5 font-hind text-base font-medium leading-snug text-[#17130F] sm:text-lg">
            {founder.idea}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <Tag>{founder.industry}</Tag>
            <Tag color="#087F70">{founder.lookingFor}</Tag>
          </div>
        </ActivityCard>
      ))}
    </div>
  );
}

// LAUNCHES COMPONENT
function LaunchesContent() {
  return (
    <div className="space-y-3.5 p-3.5 sm:p-4">
      {launches.map((launch) => (
        <ActivityCard
          key={launch.initials}
          initials={launch.initials}
          name={launch.name}
          time={launch.time}
          color={launch.color}
        >
          <h4 className="mt-2.5 font-bricolage text-base font-extrabold text-[#17130F] sm:text-lg">
            {launch.title}
          </h4>

          <p className="mt-1 font-hind text-base text-[#17130F] sm:text-lg">
            {launch.description}
          </p>

          <div className="mt-3">
            <Tag>{launch.category}</Tag>
          </div>
        </ActivityCard>
      ))}
    </div>
  );
}

// DISCUSSIONS COMPONENT
function DiscussionsContent() {
  return (
    <div className="space-y-3.5 p-3.5 sm:p-4">
      {discussions.map((discussion) => (
        <ActivityCard
          key={discussion.initials}
          initials={discussion.initials}
          name={discussion.name}
          time={discussion.time}
          color={discussion.color}
        >
          <h4 className="mt-2.5 font-bricolage text-base font-extrabold text-[#17130F] sm:text-lg">
            {discussion.title}
          </h4>

          <p className="mt-1 font-hind text-base text-[#17130F] sm:text-lg">
            {discussion.description}
          </p>

          <div className="mt-3">
            <Tag color="#087F70">{discussion.replies}</Tag>
          </div>
        </ActivityCard>
      ))}
    </div>
  );
}

// UPDATES COMPONENT
function UpdatesContent() {
  return (
    <div className="space-y-3.5 p-3.5 sm:p-4">
      {updates.map((update, index) => (
        <ActivityCard
          key={index}
          initials={update.initials}
          name={update.name}
          time={update.time}
          color={update.color}
        >
          <h4 className="mt-2.5 font-bricolage text-base font-extrabold text-[#17130F] sm:text-lg">
            {update.title}
          </h4>

          <p className="mt-1 font-hind text-base text-[#17130F] sm:text-lg">
            {update.description}
          </p>
        </ActivityCard>
      ))}
    </div>
  );
}

// POLLS COMPONENT
function PollsContent() {
  return (
    <div className="space-y-3.5 p-3.5 sm:p-4">
      {polls.map((poll) => (
        <ActivityCard
          key={poll.initials}
          initials={poll.initials}
          name={poll.name}
          time={poll.time}
          color={poll.color}
        >
          <h4 className="mt-2.5 font-bricolage text-base font-extrabold text-[#17130F] sm:text-lg">
            {poll.title}
          </h4>

          <div className="mt-3 flex flex-wrap gap-2">
            {poll.options.map((option) => (
              <span
                key={option}
                className="rounded-lg border-2 border-[#17130F] bg-white px-3 py-2 font-hind text-sm font-semibold text-[#17130F]"
              >
                {option}
              </span>
            ))}
          </div>

          <p className="mt-3 font-hind text-sm font-semibold text-[#625D53]">
            {poll.votes}
          </p>
        </ActivityCard>
      ))}
    </div>
  );
}

// Dashboard content switcher
function TabContent({ activeTab }: { activeTab: Tab }) {
  switch (activeTab) {
    case "Founders":
      return <FoundersContent />;

    case "Launches":
      return <LaunchesContent />;

    case "Discussions":
      return <DiscussionsContent />;

    case "Updates":
      return <UpdatesContent />;

    case "Polls":
      return <PollsContent />;

    default:
      return <FoundersContent />;
  }
}

// MAIN DASHBOARD
function FounderTapriDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("Founders");

  return (
    <div className="overflow-hidden rounded-[28px] border-[3px] border-[#17130F] bg-[#FFF9E9] shadow-[10px_10px_0_#17130F]">

      {/* Dashboard header */}
      <div className="flex items-center justify-between border-b-[3px] border-[#17130F] bg-[#17130F] px-5 py-4 sm:px-6">
        <h3 className="font-bricolage text-lg font-extrabold text-[#FFD83D] sm:text-xl">
          Founder Tapri
        </h3>

        <div className="flex items-center gap-2 font-hind text-base font-bold text-[#FFF9E9] sm:text-lg">
          <span className="h-3.5 w-3.5 rounded-full bg-[#2ECC71]" />
          Live
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 border-b-[3px] border-[#17130F]">
        <div className="border-r-[3px] border-[#17130F] bg-[#FFF9E9] px-4 py-5 sm:px-6 sm:py-6">
          <p className="font-bricolage text-5xl font-extrabold leading-none text-[#17130F] sm:text-7xl">
            127
          </p>
          <p className="mt-2 font-hind text-sm font-medium text-[#625D53] sm:text-base">
            founders joined
          </p>
        </div>

        <div className="bg-[#2855D9] px-4 py-5 sm:px-6 sm:py-6">
          <p className="font-bricolage text-5xl font-extrabold leading-none text-white sm:text-7xl">
            9
          </p>
          <p className="mt-2 font-hind text-sm font-medium text-white sm:text-base">
            joined in last 24 hours
          </p>
        </div>
      </div>

      {/* Clickable category navigation */}
      <div className="grid grid-cols-5 border-b-[3px] border-[#17130F]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              aria-pressed={isActive}
              className={`flex min-h-[52px] items-center justify-center border-r-[2px] border-[#17130F] px-1 py-2 text-center font-hind text-[10px] font-extrabold transition-colors last:border-r-0 sm:min-h-[58px] sm:text-sm lg:text-base ${
                isActive
                  ? "bg-[#17130F] text-[#FFD83D]"
                  : "bg-[#FFF9E9] text-[#17130F] hover:bg-[#FFD83D]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Dynamic component rendering */}
      <div key={activeTab}>
        <TabContent activeTab={activeTab} />
      </div>

      {/* Dashboard footer */}
      <div className="border-t-[3px] border-[#17130F] bg-[#FFF9E9] px-4 py-3.5 sm:px-5">
        <p className="font-hind text-xs font-medium text-[#625D53] sm:text-sm">
          Sample data for preview. Only founders who tick consent are shown here.
        </p>
      </div>
    </div>
  );
}

// MAIN SECTION

export default function FounderTapriSection() {
  return (
    <section className="overflow-hidden bg-[#FFD83D] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 xl:gap-16">

        {/* Left: Heading and description */}
        <div className="min-w-0 lg:pt-0">
          <h2 className="font-bricolage text-5xl font-extrabold leading-[0.98] tracking-tight text-[#17130F] sm:text-6xl lg:text-[64px] xl:text-[76px]">
            Tapri pe kya
            <br />
            chal raha hai?
          </h2>

          <p className="mt-5 max-w-[520px] font-hind text-xl font-medium leading-relaxed text-[#17130F] sm:text-2xl lg:text-[28px]">
            A peek into the founders, launches and conversations happening here
          </p>
        </div>

        {/* Right: Interactive Founder Tapri Dashboard */}
        <div className="min-w-0 w-full">
          <FounderTapriDashboard />
        </div>

      </div>
    </section>
  );
}

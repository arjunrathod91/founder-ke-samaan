
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

// ==========================================
// TYPES
// ==========================================

type AdminRow = Record<string, unknown>;

type SectionKey =
  | "waitlist"
  | "waitlist_emails"
  | "product_requests"
  | "collection_requests"
  | "pilot_requests";

type NavKey = "overview" | SectionKey;

type RecentEntry = AdminRow & {
  source: SectionKey;
};

type Column = {
  key: string;
  label: string;
};

type Section = {
  key: SectionKey;
  label: string;
  description: string;
  columns: Column[];
};

// ==========================================
// CONFIGURATION
// ==========================================

const sections: Section[] = [
  {
    key: "waitlist",
    label: "Founder Waitlist",
    description: "Founder registrations and their interests.",
    columns: [
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "building", label: "Building" },
      { key: "interested_in", label: "Interests" },
      { key: "custom_message", label: "Message" },
      { key: "created_at", label: "Joined" },
    ],
  },
  {
    key: "waitlist_emails",
    label: "Email Subscribers",
    description: "People who subscribed to the launch waitlist.",
    columns: [
      { key: "email", label: "Email" },
      { key: "created_at", label: "Subscribed" },
    ],
  },
  {
    key: "product_requests",
    label: "Product Requests",
    description: "People interested in individual products.",
    columns: [
      { key: "product_name", label: "Product" },
      { key: "product_category", label: "Category" },
      { key: "email", label: "Email" },
      { key: "building", label: "Building" },
      { key: "created_at", label: "Requested" },
    ],
  },
  {
    key: "collection_requests",
    label: "Collection Requests",
    description: "People interested in upcoming collections.",
    columns: [
      { key: "collection_number", label: "Number" },
      { key: "collection_name", label: "Collection" },
      { key: "email", label: "Email" },
      { key: "building", label: "Building" },
      { key: "created_at", label: "Requested" },
    ],
  },
  {
    key: "pilot_requests",
    label: "Pilot Requests",
    description: "Team and event pilot enquiries.",
    columns: [
      { key: "name", label: "Name" },
      { key: "startup", label: "Startup / Program" },
      { key: "event", label: "Event" },
      { key: "team_size", label: "Team Size" },
      { key: "created_at", label: "Requested" },
    ],
  },
];

const emptyData: Record<SectionKey, AdminRow[]> = {
  waitlist: [],
  waitlist_emails: [],
  product_requests: [],
  collection_requests: [],
  pilot_requests: [],
};

const emptyErrors: Record<SectionKey, string> = {
  waitlist: "",
  waitlist_emails: "",
  product_requests: "",
  collection_requests: "",
  pilot_requests: "",
};

// ==========================================
// HELPERS
// ==========================================

function formatValue(value: unknown): string {
  if (value === null || value === undefined || value === "") {
    return "—";
  }

  if (Array.isArray(value)) {
    return value.map(formatValue).join(", ");
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
}

function formatDate(value: unknown): string {
  if (!value) return "—";

  const date = new Date(String(value));

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getTimestamp(value: unknown): number {
  if (!value) return 0;

  const timestamp = new Date(String(value)).getTime();

  return Number.isNaN(timestamp) ? 0 : timestamp;
}

// ==========================================
// MAIN DASHBOARD
// ==========================================

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<NavKey>("overview");

  const [data, setData] =
    useState<Record<SectionKey, AdminRow[]>>(emptyData);

  const [errors, setErrors] =
    useState<Record<SectionKey, string>>(emptyErrors);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  // ========================================
  // FETCH ALL TABLES
  // ========================================

  const fetchDashboardData = useCallback(async () => {
    const supabase = createClient();

    setRefreshing(true);

    try {
      const [
        waitlist,
        emails,
        products,
        collections,
        pilots,
      ] = await Promise.all([
        supabase.from("waitlist").select("*"),
        supabase.from("waitlist_emails").select("*"),
        supabase.from("product_requests").select("*"),
        supabase.from("collection_requests").select("*"),
        supabase.from("pilot_requests").select("*"),
      ]);

      const results: Record<
        SectionKey,
        { data: AdminRow[] | null; error: { message: string } | null }
      > = {
        waitlist,
        waitlist_emails: emails,
        product_requests: products,
        collection_requests: collections,
        pilot_requests: pilots,
      };

      const newData: Record<SectionKey, AdminRow[]> = {
        ...emptyData,
      };

      const newErrors: Record<SectionKey, string> = {
        ...emptyErrors,
      };

      (Object.keys(results) as SectionKey[]).forEach((key) => {
        const result = results[key];

        if (result.error) {
          console.error(`Error fetching ${key}:`, result.error);
          newErrors[key] = result.error.message;
        } else {
          newData[key] = result.data ?? [];
        }
      });

      setData(newData);
      setErrors(newErrors);
    } catch (error) {
      console.error("Dashboard fetch error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  // ========================================
  // STATISTICS
  // ========================================

  const totalSignups = data.waitlist.length;
  const totalEmails = data.waitlist_emails.length;
  const totalProducts = data.product_requests.length;
  const totalCollections = data.collection_requests.length;
  const totalPilots = data.pilot_requests.length;

  const totalRecords =
    totalSignups +
    totalEmails +
    totalProducts +
    totalCollections +
    totalPilots;

  const totalRequests =
    totalProducts + totalCollections + totalPilots;

  // ========================================
  // ACTIVE SECTION
  // ========================================

  const activeSection = sections.find(
    (section) => section.key === activeTab
  );

  // ========================================
  // FILTER AND SORT RECORDS
  // ========================================

  const filteredRows = useMemo(() => {
    if (!activeSection) return [];

    const rows = [...data[activeSection.key]];

    rows.sort(
      (a, b) =>
        getTimestamp(b.created_at) - getTimestamp(a.created_at)
    );

    if (!search.trim()) return rows;

    const query = search.toLowerCase().trim();

    return rows.filter((row) =>
      Object.values(row).some((value) =>
        formatValue(value).toLowerCase().includes(query)
      )
    );
  }, [activeSection, data, search]);

  // ========================================
  // RECENT SUBMISSIONS
  // ========================================

  const recentEntries = useMemo<RecentEntry[]>(() => {
    return (Object.entries(data) as [SectionKey, AdminRow[]][])
      .flatMap(([key, rows]) =>
        rows.map(
          (row): RecentEntry => ({
            ...row,
            source: key,
          })
        )
      )
      .sort(
        (a, b) =>
          getTimestamp(b.created_at) - getTimestamp(a.created_at)
      )
      .slice(0, 8);
  }, [data]);

  // ========================================
  // CSV EXPORT
  // ========================================

  function exportCSV() {
    if (!activeSection || filteredRows.length === 0) return;

    const headers = activeSection.columns.map(
      (column) => column.label
    );

    const csvRows = filteredRows.map((row) =>
      activeSection.columns.map((column) => {
        const value =
          column.key === "created_at"
            ? formatDate(row[column.key])
            : formatValue(row[column.key]);

        return `"${value.replace(/"/g, '""')}"`;
      })
    );

    const csv = [
      headers.map((header) => `"${header}"`).join(","),
      ...csvRows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${activeSection.key}.csv`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  // ========================================
  // NAVIGATION
  // ========================================

  const navigation: {
    key: NavKey;
    label: string;
    count?: number;
  }[] = [
    { key: "overview", label: "Overview" },
    { key: "waitlist", label: "Founder Waitlist", count: totalSignups },
    {
      key: "waitlist_emails",
      label: "Email Subscribers",
      count: totalEmails,
    },
    {
      key: "product_requests",
      label: "Product Requests",
      count: totalProducts,
    },
    {
      key: "collection_requests",
      label: "Collection Requests",
      count: totalCollections,
    },
    {
      key: "pilot_requests",
      label: "Pilot Requests",
      count: totalPilots,
    },
  ];

  // ========================================
  // RENDER
  // ========================================

  return (
    <main className="min-h-screen bg-brand-cream font-body text-brand-black">

      {/* HEADER */}

      <header className="sticky top-0 z-30 border-b-2 border-brand-black bg-brand-yellow px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <div>
            <h1 className="font-heading text-lg font-extrabold tracking-tight sm:text-xl">
              FOUNDER KE SAMAAN
            </h1>
            <p className="text-[10px] font-bold tracking-[0.15em]">
              ADMIN PORTAL
            </p>
          </div>

          <span className="rounded-full border-2 border-brand-black bg-brand-cream px-4 py-2 text-xs font-extrabold">
            ADMIN
          </span>
        </div>
      </header>

      {/* MAIN LAYOUT */}

      <div className="mx-auto flex max-w-[1600px] flex-col lg:min-h-[calc(100vh-73px)] lg:flex-row">

        {/* SIDEBAR */}

        <aside className="border-b-2 border-brand-black bg-white p-4 lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r-2 lg:p-6">
          <p className="mb-4 px-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-black/40">
            Workspace
          </p>

          <nav className="flex gap-2 overflow-x-auto lg:flex-col">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setActiveTab(item.key);
                  setSearch("");
                }}
                className={`cursor-pointer flex shrink-0 items-center justify-between gap-3 rounded-lg border-2 px-3 py-3 text-left text-xs font-bold transition lg:w-full ${
                  activeTab === item.key
                    ? "border-brand-black bg-brand-yellow shadow-[3px_3px_0_#17130F]"
                    : "border-transparent hover:border-brand-black/20 hover:bg-brand-cream"
                }`}
              >
                <span>{item.label}</span>

                {item.count !== undefined && (
                  <span className="rounded-full bg-brand-black/10 px-2 py-1 text-[10px]">
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="mt-10 hidden rounded-xl border-2 border-brand-black bg-brand-cream p-4 lg:block">
            <p className="text-xs font-extrabold">DROP 01</p>

            <p className="mt-2 font-heading text-3xl font-extrabold">
              {totalSignups}/100
            </p>

            <p className="mt-1 text-[10px] text-brand-black/60">
              Founder waitlist target
            </p>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-brand-black/10">
              <div
                className="h-full bg-brand-red"
                style={{
                  width: `${Math.min(totalSignups, 100)}%`,
                }}
              />
            </div>
          </div>
        </aside>

        {/* CONTENT */}

        <section className="min-w-0 flex-1 p-5 sm:p-8 lg:p-10">

          {/* PAGE HEADER */}

          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-red">
                {activeTab === "overview"
                  ? "OVERVIEW / 01"
                  : "DATA MANAGEMENT / 02"}
              </p>

              <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
                {activeTab === "overview"
                  ? "Dashboard."
                  : activeSection?.label}
              </h2>

              <p className="mt-2 text-sm text-brand-black/50">
                {activeSection?.description ||
                  "Your complete Founder Ke Samaan activity at a glance."}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {activeSection && (
                <button
                  onClick={exportCSV}
                  disabled={filteredRows.length === 0}
                  className="cursor-pointer rounded-lg border-2 border-brand-black bg-white px-4 py-3 text-xs font-bold shadow-[3px_3px_0_#17130F] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none disabled:opacity-40"
                >
                  ↓ Export CSV
                </button>
              )}

              <button
                onClick={fetchDashboardData}
                disabled={refreshing}
                className="cursor-pointer rounded-lg border-2 border-brand-black bg-brand-yellow px-4 py-3 text-xs font-bold shadow-[3px_3px_0_#17130F] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none disabled:opacity-50"
              >
                {refreshing ? "Refreshing..." : "↻ Refresh data"}
              </button>
            </div>
          </div>

          {/* OVERVIEW */}

          {activeTab === "overview" ? (
            <>
              {/* STATISTICS */}

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    label: "Total records",
                    value: totalRecords,
                    description: "Across all five tables",
                    style: "bg-white",
                  },
                  {
                    label: "Founder waitlist",
                    value: totalSignups,
                    description: "Founder registrations",
                    style: "bg-brand-yellow",
                  },
                  {
                    label: "Email subscribers",
                    value: totalEmails,
                    description: "Launch notifications",
                    style: "bg-white",
                  },
                  {
                    label: "Total requests",
                    value: totalRequests,
                    description: "Products, collections & pilots",
                    style: "bg-brand-red text-white",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-xl border-2 border-brand-black p-5 shadow-[4px_4px_0_#17130F] ${stat.style}`}
                  >
                    <p className="text-xs font-bold">{stat.label}</p>

                    <h3 className="mt-4 font-heading text-4xl font-extrabold">
                      {loading ? "--" : stat.value}
                    </h3>

                    <p className="mt-2 text-[10px] opacity-60">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* REQUEST BREAKDOWN */}

              <div className="mt-10">
                <h3 className="font-heading text-xl font-extrabold">
                  Request breakdown
                </h3>

                <p className="mt-1 text-xs text-brand-black/50">
                  Activity across your website.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      key: "product_requests" as const,
                      label: "Product requests",
                      count: totalProducts,
                    },
                    {
                      key: "collection_requests" as const,
                      label: "Collection requests",
                      count: totalCollections,
                    },
                    {
                      key: "pilot_requests" as const,
                      label: "Pilot requests",
                      count: totalPilots,
                    },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setActiveTab(item.key)}
                      className="cursor-pointer rounded-xl border-2 border-brand-black bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-[4px_4px_0_#17130F]"
                    >
                      <p className="text-xs font-bold">{item.label}</p>

                      <p className="mt-3 font-heading text-3xl font-extrabold">
                        {loading ? "--" : item.count}
                      </p>

                      <p className="mt-3 text-[10px] font-bold text-brand-red">
                        VIEW ENTRIES →
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* RECENT SUBMISSIONS */}

              <div className="mt-12">
                <div className="mb-5">
                  <h3 className="font-heading text-xl font-extrabold">
                    Recent submissions
                  </h3>

                  <p className="mt-1 text-xs text-brand-black/50">
                    Latest activity from all sections.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border-2 border-brand-black bg-white shadow-[4px_4px_0_#17130F]">
                  <table className="w-full min-w-[650px] text-left text-xs">
                    <thead className="border-b-2 border-brand-black bg-brand-yellow">
                      <tr>
                        <th className="px-5 py-4">Name / Email</th>
                        <th className="px-5 py-4">Source</th>
                        <th className="px-5 py-4">Details</th>
                        <th className="px-5 py-4">Date</th>
                      </tr>
                    </thead>

                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan={4} className="px-5 py-10 text-center">
                            Loading submissions...
                          </td>
                        </tr>
                      ) : recentEntries.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-5 py-10 text-center text-brand-black/50">
                            No submissions yet.
                          </td>
                        </tr>
                      ) : (
                        recentEntries.map((entry, index) => (
                          <tr
                            key={`${entry.source}-${String(entry.id ?? index)}`}
                            className="border-b border-brand-black/10 hover:bg-brand-cream"
                          >
                            <td className="px-5 py-4 font-bold">
                              {formatValue(entry.name || entry.email)}
                            </td>

                            <td className="px-5 py-4">
                              <span className="rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold">
                                {sections.find(
                                  (section) => section.key === entry.source
                                )?.label}
                              </span>
                            </td>

                            <td className="max-w-xs whitespace-normal px-5 py-4">
                              {formatValue(
                                entry.product_name ||
                                  entry.collection_name ||
                                  entry.startup ||
                                  entry.building ||
                                  entry.event
                              )}
                            </td>

                            <td className="whitespace-nowrap px-5 py-4">
                              {formatDate(entry.created_at)}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            /* INDIVIDUAL DATA SECTION */

            activeSection && (
              <div>
                {/* SEARCH AND COUNT */}

                <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="relative w-full sm:max-w-sm">
                    <input
                      type="search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search records..."
                      className="w-full rounded-lg border-2 border-brand-black bg-white px-4 py-3 text-sm outline-none placeholder:text-brand-black/40 focus:ring-2 focus:ring-brand-yellow"
                    />
                  </div>

                  <span className="w-fit rounded-full border-2 border-brand-black bg-brand-yellow px-4 py-2 text-[10px] font-extrabold">
                    {loading ? "--" : filteredRows.length} ENTRIES
                  </span>
                </div>

                {/* ERROR */}

                {errors[activeSection.key] && (
                  <div className="mb-5 rounded-xl border-2 border-red-600 bg-red-50 p-5">
                    <p className="text-sm font-bold text-red-700">
                      Unable to load {activeSection.label}
                    </p>

                    <p className="mt-2 text-xs text-red-600">
                      {errors[activeSection.key]}
                    </p>
                  </div>
                )}

                {/* DATA TABLE */}

                <div className="overflow-x-auto rounded-xl border-2 border-brand-black bg-white shadow-[5px_5px_0_#17130F]">
                  <table className="w-full min-w-[750px] text-left text-xs">
                    <thead className="border-b-2 border-brand-black bg-brand-yellow">
                      <tr>
                        {activeSection.columns.map((column) => (
                          <th
                            key={column.key}
                            className="whitespace-nowrap px-5 py-4 font-extrabold"
                          >
                            {column.label}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {loading ? (
                        <tr>
                          <td
                            colSpan={activeSection.columns.length}
                            className="px-5 py-14 text-center"
                          >
                            Loading records...
                          </td>
                        </tr>
                      ) : errors[activeSection.key] ? (
                        <tr>
                          <td
                            colSpan={activeSection.columns.length}
                            className="px-5 py-14 text-center text-red-600"
                          >
                            Failed to load records.
                          </td>
                        </tr>
                      ) : filteredRows.length === 0 ? (
                        <tr>
                          <td
                            colSpan={activeSection.columns.length}
                            className="px-5 py-14 text-center text-brand-black/50"
                          >
                            {search
                              ? "No matching records found."
                              : "No submissions yet."}
                          </td>
                        </tr>
                      ) : (
                        filteredRows.map((row, index) => (
                          <tr
                            key={String(row.id ?? index)}
                            className="border-b border-brand-black/10 transition hover:bg-brand-cream"
                          >
                            {activeSection.columns.map((column) => (
                              <td
                                key={column.key}
                                className="max-w-xs whitespace-normal px-5 py-4"
                              >
                                {column.key === "created_at" ? (
                                  <span className="whitespace-nowrap">
                                    {formatDate(row[column.key])}
                                  </span>
                                ) : (
                                  formatValue(row[column.key])
                                )}
                              </td>
                            ))}
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-[10px] text-brand-black/50">
                  Showing {filteredRows.length} records. Newest submissions first.
                </p>
              </div>
            )
          )}

          {/* FOOTER */}

          <footer className="mt-16 border-t-2 border-brand-black/10 py-5">
            <p className="text-[10px] font-bold text-brand-black/40">
              FOUNDER KE SAMAAN · ADMIN PORTAL · DROP 01
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}

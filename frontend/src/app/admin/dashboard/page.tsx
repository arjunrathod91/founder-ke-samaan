
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type WaitlistEntry = {
  id: string;
  name: string;
  email: string;
  status: string;
  created_at: string;
};

export default function AdminDashboard() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWaitlist() {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("waitlist")
        .select("id, name, email, status, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching waitlist:", error);
        setError("Unable to load waitlist entries.");
      } else {
        setEntries(data || []);
      }

      setLoading(false);
    }

    fetchWaitlist();
  }, []);

  const totalSignups = entries.length;

  const newSignups = entries.filter(
    (entry) => entry.status === "pending"
  ).length;

  return (
    <main className="min-h-screen bg-brand-cream font-body">
      {/* Header */}
      <header className="border-b-2 border-brand-black bg-brand-yellow px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="font-heading text-xl font-extrabold">
              FOUNDER KE SAMAAN
            </h1>
            <p className="text-xs font-semibold">ADMIN PORTAL</p>
          </div>

          <span className="rounded-full border-2 border-brand-black bg-brand-cream px-4 py-2 text-xs font-bold">
            ADMIN
          </span>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-red">
            OVERVIEW / 01
          </p>

          <h2 className="font-heading text-4xl font-extrabold">
            Dashboard.
          </h2>

          <p className="mt-2 text-sm text-brand-black/60">
            Manage your waitlist and founder community.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border-2 border-brand-black bg-white p-6 shadow-[5px_5px_0_#17130F]">
            <p className="text-sm font-semibold">Total signups</p>
            <h3 className="mt-4 font-heading text-4xl font-extrabold">
              {loading ? "--" : totalSignups}
            </h3>
            <p className="mt-2 text-xs text-brand-black/50">
              All waitlist registrations
            </p>
          </div>

          <div className="rounded-xl border-2 border-brand-black bg-white p-6 shadow-[5px_5px_0_#17130F]">
            <p className="text-sm font-semibold">New signups</p>
            <h3 className="mt-4 font-heading text-4xl font-extrabold">
              {loading ? "--" : newSignups}
            </h3>
            <p className="mt-2 text-xs text-brand-black/50">
              Awaiting review
            </p>
          </div>

          <div className="rounded-xl border-2 border-brand-black bg-brand-yellow p-6 shadow-[5px_5px_0_#17130F]">
            <p className="text-sm font-semibold">Drop 01 target</p>
            <h3 className="mt-4 font-heading text-4xl font-extrabold">
              100
            </h3>
            <p className="mt-2 text-xs">
              First hundred founders
            </p>
          </div>
        </div>

        {/* Waitlist Section */}
        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-heading text-2xl font-extrabold">
              Waitlist entries
            </h3>

            <span className="rounded-full border-2 border-brand-black px-3 py-1 text-xs font-bold">
              {loading ? "--" : `${totalSignups} ENTRIES`}
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border-2 border-brand-black bg-white shadow-[5px_5px_0_#17130F]">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-black bg-brand-yellow">
                <tr>
                  <th className="px-5 py-4">Name</th>
                  <th className="px-5 py-4">Email</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Date</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="px-5 py-12 text-center">
                      Loading waitlist entries...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-5 py-12 text-center text-red-600"
                    >
                      {error}
                    </td>
                  </tr>
                ) : entries.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-5 py-12 text-center text-brand-black/50"
                    >
                      No waitlist registrations yet.
                    </td>
                  </tr>
                ) : (
                  entries.map((entry) => (
                    <tr
                      key={entry.id}
                      className="border-b border-brand-black/10 transition hover:bg-brand-cream"
                    >
                      <td className="px-5 py-4 font-semibold">
                        {entry.name}
                      </td>

                      <td className="px-5 py-4">{entry.email}</td>

                      <td className="px-5 py-4">
                        <span className="rounded-full border border-brand-black px-3 py-1 text-xs font-bold">
                          {entry.status.toUpperCase()}
                        </span>
                      </td>

                      <td className="px-5 py-4 whitespace-nowrap">
                        {new Date(entry.created_at).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

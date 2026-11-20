
const stats = [
  { label: "Taps", value: "[00]" },
  { label: "Leads", value: "[00]" },
  { label: "Follow-ups", value: "[00]" },
];

const leads = [
  { name: "[Lead name]", status: "New" },
  { name: "[Lead name]", status: "Follow up" },
];

export default function LeadsPreview() {
  return (
    <section className="bg-[#FFF9E9] px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#087F70]">
            Event Kit Preview
          </p>

          <h2 className="text-4xl font-black leading-tight text-[#17130F] md:text-6xl">
            Leads ka
            <br />
            hisaab.
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[#17130F]/75">
            For events, we are building a simple view of taps,
            leads and follow-ups by person and by event. This
            is the layout we are working toward, with
            placeholder values.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-[#17130F] bg-white p-5 shadow-[6px_6px_0_#17130F] md:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#17130F] pb-5">
            <div>
              <p className="text-lg font-black text-[#17130F]">
                [Event name] / [Date]
              </p>
              <p className="mt-1 text-xs font-medium text-[#17130F]/50">
                Event dashboard
              </p>
            </div>

            <span className="rounded-full border border-[#17130F] bg-[#FFD83D] px-4 py-1 text-xs font-bold">
              Preview
            </span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border-2 border-[#17130F] bg-[#FFF9E9] p-3 md:p-4"
              >
                <p className="text-xs font-bold text-[#17130F]/60">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-black text-[#17130F] md:text-3xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
              Recent leads
            </h3>

            <div className="space-y-3">
              {leads.map((lead, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-3 rounded-lg border border-[#17130F]/20 p-3"
                >
                  <p className="text-sm font-bold text-[#17130F]">
                    {lead.name}
                  </p>

                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold ${
                      index === 0
                        ? "bg-[#087F70]/15 text-[#087F70]"
                        : "bg-[#FFD83D] text-[#17130F]"
                    }`}
                  >
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

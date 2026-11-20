
export default function PilotForm() {
  return (
    <section
      id="pilot-form"
      className="border-t-2 border-[#17130F] bg-[#E5242A] px-6 py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-2 md:items-center">
        <div className="text-white">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em]">
            Teams and Events
          </p>

          <h2 className="text-5xl font-black leading-[0.95] md:text-7xl">
            Agle event pe
            <br />
            try karo.
          </h2>

          <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-white/90 md:text-lg">
            Tell us where you&apos;re going next. We&apos;ll scope
            a small pilot for your team.
          </p>
        </div>

        <form className="rounded-2xl border-2 border-[#17130F] bg-[#FFF9E9] p-6 shadow-[6px_6px_0_#17130F] md:p-8">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="pilot-name"
                className="mb-2 block text-sm font-bold text-[#17130F]"
              >
                Your name
              </label>
              <input
                id="pilot-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border-2 border-[#17130F] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#17130F]/40 focus:ring-2 focus:ring-[#FFD83D]"
              />
            </div>

            <div>
              <label
                htmlFor="pilot-startup"
                className="mb-2 block text-sm font-bold text-[#17130F]"
              >
                Startup or program
              </label>
              <input
                id="pilot-startup"
                name="startup"
                type="text"
                placeholder="Your startup or program name"
                required
                className="w-full rounded-lg border-2 border-[#17130F] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#17130F]/40 focus:ring-2 focus:ring-[#FFD83D]"
              />
            </div>

            <div>
              <label
                htmlFor="pilot-event"
                className="mb-2 block text-sm font-bold text-[#17130F]"
              >
                Event you&apos;re attending
              </label>
              <input
                id="pilot-event"
                name="event"
                type="text"
                placeholder="Event name"
                required
                className="w-full rounded-lg border-2 border-[#17130F] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#17130F]/40 focus:ring-2 focus:ring-[#FFD83D]"
              />
            </div>

            <div>
              <label
                htmlFor="pilot-team-size"
                className="mb-2 block text-sm font-bold text-[#17130F]"
              >
                Team size
              </label>
              <input
                id="pilot-team-size"
                name="teamSize"
                type="number"
                min="1"
                placeholder="Number of people"
                required
                className="w-full rounded-lg border-2 border-[#17130F] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#17130F]/40 focus:ring-2 focus:ring-[#FFD83D]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full border-2 border-[#17130F] bg-[#FFD83D] px-6 py-3 font-black text-[#17130F] shadow-[3px_3px_0_#17130F] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Pilot book karo
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


const steps = [
  {
    number: "01",
    title: "Dekho",
    description: "Kitne Founders Judey, Aaj Kitne Naye Aaye.",
    rotation: "rotate-[1deg]",
  },
  {
    number: "02",
    title: "Jano",
    description:
      "Kaun Kya Bana Raha Hai, Kis Industry Mein, Aur Kya Dhoondh Raha Hai.",
    rotation: "-rotate-[1deg]",
  },
  {
    number: "03",
    title: "Jodo",
    description:
      "Launches, Discussions, Updates Aur Polls, Sab Ek Jagah.",
    rotation: "rotate-[1deg]",
  },
];

export default function DekhoJanoSection() {
  return (
    <section className="overflow-hidden bg-[#FFD83D] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`relative min-h-[190px] rounded-[14px] border-[3px] border-[#17130F] bg-[#FFF9E9] px-5 pb-6 pt-5 shadow-[5px_6px_0_#17130F] transition-transform duration-200 hover:-translate-y-1 sm:min-h-[200px] sm:px-6 sm:pt-5 ${step.rotation}`}
          >
            <span className="absolute right-5 top-4 font-bricolage text-xl font-bold text-[#17130F]">
              {step.number}
            </span>

            <h2 className="font-bricolage text-5xl font-extrabold leading-[1.05] tracking-tight text-[#17130F] sm:text-6xl lg:text-[76px]">
              {step.title}
            </h2>

            <p className="mt-2 max-w-[390px] font-hind text-lg font-medium leading-[1.2] text-[#17130F] sm:text-xl lg:text-[23px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

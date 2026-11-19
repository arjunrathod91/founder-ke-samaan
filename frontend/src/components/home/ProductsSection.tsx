
const products = [
  {
    number: "01",
    category: "TEE",
    title: "Peeche naam. Aage kaam.",
    description: "Bold back print, small front mark.",
    color: "bg-[#FFD83D]",
    text: "text-[#17130F]",
  },
  {
    number: "02",
    category: "CAP",
    title: "Safar mein bhi brand.",
    description: "Flights, cafes, conferences.",
    color: "bg-[#DF251D]",
    text: "text-white",
  },
  {
    number: "03",
    category: "BAG",
    title: "Laptop bhi, pitch bhi.",
    description: "One bag for the whole founder day.",
    color: "bg-[#087F6B]",
    text: "text-white",
  },
  {
    number: "04",
    category: "STICKERS",
    title: "Chipkao. Dikhao.",
    description: "Laptop, bottle, bike, everywhere.",
    color: "bg-[#FFD83D]",
    text: "text-[#17130F]",
  },
  {
    number: "05",
    category: "NFC CARD",
    title: "Tap karo, startup dekho.",
    description: "Opens your page in one tap.",
    color: "bg-[#17130F]",
    text: "text-white",
  },
  {
    number: "06",
    category: "DIGITAL TEE",
    title: "Profile pe bhi pehno.",
    description: "Banner and avatar for your online founder era.",
    color: "bg-[#FFF9E9]",
    text: "text-[#17130F]",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-[#FFF9E9] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1440px]">

        <h2 className="font-bricolage text-4xl font-extrabold tracking-tight text-[#17130F] sm:text-5xl lg:text-6xl">
          Kya kya milega
        </h2>

        <p className="mt-2 font-hind text-sm text-[#17130F] sm:text-base">
          Everything a founder carries. Pehno, chipkao, tap karo.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.number}
              className={`${product.color} ${product.text} rounded-2xl border-2 border-[#17130F] p-5 shadow-[4px_4px_0_#17130F] transition-transform hover:-translate-y-1 sm:p-6`}
            >
              <p className="font-hind text-[10px] font-bold tracking-wider">
                {product.number} / {product.category}
              </p>

              <h3 className="mt-4 font-bricolage text-2xl font-extrabold leading-tight sm:text-3xl">
                {product.title}
              </h3>

              <p className="mt-2 font-hind text-xs font-medium leading-relaxed sm:text-sm">
                {product.description}
              </p>

              <p className="mt-3 font-hind text-xs font-bold">
                [PRICE]
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

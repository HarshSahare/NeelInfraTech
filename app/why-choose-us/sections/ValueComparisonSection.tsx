import Image from "next/image";

const comparisons = [
  {
    name: "Godrej City",
    subtitle: "Premium location pricing",
    price: "₹8500",
    image: "/images/landing-page-1/competitor-1.png",
  },
  {
    name: "Kalpataru Ardence",
    subtitle: "Strategic value positioning",
    price: "₹1200",
    image: "/images/landing-page-1/competitor-2.png",
  },
  {
    name: "Lodha Group",
    subtitle: "Strategic value positioning",
    price: "₹1200",
    image: "/images/landing-page-1/competitor-3.png",
  },
  {
    name: "Singapore Life City",
    subtitle: "Strategic value positioning",
    price: "₹1200",
    image: "/images/landing-page-1/competitor-4.png",
  },
];

export default function ValueComparisonSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-poppins mb-2 font-semibold ">
            Value
          </p>

          <h2 className="text-3xl md:text-3xl font-classica leading-tight mb-4">
            Own Land Near Premium Townships at <br />a Fraction of the Cost
          </h2>

          <p className="text-gray-500 font-bold text-sm">
            Up to 30–50% Lower Entry Price
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white p-6 flex flex-col justify-between hover:shadow-md transition"
            >
              {/* Logo Box */}
              <div className="flex justify-center mb-6">
                <div className="relative w-full  md:w-[500px] aspect-square border rounded-xl flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="text-center mb-6">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>
              </div>

              {/* Price */}
              <div className="h-[1px] bg-gray-300 w-full " />

              <div>
                <div className="flex justify-between text-xs text-gray-500 my-2">
                  <span>Price per sq ft</span>
                  <span className="font-semibold text-black">{item.price}</span>
                </div>

                <div className="h-[1px] bg-gray-300 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

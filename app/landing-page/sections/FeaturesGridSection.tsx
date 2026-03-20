import Image from "next/image";

const features = [
  {
    title: "Wide Internal Roads",
    desc: "Smooth and spacious internal roads for comfortable driving and easy accessibility within the project",
    image: "/images/landing-page-1/property-feature-1.png",
  },
  {
    title: "Electricity Access",
    desc: "Reliable electricity connection available to ensure uninterrupted power for your future home",
    image: "/images/landing-page-1/property-feature-2.png",
  },
  {
    title: "Water Supply Provision",
    desc: "Planned water supply system to provide a consistent and dependable water source",
    image: "/images/landing-page-1/property-feature-3.png",
  },
  {
    title: "Planned Plot Layout",
    desc: "Well-designed plot arrangement that ensures proper space utilization and organized development",
    image: "/images/landing-page-1/property-feature-4.png",
  },
  {
    title: "Green Surroundings",
    desc: "Peaceful environment surrounded by greenery, offering fresh air and a relaxing lifestyle",
    image: "/images/landing-page-1/property-feature-5.png",
  },
  {
    title: "Investment-Friendly Location",
    desc: "Strategically located in a rapidly developing area with strong potential for property value growth",
    image: "/images/landing-page-1/property-feature-6.png",
  },
  {
    title: "Luxurious Clubhouse",
    desc: "A modern clubhouse with premium amenities designed for relaxation, recreation, and social gatherings",
    image: "/images/landing-page-1/property-feature-7.png",
  },
  {
    title: "Kids Play Area",
    desc: "Safe and fun play zone where children can enjoy outdoor activities and stay active",
    image: "/images/landing-page-1/property-feature-8.png",
  },
];

export default function FeaturesGridSection() {
  return (
    <section className="py-24]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase font-classica font-semibold  text-black mb-2">
            Built
          </p>

          <h2 className="text-3xl md:text-5xl font-classica  mb-4">
            What makes our plots different
          </h2>

          <p className="text-gray-500 font-poppins text-sm max-w-2xl mx-auto">
            Solid infrastructure, clear ownership, and genuine growth potential
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white flex flex-col h-full hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative w-full h-[160px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-medium mb-2 font-classica">{item.title}</h3>

                <p className="text-sm font-poppins text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

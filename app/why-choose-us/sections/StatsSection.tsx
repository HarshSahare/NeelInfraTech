import Image from "next/image";

const stats = [
  {
    value: "95+",
    label: "Projects successfully sold",
  },
  {
    value: "55+",
    label: "Projects Completion Certificates",
  },
  {
    value: "18",
    label: "Years of expertise",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase font-clssica font-semibold mb-2">
            Results
          </p>

          <h2 className="text-3xl md:text-5xl font-classica mb-4">
            Numbers that speak
          </h2>

          <p className="text-gray-500 font-poppins text-sm">
            Our track record reflects consistent growth and investor
            satisfaction
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT STATS */}
          <div className="flex flex-col gap-10">
            {stats.map((item, index) => (
              <div key={index}>
                <h3 className="text-3xl md:text-4xl font-bold mb-1">
                  {item.value}
                </h3>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/images/landing-page-1/statsImage.png"
              alt="community"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

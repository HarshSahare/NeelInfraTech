"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    label: "Capital growth",
    title: "Nagpur Gets Mahindra’s Biggest Plant",
    desc: "Mahindra & Mahindra will build its largest integrated auto and tractor manufacturing facility in Nagpur. The project includes an investment of ₹15,000 crore, is expected to create around 10,000 jobs, and production is planned to begin in 2028, strengthening the region’s industrial growth and investment potential.",
    image: "/images/landing-page-1/capital growth.png",
  },
  {
    label: "Infrastructure boom",
    title: "Naveen Nagpur IBFC Set to Redefine Central India’s Growth",
    desc: "The Naveen Nagpur International Business & Finance Center (IBFC) marks a massive ₹11,300 crore infrastructure push, transforming Nagpur into a smart, future-ready economic hub. With a sprawling 1,710-acre master plan, world-class amenities, and seamless connectivity via the Samruddhi Mahamarg, this landmark development blends finance, sustainability, and modern urban living—positioning Central India for unprecedented growth and global investment.",
    image: "/images/landing-page-1/infrastrucure-boom.jpg",
  },
  {
    label: "Market demand",
    title: "Rising Property Demand",
    desc: "Increasing population and job opportunities are driving consistent demand for residential and investment plots.",
    image: "/images/landing-page-1/CCD banner.png",
  },
];

export default function WhyInvestorsSection() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase font-semibold font-classica text-black mb-2">
            Returns
          </p>

          <h2 className="text-3xl md:text-4xl font-classica  mb-4 capitalize">
            Why investors choose our project
          </h2>

          <p className="text-gray-500 font-poppins text-sm max-w-2xl mx-auto">
            Property values in this corridor have risen steadily as
            infrastructure expands. Early investors position themselves for
            significant appreciation as Nagpur develops.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 w-fit mx-auto mb-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`pb-3 text-sm transition relative cursor-pointer ${
                active === index
                  ? "text-black font-medium"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab.label}

              {/* Active underline */}
              {active === index && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="border border-gray-300 bg-white flex flex-col md:flex-row overflow-hidden">
          {/* LEFT IMAGE */}
          <div className="md:w-1/2 relative h-[250px] md:h-[500px]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center font-classica">
            <h3 className="text-xl md:text-2xl mb-4">{current.title}</h3>

            <p className="text-gray-600 text-sm leading-relaxed font-poppins">
              {current.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

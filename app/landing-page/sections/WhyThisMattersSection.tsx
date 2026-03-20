"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    label: "CCD expansion",
    title: "New Nagpur CCD spans seventeen hundred acres",
    desc: "The emerging commercial district creates unprecedented demand for surrounding land. This proximity positions your investment directly in the path of growth.",
    image: "/images/landing-page-1/ccd banner.png",
  },
  {
    label: "Developer presence",
    title: "Top developers entering the region",
    desc: "Increased developer activity signals strong future appreciation and infrastructure improvements.",
    image: "/growth.jpg",
  },
  {
    label: "Highway access",
    title: "Seamless highway connectivity",
    desc: "Direct access to major highways boosts accessibility and property value.",
    image: "/growth.jpg",
  },
  {
    label: "Commercial hub",
    title: "Growing commercial ecosystem",
    desc: "More offices, retail, and businesses bring demand for residential plots.",
    image: "/growth.jpg",
  },
  {
    label: "Infrastructure pace",
    title: "Rapid infrastructure development",
    desc: "Government-backed infrastructure ensures long-term growth.",
    image: "/growth.jpg",
  },
  {
    label: "Market momentum",
    title: "Strong real estate momentum",
    desc: "Consistent demand increase makes it a high ROI zone.",
    image: "/growth.jpg",
  },
];

export default function WhyThisMattersSection() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="py-24 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest font-poppins font-semibold mb-2">
            Growth
          </p>
          <h2 className="text-3xl md:text-4xl font-classica mb-4">
            Why this matters
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm font-poopins">
            This location sits at the intersection of major infrastructure
            development and commercial expansion. The numbers tell a clear story
            about appreciation potential.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap border border-b-0 border-black rounded-t-lg overflow-hidden">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`flex-1 capitalize px-6 py-3 font-poppins text-md border-r border-black last:border-r-0 transition font-bold cursor-pointer
                ${active === index ? "border-b-0" : "border-b"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="border border-black border-t-0 bg-white p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center font-poppins">
          <div className="md:w-1/2">
            <p className="text-md uppercase mb-2">{current.label}</p>
            <h3 className="text-xl md:text-4xl mb-4 leading-snug font-classica">
              {current.title}
            </h3>
            <p className="text-gray-600 text-md leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2">
            <div className="relative w-full h-[260px] md:h-[500px]">
              <Image
                src={current.image}
                alt="growth"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

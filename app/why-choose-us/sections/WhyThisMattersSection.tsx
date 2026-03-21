"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    label: "CCD expansion",
    title: "New Nagpur CCD spans seventeen hundred acres",
    desc: "The emerging commercial district creates unprecedented demand for surrounding land. This proximity positions your investment directly in the path of growth.",
    image: "/images/landing-page-1/CCD_banner.png",
  },
  {
    label: "Developer presence",
    title: "Top developers entering the region",
    desc: "Increased developer activity signals strong future appreciation and infrastructure improvements.",
    image: "/images/landing-page-1/developerPresence.avif",
  },
  {
    label: "Highway access",
    title: "Seamless highway connectivity",
    desc: "Direct access to major highways boosts accessibility and property value.",
    image: "/images/landing-page-1/highwayAccess.jpg",
  },
  {
    label: "Commercial hub",
    title: "Growing commercial ecosystem",
    desc: "More offices, retail, and businesses bring demand for residential plots.",
    image: "/images/landing-page-1/commercialHub.webp",
  },
  {
    label: "Infrastructure pace",
    title: "Rapid infrastructure development",
    desc: "Government-backed infrastructure ensures long-term growth.",
    image: "/images/landing-page-1/infrastructurePace.webp",
  },
  {
    label: "Market momentum",
    title: "Strong real estate momentum",
    desc: "Consistent demand increase makes it a high ROI zone.",
    image: "/images/landing-page-1/realestateGrowth.jpg",
  },
];

export default function WhyThisMattersSection() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-xs tracking-widest font-poppins font-semibold mb-2">
            Growth
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-classica mb-3 sm:mb-4">
            Why this matters
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm font-poppins">
            This location sits at the intersection of major infrastructure
            development and commercial expansion. The numbers tell a clear story
            about appreciation potential.
          </p>
        </div>

        {/* Tabs / Dropdown */}
        <div className="border border-b-0 border-black rounded-t-lg overflow-hidden">
          {/* Desktop Tabs (UNCHANGED) */}
          <div className="hidden md:flex">
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

          {/* Mobile Dropdown */}
          <div className="md:hidden p-3 bg-white">
            <select
              value={active}
              onChange={(e) => setActive(Number(e.target.value))}
              className="w-full border border-black rounded-md px-4 py-2 font-poppins text-sm outline-none bg-white"
            >
              {tabs.map((tab, index) => (
                <option key={index} value={index}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Content */}
        <div className="border border-black border-t-0 bg-white p-4 sm:p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center font-poppins">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-xs sm:text-sm uppercase mb-2">{current.label}</p>

            <h3 className="text-lg sm:text-2xl md:text-4xl mb-3 sm:mb-4 leading-snug font-classica">
              {current.title}
            </h3>

            <p className="text-gray-600 text-sm sm:text-md leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full h-[200px] sm:h-[260px] md:h-[500px]">
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

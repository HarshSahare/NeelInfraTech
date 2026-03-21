"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { Properties } from "@/app/lib/properties";

export default function ExclusivePropertiesSection() {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const properties = Object.values(Properties);

  const getIndex = (offset: number) => {
    return (current + offset + properties.length) % properties.length;
  };

  const main = properties[current];
  const left = properties[getIndex(-1)];
  const right = properties[getIndex(1)];

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      },
    );
  }, [current]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % properties.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + properties.length) % properties.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-14">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold font-poppins uppercase text-black mb-2 sm:mb-3">
              ● Our Properties
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extralight font-classica leading-tight">
              Exclusive properties <br className="hidden sm:block" /> crafted
              for excellence
            </h2>
          </div>

          <p className="text-gray-500 max-w-md mt-3 md:mt-0 text-sm sm:text-md font-poppins">
            Luxury homes featuring refined architecture, modern amenities, and
            prime locations.
          </p>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* LEFT CARD (unchanged desktop) */}
          <div className="hidden md:block absolute left-16 transform scale-90 opacity-40">
            <Image
              src={left.bannerImage}
              alt="left property"
              width={200}
              height={260}
              className="rounded-xl object-cover shadow-md"
            />
          </div>

          {/* MAIN CARD */}
          <div
            ref={cardRef}
            className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden w-full md:w-[850px] z-10"
          >
            {/* Image */}
            <div className="w-full md:w-1/2 h-[220px] sm:h-[300px] md:h-auto">
              <Image
                src={main.bannerImage}
                alt={main.title}
                width={500}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-2">
                  <span className="font-semibold text-black">{main.title}</span>{" "}
                  • {main.location}
                </p>

                <h3 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">
                  {main.bedrooms}
                  <span className="text-xs sm:text-sm text-gray-400 font-normal">
                    / Listed price
                  </span>
                </h3>

                <div className="flex gap-2 sm:gap-3 flex-wrap mb-4 sm:mb-6">
                  <div className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">
                    {main.amenities[2].text}
                  </div>
                  <div className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm">
                    {main.amenities[0].text}
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-2.5 sm:py-3 rounded-full hover:bg-gray-800 transition text-sm sm:text-base">
                Property details
              </button>
            </div>
          </div>

          {/* RIGHT CARD (unchanged desktop) */}
          <div className="hidden md:block absolute right-16 transform scale-90 opacity-40">
            <Image
              src={right.image}
              alt="right property"
              width={200}
              height={260}
              className="rounded-xl object-cover shadow-md"
            />
          </div>

          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute left-1 sm:left-4 md:left-24 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white shadow-lg rounded-full hover:scale-110 transition"
          >
            <FaArrowLeft size={12} />
          </button>

          <button
            onClick={next}
            className="absolute right-1 sm:right-4 md:right-24 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white shadow-lg rounded-full hover:scale-110 transition"
          >
            <FaArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}

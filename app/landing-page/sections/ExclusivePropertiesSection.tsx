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

  // ✅ Animate on index change (better than setTimeout)
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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14">
          <div>
            <p className="text-xs  font-semibold font-poppins uppercase text-black mb-3">
              ● Our Properties
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight font-classica  leading-tight">
              Exclusive properties <br /> crafted for excellence
            </h2>
          </div>

          <p className="text-gray-500 max-w-md mt-4 md:mt-0 text-md font-poopins">
            Luxury homes featuring refined architecture, modern amenities, and
            prime locations.
          </p>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* LEFT CARD */}
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
            <div className="w-full md:w-1/2">
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
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold text-black">{main.title}</span>{" "}
                  • {main.location}
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  {main.bedrooms}
                  <span className="text-sm text-gray-400 font-normal">
                    / Listed price
                  </span>
                </h3>

                <div className="flex gap-3 flex-wrap mb-6">
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {main.amenities[2].text}
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {main.amenities[0].text}
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
                Property details
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
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
            className="absolute left-2 md:left-24 w-10 h-10 flex items-center justify-center bg-white shadow-lg rounded-full hover:scale-110 transition"
          >
            <FaArrowLeft size={14} />
          </button>

          <button
            onClick={next}
            className="absolute right-2 md:right-24 w-10 h-10 flex items-center justify-center bg-white shadow-lg rounded-full hover:scale-110 transition"
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

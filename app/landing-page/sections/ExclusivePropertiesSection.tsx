"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { Properties } from "@/app/lib/properties";
import Link from "next/link";

export default function ExclusivePropertiesSection() {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const properties = Object.values(Properties);

  const highlight = [];

  for (const property of properties) {
    if (property.heroSection?.highlights) {
      const h = property.heroSection.highlights.concat(
        property.amenities?.map((x) => x.text) || [],
      );
      highlight.push(h);
    } else {
      highlight.push([]);
    }
  }
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
            Your land. Your investment. Your future. — Premium residential plots
            with unmatched growth potential.
          </p>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* LEFT CARD (desktop only) */}
          <div className="hidden md:block absolute left-16 w-[200px] h-[260px] overflow-hidden rounded-xl transform scale-90 opacity-40">
            <Image
              src={left.bannerImage}
              alt="left property"
              fill
              className="object-cover"
            />
          </div>

          {/* MAIN CARD */}
          <div
            ref={cardRef}
            className="relative bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden w-full md:w-[850px] z-10"
          >
            {/* Image */}
            <div className="w-full aspect-video md:w-1/2 h-auto relative">
              <Image
                src={main.bannerImage}
                alt={main.title}
                fill
                className="object-cover"
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
                  {highlight[current].map((highlight, index) => (
                    <div
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-black text-white py-2.5 sm:py-3 rounded-full hover:bg-gray-800 transition text-sm sm:text-base">
                <Link
                  href={`/properties/${main.title.toLocaleLowerCase().replaceAll(" ", "-")}`}
                >
                  Property details
                </Link>
              </button>
            </div>
          </div>

          {/* RIGHT CARD (desktop only) */}
          <div className="hidden md:block absolute right-16 w-[200px] h-[260px] overflow-hidden rounded-xl transform scale-90 opacity-40">
            <Image
              src={right.bannerImage}
              alt="right property"
              fill
              className="object-cover"
            />
          </div>

          {/* DESKTOP ARROWS */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-24 z-20 w-10 h-10 items-center justify-center bg-white shadow-lg rounded-full hover:scale-110 transition"
          >
            <FaArrowLeft size={14} />
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-24 z-20 w-10 h-10 items-center justify-center bg-white shadow-lg rounded-full hover:scale-110 transition"
          >
            <FaArrowRight size={14} />
          </button>

          {/* MOBILE ARROWS (BOTTOM CENTER) */}
          <div className="md:hidden absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center bg-white shadow-lg rounded-full active:scale-95"
            >
              <FaArrowLeft size={14} />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center bg-white shadow-lg rounded-full active:scale-95"
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

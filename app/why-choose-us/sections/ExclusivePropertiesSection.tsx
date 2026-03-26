"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

type PropertyType = {
  title: string;
  location: string;
  bannerImage: string;
  heroSection?: {
    highlights?: string[];
  };
  amenities?: { text: string }[];
};

type SectionConfig = {
  showHeading?: boolean;
  showDescription?: boolean;
  showHighlights?: boolean;
  showButton?: boolean;
  showSideCards?: boolean;
  showArrows?: boolean;
};

type Props = {
  properties: PropertyType[];
  config?: SectionConfig;
};

export default function ExclusivePropertiesSection({
  properties,
  config = {},
}: Props) {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // ✅ Default config
  const defaultConfig: SectionConfig = {
    showHeading: true,
    showDescription: true,
    showHighlights: true,
    showButton: true,
    showSideCards: true,
    showArrows: true,
  };

  const mergedConfig = { ...defaultConfig, ...config };

  if (!properties?.length) return null;

  // Highlights builder
  const highlight = properties.map((property) => {
    if (property.heroSection?.highlights) {
      return property.heroSection.highlights.concat(
        property.amenities?.map((x) => x.text) || [],
      );
    }
    return [];
  });

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
        {/* Heading + Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-14">
          <div>
            {mergedConfig.showHeading && (
              <>
                <p className="text-xs font-semibold uppercase text-black mb-2">
                  ● Our Properties
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extralight leading-tight">
                  Exclusive properties <br className="hidden sm:block" />
                  crafted for excellence
                </h2>
              </>
            )}
          </div>

          {mergedConfig.showDescription && (
            <p className="text-gray-500 max-w-md mt-3 md:mt-0 text-sm">
              Your land. Your investment. Your future. — Premium residential
              plots with unmatched growth potential.
            </p>
          )}
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* LEFT CARD */}
          {mergedConfig.showSideCards && (
            <div className="hidden md:block absolute left-16 w-[200px] h-[260px] overflow-hidden rounded-xl scale-90 opacity-40">
              <Image
                src={left.bannerImage}
                alt="left property"
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* MAIN CARD */}
          <div
            ref={cardRef}
            className="relative bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden w-full md:w-[850px] z-10"
          >
            {/* Image */}
            <div className="w-full aspect-video md:w-1/2 relative">
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
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold text-black">{main.title}</span>{" "}
                  • {main.location}
                </p>

                {/* Highlights */}
                {mergedConfig.showHighlights && (
                  <div className="flex gap-2 sm:gap-3 flex-wrap mb-4 sm:mb-6">
                    {highlight[current].map((h, i) => (
                      <div
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm"
                      >
                        {h}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Button */}
              {mergedConfig.showButton && (
                <a
                  href="#contact"
                  className="w-full text-center bg-black text-white py-2.5 sm:py-3 rounded-full hover:bg-gray-800 transition text-sm sm:text-base"
                >
                  Get Property Details
                </a>
              )}
            </div>
          </div>

          {/* RIGHT CARD */}
          {mergedConfig.showSideCards && (
            <div className="hidden md:block absolute right-16 w-[200px] h-[260px] overflow-hidden rounded-xl scale-90 opacity-40">
              <Image
                src={right.bannerImage}
                alt="right property"
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* ARROWS */}
          {mergedConfig.showArrows && (
            <>
              {/* Desktop */}
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

              {/* Mobile */}
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}

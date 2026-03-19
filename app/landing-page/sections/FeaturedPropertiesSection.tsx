"use client";

import { useState } from "react";
import { Properties } from "@/app/lib/properties";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const properties = Object.values(Properties).slice(0, 3);

export default function FeaturedPropertiesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase font-classica mb-2">Portfolio</p>

          <h2 className="text-3xl md:text-5xl font-classica mb-4">
            Featured properties
          </h2>

          <p className="text-gray-500 text-sm font-poppins">
            Discover our most promising developments
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={index} className="flex flex-col h-full group">
                {/* Image */}
                <div className="relative w-full h-[220px] overflow-hidden">
                  <Image
                    src={item.bannerImage}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="mt-4 flex flex-col flex-grow">
                  <h3 className="font-semibold mb-2">{item.title}</h3>

                  {/* Description */}
                  <p
                    className={`text-sm text-gray-600 mb-2 transition-all ${
                      isExpanded ? "" : "line-clamp-3"
                    }`}
                  >
                    {item.gallery.text}
                  </p>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-xs text-black font-medium mb-4 hover:underline w-fit cursor-pointer"
                  >
                    {isExpanded ? "Show less" : "View full description"}
                  </button>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.amenities.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-200 rounded"
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="mt-auto flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition">
                    View project
                    <FaArrowRight size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

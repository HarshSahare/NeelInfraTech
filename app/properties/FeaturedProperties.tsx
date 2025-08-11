"use client";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

interface FeaturedProperty {
  src: string;
  title: string;
  location: string;
  desc: string;
}

interface FeaturedPropertiesProps {
  properties: FeaturedProperty[];
}

export default function FeaturedProperties({
  properties,
}: FeaturedPropertiesProps) {
  return (
    <section className="py-20 lg:py-40">
      <h2 className="text-center font-classica">
        <span className="text-md text-[#757279]">Feature</span> <br />
        <span className="text-3xl uppercase">Properties</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 w-[80%] mx-auto py-15">
        {properties.map((card, i) => (
          <div key={i} className="flex-1">
            <div className="relative">
              <Image
                src={card.src}
                alt={card.title}
                width={1200}
                height={700}
                className="w-full aspect-video rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 bg-black/50 text-white p-4 text-3xl uppercase font-semibold">
                {card.title}
              </div>
            </div>
            <div className="mt-5 text-[#757279]">
              <div className="flex items-center gap-2 text-xl">
                <FaLocationDot />
                {card.location}
              </div>
              <p className="mt-2">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

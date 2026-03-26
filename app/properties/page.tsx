"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import ContactSection from "../components/sections/contactSection";

import { Properties } from "../lib/properties";
import { onScroll } from "../lib/utils";
import Carousel from "./Carousel";
import CompletedCards from "../components/sections/completedCards";
import ExclusivePropertiesSection from "../why-choose-us/sections/ExclusivePropertiesSection";

export default function Page() {
  const propertiesScrollRef = useRef<HTMLDivElement>(null);
  const [propertiesPage, setPropertiesPage] = useState(0);

  const completedProperties = [
    {
      src: "/images/Completed Projects/silver wood.png",
      title: "Silver Wood",
      location: "Near NCI & Jamtha",
    },
    {
      src: "/images/Completed Projects/dhanbhoomi.png",
      title: "Dhanbhoomi",
      location: "Near Hingna Road",
    },
    {
      src: "/images/Completed Projects/silver park.png",
      title: "Silver Park",
      location: "Dongargaon, Jammtha",
    },
    {
      src: "/images/Completed Projects/silver wind.png",
      title: "Silver Wind",
      location: "Near Hingna Road",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="h-svh w-full bg-black-50 relative">
        <Image
          src={"/images/propertiesDetailedBanner.png"}
          alt="Properties Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 w-full flex items-center md:py-20 bg-red text-white px-10 md:px-20 md:mt-[5%]">
          <div>
            <h1 className="font-classica md:text-7xl text-4xl uppercase">
              Opportunities That Move <br /> With the City
            </h1>
            <div className="md:py-10 py-5 text-sm max-w-[50%]">
              Explore our curated selection of residential, commercial, and
              investment-ready properties located in fast-developing areas.
              These properties grow in value as the city expands, offering you
              the chance to invest smartly and stay ahead. Find the right space
              where growth and opportunity meet.
            </div>
          </div>
        </div>
      </div>

      <ExclusivePropertiesSection
        properties={Object.values(Properties)}
        config={{ showButton: false }}
      />

      <section>
        <div className="font-classica text-center mb-8">
          <div className="uppercase text-md text-[#757279]">Property</div>
          <div className="text-3xl uppercase font-[400] w-fit mx-auto my-3">
            On Going Projects
          </div>
        </div>
        <div className="relative w-[90vw] overflow-hidden py-10 mx-auto">
          {/* All Properties Carousel */}
          <div className="min-w-[90vw] flex flex-col justify-center">
            <Carousel
              items={Object.values(Properties)}
              scrollRef={propertiesScrollRef}
              page={propertiesPage}
              setPage={setPropertiesPage}
              onScroll={(e) => onScroll(e, setPropertiesPage)}
            />
          </div>
        </div>
      </section>

      <section className="p-10">
        <div className="font-classica text-center mb-8">
          <div className="uppercase text-md text-[#757279]">Property</div>
          <div className="text-3xl uppercase font-[400] w-fit mx-auto my-3">
            Completed Projects
          </div>
        </div>
        <div className="relative w-[90vw] flex flex-wrap gap-5 justify-around py-10 mx-auto">
          {completedProperties.map((prop, index) => (
            <CompletedCards
              src={prop.src}
              title={prop.title}
              key={index}
              index={index}
              location={prop.location}
            />
          ))}
        </div>
      </section>

      <ContactSection className="my-20" />
    </div>
  );
}

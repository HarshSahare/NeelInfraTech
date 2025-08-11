"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ContactSection from "../components/sections/contactSection";

import { Properties } from "../lib/properties";
import { calculatePages, scrollToPage, onScroll } from "../lib/utils";
import Carousel from "./Carousel";
import PropertyTabs from "./PropertyTabs";
import FeaturedProperties from "./FeaturedProperties";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const popularScrollRef = useRef<HTMLDivElement>(null);
  const propertiesScrollRef = useRef<HTMLDivElement>(null);

  const [popularPage, setPopularPage] = useState(0);
  const [propertiesPage, setPropertiesPage] = useState(0);

  const featuredProperties = [
    {
      src: "/images/silver_star_header_image.jpg",
      title: "Silver Star",
      location: "Hingna Nagpur",
      desc: "Where Your Plot Comes with a Resort Lifestyle.",
    },
    {
      src: "/images/propertiesDetailedImage2.png",
      title: "Silver Icon",
      location: "Hingna Nagpur",
      desc: "Where Your Plot Comes with a Resort Lifestyle.",
    },
  ];

  const PopularProperties = [
    Properties["vrindavan park"],
    Properties["silver star"],
    Properties["silver icon"],
  ];

  // Force recalculation on resize
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // initial call
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Recalculate pages on window resize or refs change
  const popularPages = calculatePages(
    popularScrollRef.current,
    PopularProperties.length
  );
  const propertiesPages = calculatePages(
    propertiesScrollRef.current,
    Object.keys(Properties).length
  );

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

      <FeaturedProperties properties={featuredProperties} />

      <section>
        <PropertyTabs
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        <div className="relative w-[90vw] overflow-hidden py-10 mx-auto">
          <div
            className="flex w-[180vw] transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 90}vw)` }}
          >
            {/* Popular Properties Carousel */}
            <div className="min-w-[90vw] flex flex-col justify-center">
              <Carousel
                items={PopularProperties}
                scrollRef={popularScrollRef}
                page={popularPage}
                setPage={setPopularPage}
                onScroll={(e) => onScroll(e, setPopularPage)}
                scrollToPage={scrollToPage}
              />
            </div>

            {/* All Properties Carousel */}
            <div className="min-w-[90vw] flex flex-col justify-center">
              <Carousel
                items={Object.values(Properties)}
                scrollRef={propertiesScrollRef}
                page={propertiesPage}
                setPage={setPropertiesPage}
                onScroll={(e) => onScroll(e, setPropertiesPage)}
                scrollToPage={scrollToPage}
              />
            </div>
          </div>
        </div>
      </section>

      <ContactSection className="my-20" />
    </div>
  );
}

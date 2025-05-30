"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import PropertyCard from "../components/propertyCard";
import ContactSection from "../components/sections/contactSection";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Page() {
  const [activeIndex, setActiveIndex] = useState(0); // 0: Popular, 1: Properties
  const popularScrollRef = useRef(null);
  const propertiesScrollRef = useRef(null);
  const featuredProperties = [
    {
      src: "/images/propertiesDetailedImage1.png",
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
    {
      title: "Vrindavan Park",
      status: "Remaining ",
      location: "South Nagpur",
      bedrooms: "1200 sq.ft",
      image: "/images/property_1.png",
    },
    {
      title: "Silver Star",
      status: "Sold Out",
      location: "The Acres",
      bedrooms: "1030 sq.ft",
      image: "/images/property_2.png",
    },
    {
      title: "Silver Icon",
      status: "Sold Out",
      location: "The Acres",
      bedrooms: "1090 sq.ft",
      image: "/images/property_3.png",
    },
  ];

  const Properties = [
    {
      title: "Vrindavan Park",
      status: "Remaining ",
      location: "South Nagpur",
      bedrooms: "1200 sq.ft",
      image: "/images/property_1.png",
    },
    {
      title: "Silver Star",
      status: "Sold Out",
      location: "The Acres",
      bedrooms: "1030 sq.ft",
      image: "/images/property_2.png",
    },
    {
      title: "Silver Icon",
      status: "Sold Out",
      location: "The Acres",
      bedrooms: "1090 sq.ft",
      image: "/images/property_3.png",
    },
    {
      title: "Vrindavan Park",
      status: "Remaining ",
      location: "South Nagpur",
      bedrooms: "1200 sq.ft",
      image: "/images/property_1.png",
    },
    {
      title: "Silver Star",
      status: "Sold Out",
      location: "The Acres",
      bedrooms: "1030 sq.ft",
      image: "/images/property_2.png",
    },
    {
      title: "Silver Icon",
      status: "Sold Out",
      location: "The Acres",
      bedrooms: "1090 sq.ft",
      image: "/images/property_3.png",
    },
  ];

  const scroll = (ref, direction) => {
    const container = ref.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth; // snap by container width
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col">
      <div className="h-svh w-screen bg-amber-50">
        <Image
          src={"/images/propertiesDetailedBanner.png"}
          alt="Properties Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0  w-full flex items-center  md:py-20 text-white">
          <div className="md:px-20 px-10 md:mt-[10%]">
            <h1 className="font-classica md:text-7xl text-5xl uppercase">
              Opportunities That Move <br /> With the City
            </h1>
            <div className="md:py-10 py-5 text-sm">
              At Neel Infratech, we are on a mission to transform how real
              estate is
              <br /> experienced in Nagpur. We don&apos;t just deal in
              properties — we help <br /> people find the right space to grow,
              live, and invest with confidence.
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-40">
        <div className="font-classica text-center ">
          <div className="text-md text-[#757279]">Feature</div>
          <div className="text-3xl py-3 uppercase font-[400]">Properties</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 w-[80%] mx-auto py-15">
          {featuredProperties.map((card, index) => (
            <div className="flex-1" key={index}>
              <div className="relative">
                <Image
                  src={card.src}
                  alt="property image"
                  width={1200}
                  height={700}
                  className="w-full aspect-video z-1"
                />
                <div className="font-classica absolute bottom-0 left-0 text-white z-2  px-8 py-5 text-3xl uppercase font-[500]">
                  {card.title}
                </div>
              </div>
              <div className="px-8 py-5  text-[#757279] ">
                <div className="flex  items-center gap-2 text-xl">
                  <FaLocationDot className="text-xl" />
                  {card.location}
                </div>
                <div className="text-md py-2">{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="font-classica text-center">
          <div className="text-md text-[#757279]">Property</div>
          <div className="text-3xl uppercase font-[400] grid grid-cols-2 gap-5 w-fit mx-auto">
            <div className="flex justify-center text-sm md:text-3xl">
              <div
                className={`uppercase w-fit py-3 ${
                  activeIndex === 0 ? "border-b border-b-[#6A5F6C]" : ""
                } cursor-pointer`}
                onClick={() => setActiveIndex(0)}
              >
                Popular
              </div>
            </div>
            <div className="flex justify-center text-sm md:text-3xl">
              <div
                className={`uppercase w-fit py-3 ${
                  activeIndex === 1 ? "border-b border-b-[#6A5F6C]" : ""
                } cursor-pointer`}
                onClick={() => setActiveIndex(1)}
              >
                Our Properties
              </div>
            </div>
          </div>

          <div className="relative w-[90vw] overflow-hidden py-10 mx-auto">
            {/* Left Arrow */}
            <button
              onClick={() =>
                scroll(
                  activeIndex === 0 ? popularScrollRef : propertiesScrollRef,
                  "left"
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
            >
              <HiChevronLeft size={24} />
            </button>

            <button
              onClick={() =>
                scroll(
                  activeIndex === 0 ? popularScrollRef : propertiesScrollRef,
                  "right"
                )
              }
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
            >
              <HiChevronRight size={24} />
            </button>

            <div
              className="flex w-[180vw] transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 90}vw)`,
              }}
            >
              {/* Section 1: Popular Properties */}
              <div className="min-w-[90vw] flex justify-center">
                <div
                  ref={popularScrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap px-0 scroll-snap-x scroll-smooth"
                >
                  {PopularProperties.map((property, index) => (
                    <div
                      key={index}
                      className="inline-block flex-shrink-0 w-[90vw] md:w-auto scroll-snap-align-start"
                    >
                      <PropertyCard {...property} className="w-full" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Properties */}
              <div className="min-w-[90vw] flex justify-center">
                <div
                  ref={propertiesScrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap px-0 scroll-snap-x scroll-smooth"
                >
                  {Properties.map((property, index) => (
                    <div
                      key={index}
                      className="inline-block flex-shrink-0 w-[90vw] md:w-auto scroll-snap-align-start"
                    >
                      <PropertyCard {...property} className="w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection className="my-20" />
    </div>
  );
}

export default Page;

"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import PropertyCard from "../components/propertyCard";
import ContactSection from "../components/sections/contactSection";

function Page() {
  const [activeIndex, setActiveIndex] = useState(0); // 0: Popular, 1: Properties

  // Refs to the scroll containers
  const popularScrollRef = useRef<HTMLDivElement>(null);
  const propertiesScrollRef = useRef<HTMLDivElement>(null);

  // Active page index for dots of each container
  const [popularPage, setPopularPage] = useState(0);
  const [propertiesPage, setPropertiesPage] = useState(0);

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
      title: "Silver Park - 15",
      status: "Remaining ",
      location: "South Nagpur",
      bedrooms: "1200 sq.ft",
      image: "/images/property_4.png",
    },
    {
      title: "Silver Woods",
      status: "Sold Out",
      location: "The Acres",
      bedrooms: "1030 sq.ft",
      image: "/images/property_5.png",
    },
    {
      title: "Sliver Wind",
      status: "Sold Out",
      location: "The Acres",
      bedrooms: "1090 sq.ft",
      image: "/images/property_6.png",
    },
    {
      title: "Vrindavan Park Residentail and commercial plots",
      status: "Remaining ",
      location: "South Nagpur",
      bedrooms: "1200 sq.ft",
      image: "/images/property_7.png",
    },
    {
      title: "Silver Star , Amravati Road",
      status: "Sold Out",
      location: "The Acres",
      bedrooms: "1030 sq.ft",
      image: "/images/property_8.png",
    },
    {
      title: "Silver Icon, Gotal , Panjri , Nagpur",
      status: "Sold Out",
      location: "The Acres",
      bedrooms: "1090 sq.ft",
      image: "/images/property_9.png",
    },
    {
      title: "Rajatbhoomi 12",
      status: "Remaining ",
      location: "South Nagpur",
      bedrooms: "1200 sq.ft",
      image: "/images/property_10.png",
    },
  ];

  // Calculate total pages given container and card widths
  function calculatePages(
    container: HTMLDivElement | null,
    cardsCount: number
  ) {
    if (!container || cardsCount === 0) return 0;

    // Width of visible area
    const containerWidth = container.clientWidth;

    // Width of one card (assume all same width)
    const firstCard = container.querySelector<HTMLElement>("div");
    if (!firstCard) return 0;
    const cardWidth =
      firstCard.clientWidth +
        parseInt(getComputedStyle(firstCard).marginRight) || 0;

    // Calculate how many cards fit per "page"
    const cardsPerPage = Math.floor(containerWidth / cardWidth);

    // Calculate total pages needed
    return Math.ceil(cardsCount / cardsPerPage);
  }

  // Scroll to page index in container
  function scrollToPage(
    container: HTMLDivElement | null,
    pageIndex: number,
    cardsCount: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
  ) {
    if (!container) return;

    const containerWidth = container.clientWidth;
    const firstCard = container.querySelector<HTMLElement>("div");
    if (!firstCard) return;
    const cardWidth =
      firstCard.clientWidth +
        parseInt(getComputedStyle(firstCard).marginRight) || 0;
    const cardsPerPage = Math.floor(containerWidth / cardWidth);

    // Scroll amount = pageIndex * cardsPerPage * cardWidth
    const scrollLeft = pageIndex * cardsPerPage * cardWidth;

    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setPage(pageIndex);
  }

  // On manual scroll, update active page dots
  function onScroll(
    e: React.UIEvent<HTMLDivElement>,
    cardsCount: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
  ) {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;

    const firstCard = container.querySelector<HTMLElement>("div");
    if (!firstCard) return;
    const cardWidth =
      firstCard.clientWidth +
        parseInt(getComputedStyle(firstCard).marginRight) || 0;
    const cardsPerPage = Math.floor(containerWidth / cardWidth);

    const currentPage = Math.round(scrollLeft / (cardsPerPage * cardWidth));
    setPage(currentPage);
  }

  // Number of pages for each container
  const popularPages = calculatePages(
    popularScrollRef.current,
    PopularProperties.length
  );
  const propertiesPages = calculatePages(
    propertiesScrollRef.current,
    Properties.length
  );

  return (
    <div className="flex flex-col">
      <div className="h-svh w-full bg-black-50">
        <Image
          src={"/images/propertiesDetailedBanner.png"}
          alt="Properties Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0  w-full flex items-center  md:py-20 bg-red text-white">
          <div className="md:px-20 px-10 md:mt-[5%]">
            <h1 className="font-classica md:text-7xl text-4xl uppercase">
              Opportunities That Move <br /> With the City
            </h1>
            <div className="md:py-10 py-5 text-sm max-w-[50%]">
              Explore our curated selection of residential, commercial, and
              investment-ready properties located in fast-developing areas.
              These properties grow in value as the city expands, offering you
              the chance to invest smartly and stay ahead. Find the right space
              where growth and opportunity meet.
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
            <div
              className="flex w-[180vw] transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 90}vw)`,
              }}
            >
              {/* Section 1: Popular Properties */}
              <div className="min-w-[90vw] flex flex-col justify-center">
                <div
                  ref={popularScrollRef}
                  onScroll={(e) =>
                    onScroll(e, PopularProperties.length, setPopularPage)
                  }
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

                {/* Dots for Popular */}
                <div className="flex justify-center gap-3 mt-6">
                  {Array.from({ length: popularPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        scrollToPage(
                          popularScrollRef.current,
                          i,
                          PopularProperties.length,
                          setPopularPage
                        )
                      }
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        popularPage === i ? "bg-black" : "bg-gray-400"
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Section 2: Properties */}
              <div className="min-w-[90vw] flex flex-col justify-center">
                <div
                  ref={propertiesScrollRef}
                  onScroll={(e) =>
                    onScroll(e, Properties.length, setPropertiesPage)
                  }
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

                {/* Dots for Properties */}
                <div className="flex justify-center items-center gap-3 mt-6">
                  {Array.from({ length: propertiesPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        scrollToPage(
                          propertiesScrollRef.current,
                          i,
                          Properties.length,
                          setPropertiesPage
                        )
                      }
                      className={` rounded-full transition-all cursor-pointers duration-300 ${
                        propertiesPage === i
                          ? "bg-black w-4 h-4"
                          : "bg-gray-400 w-2 h-2"
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
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

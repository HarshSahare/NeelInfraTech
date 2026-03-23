"use client";
import React, { useEffect, useRef, useState } from "react";
import PropertyCard from "../propertyCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Properties } from "@/app/lib/properties";

const PropertiesSection = ({ className }: { className?: string }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cardContainer = useRef<HTMLDivElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);
  const cardsWrapper = useRef<HTMLDivElement>(null);
  const [noOfDots, setNoOfDots] = useState<number[]>([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(textContainer.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: textContainer.current,
          start: "top bottom-=20%",
        },
      });

      gsap.from(cardsWrapper.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: cardsWrapper.current,
          start: "top bottom-=20%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  }, []);

  // Calculate number of dots based on container width
  useEffect(() => {
    const updateDots = () => {
      if (cardContainer.current) {
        const container = cardContainer.current;
        const cards = container.querySelectorAll(".property-card");
        if (!cards.length) return;

        const cardsPerView = Math.floor(
          container.clientWidth / cards[0].clientWidth,
        );
        const totalDots = Math.ceil(cards.length / cardsPerView);
        setNoOfDots(Array.from({ length: totalDots }, (_, i) => i));
      }
    };

    updateDots();
    window.addEventListener("resize", updateDots);
    return () => window.removeEventListener("resize", updateDots);
  }, []);

  // Update selected dot when user scrolls manually
  useEffect(() => {
    const handleScroll = () => {
      if (cardContainer.current) {
        const container = cardContainer.current;
        const cards = container.querySelectorAll(".property-card");
        if (!cards.length) return;

        const cardsPerView = Math.floor(
          container.clientWidth / cards[0].clientWidth,
        );
        const newIndex = Math.round(
          container.scrollLeft / (cardsPerView * cards[0].clientWidth + 20),
        );
        setSelectedIndex(newIndex);
      }
    };

    const container = cardContainer.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotsClick = (index: number) => {
    if (cardContainer.current) {
      const container = cardContainer.current;
      const cards = container.querySelectorAll(".property-card");
      if (!cards.length) return;

      setSelectedIndex(index);
      const cardsPerView = Math.floor(
        container.clientWidth / cards[0].clientWidth,
      );
      const scrollX = index * (cardsPerView * cards[0].clientWidth + 20);

      gsap.to(container, {
        scrollTo: { x: scrollX },
        duration: 0.5,
      });
    }
  };

  return (
    <section
      id="ourProperties"
      className={`w-[95.5%] properties-container flex flex-col lg:ml-auto mx-auto px-6 ${className}`}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12 text-center lg:text-left">
        {/* Text Content */}
        <div ref={textContainer} className="lg:w-1/3 lg:mt-[115px]">
          <p className="hidden lg:flex text-xs font-classica heading tracking-widest text-gray-500 items-center">
            PROPERTIES
            <span className="flex-grow max-w-[150px] heading border-t border-gray-300 ml-4"></span>
          </p>
          <div className="lg:hidden text-[10px] font-classica heading tracking-widest text-gray-500 flex flex-col gap-2 py-5">
            <div>PROPERTIES</div>
            <div className="w-[50%] border-t max-w-[150px] mx-auto heading border-gray-300"></div>
          </div>
          <h2 className="text-4xl font-classica heading font-[400] leading-snug">
            Premium property with a premium location
          </h2>
          <p className="text-[#6A5F6C] heading text-[11px]/[20px] font-poppins py-5">
            Be the first to own tomorrow’s most iconic addresses.
          </p>
          <Link
            href="/properties"
            className="border cursor-pointer border-black heading text-[#747176] hover:bg-black hover:text-white transition text-[12px] font-poppins rounded-full"
            style={{ padding: "17px 53px" }}
          >
            View All Properties
          </Link>
        </div>

        {/* Carousel / Scrollable Cards */}
        <div ref={cardsWrapper} className="lg:w-2/3 flex flex-col">
          <div
            ref={cardContainer}
            className="flex overflow-x-scroll scrollbar-hide"
          >
            <div className="w-full md:w-fit flex gap-5">
              {Object.values(Properties).map((property, index) => (
                <PropertyCard
                  key={index}
                  bedrooms={property.bedrooms}
                  brochure={property.brochure}
                  image={property.image}
                  location={property.location}
                  title={property.title}
                />
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="w-full flex gap-2 py-10 justify-center items-center">
            {noOfDots.map((index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  selectedIndex === index
                    ? "w-3 h-3 bg-black"
                    : "w-2 h-2 bg-[#99999977]"
                } rounded-full transition-all duration-300`}
                onClick={() => handleDotsClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;

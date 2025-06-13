"use client";
import React, { useEffect, useRef, useState } from "react";
import PropertyCard from "../propertyCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";

const PropertiesSection = ({ className }: { className?: string }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cardContainer = useRef<HTMLDivElement>(null);
  const [noOfDots, setNoOfDots] = useState([0]);

  useGSAP(() => {
    const ctx = gsap.context(() => {});
    const containers = document.querySelectorAll("#ourProperties > div > div");
    console.log(containers);
    gsap.from(containers[0], {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: containers[0],
        start: "top bottom-=20%",
      },
    });

    gsap.from(containers[1], {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: containers[1],
        start: "top bottom-=20%",
      },
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => gsap.registerPlugin(ScrollToPlugin), []);

  useEffect(() => {
    const updateDots = () => {
      if (cardContainer.current) {
        const container = cardContainer.current;
        const cards = container.querySelectorAll(".property-card");
        if (cards.length === 0) return;

        const cardsPerView = Math.floor(
          container.clientWidth / cards[0].clientWidth
        );
        const totalDots = Math.ceil(cards.length / cardsPerView);
        const dots = Array.from({ length: totalDots }, (_, i) => i);
        setNoOfDots(dots);
      }
    };

    updateDots();
    window.addEventListener("resize", updateDots);

    return () => window.removeEventListener("resize", updateDots);
  }, []);

  const handelDots = (index: number) => {
    if (cardContainer.current) {
      const container = cardContainer.current;
      const cards = container.querySelectorAll(".property-card");

      if (cards.length === 0) return;

      setSelectedIndex(index);

      const cardsPerView = Math.floor(
        container.clientWidth / cards[0].clientWidth
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
      className={`w-[95.5%]  properties-container  flex flex-col  lg:ml-auto mx-auto px-6  ${className}`}
    >
      <div className="flex flex-col lg:flex-row justify-between   gap-12 text-center lg:text-left">
        {/* Text Content */}
        <div className="lg:w-1/3 lg:mt-[115px] ">
          <p className="hidden lg:flex text-xs font-classica heading tracking-widest text-gray-500  items-center">
            PROPERTIES
            <span className="flex-grow max-w-[150px] heading border-t border-gray-300 ml-4"></span>
          </p>
          <div className="lg:hidden text-[10px] font-classica heading tracking-widest text-gray-500 flex flex-col gap-2 py-5">
            <div className="">PROPERTIES</div>
            <div className="w-[50%] border-t max-w-[150px] mx-auto heading border-gray-300"></div>
          </div>
          <h2 className="text-4xl font-classica heading font-[400]   leading-snug">
            The Future Has a <br /> New Address
          </h2>
          <p className="text-[#6A5F6C] heading text-[11px]/[20px] font-poppins py-5">
            Be the first to own tomorrow’s most iconic addresses.
          </p>
          <Link
            href="/properties"
            className="border cursor-pointer border-black heading text-[#747176] hover:bg-black hover:text-white transition text-[12px]  font-poppins tracker-[1px] rounded-full"
            style={{ padding: "17px 53px" }}
          >
            View All Properties
          </Link>
        </div>

        {/* Carousel / Scrollable Cards */}
        <div className="lg:w-2/3 flex flex-col">
          <div
            ref={cardContainer}
            className="flex overflow-x-scroll scrollbar-hide"
          >
            <div className="w-full md:w-fit flex gap-5 scroll">
              <PropertyCard
                image="/images/property_1.png"
                title="Vrindavan Park"
                location="South Nagpur"
                bedrooms="1200 sq.ft"
                status="Remaining"
              />
              <PropertyCard
                image="/images/property_2.png"
                title="Silver Star"
                location="The Acres"
                bedrooms="1030 sq.ft"
                status="Sold Out"
              />
              <PropertyCard
                image="/images/property_3.png"
                title="Silver Icon"
                location="The Acres"
                bedrooms="1090 sq.ft"
                status="Sold Out"
              />
            </div>

            {/* Add more cards if needed */}
          </div>
          <div className="w-full flex gap-2 py-10 justify-center items-center">
            {noOfDots.map((index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  selectedIndex === index
                    ? "w-3 h-3 bg-[#000000]"
                    : "w-2 h-2 bg-[#99999977]"
                } rounded-[50%] transition-all duration-300`}
                onClick={() => handelDots(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;

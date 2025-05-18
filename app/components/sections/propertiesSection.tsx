"use client";
import React from "react";
import PropertyCard from "../propertyCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PropertiesSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".scroll", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".properties-container",
          start: "top 0%",
        },
      });

      gsap.to(".scroll", {
        x: "-100%",
        duration: 1,
        scrollTrigger: {
          trigger: ".properties-container",
          start: "top 0%",
          pin: true,
          scrub: 2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ourProperties"
      className="w-[95.5%] properties-container min-h-svh flex flex-col justify-center ml-auto pl-6 mt-[174px] py-12"
    >
      <div className="flex flex-col lg:flex-row justify-between  gap-12">
        {/* Text Content */}
        <div className="lg:w-1/3 mt-[115px]">
          <p className="text-xs font-classica heading tracking-widest text-gray-500 flex items-center">
            PROPERTIES
            <span className="flex-grow max-w-[150px] heading border-t border-gray-300 ml-4"></span>
          </p>
          <h2 className="text-4xl font-classica heading font-[400] mt-4 mb-[40px] leading-snug">
            Discover Our <br /> Newest Residential Property
          </h2>
          <p className="text-[#6A5F6C] heading text-[11px]/[20px] font-poppins mb-[48px]">
            Dur Meraas designs communities that respond to <br /> contemporary
            passions for every lifestyle. <br /> Choose from alluring waterfront
            locations, <br />
            bustling urban neighbourhoods or secluded <br />
            lush green communities well-connected to the
            <br />
            City.Meraas designs communities that respond to
            <br />
            contemporary passions for every lifestyle.
            <br />
            City
          </p>
          <button
            className="border border-black heading text-[#747176] hover:bg-black hover:text-white transition text-[12px]  font-poppins tracker-[1px] rounded-full"
            style={{ padding: "17px 53px" }}
          >
            View All Properties
          </button>
        </div>

        {/* Carousel / Scrollable Cards */}
        <div className="lg:w-2/3 overflow-x-hidden flex scroll-smooth scrollbar-hide">
          <div className="w-fit flex gap-5 translate-x-[10%] scroll">
            <PropertyCard
              image="/images/property-4.jpg"
              title="The Acres Villas"
              location="The Acres"
              bedrooms="3 BR to 5 BR"
              status="Sold Out"
            />
            <PropertyCard
              image="/images/property-5.jpg"
              title="The Acres Villas"
              location="The Acres"
              bedrooms="3 BR to 5 BR"
              status="Sold Out"
            />
            <PropertyCard
              image="/images/property-4.jpg"
              title="The Acres Villas"
              location="The Acres"
              bedrooms="3 BR to 5 BR"
              status="Sold Out"
            />
          </div>

          {/* Add more cards if needed */}
        </div>
      </div>

      {/* Pagination dots
      <div className="flex justify-center mt-8 gap-2">
        <span className="w-2 h-2 rounded-full bg-black"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      </div> */}
    </section>
  );
};

export default PropertiesSection;

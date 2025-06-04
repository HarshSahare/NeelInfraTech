"use client";
import React from "react";
import PropertyCard from "../propertyCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const PropertiesSection = () => {
  gsap.registerPlugin(ScrollToPlugin);
  useGSAP(() => {
    const ctx = gsap.context(() => {});

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ourProperties"
      className="w-[95.5%]  properties-container min-h-svh flex flex-col justify-center lg:ml-auto mx-auto px-6 lg:mt-[174px] py-20"
    >
      <div className="flex flex-col lg:flex-row justify-between   gap-12 text-center lg:text-left">
        {/* Text Content */}
        <div className="lg:w-1/3 lg:mt-[115px]">
          <p className="hidden lg:flex text-xs font-classica heading tracking-widest text-gray-500  items-center">
            PROPERTIES
            <span className="flex-grow max-w-[150px] heading border-t border-gray-300 ml-4"></span>
          </p>
          <div className="lg:hidden text-[10px] font-classica heading tracking-widest text-gray-500 flex flex-col gap-2">
            <div className="">PROPERTIES</div>
            <div className="w-[50%] border-t max-w-[150px] mx-auto heading border-gray-300"></div>
          </div>
          <h2 className="text-4xl font-classica heading font-[400] mt-4 mb-[40px] leading-snug">
            The Future Has a <br /> New Address
          </h2>
          <p className="text-[#6A5F6C] heading text-[11px]/[20px] font-poppins mb-[48px]">
            Be the first to own tomorrow’s most iconic addresses.
          </p>
          <button
            className="border border-black heading text-[#747176] hover:bg-black hover:text-white transition text-[12px]  font-poppins tracker-[1px] rounded-full"
            style={{ padding: "17px 53px" }}
          >
            View All Properties
          </button>
        </div>

        {/* Carousel / Scrollable Cards */}
        <div className="lg:w-2/3 overflow-x-scroll flex scrollbar-hide">
          <div className="w-fit flex gap-5  scroll">
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

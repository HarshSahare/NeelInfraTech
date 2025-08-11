"use client";
import React from "react";

interface PropertyTabsProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function PropertyTabs({
  activeIndex,
  setActiveIndex,
}: PropertyTabsProps) {
  return (
    <div className="font-classica text-center mb-8">
      <div className="uppercase text-md text-[#757279]">Property</div>
      <div className="text-3xl uppercase font-[400] grid grid-cols-2 gap-5 w-fit mx-auto">
        {["Popular", "Our Properties"].map((label, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`flex justify-center cursor-pointer text-sm md:text-3xl py-3 w-fit ${
              activeIndex === idx ? "border-b border-b-[#6A5F6C]" : ""
            }`}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StorySection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".story-container",
        start: "top 50%",
      },
    });

    const ctx = gsap.context(() => {
      timeline.from(".story-container .heading", {
        opacity: 0,
        y: -100,
        duration: 1,
        stagger: 0.2,
      });
    });

    timeline.from(".story-grid-content *", {
      opacity: 0,
      x: "-100%",
      duration: 1,
      stagger: 0.2,
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" className="bg-white py-28 px-4 md:px-20 text-center">
      <div className="mx-auto">
        <p className="text-sm md:text-base font-classica font-[400] tracking-wider text-[#757279] uppercase mb-3">
          Our Story
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-classica font-[400] leading-tight text-[#161616] mb-10">
          CREATING VALUE <br className="hidden md:block" />
          THROUGH DESIGN & SPACE
        </h2>
        <p className="font-[400] font-poppins text-[#44404096] text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
          Driven by passion, we continuously push the boundaries of architecture
          by constructing residential, commercial, hospitality, and retail
          spaces that frame Dubai’s skyline.
        </p>
      </div>

      <div className="mt-24 flex lg:flex-row lg:gap-0  flex-wrap flex-col justify-around gap-12 max-w-7xl mx-auto text-left px-4 md:py-10 lg:items-center">
        <div className="w-fit flex justify-center h-fit min-w-fit">
          <div className=" w-[2px] bg-[#757279] "></div>
          <div className="px-8">
            <h3 className="text-5xl sm:text-6xl font-classica text-[#757279] py-8 ">
              03
            </h3>
            <p className="text-[#999999] text-lg mt-6">Destinations</p>
          </div>
        </div>
        <div className="w-fit flex justify-center h-fit min-w-fit">
          <div className=" w-[2px] bg-[#757279] "></div>
          <div className="px-8">
            <h3 className="text-5xl sm:text-6xl font-classica text-[#757279] py-8">
              18
            </h3>
            <p className="text-[#999999] text-lg mt-6">Masterpieces</p>
          </div>
        </div>
        <div className="w-fit flex justify-center h-fit min-w-fit">
          <div className=" w-[2px] bg-[#757279] "></div>
          <div className="px-8">
            <h3 className="text-5xl sm:text-6xl font-classica text-[#757279] py-8">
              $10bn
            </h3>
            <p className="text-[#999999] text-lg mt-6">Portfolio</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <button className="bg-black text-white px-8 sm:px-12 py-3 text-sm hover:bg-gray-900 transition">
          Discover Our Story
        </button>
      </div>
    </section>
  );
};

export default StorySection;

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
        start: "top 0%",
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
    <section className="bg-white story-container pb-16 pt-[160px] px-4 md:px-20 text-center">
      <div className="mx-auto">
        <p className="text-[16px] font-classica heading font-[400] tracking-wider text-[#757279] uppercase mb-3">
          Our Story
        </p>
        <h2 className="text-[62px] md:text-5xl heading font-[400] font-classica leading-tight text-[#161616] mb-[40px]">
          CREATING VALUE <br /> THROUGH DESIGN & SPACE
        </h2>
        <p className="font-[400] font-poppins heading text-[#44404096] text-md max-w-3xl mx-auto">
          Driven by passion, we continuously push the boundaries of architecture
          by constructing <br /> residential, commercial, hospitality, and
          retail spaces that frame Dubai’s skyline.
        </p>
      </div>

      <div className="mt-[170px] story-grid-section grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[85%] place-items-center-safe mx-auto text-left">
        <div className="border-l-2 story-grid-content border-[#757279] overflow-hidden pl-6 w-fit">
          <h3 className="text-[62px] font-[400] font-classica s text-[#757279]">
            03
          </h3>
          <p className="text-[#999999] text-[18px] mt-[28px] ">Destinations</p>
        </div>
        <div className="border-l-2 story-grid-content overflow-hidden border-[#757279] pl-6 w-fit">
          <h3 className="text-[62px] font-[400] font-classica text-[#757279]">
            18
          </h3>
          <p className="text-[#999999] text-[18px] mt-[28px]">Masterpieces</p>
        </div>
        <div className="border-l-2 story-grid-content overflow-hidden border-[#757279] pl-6 w-fit">
          <h3 className="text-[62px] font-[400] font-classica text-[#757279]">
            $10bn
          </h3>
          <p className="text-[#999999] text-[18px] mt-[28px]">Portfolio</p>
        </div>
      </div>

      <div className="mt-12">
        <button className="bg-black text-white px-18 py-3 mt-[80px]  text-sm hover:bg-gray-900 transition">
          Discover Our Story
        </button>
      </div>
    </section>
  );
};

export default StorySection;

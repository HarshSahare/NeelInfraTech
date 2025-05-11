"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function VisionSection() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".vision-container",
        start: "top 0%",
      },
    });

    const ctx = gsap.context(() => {
      timeline.from(".vision-container .heading", {
        opacity: 0,
        y: -100,
        duration: 1,
        stagger: 0.2,
      });
    });

    timeline.from(".vision-container .right-section", {
      opacity: 0,
      duration: 1,
    });

    timeline.from(".vision-container .left-section", {
      opacity: 0,
      duration: 1,
    });

    timeline.from(".vision-container .leader-image-button", {
      opacity: 0,
      duration: 1,
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-svh overflow-hidden vision-container w-[95.5%] pt-30 m-auto flex flex-col">
      <div>
        <div className="uppercase text-center font-classica heading text-[#757279] text-sm">
          Our Visionary Leader
        </div>
        <div className="mx-auto w-fit">
          <div className="uppercase w-fit  font-classica heading  text-[75px] font-[400] text-center mt-5">
            Mr. Pitambar ikar
          </div>
          <div className="w-fit text-[#44404096] heading  font-poppins">
            Founder & CEO Of NEEL INFRATECH
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="left flex font-classica text-[12px]/[24px]  text-[#918F8F] font-[400] flex-col justify-end  pb-50 flex-1">
          <div className="mr-[-10px] mb-[15px] pl-[54px] left-section">
            APR 30 2025
            <div className="h-[0.2px] w-[40%] my-3 bg-[#918F8F]"></div>
            <div className="text-left">
              Today, his vision continues to guide a dedicated team, committed
              to building
              <br /> not just homes, but communities that inspire better living.
            </div>
          </div>
        </div>
        <div className="center relative">
          <Image
            src="/images/director-image.png"
            alt="Director"
            width={500}
            height={500}
            className="w-auto h-full leader-image mt-[-47px] rounded-full mx-auto object-contain"
          />
          <div className="absolute bottom-0 h-[20%] w-full blur-md bg-white"></div>
          <button
            className="absolute bottom-[9%] left-[50%] leader-image-button cursor-pointer bg-black text-white px-8 py-2 z-10"
            style={{ transform: "translateX(-50%)" }}
          >
            Read More
          </button>
        </div>
        <div className="right font-classica right-section text-[12px]/[24px] text-[#918F8F] font-[400]  flex-1 pt-10 ">
          <div className="mt-2 ml-[-5px]">
            Starting with nothing but a dream and determination, Mr. Pitambar
            Ikar <br /> built Neel Infratech into a trusted empire through
            vision, hard work, and <br /> unwavering belief. belief.
            <div className="h-[0.2px] w-[40%]  my-3 bg-[#918F8F]"></div>
            Nov 21 2017
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionSection;

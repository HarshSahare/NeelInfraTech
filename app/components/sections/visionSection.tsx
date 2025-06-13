"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

function VisionSection({ className }: { className?: string }) {
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
    <div
      className={`min-h-svh  overflow-hidden vision-container w-[95.5%]  mx-auto flex flex-col ${className}`}
    >
      {/* Header Section */}
      <div className="text-center">
        <div className="uppercase font-classica text-[#757279] text-sm">
          Our Visionary Leader
        </div>
        <div className="mt-5">
          <h2 className="uppercase font-classica text-4xl sm:text-5xl md:text-[75px] font-[400] text-center">
            Mr. Pitambar Ikar
          </h2>
          <p className="text-[#44404096] font-poppins text-sm sm:text-base mt-2">
            Founder & CEO Of NEEL INFRATECH
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row flex-1 mt-12 gap-8">
        {/* Left Text */}
        <div className="md:flex-1 font-classica text-xs sm:text-sm text-[#918F8F] font-[400] flex flex-col justify-end px-4 md:px-0 pb-10 md:pb-20">
          <div className="mb-4 md:pl-12">
            <p>APR 30 2025</p>
            <div className="h-[0.2px] w-[40%] my-3 bg-[#918F8F]"></div>
            <p className="text-left">
              Today, his vision continues to guide a dedicated team, committed
              to building
              <br className="hidden sm:block" />
              not just homes, but communities that inspire better living.
            </p>
          </div>
        </div>

        {/* Center Image & Button */}
        <div className="relative md:flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <Image
              src="/images/director-image.png"
              alt="Director"
              width={500}
              height={500}
              className="w-full h-auto rounded-full object-contain"
            />
            <div className="absolute bottom-[-20px] h-[20%] w-full blur-md bg-white"></div>
            <Link
              href="/stories"
              className="absolute bottom-[9%] left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 text-sm sm:text-base z-10"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Right Text */}
        <div className="md:flex-1 font-classica text-xs sm:text-sm text-[#918F8F] font-[400] px-4 md:px-0 pt-4 md:pt-10">
          <div className="ml-0 md:ml-[-5px]">
            <p>
              Starting with nothing but a dream and determination, Mr. Pitambar
              Ikar <br className="hidden sm:block" />
              built Neel Infratech into a trusted empire through vision, hard
              work, and <br className="hidden sm:block" />
              unwavering belief.
            </p>
            <div className="h-[0.2px] w-[40%] my-3 bg-[#918F8F]"></div>
            <p>Nov 21 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionSection;

"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AwardsSection = ({ className }: { className?: string }) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".awards-container main .reward-heading", {
        opacity: 0,
        y: -50,
        duration: 1,
        scrollTrigger: {
          trigger: ".awards-container main",
          start: "top bottom",
        },
        stagger: 0.2,
      });
    });
    gsap.to(".image-container img", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".image-container img",
        start: "top 50%",
      },
      stagger: 0.2,
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`bg-white awards-container text-black  flex items-center justify-center ${className}`}
    >
      <main className="text-center px-4 sm:px-6 w-full max-w-7xl">
        {/* "Awards & Recognition" */}
        <p className="text-xs sm:text-sm tracking-wide reward-heading font-classica text-gray-600">
          <span className="font-[400] text-black">Awards</span> & Recognition
        </p>

        {/* Short line under heading */}
        <div className="w-[60px] sm:w-[99px] h-px reward-heading bg-gray-300 mx-auto mt-5 mb-2" />

        {/* Main title */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[45px] reward-heading font-classica font-[400] text-[rgba(22,22,22,1)] my-4">
          The Trust We’ve Earned
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 reward-heading max-w-md mx-auto text-sm sm:text-base">
          Our passion has been recognized by the industry’s finest.
        </p>

        {/* Divider */}
        <div className="max-w-2xl h-px reward-heading bg-gray-300 mx-auto my-12" />

        {/* Awards logos grid */}
        <div className="image-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center items-center mt-4">
          <Image
            src="/images/rewardImage1.png"
            alt="Ford image"
            className="opacity-0 object-contain w-[100px] sm:w-[134px]"
            width={134}
            height={134}
          />
          <Image
            src="/images/rewardImage3.png"
            alt="Gulf Real Estate Awards 2022"
            className="opacity-0 object-contain h-10 w-auto"
            width={202}
            height={50}
          />
          <Image
            src="/images/rewardImage4.png"
            alt="Achievement Awards 2024"
            className="opacity-0 object-contain h-10 w-auto"
            width={161}
            height={59}
          />
          <Image
            src="/images/rewardImage5.png"
            alt="Infrastructure Awards"
            className="opacity-0 object-contain h-10 w-auto"
            width={202}
            height={50}
          />
          <Image
            src="/images/rewardImage2.png"
            alt="Ford image"
            className="opacity-0 object-contain w-[110px] sm:w-[168px]"
            width={168}
            height={45}
          />
          <Image
            src="/images/rewardImage6.png"
            alt="International Property Awards"
            className="opacity-0 object-contain w-[150px] sm:w-[230px]"
            width={230}
            height={146}
          />
          <Image
            src="/images/rewardImage7.png"
            alt="Arabian Property Awards"
            className="opacity-0 object-contain w-[100px] sm:w-[125px]"
            width={125}
            height={68}
          />
          <Image
            src="/images/rewardImage8.png"
            alt="Cityscape Awards"
            className="opacity-0 object-contain w-[130px] sm:w-[186px]"
            width={186}
            height={126}
          />
        </div>

        {/* Footer lines */}
        <div className="flex flex-col items-center mt-16 space-y-4">
          <div className="w-full max-w-5xl h-px bg-gray-300" />
          <div className="w-full max-w-4xl h-px bg-gray-300" />
          <div className="w-full max-w-3xl h-px bg-gray-300 mb-16" />
        </div>
      </main>
    </div>
  );
};

export default AwardsSection;

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
      // Fade-up for text elements
      gsap.from(".awards-container .reward-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".awards-container",
          start: "top 80%",
          once: true,
        },
      });

      // Fade + scale logos
      gsap.from(".awards-container .award-logo", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".awards-container .image-container",
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={` awards-container text-white flex items-center justify-center  ${className}`}
    >
      <main className="text-center px-6 w-full max-w-7xl">
        {/* Section Label */}
        <p className="text-xs sm:text-sm tracking-wide reward-heading font-classica  uppercase">
          <span className="font-[500]">Awards</span> & Recognition
        </p>

        {/* Line under heading */}
        <div className="w-[60px] sm:w-[90px] h-[1px] bg-gray-300 mx-auto mt-4 reward-heading" />

        {/* Main title */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[44px] reward-heading font-classica font-[400]  mt-6">
          The Trust We’ve Earned
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 reward-heading max-w-lg mx-auto text-sm sm:text-base mt-4">
          Our passion and dedication have been recognized by the industry’s most
          prestigious awards.
        </p>

        {/* Divider */}
        <div className="max-w-2xl h-[1px] bg-gray-200 mx-auto my-12 reward-heading" />

        {/* Awards logos grid */}
        <div className="image-container grid grid-cols-1 md:grid-cols-2  gap-8  justify-items-center items-center">
          <div className="flex flex-col items-center">
            <Image
              src="/images/rewardImage1.png"
              alt="Ford Excellence Award"
              className="award-logo object-contain w-[260px] sm:w-[250px] md:w-[280px] aspect-[2/1]"
              width={500}
              height={500}
            />
            <div className="text-center uppercase text-2xl mt-5 font-medium font-classica">
              sanction Layout
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/images/rewardImage2.png"
              alt="Gulf Real Estate Awards 2022"
              className="award-logo object-contain w-[260px] sm:w-[250px] md:w-[280px] aspect-[2/1]"
              width={500}
              height={500}
            />
            <div className="text-center uppercase text-2xl mt-5 font-medium font-classica">
              55 RERA Aprroved Poject
            </div>
          </div>
        </div>

        <ul className="mt-40 uppercase font-classica w-fit mx-auto text-4xl font-bold">
          <li className="mb-10">
            Successfully <span className="text-red-600">Sold Out</span> 95+
            Projects
          </li>
          <li>
            <span className="text-red-600">55+ Projects </span> Completion
            Certificates
          </li>
        </ul>

        {/* Decorative footer lines */}
        <div className="flex flex-col items-center mt-20 mb-5 space-y-4">
          <div className="w-full max-w-xl mt-2 h-[1px] bg-gray-200 mb-4" />
        </div>
      </main>
    </div>
  );
};

export default AwardsSection;

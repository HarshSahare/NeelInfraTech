"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const PropertiesLandingSection = () => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".properties-landingpage-container .heading", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: ".properties-landingpage-container",
          start: "top 60%",
        },
        stagger: 0.2,
      });
    });

    gsap.to(".up-grid > div ,.down-grid > div", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100% , 0% 100%)",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".properties-landingpage-container",
        start: "top 60%",
      },
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="flex properties-landingpage-container flex-col lg:flex-row gap-[75px] max-w-[93.5%] mx-auto">
      {/* Left Column: Text Content */}
      <div className="lg:w-1/3  lg:mt-[151px] lg:mb-0 text-center lg:text-left ">
        <p className=" hidden lg:flex text-[10px] font-classica heading tracking-widest text-gray-500  items-center">
          PROPERTIES
          <span className="flex-grow border-t max-w-[150px] heading border-gray-300 ml-4"></span>
        </p>
        <div className="lg:hidden text-[10px] font-classica heading tracking-widest text-gray-500 flex flex-col gap-2">
          <div className="">PROPERTIES</div>
          <div className="w-[50%] border-t max-w-[150px] mx-auto heading border-gray-300"></div>
        </div>
        <h2 className="text-[40px] font-classica font-[400] heading mt-4 mb-[40px] leading-snug">
          Our Premium Properties <br /> in the Best Locations –
          <i className="text-gray-500">“Your Address Says It All”</i>
        </h2>
        <p className="text-[#6A5F6C] text-[13px]/[22px] heading font-poppins mb-[48px]">
          From the heart of the city to nature-kissed suburbs, our handpicked
          premium properties redefine luxury and lifestyle.
        </p>
        <Link
          href={"/properties"}
          className="bg-black  text-white text-[12px] heading font-poppins tracker-[1px] rounded-full"
          style={{ padding: "17px 53px" }}
        >
          View All Premium Listings
        </Link>
      </div>

      {/* Right Column: Image Grid */}
      <div
        className="lg:w-2/3  flex lg:flex-nowrap flex-wrap gap-6"
        id="property-images"
      >
        {/* Column 1 */}
        <div className="flex up-grid flex-col gap-6 lg:w-1/2 w-full">
          <div
            style={{
              clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            }}
          >
            <Image
              src="/images/property-1.png"
              alt="Palace Villas"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-[#757378] font-classica">
              <span>PALACE VILLAS – OSTRA</span>
              <span className="mx-2">|</span>
              <span>THE OASIS</span>
              <span className="flex-grow max-w-[100px] border-t border-gray-300 ml-2"></span>
            </div>
          </div>

          {/* Image 3 */}
          <div
            style={{ clipPath: "polygon(0% 0% , 0% 0% , 0% 100%,  0% 100%)" }}
          >
            <Image
              src="/images/property-3.png"
              alt="Address Grand Downtown"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-[#757378] font-classica">
              <span>ADDRESS GRAND DOWNTOWN</span>
              <span className="mx-2">|</span>
              <span>DOWNTOWN DUBAI</span>
              <span className="flex-grow border-t border-gray-300 ml-2"></span>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex down-grid flex-col gap-6 lg:w-1/2 w-full">
          {/* Image 2 */}
          <div
            className="mt-[.5%]"
            style={{
              clipPath: "polygon(100% 0%, 100% 0%, 100% 100% , 100% 100%)",
            }}
          >
            <Image
              src="/images/property-2.png"
              alt="Golf Meadow at Emaar South"
              width={600}
              height={260}
              className="w-full h-[260px] object-cover"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-[#757378] font-classica">
              <span>GOLF MEADOW AT EMAAR SOUTH</span>
              <span className="mx-2">|</span>
              <span>EMAAR SOUTH</span>
              <span className="flex-grow border-t border-gray-300 ml-2"></span>
            </div>
          </div>

          {/* Image 4 */}
          <div
            style={{
              clipPath: "polygon(100% 0%, 100% 0%, 100% 100% , 100% 100%)",
            }}
          >
            <Image
              src="/images/property-3.png"
              alt="Address Grand Downtown"
              width={600}
              height={260}
              className="w-full h-[260px] object-cover"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-[#757378] font-classica">
              <span>ADDRESS GRAND DOWNTOWN</span>
              <span className="mx-2">|</span>
              <span>DOWNTOWN DUBAI</span>
              <span className="flex-grow border-t border-gray-300 ml-2"></span>
            </div>
          </div>
          <div
            style={{
              clipPath: "polygon(100% 0%, 100% 0%, 100% 100% , 100% 100%)",
            }}
          >
            <Image
              src="/images/property-3.png"
              alt="Address Grand Downtown"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-[#757378] font-classica">
              <span>ADDRESS GRAND DOWNTOWN</span>
              <span className="mx-2">|</span>
              <span>DOWNTOWN DUBAI</span>
              <span className="flex-grow border-t border-gray-300 ml-2"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesLandingSection;

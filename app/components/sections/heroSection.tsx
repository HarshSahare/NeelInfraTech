"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "./heroSection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HeroSection() {
  gsap.registerPlugin(ScrollTrigger);
  const svg = useRef<SVGSVGElement>(null);
  const path = useRef<SVGPathElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "top+=300",
          scrub: 0.3,
        },
      });
      timeline.to(
        path.current,
        {
          attr: { d: "M 0 100 L 50 0 L 100 100 Z ", fill: "#ffffff50" },
        },
        "hero-same"
      );
      timeline.to(
        ".separator",
        {
          backgroundColor: "#000",
        },
        "hero-same"
      );
      timeline.to(
        ".layer2",
        {
          color: "#000",
        },
        "hero-same"
      );
      timeline.to(
        path.current,
        {
          attr: {
            fill: "#fff",
          },
        },
        "hero-same-2"
      );

      timeline.to(
        svg.current,
        {
          scale: 3,
        },
        "hero-same-2"
      );
    });

    return () => ctx.revert();
  }, [svg.current]);

  const toggleSections = (num: number) => {
    if (currentVideo == num) {
      setCurrentVideo(0);
    } else {
      setCurrentVideo(num);
    }
  };

  return (
    <div className="w-full relative hero-section h-screen bg-black overflow-hidden">
      <div className="overlay bg-[#12121277] absolute top-0 left-0 h-full w-full z-2"></div>
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 z-1 `}
        autoPlay
        muted
        loop
        src="/videos/homepageHeroSectionBannerVideo.mp4"
      />

      <div className="overlayTexts w-full h-full absolute top-0 left-0 z-3">
        <div className="layer1 absolute top-0 left-0 w-full h-full flex justify-center items-center flex-wrap delay-4s fadeOut">
          <div
            className="brandName uppercase w-fit h-fit font-bold text-white 
                 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] 
                 opacity-0 delay-2s fadeIn font-classica text-center px-4"
          >
            Neel InfraTech
          </div>
        </div>

        <div className="layer2 absolute top-0 text-white left-0 w-full h-full opacity-0 flex justify-center lg:content-end items-center flex-wrap delay-5s z-3 fadeIn">
          <div className="h-fit lg:h-[70%] w-full flex items-center flex-col">
            <div className="top-section flex flex-col items-center px-4 text-center">
              <div
                className="title font-classica heading uppercase font-[400] 
                  text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]"
              >
                The Art of Fine Living.
              </div>
              <div
                className="description heading font-poppins font-light my-2 
                  text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] 
                  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[450px]"
              >
                Where timeless design meets elite comfort, crafted to elevate
                your lifestyle and reflect a taste for only the finest.
              </div>
            </div>

            <div className="bottom-section flex-1 opacity-0 fadeIn delay-6s  mt-[155px] w-full lg:flex max-w-[1000px] hidden ">
              <div
                className={`flex flex-1 flex-col sectionTransition mt-auto ${
                  currentVideo == 1 ? "expandedSection" : "shrunkSection"
                }`}
              >
                <div className="mx-auto">
                  <div
                    className="title text-[28px] font-[100] uppercase font-classica cursor-pointer"
                    onClick={() => toggleSections(1)}
                  >
                    Commercial Properties
                  </div>
                  <div
                    className={`description font-poppins text-[14px]/[20px] font-[50] opacity-0  mt-[15px] delay-500 transition-opacity  max-w-[418px] ${
                      currentVideo == 1 ? "fadeIn" : "fadeOut"
                    }`}
                  >
                    We offer prime commercial spaces ideal for shops, offices,
                    and showrooms—perfect for business growth and smart
                    investment.
                  </div>
                  <div
                    className={`button w-fit px-4 py-2 cursor-pointer opacity-0  bg-white rounded mt-5 transition-opacity delay-500 text-black ${
                      currentVideo == 1 ? "fadeIn" : "fadeOut"
                    }`}
                  >
                    Learn More
                  </div>
                </div>
              </div>
              <div className="flex separator w-[.5px] h-[50%] bg-white"></div>
              <div
                className={`flex flex-1 flex-col sectionTransition mt-auto ${
                  currentVideo == 2 ? "expandedSection" : "shrunkSection"
                }`}
              >
                <div className="mx-auto">
                  <div
                    className="title text-[28px] font-[100] uppercase font-classica cursor-pointer"
                    onClick={() => toggleSections(2)}
                  >
                    Residential properties
                  </div>
                  <div
                    className={`description font-poppins opacity-0 text-[14px]/[20px] font-[50] mt-[15px] delay-500 transition-opacity  max-w-[418px] ${
                      currentVideo == 2 ? "fadeIn" : "fadeOut"
                    }`}
                  >
                    We Offer Affordable residential plots and homes in prime
                    locations—perfect for families looking to build their dream
                    home in a peaceful, well-connected area
                  </div>
                  <div
                    className={`button w-fit px-4 py-2 opacity-0 cursor-pointer bg-white rounded mt-5 transition-opacity delay-500 text-black ${
                      currentVideo == 2 ? "fadeIn" : "fadeOut"
                    }`}
                  >
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="layer3 absolute top-0 w-full h-full z-20 pointer-events-none"></div>

        <div className="layer4 z-2 absolute bottom-0 left-0 h-full w-full">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-screen h-screen"
            ref={svg}
          >
            <path
              ref={path}
              d={`M 0 100 L 50 100 L 100 100 Z `}
              fill="#ffffff6e"
              stroke="none"
            />
          </svg>
        </div>
      </div>
      <div className="floatingButton bounce-up cursor-pointer fixed bg-[#D9D9D9] z-4 aspect-square p-2 rounded-md flex flex-wrap content-center justify-center right-8 bottom-8">
        <Image
          src="/images/black-short-logo.png"
          alt="logo"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}

export default HeroSection;

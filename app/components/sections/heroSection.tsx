"use client";
import Image from "next/image";
import React, {  useRef } from "react";
import "./heroSection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HeroSection() {
  gsap.registerPlugin(ScrollTrigger);
  const svg = useRef<SVGSVGElement>(null);
  const path = useRef<SVGPathElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "top+=300",
          scrub: 0.3,
          pin: true,
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
        ".layer2 .heading",
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

  return (
    <div className="w-full relative hero-section h-screen bg-black overflow-hidden">
      <div className="overlay bg-[#12121277] absolute top-0 left-0 h-full w-full z-2"></div>
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 z-1`}
        autoPlay
        muted
        loop
        src="/videos/defaultHeroVideo.mp4"
      />

      <div className="overlayTexts relative w-full h-full absolute top-0 left-0 z-3">
        <div className="layer1 absolute top-0 left-0 w-full h-full flex justify-center content-center delay-4s fadeOut  flex-wrap ">
          <div
            className={`brandName uppercase w-fit h-fit font-bold text-white text-[100px] opacity-0 delay-2s fadeIn font-classica`}
          >
            Neel InfraTech
          </div>
        </div>

        <div className="layer2 absolute top-0 text-white left-0 w-full h-full opacity-0 flex justify-center content-center flex-wrap delay-5s z-3 fadeIn">
          <div className="h-fit m-auto content-container w-full flex items-center flex-col">
            <div className="top-section flex flex-col items-center">
              <div className="title font-classica heading uppercase text-[40px] font-[400]">
                The Art of Fine Living.
              </div>
              <div className="description heading font-poppins text-center text-[16px]/[22px] font-light my-[10px] max-w-[450px]">
                Where timeless design meets elite comfort, crafted to elevate
                your lifestyle and reflect a taste for only the finest.
              </div>
            </div>
          </div>
        </div>

        <div className="layer3 absolute top-0 w-full h-full z-20 pointer-events-none"></div>

        <div className="layer4 z-2 absolute bottom-0 left-0 h-full w-full overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={svg}
            className="w-screen h-screen"
          >
            <path
              ref={path}
              d={`M 0 100 L 50 100 L 100 100 Z `}
              fill="#ffffffe5"
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

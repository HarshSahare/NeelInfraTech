"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "./heroSection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

function HeroSection({ className }: { className?: string }) {
  gsap.registerPlugin(ScrollTrigger);
  const svg = useRef<SVGSVGElement>(null);
  const path = useRef<SVGPathElement>(null);
  const section1 = useRef<HTMLDivElement>(null);
  const section2 = useRef<HTMLDivElement>(null);
  const height1 = useRef<number>(0);
  const height2 = useRef<number>(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const [currentVideo, setCurrentVideo] = useState(0);

  // Measure heights once
  useEffect(() => {
    if (section1.current && section2.current) {
      height1.current = section1.current.scrollHeight;
      height2.current = section2.current.scrollHeight;
    }
  }, []);

  // GSAP Hero Pin
  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "top+=300",
          scrub: 0.3,
          pin: true,
          pinSpacing: true,
          onEnter: () => {
            gsap.set(heroRef.current, { height: heroHeight }); // lock height
          },
          onLeave: () => {
            gsap.set(heroRef.current, { clearProps: "height" }); // restore
          },
        },
      });

      timeline.to(
        path.current,
        {
          attr: { d: "M 0 100 L 50 0 L 100 100 Z ", fill: "#ffffff50" },
        },
        "hero-same"
      );
      timeline.to(".separator", { backgroundColor: "#000" }, "hero-same");
      timeline.to(".layerText", { color: "#000" }, "hero-same");
      timeline.to(path.current, { attr: { fill: "#fff" } }, "hero-same-2");
      timeline.to(svg.current, { scale: 3 }, "hero-same-2");

      gsap.to(".heroSectionheading", {
        opacity: 0,
        duration: 1,
        delay: 3.5,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  // Toggle bottom sections
  useGSAP(() => {
    if (!section1.current || !section2.current) return;

    const show = (target: HTMLDivElement, h: number) =>
      gsap.to(target, {
        opacity: 1,
        height: h,
        duration: 0.8,
        ease: "power2.out",
      });
    const hide = (target: HTMLDivElement) =>
      gsap.to(target, {
        opacity: 0,
        height: 0,
        duration: 0.8,
        ease: "power2.out",
      });

    if (currentVideo === 1) {
      show(section1.current, height1.current);
      hide(section2.current);
    } else if (currentVideo === 2) {
      show(section2.current, height2.current);
      hide(section1.current);
    } else {
      hide(section1.current);
      hide(section2.current);
    }
  }, [currentVideo]);

  const toggleSections = (num: number) => {
    setCurrentVideo(currentVideo === num ? 0 : num);
  };

  return (
    <div
      ref={heroRef}
      className={`w-full relative hero-section min-h-screen bg-black overflow-hidden ${className}`}
    >
      {/* --- your HTML stays exactly the same --- */}
      {/* video background */}
      <div className="overlay bg-[#12121277] absolute top-0 left-0 h-full w-full z-2"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 z-1"
        autoPlay
        muted
        loop
        src="/videos/homepageHeroSectionBannerVideo.mp4"
      />

      {/* overlay text */}
      <div className="overlayTexts w-full h-full absolute top-0 left-0 z-3">
        <div className="absolute top-0 text-white left-0 w-full h-full flex flex-wrap z-3 pt-[var(--navbar-h)]">
          <div className="flex flex-col h-full w-full py-10 justify-center">
            <div className="h-fit w-full flex items-center flex-col mx-auto">
              <div className="top-section heroSectionheading flex flex-col items-center px-4 text-center">
                <div className="font-classica uppercase font-[400] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[50px]">
                  Nagpur&apos;s Trusted Developer
                </div>
                <Image
                  src="/images/heroSectionShadow.png"
                  width={700}
                  height={800}
                  alt="heading shadow"
                  className="w-full translate-y-[-100%]"
                />
              </div>
            </div>

            {/* bottom-section */}
            <div className="bottom-section mt-auto w-full lg:flex max-w-[1100px] mx-auto hidden">
              <div className="flex flex-1 flex-col sectionTransition mt-auto">
                <div className="mx-auto section1 layerText overflow-hidden">
                  <div
                    className="title text-[28px] font-[100] uppercase font-classica cursor-pointer"
                    onClick={() => toggleSections(1)}
                  >
                    Commercial Properties
                  </div>
                  <div className="detail" ref={section1}>
                    <div className="description font-poppins text-[14px]/[20px] font-[50] mt-[15px] max-w-[418px]">
                      We offer prime commercial spaces ideal for shops, offices,
                      and showrooms—perfect for business growth and smart
                      investment.
                    </div>
                    <div className="button w-fit px-4 py-2 cursor-pointer bg-white rounded mt-5 text-black">
                      <Link href="/properties">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex separator w-[.5px] h-[150px] bg-white"></div>

              <div className="flex flex-1 flex-col sectionTransition mt-auto">
                <div className="mx-auto layerText section2 overflow-hidden">
                  <div
                    className="title text-[28px] font-[100] uppercase font-classica cursor-pointer"
                    onClick={() => toggleSections(2)}
                  >
                    Residential properties
                  </div>
                  <div className="detail" ref={section2}>
                    <div className="description font-poppins text-[14px]/[20px] font-[50] mt-[15px] max-w-[418px]">
                      We Offer Affordable residential plots and homes in prime
                      locations—perfect for families looking to build their
                      dream home in a peaceful, well-connected area
                    </div>
                    <div className="button w-fit px-4 py-2 cursor-pointer bg-white rounded mt-5 text-black">
                      <Link href="/properties">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* svg overlay */}
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
              d="M 0 100 L 50 100 L 100 100 Z"
              fill="#ffffff6e"
              stroke="none"
            />
          </svg>
        </div>
      </div>

      {/* floating button */}
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

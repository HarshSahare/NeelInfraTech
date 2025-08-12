"use client";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const initialImages = [
  "/images/slider/img1.jpg",
  "/images/slider/img2.jpg",
  "/images/slider/img3.jpg",
  "/images/slider/img4.jpg",
  "/images/slider/img5.jpg",
  "/images/slider/img6.jpg",
  "/images/slider/img7.jpg",
  "/images/slider/img8.jpg",
];

export default function PropertiesLandingSection({
  className,
}: {
  className: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [images] = useState(initialImages);
  const [visibleCount, setVisibleCount] = useState(3);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnimating = useRef(false);
  const currentIndex = useRef(0);
  const direction = useRef(1); // 1 = forward, -1 = backward

  // Responsive visible count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(2.5);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => slide(direction.current), 2000);
  };

  const slide = (dir: number) => {
    if (!trackRef.current || isAnimating.current) return;
    isAnimating.current = true;

    const totalSlides = images.length;
    const maxIndex = totalSlides - visibleCount;

    // Snap width per slide
    const slideWidth = trackRef.current.clientWidth / visibleCount;

    // Update index
    currentIndex.current += dir;

    // Reverse at edges
    if (currentIndex.current >= maxIndex) {
      currentIndex.current = maxIndex;
      direction.current = -1;
    } else if (currentIndex.current <= 0) {
      currentIndex.current = 0;
      direction.current = 1;
    }

    // Animate with snapping
    gsap.to(trackRef.current, {
      x: -currentIndex.current * slideWidth,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  // Autoplay
  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [visibleCount]);

  return (
    <section className={`max-w-[93.5%] mx-auto py-10 ${className}`}>
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
        <div>
          <p className="text-[10px] tracking-widest text-gray-500 mb-2">
            PROPERTIES
          </p>
          <h2 className="text-[40px] font-[400] leading-snug">
            Your Dream Property
          </h2>
          <p className="text-[#6A5F6C] text-[13px]/[22px] mt-4 max-w-4xl">
            Where you live reflects who you are. This section features homes in
            prime locations that offer comfort, convenience, and class.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-2 mt-4 lg:mt-0">
          <button
            onClick={() => {
              slide(-1);
              resetAutoplay();
            }}
            className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
          >
            <FiArrowLeft size={18} />
          </button>
          <button
            onClick={() => {
              slide(1);
              resetAutoplay();
            }}
            className="w-10 h-10 border border-gray-300 border-l-0 flex items-center justify-center hover:bg-orange-50 text-orange-500"
          >
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Image Row */}
      <div
        className="overflow-hidden w-full relative"
        onMouseEnter={() =>
          autoplayRef.current && clearInterval(autoplayRef.current)
        }
        onMouseLeave={resetAutoplay}
      >
        <div ref={trackRef} className="flex">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="p-2 flex-shrink-0"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Property ${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

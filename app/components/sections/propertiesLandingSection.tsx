"use client";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const initialImages = [
  "/images/landingPropertiesImage3.jpg",
  "/images/propertiesLandingImage2.jpg",
  "/images/landingPropertiesImage3.jpg",
  "/images/propertiesLandingImage2.jpg",
];

export default function PropertiesLandingSection({
  className,
}: {
  className: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState(initialImages);
  const [visibleCount, setVisibleCount] = useState(3);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Responsive visible count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const slide = (dir: number) => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.clientWidth / visibleCount;

    gsap.to(containerRef.current, {
      x: `-=${slideWidth * dir}`,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        setImages((prev) => {
          const newArr = [...prev];
          if (dir === 1) {
            newArr.push(newArr.shift()!); // move first to end
          } else {
            newArr.unshift(newArr.pop()!); // move last to start
          }
          return newArr;
        });
        gsap.set(containerRef.current, { x: 0 });
      },
    });
  };

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      slide(1);
    }, 3000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [visibleCount]);

  return (
    <section className={`max-w-[93.5%] mx-auto py-10 ${className}`}>
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
        <div>
          <p className="text-[10px] font-classica tracking-widest text-gray-500 mb-2">
            PROPERTIES
          </p>
          <h2 className="text-[40px] font-classica font-[400] leading-snug">
            Your Dream Property
          </h2>
          <p className="text-[#6A5F6C] text-[13px]/[22px] font-poppins mt-4 max-w-4xl">
            Where you live reflects who you are. This section features homes in
            prime locations that offer comfort, convenience, and class. Whether
            it&apos;s close to the city, surrounded by nature, or in a peaceful
            community — the right address speaks for your lifestyle without
            saying a word.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-2 mt-4 lg:mt-0">
          <button
            onClick={() => slide(-1)}
            className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FiArrowLeft size={18} />
          </button>
          <button
            onClick={() => slide(1)}
            className="w-10 h-10 border border-gray-300 border-l-0 flex items-center justify-center hover:bg-orange-50 transition text-orange-500"
          >
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Image Row */}
      <div className="overflow-hidden w-full">
        <div
          ref={containerRef}
          className="flex"
          style={{ width: `${images.length * (100 / visibleCount)}%` }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 p-2"
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

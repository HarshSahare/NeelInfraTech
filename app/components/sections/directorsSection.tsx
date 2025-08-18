"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DirectorsInfo } from "@/app/lib/directors";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function DirectorsSection({
  className,
}: {
  className?: string;
}) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animate cards on scroll
  useGSAP(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=20%",
          },
        });
      }
    });
  }, []);

  // Scroll by one card width
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container || !cardRefs.current[0]) return;

    const cardWidth = cardRefs.current[0].offsetWidth || 0;
    const gap = 24; // matches Tailwind gap-6 (6 * 4px = 24px)

    container.scrollBy({
      left: (cardWidth + gap) * (direction === "right" ? 1 : -1),
      behavior: "smooth",
    });
  };

  return (
    <section className={`px-4 md:px-10 director-section ${className || ""}`}>
      {/* Heading */}
      <div className="text-left mb-8 px-4">
        <h2 className="text-[32px] sm:text-[40px] md:text-[45px] lg:text-5xl heading mt-5 text-white font-classica font-[400] leading-tight">
          Our Directors
        </h2>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-6"
      >
        {DirectorsInfo.map((data, index) => (
          <Link
            href={`/stories#director-${index}`}
            key={index}
            className="flex-shrink-0 flex flex-col border border-gray-200 rounded-md pt-5 pb-2 bg-[#1b1b1b] group cursor-pointer overflow-hidden"
          >
            <div
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="flex flex-col"
            >
              <div className="flex justify-center relative transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src={data.image}
                  alt={data.name}
                  width={500}
                  height={350}
                  className="object-contain h-[350px] w-auto rounded-t-md z-[1]"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[3]" />
                <div className="absolute w-full h-[40%] bottom-0 left-0 bg-gradient-to-t from-[#1b1b1b] to-transparent z-[2]" />
              </div>

              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-white">{data.name}</p>
                <p className="text-sm italic text-white mt-2">{data.quote}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-10 text-2xl text-gray-700 mt-4">
        <button
          onClick={() => scroll("left")}
          className="text-white transition hover:scale-110 cursor-pointer"
          aria-label="Scroll Left"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="text-white transition hover:scale-110 cursor-pointer"
          aria-label="Scroll Right"
        >
          →
        </button>
      </div>
    </section>
  );
}

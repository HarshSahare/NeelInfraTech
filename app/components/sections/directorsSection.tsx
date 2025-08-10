"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DirectorsInfo } from "@/app/lib/directors";

export default function DirectorsSection({
  className,
}: {
  className?: string;
}) {
  useGSAP(() => {
    const containers = document.querySelectorAll(".director-section > div");
    gsap.from(containers[0], {
      y: 50,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: containers[0],
        start: "top bottom-=20%",
      },
    });
    gsap.from(containers[1], {
      y: 50,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: containers[0],
        start: "top bottom-=20%",
      },
    });
  }, []);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = cardRefs.current.filter(
      (card): card is HTMLDivElement => card !== null
    );

    const scrollLeft = container.scrollLeft;

    let targetCard: HTMLDivElement | null = null;

    if (direction === "right") {
      targetCard =
        cards.find((card) => card.offsetLeft > scrollLeft + 10) || null;
    } else {
      for (let i = cards.length - 1; i >= 0; i--) {
        const card = cards[i];
        if (card.offsetLeft + card.offsetWidth < scrollLeft - 10) {
          targetCard = card;
          break;
        }
      }
    }

    if (targetCard) {
      container.scrollTo({
        left: targetCard.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={` px-4 md:px-10 director-section ${className}`}>
      <div className="text-left mb-8 px-4">
        <h2 className="text-[32px] sm:text-[40px] md:text-[45px] lg:text-5xl heading mt-5 text-white font-classica font-[400] leading-tight">
          Our Directors
        </h2>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-6"
      >
        {DirectorsInfo.map((data, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="flex-shrink-0 flex flex-col border-1 border-gray-200  rounded-md pt-5 pb-2"
          >
            <div className="flex justify-center relative">
              <Image
                src={data.image}
                alt={data.name}
                width={500}
                height={350}
                className="object-contain h-[350px] w-auto rounded-t-md z-1"
              />
              <div className="absolute w-full h-[40%] bottom-0 left-0 bg-gradient-to-t from-[#1b1b1b] to-transparent z-2"></div>
            </div>

            <div className="p-4 text-center">
              <p className="text-lg font-semibold text-white">{data.name}</p>
              <p className="text-sm italic text-white mt-2">{data.quote}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-10 text-2xl text-gray-700 mt-4">
        <button
          onClick={() => scroll("left")}
          className="text-white transition cursor-pointer"
          aria-label="Scroll Left"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="text-white transition cursor-pointer"
          aria-label="Scroll Right"
        >
          →
        </button>
      </div>
    </section>
  );
}

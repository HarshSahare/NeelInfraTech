"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DirectorsInfo } from "@/app/lib/directors";

export default function DirectorsSection() {
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
    <section className="bg-white px-4 md:px-10 director-section">
      <div className="text-left mb-8 px-4">
        <h2 className="text-[32px] sm:text-[40px] md:text-[45px] lg:text-5xl heading mt-5 text-[#161616] font-classica font-[400] leading-tight">
          Directors
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
            className="flex-shrink-0 flex flex-col border border-gray-200 shadow-md rounded-md"
          >
            <Image
              src={data.image}
              alt={data.name}
              width={index === 1 ? 500 : 400} // different widths
              height={350}
              className="object-contain h-[350px] w-auto rounded-t-md"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold text-gray-800">{data.name}</p>
              <p className="text-sm italic text-gray-500 mt-1">{data.quote}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-10 text-2xl text-gray-700 mt-4">
        <button
          onClick={() => scroll("left")}
          className="hover:text-black transition cursor-pointer"
          aria-label="Scroll Left"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="hover:text-black transition cursor-pointer"
          aria-label="Scroll Right"
        >
          →
        </button>
      </div>
    </section>
  );
}

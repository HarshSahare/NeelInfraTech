"use client";
import React from "react";
import PropertyCard from "../components/propertyCard";
import { propertiesInterface } from "../lib/properties";

export interface CarouselProps {
  items: propertiesInterface[];
  scrollRef: React.RefObject<HTMLDivElement | null>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  scrollToPage: (
    container: HTMLDivElement | null,
    pageIndex: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
  ) => void;
}

export default function Carousel({
  items,
  scrollRef,
  page,
  setPage,
  onScroll,
  scrollToPage,
}: CarouselProps) {
  const calculatePages = (): number => {
    const container = scrollRef.current;
    if (!container || items.length === 0) return 0;
    const containerWidth = container.clientWidth;
    const firstCard = container.querySelector<HTMLElement>("div");
    if (!firstCard) return 0;
    const cardWidth =
      firstCard.clientWidth +
      parseInt(getComputedStyle(firstCard).marginRight || "0");
    const cardsPerPage = Math.floor(containerWidth / cardWidth) || 1;
    return Math.ceil(items.length / cardsPerPage);
  };

  const totalPages = calculatePages();

  return (
    <div className="flex flex-col justify-center">
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap px-0 scroll-snap-x scroll-snap-mandatory scroll-smooth"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="inline-block flex-shrink-0 w-[90vw] md:w-auto scroll-snap-start"
          >
            <PropertyCard {...item} className="w-full" />
          </div>
        ))}
      </div>
      <div
        className="flex justify-center items-center gap-3 mt-6"
        aria-label="Pagination dots"
      >
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => scrollToPage(scrollRef.current, i, setPage)}
            className={`rounded-full transition-all cursor-pointer duration-300 ${
              page === i ? "bg-black w-4 h-4" : "bg-gray-400 w-2 h-2"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

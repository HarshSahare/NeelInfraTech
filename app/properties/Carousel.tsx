"use client";
import React, { useCallback, useEffect, useState } from "react";
import PropertyCard from "../components/propertyCard";
import { propertiesInterface } from "../lib/properties";

export interface CarouselProps {
  items: propertiesInterface[];
  scrollRef: React.RefObject<HTMLDivElement | null>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

export default function Carousel({
  items,
  scrollRef,
  page,
  setPage,
  onScroll,
}: CarouselProps) {
  const [totalPages, setTotalPages] = useState(1);

  const [pageWidth, setPageWidth] = useState(0);

  const calculateLayout = useCallback(() => {
    const container = scrollRef.current;
    if (!container || items.length === 0) {
      setTotalPages(1);

      setPageWidth(0);
      return;
    }

    const cw = container.clientWidth || 1;
    const sw = container.scrollWidth || cw;

    // If everything fits (no scroll), single page
    if (sw <= cw + 1) {
      setPageWidth(cw);
      setTotalPages(1);
      setPage(0);
      return;
    }

    // Find first visible child element and compute its outer width (width + margin-right)
    const firstCardEl = Array.from(container.children).find(
      (c) => (c as HTMLElement).offsetWidth > 0,
    ) as HTMLElement | undefined;

    const cardOuterWidth = firstCardEl
      ? firstCardEl.offsetWidth +
        (parseFloat(getComputedStyle(firstCardEl).marginRight || "0") || 0)
      : cw; // fallback to container width

    const perPage = Math.max(1, Math.floor(cw / cardOuterWidth));
    const pw = perPage * cardOuterWidth;
    const pages = Math.max(1, Math.ceil(items.length / perPage));

    setPageWidth(pw);
    setTotalPages(pages);

    // Clamp current page if it became out-of-range
    setPage((prev) => Math.min(prev, pages - 1));
  }, [items, scrollRef, setPage]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    calculateLayout();

    // observe size changes on the container
    const ro = new ResizeObserver(calculateLayout);
    ro.observe(container);

    // observe changes to children (images, content)
    const mo = new MutationObserver(calculateLayout);
    mo.observe(container, { childList: true, subtree: true });

    // images might load after render
    const imgs = Array.from(container.querySelectorAll("img"));
    const onImgLoad = () => calculateLayout();
    imgs.forEach((img) => img.addEventListener("load", onImgLoad));

    window.addEventListener("resize", calculateLayout);

    return () => {
      ro.disconnect();
      mo.disconnect();
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
      window.removeEventListener("resize", calculateLayout);
    };
  }, [calculateLayout, scrollRef]);

  // robust scrollToPage: use computed pageWidth and clamp to maxScrollLeft
  const internalScrollToPage = (pageIndex: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = Math.max(
      0,
      container.scrollWidth - container.clientWidth,
    );
    const target = Math.min(pageIndex * pageWidth, maxScrollLeft);

    container.scrollTo({ left: target, behavior: "smooth" });
    // reflect in state (clamp)
    setPage(Math.max(0, Math.min(pageIndex, Math.max(0, totalPages - 1))));
  };

  const handleDotClick = (index: number) => {
    internalScrollToPage(index);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const maxScrollLeft = Math.max(
      0,
      container.scrollWidth - container.clientWidth,
    );

    if (maxScrollLeft <= 1) {
      if (page !== 0) setPage(0);
      if (onScroll) onScroll(e);
      return;
    }

    // If we are basically at the end -> last page
    const atEndTolerance = 2; // px tolerance
    if (container.scrollLeft + atEndTolerance >= maxScrollLeft) {
      const lastIdx = Math.max(0, totalPages - 1);
      if (page !== lastIdx) setPage(lastIdx);
      if (onScroll) onScroll(e);
      return;
    }

    // Otherwise map scrollLeft to pages using pageWidth (cards-per-page grouping)
    if (pageWidth > 0) {
      const raw = container.scrollLeft / pageWidth;
      const newPage = Math.max(0, Math.min(Math.round(raw), totalPages - 1));
      if (newPage !== page) setPage(newPage);
    } else {
      // fallback to viewport progress
      const progress = container.scrollLeft / maxScrollLeft;
      const newPage = Math.max(
        0,
        Math.min(Math.round(progress * (totalPages - 1)), totalPages - 1),
      );
      if (newPage !== page) setPage(newPage);
    }

    if (onScroll) onScroll(e);
  };

  return (
    <div className="flex flex-col justify-center">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap px-0 scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="inline-block flex-shrink-0 w-[90vw] md:w-auto"
            style={{ scrollSnapAlign: "start" }}
          >
            <PropertyCard
              bedrooms={item.bedrooms}
              brochure={item.brochure}
              image={item.image}
              location={item.location}
              title={item.title}
              highlights={item.heroSection.highlights.slice(0, 4)}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <div
        className="flex justify-center items-center gap-3 mt-6"
        aria-label="Pagination dots"
      >
        {Array.from({ length: Math.max(1, totalPages) }, (_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
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

// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// function DirectorsSection() {
//   const value = useRef(1);
//   const [currentIndex, setCurrentIndex] = useState(2);
//   const images = [
//     "/images/director-image.png",
//     "/images/director-image.png",
//     "/images/director-image.png",
//     "/images/director-image.png",
//     "/images/director-image.png",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         if (prevIndex === images.length - 1) {
//           value.current = -1;
//         }
//         if (prevIndex === 0) {
//           value.current = 1;
//         }
//         return prevIndex + value.current;
//       });
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   useGSAP(() => {
//     gsap.to(".director-1-image", {
//       // x: `${currentIndex != 0 ? (2 - currentIndex) * 100 : 100}%`,
//       opacity: `${currentIndex != 0 ? 0.5 : 1}`,
//       width: `${currentIndex != 0 && "100%"}`,
//       duration: 0.5,
//     });
//     gsap.to(".director-2-image", {
//       // x: `${
//       //   currentIndex != 1
//       //     ? currentIndex == 0
//       //       ? 200
//       //       : currentIndex == 2
//       //       ? 0
//       //       : currentIndex == 3
//       //       ? -100
//       //       : currentIndex == 4 && -200
//       //     : 50
//       // }%`,
//       opacity: `${currentIndex != 1 ? 0.5 : 1}`,
//       width: `${currentIndex != 1 ? "80%" : "100%"}`,
//       duration: 0.5,
//     });
//     gsap.to(".director-3-image", {
//       // x: `${
//       //   currentIndex != 2
//       //     ? currentIndex == 0
//       //       ? 200
//       //       : currentIndex == 1
//       //       ? 100
//       //       : currentIndex == 3
//       //       ? -100
//       //       : currentIndex == 4 && -200
//       //     : 0
//       // }%`,
//       opacity: `${currentIndex != 2 ? 0.5 : 1}`,

//       duration: 0.5,
//     });
//     gsap.to(".director-4-image", {
//       // x: `${
//       //   currentIndex != 3
//       //     ? currentIndex == 0
//       //       ? 200
//       //       : currentIndex == 2
//       //       ? 0
//       //       : currentIndex == 1
//       //       ? 100
//       //       : currentIndex == 4 && -200
//       //     : -50
//       // }%`,
//       opacity: `${currentIndex != 3 ? 0.5 : 1}`,
//       width: `${currentIndex != 3 ? "80%" : "100%"}`,
//       duration: 0.5,
//     });
//     gsap.to(".director-5-image", {
//       // x: `${currentIndex != 4 ? (2 - currentIndex) * 100 : -100}%`,
//       opacity: `${currentIndex != 4 ? 0.5 : 1}`,
//       width: `${currentIndex != 4 ? "80%" : "100%"}`,
//       duration: 0.5,
//     });
//   }, [currentIndex]);

//   return (
//     <div className="min-h-svh overflow-x-hidden vision-container w-[95.5%] pt-30 m-auto flex flex-col">
//       <div>
//         <div className="mx-auto w-fit">
//           <div className="uppercase w-fit font-classica heading text-[75px] font-[400] text-center mt-5">
//             Mr. Ajay Dandekar
//           </div>
//           <div className="w-fit text-[#44404096] heading font-poppins">
//             DIRECTORS Of NEEL INFRATECH
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-end">
//         <div className="w-fit font-classica text-[12px]/[24px] text-[#918F8F] font-[400] pt-10 ">
//           <div className="mt-2 ml-[-5px]">
//             Starting with nothing but a dream and determination, Mr. Pitambar
//             Ikar <br /> built Neel Infratech into a trusted empire through
//             vision, hard work, and <br /> unwavering belief. belief.
//             <div className="h-[0.2px] w-[40%] my-3 bg-[#918F8F]"></div>
//             Nov 21 2017
//           </div>
//         </div>
//       </div>

//       <div className="grid mt-[-10%] grid-cols-6 items-end justify-items-center w-full m-auto max-w-[80%]">
//         {images.map((image, index) => (
//           <Image
//             src={image}
//             key={index}
//             alt={`Director ${index + 1}`}
//             className={` h-auto w-[80%]
//             } director-${index + 1}-image  ${
//               currentIndex == index ? " col-span-2" : "col-span-1"
//             }`}
//             width={1024}
//             height={700}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DirectorsSection;

"use client";
import { useRef } from "react";
import Image from "next/image";

const designers = [
  {
    name: "Zaha Hadid",
    image: "/images/director-image.png",
  },
  {
    name: "Foster + Partners",
    image: "/images/storiesImage12.png",
  },
  {
    name: "Gilles & Boissier",
    image: "/images/director-image.png",
  },
  {
    name: "Jean Nouvel",
    image: "/images/director-image.png",
  },
];

export default function DirectorsSection() {
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = cardRefs.current.filter(Boolean);
    const scrollLeft = container.scrollLeft;

    let targetCard = null;

    if (direction === "right") {
      // Find the first card whose left edge is after the current scroll position + small offset
      targetCard = cards.find((card) => card.offsetLeft > scrollLeft + 10);
    } else {
      // Find the last card whose right edge is before current scroll
      for (let i = cards.length - 1; i >= 0; i--) {
        const card = cards[i];
        if (card.offsetLeft + card.offsetWidth < scrollLeft - 10) {
          targetCard = card;
          break;
        }
      }
    }

    if (targetCard) {
      // Scroll so the left edge of the card aligns with the container's left edge
      container.scrollTo({
        left: targetCard.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white px-4 md:px-10">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-6"
      >
        {designers.map((designer, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="flex-shrink-0 border border-gray-200 shadow-md rounded-md"
          >
            <Image
              src={designer.image}
              alt={designer.name}
              width={index === 1 ? 500 : 400} // different widths
              height={350}
              className="object-cover h-[350px] w-auto rounded-t-md"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold text-gray-800">
                {designer.name}
              </p>
              <p className="text-sm italic text-gray-500 mt-1">
                “Visionary design beyond boundaries.”
              </p>
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

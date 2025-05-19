"use client";
import Image from "next/image";
import React, { use, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function DirectorsSection() {
  const value = useRef(1);
  const [currentIndex, setCurrentIndex] = useState(2);
  const images = [
    "/images/director-image.png",
    "/images/director-image.png",
    "/images/director-image.png",
    "/images/director-image.png",
    "/images/director-image.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          value.current = -1;
        }
        if (prevIndex === 0) {
          value.current = 1;
        }
        return prevIndex + value.current;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".director-1-image", {
      x: `${currentIndex != 0 ? (2 - currentIndex) * 100 : 100}%`,
      opacity: `${currentIndex != 0 ? 0.5 : 1}`,
      width: `100%`,
      duration: 0.5,
    });
    gsap.to(".director-2-image", {
      x: `${
        currentIndex != 1
          ? currentIndex == 0
            ? 200
            : currentIndex == 2
            ? 0
            : currentIndex == 3
            ? -100
            : currentIndex == 4 && -200
          : 50
      }%`,
      opacity: `${currentIndex != 1 ? 0.5 : 1}`,
      width: `100%`,
      duration: 0.5,
    });
    gsap.to(".director-3-image", {
      x: `${
        currentIndex != 2
          ? currentIndex == 0
            ? 200
            : currentIndex == 1
            ? 100
            : currentIndex == 3
            ? -100
            : currentIndex == 4 && -200
          : 0
      }%`,
      opacity: `${currentIndex != 2 ? 0.5 : 1}`,
      width: `100%`,
      duration: 0.5,
    });
    gsap.to(".director-4-image", {
      x: `${
        currentIndex != 3
          ? currentIndex == 0
            ? 200
            : currentIndex == 2
            ? 0
            : currentIndex == 1
            ? 100
            : currentIndex == 4 && -200
          : -50
      }%`,
      opacity: `${currentIndex != 3 ? 0.5 : 1}`,
      width: `100%`,
      duration: 0.5,
    });
    gsap.to(".director-5-image", {
      x: `${currentIndex != 4 ? (2 - currentIndex) * 100 : -100}%`,
      opacity: `${currentIndex != 4 ? 0.5 : 1}`,
      width: `100%`,
      duration: 0.5,
    });
  }, [currentIndex]);

  return (
    <div className="min-h-svh overflow-x-hidden vision-container w-[95.5%] pt-30 m-auto flex flex-col">
      <div>
        <div className="mx-auto w-fit">
          <div className="uppercase w-fit font-classica heading text-[75px] font-[400] text-center mt-5">
            Mr. Ajay Dandekar
          </div>
          <div className="w-fit text-[#44404096] heading font-poppins">
            DIRECTORS Of NEEL INFRATECH
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="w-fit font-classica text-[12px]/[24px] text-[#918F8F] font-[400] pt-10 ">
          <div className="mt-2 ml-[-5px]">
            Starting with nothing but a dream and determination, Mr. Pitambar
            Ikar <br /> built Neel Infratech into a trusted empire through
            vision, hard work, and <br /> unwavering belief. belief.
            <div className="h-[0.2px] w-[40%] my-3 bg-[#918F8F]"></div>
            Nov 21 2017
          </div>
        </div>
      </div>

      <div className="grid mt-[-10%] grid-cols-6 items-end justify-center w-full m-auto max-w-[80%]">
        {images.map((image, index) => (
          <Image
            src={image}
            key={index}
            alt={`Director ${index + 1}`}
            className={` h-auto w-full
            } director-${index + 1}-image  ${
              currentIndex == index ? " col-span-2" : "col-span-1"
            }`}
            width={1024}
            height={700}
          />
        ))}
      </div>
    </div>
  );
}

export default DirectorsSection;

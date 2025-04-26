"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="w-full h-dvh">
      <div className="overlay bg-[#12121277] absolute top-0 left-0 h-full w-full z-2"></div>
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 z-1 ${
          currentVideo != 0 && "opacity-0"
        }`}
        autoPlay
        muted
        loop
        src="/videos/defaultHeroVideo.mp4"
      />
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 z-1 ${
          currentVideo != 1 && "opacity-0"
        }`}
        autoPlay
        muted
        loop
        src="/videos/commercialHeroVideo.mp4"
      />
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 z-1 ${
          currentVideo != 2 && "opacity-0"
        }`}
        autoPlay
        muted
        loop
        src="/videos/residentialHeroVideo.mp4"
      />
      <div className="overlayTexts w-full h-full absolute top-0 left-0 z-3">
        <div className="layer1 w-full h-full flex justify-center content-center flex-wrap">
          <div
            className="brandName uppercase w-fit h-fit font-bold text-white text-[100px]"
            style={{ fontFamily: "var(--font-classica)" }}
          >
            Neel InfraTech
          </div>
        </div>
      </div>
      <div className="floatingButton cursor-pointer absolute bg-[#D9D9D9] z-4 aspect-square p-2 rounded-md flex flex-wrap content-center justify-center right-[70px] bottom-5">
        <Image
          src="/images/black-short-logo.png"
          alt="logo"
          width={46}
          height={30}
        />
      </div>
    </div>
  );
}

export default HeroSection;

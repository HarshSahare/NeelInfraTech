"use client";
import Image from "next/image";
import React, { useState } from "react";

function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(1);
  return (
    <div className="w-full h-dvh">
      <div className="overlay bg-[#12121277] absolute top-0 left-0 h-full w-full z-2"></div>
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover z-1 ${
          currentVideo != 1 && "hidden"
        }`}
        autoPlay
        muted
        loop
        src="/videos/defaultHeroVideo.mp4"
      />
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover z-1 ${
          currentVideo != 2 && "hidden"
        }`}
        autoPlay
        muted
        loop
        src="/videos/commercialHeroVideo.mp4"
      />
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover z-1 ${
          currentVideo != 3 && "hidden"
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

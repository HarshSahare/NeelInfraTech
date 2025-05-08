import Image from "next/image";
import React from "react";

const AwardsSection = () => {
  return (
    <div className="bg-white mt-[60px] text-black  min-h-svh flex items-center justify-center">
      <main className="text-center px-6 py-12">
        {/* "Awards & Recognition" */}
        <p className="text-sm tracking-wide font-classica text-gray-600 text-[14px]">
          <span className="font-[400] text-black">Awards</span> & Recognition
        </p>

        {/* Short line under heading */}
        <div className="w-[99px] h-[0.2px] bg-gray-300 mx-auto mt-[21px] mb-[10px]" />

        {/* Main title */}
        <h1 className="text-[45px] font-classica font-[400] text-[rgba(22, 22, 22, 1)] my-4">
          OUR PROUD MOMENTS
        </h1>

        {/* Subtext */}
        <p className="text-[#44404096] max-w-md mx-auto">
          Where timeless design meets elite comfort, crafted to elevate your
          lifestyle and reflect a taste for only the finest.
        </p>

        {/* Slightly wider line below paragraph */}
        <div className="max-w-2xl h-[0.2px] bg-gray-300 mx-auto my-[69px]" />

        {/* Awards logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center mt-4">
          <div className="w-full">
            <Image
              src={"/images/rewardImage1.png"}
              alt="ford image"
              width={134}
              height={134}
            />
          </div>
          <Image
            src="/images/rewardImage3.png"
            alt="Gulf Real Estate Awards 2022"
            className="h-12 w-auto object-cover"
            width={202}
            height={50}
          />
          <Image
            src="/images/rewardImage4.png"
            alt="Achievement Awards 2024"
            className="h-12 w-auto object-cover"
            width={161}
            height={59}
          />
          <Image
            src="/images/rewardImage5.png"
            alt="Infrastructure Awards"
            className="h-12 w-auto object-cover"
            width={202}
            height={50}
          />

          <div className="w-full flex items-center">
            <Image
              src={"/images/rewardImage2.png"}
              alt="ford image"
              className="object-contain"
              width={168}
              height={45}
            />
          </div>
          <Image
            src="/images/rewardImage6.png"
            alt="International Property Awards"
            className="object-contain"
            width={230}
            height={146}
          />
          <Image
            src="/images/rewardImage7.png"
            alt="Arabian Property Awards"
            className="object-contain"
            width={125}
            height={68}
          />
          <Image
            src="/images/rewardImage8.png"
            alt="Cityscape Awards"
            className="object-contain"
            width={186}
            height={126}
          />
        </div>

        {/* Progressive footer lines with decreasing widths */}
        <div className="flex flex-col items-center mt-16 space-y-2">
          <div className="w-4xl h-[0.2px] bg-gray-300" />
          <div className="w-3xl mt-[45px] h-[0.2px] bg-gray-300" />
          <div className="w-2xl mt-[48px] mb-[64px]  h-[0.2px] bg-gray-300" />
        </div>
      </main>
    </div>
  );
};

export default AwardsSection;

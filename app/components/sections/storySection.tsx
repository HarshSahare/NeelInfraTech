import React from "react";

const StorySection = () => {
  return (
    <section className="bg-white pb-16 pt-[160px] px-4 md:px-20 text-center">
      <div className="mx-auto">
        <p className="text-[16px] font-classica font-[400] tracking-wider text-[#757279] uppercase mb-3">
          Our Story
        </p>
        <h2 className="text-[62px] md:text-5xl font-[400] font-classica leading-tight text-[#161616] mb-[40px]">
          CREATING VALUE <br /> THROUGH DESIGN & SPACE
        </h2>
        <p className="font-[400] font-poppins text-[#44404096] text-md max-w-3xl mx-auto">
          Driven by passion, we continuously push the boundaries of architecture
          by constructing <br /> residential, commercial, hospitality, and
          retail spaces that frame Dubai’s skyline.
        </p>
      </div>

      <div className="mt-[170px] grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[85%] place-items-center-safe mx-auto text-left">
        <div className="border-l-2 border-[#757279] pl-6 w-fit">
          <h3 className="text-[62px] font-[400] font-classica  text-[#757279]">
            03
          </h3>
          <p className="text-[#999999] text-[18px] mt-[28px] ">Destinations</p>
        </div>
        <div className="border-l-2 border-[#757279] pl-6 w-fit">
          <h3 className="text-[62px] font-[400] font-classica text-[#757279]">
            18
          </h3>
          <p className="text-[#999999] text-[18px] mt-[28px]">Masterpieces</p>
        </div>
        <div className="border-l-2 border-[#757279] pl-6 w-fit">
          <h3 className="text-[62px] font-[400] font-classica text-[#757279]">
            $10bn
          </h3>
          <p className="text-[#999999] text-[18px] mt-[28px]">Portfolio</p>
        </div>
      </div>

      <div className="mt-12">
        <button className="bg-black text-white px-18 py-3 mt-[80px]  text-sm hover:bg-gray-900 transition">
          Discover Our Story
        </button>
      </div>
    </section>
  );
};

export default StorySection;

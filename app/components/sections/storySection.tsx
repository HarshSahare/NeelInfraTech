import React from "react";

const StorySection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center">
      <div className="mx-auto">
        <p className="text-[16px] font-classica font-[400] tracking-wider text-[#757279] uppercase mb-2">
          Our Story
        </p>
        <h2 className="text-4xl md:text-5xl font-[400] font-classica leading-tight text-[#161616] mb-4">
          ORCHESTRATING <br /> PLACE AND PURPOSE
        </h2>
        <p className="font-[400] font-poppins text-[#44404096] text-sm max-w-3xl mx-auto">
          Driven by passion, we continuously push the boundaries of architecture
          by constructing residential, commercial, hospitality, and retail
          spaces that frame Dubai’s skyline.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-left">
        <div className="border-l-2 border-[#757279] pl-6">
          <h3 className="text-4xl font-[400] font-classica text-[#757279]">
            03
          </h3>
          <p className="text-[#999999] mt-2">Destinations</p>
        </div>
        <div className="border-l-2 border-[#757279] pl-6">
          <h3 className="text-4xl font-[400] font-classica text-[#757279]">
            18
          </h3>
          <p className="text-[#999999] mt-2">Masterpieces</p>
        </div>
        <div className="border-l-2 border-[#757279] pl-6">
          <h3 className="text-4xl font-[400] font-classica text-[#757279]">
            $10bn
          </h3>
          <p className="text-[#999999] mt-2">Portfolio</p>
        </div>
      </div>

      <div className="mt-12">
        <button className="bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-900 transition">
          Discover Our Story
        </button>
      </div>
    </section>
  );
};

export default StorySection;

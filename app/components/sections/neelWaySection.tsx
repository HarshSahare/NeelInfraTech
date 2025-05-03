import React from "react";
import Image from "next/image"; // or 'react' if not using Next.js

const NeelWaySection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="text-left mb-8 ml-[88px]">
        <p className="text-xs font-classica tracking-widest text-gray-500 flex items-center">
          YOUR FOREVER
          <span className="flex-grow border-t max-w-[150px] border-gray-300 ml-4"></span>
        </p>
        <h2 className="text-[45px] md:text-5xl text-[#161616] font-classica font-[400]">
          A NEEL WAY OF LIFE
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2  h-[600px]">
        {/* Large Left Image */}
        <div className="relative md:row-span-2 md:col-span-2">
          <Image
            src="/images/family-1.jpg"
            alt="Family Walking"
            fill
            className="object-cover rounded-md"
          />
          <div className="absolute px-[69px] font-classica font-[400] bottom-0 left-0 h-[30%] flex flex-col justify-end w-full bg-black/40 text-white p-4 text-base md:text-lg">
            Life Feels Complete When You Find A Place That Feels Like Home.
          </div>
        </div>

        {/* Top Right Image */}
        <div className="relative">
          <Image
            src="/images/family-2.jpg"
            alt="Family Beach Fun"
            fill
            className="object-cover rounded-md"
          />
          <div className="absolute bottom-0 font-classica font-[400] flex flex-col justify-end  left-0 w-[50%] h-[100%] bg-black/30 text-white p-3 text-base text-left">
            Enjoy Your Special Moment
          </div>
        </div>

        {/* Bottom Right Image (Text Right-Aligned) */}
        <div className="relative">
          <Image
            src="/images/family-3.jpg"
            alt="Family Feeling"
            fill
            className="object-cover rounded-md"
          />
          <div className="absolute bottom-0 font-classica font-[400] flex flex-col justify-end right-0 w-[50%] h-[100%] bg-black/30 text-white p-3 text-base ">
            It’s A Feeling That Stays Forever.
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeelWaySection;

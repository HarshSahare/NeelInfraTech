import Image from "next/image";
import React from "react";

const PropertiesSection = () => {
  return (
    <section className="flex flex-col lg:flex-row px-6 py-12 items-center gap-10 max-w-7xl mx-auto">
      {/* Left Column: Text Content */}
      <div className="lg:w-1/3  lg:mb-0">
        <p className="text-xs font-classica tracking-widest text-gray-500 flex items-center">
          PROPERTIES
          <span className="flex-grow border-t max-w-[150px] border-gray-300 ml-4"></span>
        </p>
        <h2 className="text-4xl font-classica font-[400] mt-4 mb-6 leading-snug">
          PREMIUM PROPERTIES IN THE BEST LOCATIONS
        </h2>
        <p className="text-[#6A5F6C] font-poppins mb-8">
          Dur properties, located in prime areas, boast unique designs and
          aspirational lifestyles within vibrant Emaar communities, all
          seamlessly managed by Emaar Community Management's dedicated team.
        </p>
        <button className="bg-black font-poppins text-white px-6 py-3 rounded-full">
          View All Properties
        </button>
      </div>

      {/* Right Column: Image Grid */}
      <div className="lg:w-2/3 flex gap-6" id="property-images">
        {/* Column 1 */}
        <div className="flex flex-col gap-6 w-1/2">
          {/* Image 1 */}
          <div>
            <Image
              src="/images/property-1.png"
              alt="Palace Villas"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-[#757378] font-classica">
              <span>PALACE VILLAS – OSTRA</span>
              <span className="mx-2">|</span>
              <span>THE OASIS</span>
              <span className="flex-grow max-w-[100px] border-t border-gray-300 ml-2"></span>
            </div>
          </div>

          {/* Image 3 */}
          <div>
            <Image
              src="/images/property-3.png"
              alt="Address Grand Downtown"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-[#757378] font-classica">
              <span>ADDRESS GRAND DOWNTOWN</span>
              <span className="mx-2">|</span>
              <span>DOWNTOWN DUBAI</span>
              <span className="flex-grow border-t border-gray-300 ml-2"></span>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6 w-1/2">
          {/* Image 2 */}
          <div>
            <Image
              src="/images/property-2.png"
              alt="Golf Meadow at Emaar South"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-[#757378] font-classica">
              <span>GOLF MEADOW AT EMAAR SOUTH</span>
              <span className="mx-2">|</span>
              <span>EMAAR SOUTH</span>
              <span className="flex-grow border-t border-gray-300 ml-2"></span>
            </div>
          </div>

          {/* Image 4 */}
          <div>
            <Image
              src="/images/property-3.png"
              alt="Address Grand Downtown"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-[#757378] font-classica">
              <span>ADDRESS GRAND DOWNTOWN</span>
              <span className="mx-2">|</span>
              <span>DOWNTOWN DUBAI</span>
              <span className="flex-grow border-t border-gray-300 ml-2"></span>
            </div>
          </div>
          <div>
            <Image
              src="/images/property-3.png"
              alt="Address Grand Downtown"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-[#757378] font-classica">
              <span>ADDRESS GRAND DOWNTOWN</span>
              <span className="mx-2">|</span>
              <span>DOWNTOWN DUBAI</span>
              <span className="flex-grow border-t border-gray-300 ml-2"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;

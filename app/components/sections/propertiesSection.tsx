// app/properties/PropertiesPage.tsx or pages/properties.tsx
import React from "react";
import PropertyCard from "../propertyCard";

const PropertiesSection = () => {
  return (
    <section className="w-[95.5%] min-h-svh flex flex-col justify-center mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row justify-between  gap-12">
        {/* Text Content */}
        <div className="lg:w-1/3 mt-[115px]">
          <p className="text-xs font-classica tracking-widest text-gray-500 flex items-center">
            PROPERTIES
            <span className="flex-grow max-w-[150px] border-t border-gray-300 ml-4"></span>
          </p>
          <h2 className="text-4xl font-classica font-[400] mt-4 mb-6 leading-snug">
            Discover Our <br /> Newest Residential Property
          </h2>
          <p className="text-[#6A5F6C] font-poppins mb-8">
            Dur Meraas designs communities that respond to contemporary passions
            for every lifestyle. Choose from alluring waterfront locations,
            bustling urban neighbourhoods or secluded lush green communities
            well-connected to the city.
          </p>
          <button className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
            View All Properties
          </button>
        </div>

        {/* Carousel / Scrollable Cards */}
        <div className="lg:w-2/3 overflow-x-auto flex gap-6 scroll-smooth scrollbar-hide">
          <PropertyCard
            image="/images/property-4.jpg"
            title="The Acres Villas"
            location="The Acres"
            bedrooms="3 BR to 5 BR"
            status="Sold Out"
          />
          <PropertyCard
            image="/images/property-5.jpg"
            title="The Acres Villas"
            location="The Acres"
            bedrooms="3 BR to 5 BR"
            status="Sold Out"
          />
          {/* Add more cards if needed */}
        </div>
      </div>

      {/* Pagination dots
      <div className="flex justify-center mt-8 gap-2">
        <span className="w-2 h-2 rounded-full bg-black"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      </div> */}
    </section>
  );
};

export default PropertiesSection;

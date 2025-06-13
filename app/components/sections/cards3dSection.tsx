import React from "react";
import PropertyCard3d from "../3dPropertyCards";

function Cards3dSection({ className }: { className?: string }) {
  return (
    <div className={`${className} flex flex-col`}>
      <h1 className="text-[28px] sm:text-[36px] md:text-[45px] reward-heading font-classica font-[400] text-[rgba(22,22,22,1)] my-4 text-center">
        Popular Properties
      </h1>
      <div className="w-[90%] 2xl:w-[80%] mx-auto grid grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 gap-5 my-10 ">
        <PropertyCard3d
          image="/images/property_1.png"
          title="Vrindavan Park"
          location="South Nagpur"
          bedrooms="1200 sq.ft"
          status="Remaining"
        />
        <PropertyCard3d
          image="/images/property_2.png"
          title="Silver Star"
          location="The Acres"
          bedrooms="1030 sq.ft"
          status="Sold Out"
        />
        <PropertyCard3d
          image="/images/property_3.png"
          title="Silver Icon"
          location="The Acres"
          bedrooms="1090 sq.ft"
          status="Sold Out"
        />
      </div>
    </div>
  );
}

export default Cards3dSection;

// components/PropertyCard.tsx
import Image from "next/image";
import React from "react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  bedrooms: string;
  status: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  bedrooms,
  status,
}) => {
  return (
    <div className="bg-[#D9D9D936] rounded-bl-[50px] overflow-hidden pb-[13px] rounded-tr-[50px] w-full max-w-lg flex-shrink-0">
      <div className="h-[350px] w-full overflow-hidden rounded-bl-[50px]">
        <Image
          src={image}
          alt={title}
          width={536}
          height={402}
          className="w-full h-[402px] object-cover"
        />
      </div>
      <div className=" max-w-md py-2 px-6 flex-shrink-0">
        <h3 className="text-sm text-[#3B383E] font-classica font-[400] mt-4">
          {title}
        </h3>
        <div className="flex font-poppins font-[300] mt-[35px] items-center  text-[#5D5B68] text-xs gap-4">
          <div className="flex flex-1 items-center  gap-1">
            <span>
              <Image
                src={"/images/home-outline.png"}
                alt="house icon"
                width={15}
                height={12}
              />
            </span>
            <span>{location}</span>
          </div>
          <div className="flex flex-1 items-center gap-1">
            <span>
              <Image
                src={"/images/bed-outline.png"}
                alt="bed icon"
                width={15}
                height={12}
              />
            </span>
            <span>{bedrooms}</span>
          </div>
        </div>
        <div className="flex items-center mt-[35px] text-poppins font-[400] text-[#EF6692]  text-xs gap-2">
          <span>
            <Image
              src={"/images/red-circle-outline.png"}
              alt="red circle"
              width={15}
              height={12}
            />
          </span>
          <span>{status}</span>
        </div>
        <button
          className="bg-black font-400 font-poppins text-[#F5F5F5] mt-[35px]  py-2 px-6 rounded-[23px] text-[11px]"
          style={{ padding: "15px 28px" }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;

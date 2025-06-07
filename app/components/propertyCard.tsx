// components/PropertyCard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  bedrooms: string;
  status: string;
  className?: string;
  ref?: React.RefObject<HTMLElement | null>;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  bedrooms,
  status,
  className,
}) => {
  return (
    <div
      className={`bg-[#D9D9D936] property-card rounded-bl-[50px] overflow-hidden pb-[13px] rounded-tr-[50px] w-full md:w-[500px] max-w-lg flex-shrink-0 ${className}`}
    >
      <div className="h-auto w-full overflow-hidden rounded-bl-[50px]">
        <Image
          src={image}
          alt={title}
          width={536}
          height={402}
          className="w-full h-[402px] object-cover"
        />
      </div>
      <div className=" w-full py-5 px-6 flex-shrink-0">
        <h3 className="text-sm text-[#3B383E] font-classica font-[400] text-left">
          {title}
        </h3>
        <div className="flex font-poppins font-[300] py-5 items-center  text-[#5D5B68] text-xs gap-4">
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
        <div className="flex items-center text-poppins font-[400] text-[#EF6692]  text-xs gap-2">
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
        <Link
          className="bg-black font-400 font-poppins cursor-pointer text-[#F5F5F5] mt-5 w-fit  py-2 px-6 rounded-[23px] text-[11px]"
          style={{ padding: "15px 28px" }}
          href={`/properties/${title.replaceAll(" ", "-").toLowerCase()}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;

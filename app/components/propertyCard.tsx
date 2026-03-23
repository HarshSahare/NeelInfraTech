import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  bedrooms: string;
  brochure: string;
  className?: string;
  highlights?: string[];
  ref?: React.RefObject<HTMLElement | null>;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  bedrooms,
  brochure,
  highlights,
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
            <span className="capitalize">{location}</span>
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

        {highlights && (
          <div className="flex gap-2 sm:gap-3 overflow-x-auto whitespace-nowrap pb-2 mb-4 sm:mb-6 scrollbar-hide">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="inline-block px-3 py-1 bg-gray-200 rounded-full text-xs sm:text-sm shrink-0"
              >
                {highlight}
              </div>
            ))}
          </div>
        )}

        <div className="w-fit mt-5 h-fit">
          <Link
            className="bg-black font-400 font-poppins cursor-pointer text-[#F5F5F5]   py-2 px-6 rounded-[23px] text-[11px]"
            style={{ padding: "15px 28px" }}
            href={`/properties/${title.replaceAll(" ", "-").toLowerCase()}`}
          >
            Learn More
          </Link>
          <a
            download={
              title.toLocaleLowerCase().replaceAll("-", " ") + " brochure.pdf"
            }
            href={brochure}
            style={{ padding: "15px 28px" }}
            className="backdrop-blur-xl bg-[#d9d9d900] min-w-fit cursor-pointer font-400 mx-2 font-poppins text-black border-1 border-black py-2 px-6 rounded-[23px] text-[11px]"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

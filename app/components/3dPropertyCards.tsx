"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  bedrooms: string;
  status: string;
  className?: string;
  ref?: React.RefObject<HTMLElement | null>;
}

const PropertyCard3d: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  bedrooms,
  status,
  className,
}) => {
  const card = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const getCardInfo = () => {
    if (card.current) {
      setCardWidth(card.current.clientWidth);
      setCardHeight(card.current.clientHeight);
    }
  };

  const getImageInfo = () => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.clientWidth);
      setImageHeight(imageRef.current.clientHeight);
    }
  };

  useEffect(() => {
    if (card.current) {
      window.addEventListener("resize", getCardInfo);
      getCardInfo();
      return () => window.removeEventListener("resize", getCardInfo);
    }
  }, [card.current]);

  useEffect(() => {
    if (imageRef.current) {
      window.addEventListener("resize", getImageInfo);
      getImageInfo();

      return () => window.removeEventListener("resize", getImageInfo);
    }
  }, [imageRef.current]);

  return (
    <div
      ref={card}
      className={`bg-[#D9D9D936] property-card  p-5 w-full flex-shrink-0 ${className}`}
      style={{
        clipPath: `path("M 30 0 L ${cardWidth - 30},${
          cardHeight * 0.1
        } A 30,30 0,0,1 ${cardWidth},${cardHeight * 0.1 + 30} L ${cardWidth},${
          cardHeight - 30
        } A 30,30 0,0,1 ${
          cardWidth - 30
        },${cardHeight} L 30,${cardHeight} A 30,30 0,0,1 0,${
          cardHeight - 30
        } L 0,30 A 30,30 0,0,1 30 0 z")`,
      }}
    >
      <div
        ref={imageRef}
        className="h-auto w-full overflow-hidden"
        style={{
          clipPath: `path("M 30 0 L ${imageWidth - 30},${
            imageHeight * 0.13
          } A 30,30 0,0,1 ${imageWidth},${
            imageHeight * 0.13 + 30
          } L ${imageWidth},${imageHeight - 30} A 30,30 0,0,1 ${
            imageWidth - 30
          },${imageHeight} L 30,${imageHeight} A 30,30 0,0,1 0,${
            imageHeight - 30
          } L 0,30 A 30,30 0,0,1 30 0 z")`,
        }}
      >
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
        <div className="w-fit mt-5 h-fit ">
          <Link
            className="bg-black font-400 font-poppins cursor-pointer text-[#F5F5F5]   py-2 px-6 rounded-[23px] text-[11px]"
            style={{ padding: "15px 28px" }}
            href={`/properties/${title.replaceAll(" ", "-").toLowerCase()}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard3d;

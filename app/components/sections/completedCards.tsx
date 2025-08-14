import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function CompletedCards({
  src,
  index,
  title,
  location,
}: {
  src: string;
  index: number;
  title: string;
  location: string;
}) {
  return (
    <div className="w-[300px]">
      <Image
        src={src}
        alt={"Completed property image " + index}
        width={1200}
        height={700}
        className="w-full aspect-square z-1 rounded-2xl border-1 border-black p-2"
      />
      <div className=" py-5  text-[#757279] text-center ">
        <div className="font-classica  text-black z-2  text-xl uppercase font-[500]">
          {title}
        </div>
        <div className="flex mx-auto w-fit items-center gap-2 text-md">
          <FaLocationDot className="capitalize" />
          {location}
        </div>
      </div>
    </div>
  );
}

export default CompletedCards;

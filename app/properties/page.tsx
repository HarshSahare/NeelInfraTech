import Image from "next/image";
import Link from "next/link";
import React from "react";

function Properties() {
  return (
    <div>
      <div className="h-svh w-screen bg-amber-50">
        <div className="absolute bg-linear-to-b from-[#1212121a] to-[#12121275] inset-0"></div>
        <Image
          src={"/images/propertiesBanner.png"}
          alt="Properties Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 md:w-[55%] w-full flex items-center md:items-end md:py-20 text-white">
          <div className="md:px-20 px-10">
            <h1 className="font-classica md:text-7xl text-5xl uppercase">
              Vrindavan park
            </h1>
            <div className="md:py-10 py-5 text-sm">
              Whether you're searching for a peaceful residential plot, a
              luxurious home, or <br /> a high-return commercial investment — we
              have the perfect property waiting for you.
            </div>
            <div className="flex flex-wrap md:gap-4 gap-2 text-sm">
              <div className="px-5 py-3 min-w-fit font-[400] bg-[#D9D9D93D] rounded-4xl">
                Samrudhi Expressway
              </div>
              <div className="px-5 py-3 min-w-fit font-[400] bg-[#D9D9D93D] rounded-4xl">
                Mihan
              </div>
              <div className="px-5 py-3 min-w-fit font-[400] bg-[#D9D9D93D] rounded-4xl">
                Cancer Hospital
              </div>
            </div>

            <div className="flex flex-wrap capitalize gap-4 md:py-15 py-7 text-sm">
              <Link href="#" className="bg-black px-4 py-3 min-w-fit">
                Contact Now
              </Link>
              <Link
                href="#"
                className="backdrop-blur-xl bg-[#D9D9D921] px-4 py-3 min-w-fit"
              >
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;

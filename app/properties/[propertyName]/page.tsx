import PropertyCard from "@/app/components/propertyCard";
import ContactSection from "@/app/components/sections/contactSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Properties } from "@/app/lib/properties";

async function PropertiesDetail({
  params,
}: {
  params: Promise<{ propertyName: string }>;
}) {
  const propertyName = (await params).propertyName;
  return (
    <div className="flex flex-col">
      <div className="h-svh w-screen bg-amber-50">
        <div className="absolute bg-linear-to-b from-[#1212121a] to-[#12121275] inset-0"></div>
        <Image
          src={"/images/propertiesBanner.png"}
          alt="Properties Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 md:w-[55%] w-full flex items-center  md:py-20 text-white">
          <div className="md:px-20 px-10 md:mt-[15%]">
            <h1 className="font-classica md:text-7xl text-5xl uppercase">
              {propertyName.replace("-", " ")}
            </h1>
            <div className="md:py-10 py-5 text-sm">
              Whether you&apos;re searching for a peaceful residential plot, a
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
              <a
                download={
                  propertyName.toLocaleLowerCase().replace("-", " ") +
                  " brochure.png"
                }
                href={
                  Properties[propertyName.toLowerCase().replace("-", " ")]
                    .brochure
                }
                className="backdrop-blur-xl bg-[#D9D9D921] px-4 py-3 min-w-fit cursor-pointer"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-0 px-10 md:px-20 md:py-40 py-20">
        <div className="md:flex-3">
          <Image
            src={"/images/propertiesLocation.jpg"}
            alt="Property 1"
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:flex-4 px-10">
          <div className="font-classica capitalize text-lg py-5 text-[#757279] font-[400]">
            {propertyName.replace("-", " ")}
          </div>

          <div className="w-fit">
            <div className="text-4xl font-classica uppercase">
              Highlights & Connectivity
            </div>
            <div className="w-full h-[0.2px] bg-black my-10"></div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2  md:gap-10 gap-5 px-5 md:py-10 py-3">
            <div className="text-[#6A5F6C]">
              <div className="text-sm/relaxed py-5 ">
                <span className="text-5xl text-black font-classica">10</span>Min
                <div className="">
                  from Samruddhi Mahamarg
                  <br /> Expressway – for fast intercity travel.
                </div>
              </div>
            </div>

            <div className="text-[#6A5F6C]">
              <div className="text-sm/relaxed py-5 ">
                <span className="text-5xl text-black font-classica">1</span>Min
                <div className="">
                  Outer Ring Road – seamless access
                  <br /> to every part of Nagpur.
                </div>
              </div>
            </div>

            <div className="text-[#6A5F6C]">
              <div className="text-sm/relaxed py-5 ">
                <span className="text-5xl text-black font-classica">5</span>Min
                <div className="">
                  Hingna Metro Station – connect to the
                  <br /> city with ease.
                </div>
              </div>
            </div>

            <div className="text-[#6A5F6C]">
              <div className="text-sm/relaxed py-5 ">
                <span className="text-5xl text-black font-classica">7</span>Min
                <div className="">
                  D-Mart Hingna – daily essentials just a
                  <br /> short drive away.
                </div>
              </div>
            </div>

            <div className="text-[#6A5F6C]">
              <div className="text-sm/relaxed py-5 ">
                <span className="text-5xl text-black font-classica">10</span>Min
                <div className="">
                  MIHAN & AIIMS – close to major
                  <br /> employment & medical hubs.
                </div>
              </div>
            </div>

            <div className="text-[#6A5F6C]">
              <div className="text-sm/relaxed py-5 ">
                <span className="text-5xl text-black font-classica">3</span>Min
                <div className="">
                  Outer Ring Road – seamless access
                  <br /> to every part of Nagpur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="font-classica text-center">
          <div className="text-md text-[#757279]">Peace</div>
          <div className="text-3xl py-3 uppercase font-[400]">Aminities</div>
        </div>

        <div className="flex flex-wrap justify-around py-20 max-w-[80%] mx-auto">
          <div className="flex min-w-[50px] flex-col justify-center items-center">
            <Image
              src={"/images/properties_aminities_1.svg"}
              alt="Amenities 1"
              width={50}
              height={50}
            />
            <div className="text-md p-5 font-classica text-[#757279]">
              24/7 Security
            </div>
          </div>

          <div className="flex min-w-[50px] flex-col justify-center items-center">
            <Image
              src={"/images/properties_aminities_2.svg"}
              alt="Amenities 1"
              width={50}
              height={50}
            />
            <div className="text-md p-5 font-classica text-[#757279]">
              Playing Area
            </div>
          </div>

          <div className="flex min-w-[50px] flex-col justify-center items-center">
            <Image
              src={"/images/properties_aminities_3.svg"}
              alt="Amenities 1"
              width={50}
              height={50}
            />
            <div className="text-md p-5 font-classica text-[#757279]">
              Garden
            </div>
          </div>

          <div className="flex min-w-[50px] flex-col justify-center items-center">
            <Image
              src={"/images/properties_aminities_4.svg"}
              alt="Amenities 1"
              width={50}
              height={50}
            />
            <div className="text-md p-5 font-classica text-[#757279]">
              Coffee shop
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="font-classica text-center">
          <div className="text-md text-[#757279]">Photo</div>
          <div className="text-3xl py-3 uppercase font-[400]">Gallery</div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 px-10 md:px-20 py-20">
          <div className="flex-4">
            <video
              src={"/videos/properties_video_1.mp4"}
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover"
            ></video>

            <div className="text-md text-[#6A5F6C] px-10 py-15 text-center">
              At the heart of Neel Infratech’s growth and values is our founder
              and visionary leader, Mr. Pitamber Ikar. With a deep-rooted
              passion for real estate and a sharp eye for market potential, he
              has transformed Neel Infratech into a name that stands for trust,
              transparency, and forward-thinking development in Nagpur. Mr. Ikar
              brings years of experience, a strong network, and a mission-driven
              approach to every project. His leadership is grounded in integrity
              and driven by a genuine commitment to helping people build secure
              and meaningful futures through smart property investment.
            </div>
          </div>
          <div className="flex-2">
            <video
              src={"/videos/properties_video_2.mp4"}
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover"
            ></video>
          </div>
        </div>
      </div>

      <div className="">
        <div className="font-classica text-center">
          <div className="text-md text-[#757279]">Similar</div>
          <div className="text-3xl py-3 uppercase font-[400]">Properties</div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 py-20 w-[90%] md:w-full mx-auto">
          <PropertyCard
            image="/images/property-4.jpg"
            title="Vrindavan Park"
            location="South Nagpur"
            bedrooms="1200 sq.ft"
            status="Remaining"
          />
          <PropertyCard
            image="/images/property-4.jpg"
            title="Silver Star"
            location="The Acres"
            bedrooms="1030 sq.ft"
            status="Sold Out"
          />
        </div>
      </div>

      <ContactSection className="my-20" />
    </div>
  );
}

export default PropertiesDetail;

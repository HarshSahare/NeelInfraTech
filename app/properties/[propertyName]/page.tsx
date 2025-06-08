import PropertyCard from "@/app/components/propertyCard";
import ContactSection from "@/app/components/sections/contactSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Properties, propertiesInterface } from "@/app/lib/properties";

function getRandomProperties(excludeKey: string): propertiesInterface[] {
  const allKeys = Object.keys(Properties).filter((key) => key !== excludeKey);

  // Shuffle the keys array
  for (let i = allKeys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allKeys[i], allKeys[j]] = [allKeys[j], allKeys[i]];
  }

  // Select first two keys after shuffling
  const selectedKeys = allKeys.slice(0, 2);

  return selectedKeys.map((key) => Properties[key]);
}

async function PropertiesDetail({
  params,
}: {
  params: Promise<{ propertyName: string }>;
}) {
  const propertyName = (await params).propertyName;
  const propertyDetail =
    Properties[propertyName.toLocaleLowerCase().replaceAll("-", " ")];
  const propertyCards = getRandomProperties(
    propertyName.toLocaleLowerCase().replaceAll("-", " ")
  );

  return (
    <div className="flex flex-col">
      <div className="h-svh w-screen bg-amber-50">
        <div className="absolute bg-linear-to-b from-[#1212121a] to-[#12121275] inset-0"></div>
        <Image
          src={propertyDetail.bannerImage || "/images/propertiesBanner.png"}
          alt="Properties Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full h-full bg-[#0000007e]"></div>
        <div className="absolute inset-0 md:w-[55%] w-full flex items-center mt-[var(--navbar-h)]  md:py-20 text-white">
          <div className="md:px-20 px-10 ">
            <h1 className="font-classica md:text-7xl text-5xl uppercase">
              {propertyDetail.heroSection?.title}
            </h1>
            <div className="md:py-10 py-5 text-sm">
              {propertyDetail.heroSection?.description}
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
              <Link href="#contact" className="bg-black px-4 py-3 min-w-fit">
                Contact Now
              </Link>
              <a
                download={
                  propertyName.toLocaleLowerCase().replaceAll("-", " ") +
                  " brochure.pdf"
                }
                href={propertyDetail.brochure}
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
          <iframe
            src={`https://www.google.com/maps?q=${propertyDetail.coordinates?.lat},${propertyDetail.coordinates?.lang}&z=13&output=embed`}
            width="600"
            height="450"
            className="w-full h-full"
            allowFullScreen
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="md:flex-4 px-10">
          <div className="font-classica capitalize text-lg py-5 text-[#757279] font-[400]">
            {propertyName.replaceAll("-", " ")}
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
          <div className="text-3xl py-3 uppercase font-[400]">Amenities</div>
        </div>

        <div className="flex flex-wrap justify-around py-20 max-w-[80%] mx-auto">
          {propertyDetail.amenities?.map(
            (data: { text: string; image: string }, index) => (
              <div
                key={index}
                className="flex min-w-[50px] flex-col justify-center items-center"
              >
                <Image
                  src={data.image}
                  alt={`Amenities ${index}`}
                  width={50}
                  height={50}
                />
                <div className="text-md p-5 font-classica text-[#757279]">
                  {data.text}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="font-classica text-center">
          <div className="text-md text-[#757279]">Photo</div>
          <div className="text-3xl py-3 uppercase font-[400]">Gallery</div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 px-10 md:px-20 py-20">
          <div className="flex-4">
            {propertyDetail.gallery?.content[0].type === "video" ? (
              <video
                src={propertyDetail.gallery?.content[0].src || ""}
                autoPlay
                loop
                muted
                className="w-full h-auto object-cover"
              ></video>
            ) : (
              <Image
                src={propertyDetail.gallery?.content[0].src || ""}
                alt="Property Image"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            )}

            <div className="text-md text-[#6A5F6C] px-10 py-15 text-center">
              {propertyDetail.gallery?.text ||
                `At the heart of Neel Infratech’s growth and values is our founder
              and visionary leader, Mr. Pitamber Ikar. With a deep-rooted
              passion for real estate and a sharp eye for market potential, he
              has transformed Neel Infratech into a name that stands for trust,
              transparency, and forward-thinking development in Nagpur. Mr. Ikar
              brings years of experience, a strong network, and a mission-driven
              approach to every project. His leadership is grounded in integrity
              and driven by a genuine commitment to helping people build secure
              and meaningful futures through smart property investment.`}
            </div>
          </div>
          <div className="flex-2">
            {propertyDetail.gallery?.content[1].type === "video" ? (
              <video
                src={propertyDetail.gallery?.content[1].src || ""}
                autoPlay
                loop
                muted
                className="w-full h-auto object-cover"
              ></video>
            ) : (
              <Image
                src={propertyDetail.gallery?.content[1].src || ""}
                alt="Property Image"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            )}
          </div>
        </div>
      </div>

      <div className="">
        <div className="font-classica text-center">
          <div className="text-md text-[#757279]">Similar</div>
          <div className="text-3xl py-3 uppercase font-[400]">Properties</div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 py-20 w-[90%] md:w-full mx-auto">
          {propertyCards.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              location={property.location}
              bedrooms={property.bedrooms}
              status={property.status}
            />
          ))}
        </div>
      </div>

      <ContactSection className="my-20" />
    </div>
  );
}

export default PropertiesDetail;

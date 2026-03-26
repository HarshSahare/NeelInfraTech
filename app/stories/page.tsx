import Image from "next/image";
import React from "react";
import { DirectorsInfo } from "../lib/directors";

function StoriesPage() {
  const galleryBaseUrl = "/images/gallery/img";
  const totalImages = 30;

  return (
    <div className="flex flex-col">
      <div className="h-svh w-screen bg-amber-50">
        <Image
          src={"/images/storiesBanner.png"}
          alt="Properties Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0  w-full flex items-center  md:py-20 text-white">
          <div className="md:px-20 px-10 md:mt-[7%]">
            <h1 className="font-classica md:text-7xl text-3xl uppercase">
              Turning Nagpur’s Land into <br /> Landmarks. Dreams into
              <br /> Reality.
            </h1>
            <div className="md:py-10 py-5 text-md">
              At Neel Infratech, we are on a mission to transform how real
              estate is <br /> experienced in Nagpur. We don&apos;t just deal in
              properties — we help <br /> people find the right space to grow,
              live, and invest with confidence.
              <br /> Whether you&apos;re looking for residential plots,
              bungalows, villas, or
              <br /> commercial spaces.
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col w-[90%] mx-auto py-20 gap-10 md:gap-0 md:py-40">
        <div className="md:flex-2 flex-1">
          <Image
            alt="property image"
            src="/images/storiesImage1.png"
            width={1920}
            height={1080}
            className="w-full h-full lg:h-auto object-cover"
          />
        </div>
        <div className="md:flex-3 flex-1 flex items-center justify-center text-center md:text-left">
          <div className="md:px-30">
            <div className="font-classica font-[400]  uppercase md:text-5xl text-3xl">
              Why Choose Neel <br /> Infratech?
            </div>

            <div className="h-[0.5px] w-[50%] translate-x-[50%] md:translate-x-0 bg-[#6A5F6C] my-6 md:10"></div>

            <div className="text-md text-[#6A5F6C]">
              Choosing the right real estate partner can make all the difference
              — and at Neel Infratech, we aim to be that difference. With deep
              roots and local expertise in Nagpur, we bring a clear
              understanding of the city’s real estate trends, emerging hotspots,
              and high-potential investment zones. What truly sets us apart is
              our commitment to transparency — no hidden charges, no misleading
              promises, just honest communication and dependable service from
              the very first interaction.
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col w-[90%] mx-auto  gap-10 md:gap-0">
        <div className=" flex-1">
          <Image
            alt="property image"
            src="/images/storiesImage2.png"
            width={1920}
            height={1080}
            className="w-full md:h-full lg:h-auto object-cover"
          />
        </div>
        <div className="flex-1 flex items-center justify-center md:text-left text-center">
          <div className="xl:px-30 px-10">
            <div className="font-classica font-[400] uppercase md:text-5xl text-3xl">
              Our Mission & <br /> Vision
            </div>

            <div className="h-[0.5px] w-[50%] translate-x-[50%] md:translate-x-0 bg-[#6A5F6C] my-6 md:10"></div>

            <ul className="text-md text-[#6A5F6C] uppercase list-disc">
              <li>
                Partnership of company with our great leaders, customers & staff
                till 2026
              </li>
              <li>Resale Counters for our customers till 2027</li>
              <li>
                To teach those land mafias who looted your hard earned money
              </li>
              <li>
                To teach those organizational mafias who cheated with your
                incentives and tds
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="flex lg:flex-row flex-col w-[90%] mx-auto py-20 gap-10 lg:gap-0 lg:py-40"
        id="Owner"
      >
        <div className="lg:flex-2 flex-1 relative">
          <Image
            alt="property image"
            src="/images/storiesImage3.png"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
          <div
            className="absolute w-full h-[50%] bottom-0 left-0"
            style={{ background: "linear-gradient(to top , #fff , #fff0)" }}
          ></div>
        </div>
        <div className="lg:flex-3 flex-1 flex items-center justify-center text-center lg:text-left">
          <div className="lg:px-30 ">
            <div className="font-classica text-[#757279] py-2 text-md font-[400] ">
              Our Leader
            </div>
            <div className="font-classica font-[400]   uppercase lg:text-5xl text-3xl">
              Mr. Pitambar Ikhar
            </div>

            <div className="h-[0.5px] w-[50%] translate-x-[50%] md:translate-x-0 bg-[#6A5F6C] my-6 md:10"></div>

            <div className="text-md text-[#6A5F6C]">
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
        </div>
      </div>

      {DirectorsInfo.map((director, index) => (
        <div
          className={`flex ${
            index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse md:text-right"
          } flex-col w-[90%] mx-auto  gap-10 lg:gap-0  text-center md:text-left py-20 "
          }`}
          key={index}
          id={`director-${index}`}
        >
          <div className=" flex-1 ">
            <div className="h-fit relative">
              <Image
                alt="property image"
                src={director.image}
                width={1920}
                height={1080}
                className="w-full lg:h-full xl:h-auto object-cover"
              />

              <div
                className="absolute w-full h-[50%] bottom-0 left-0"
                style={{ background: "linear-gradient(to top , #fff , #fff0)" }}
              ></div>
            </div>
          </div>
          <div className="lg:flex-3 flex-1 flex items-center justify-center">
            <div className="lg:px-30 ">
              <div className="font-classica text-[#757279] py-2 text-md font-[400] ">
                Our Director
              </div>
              <div className="font-classica font-[400] uppercase md:text-5xl text-3xl">
                {director.name}
              </div>
              <div className="italic m-2 text-[#6A5F6C]">{director.quote}</div>

              <div
                className={`h-[0.5px] w-[50%] translate-x-[50%] md:translate-x-0 bg-[#6A5F6C] my-6 md:10 ${
                  index % 2 != 0 && "lg:ml-[50%]"
                }`}
              ></div>

              <div
                className="text-md text-[#6A5F6C]"
                dangerouslySetInnerHTML={{ __html: director.description }}
              ></div>

              <div className="text-[#6A5F6C] font-[300] italic py-10">
                {director.subDescription}
                <br />-{director.quoteAuthor}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div id="gallery">
        <div className="font-classica text-center">
          <div className="text-md text-[#757279]">Memories</div>
          <div className="text-3xl py-3 uppercase font-[400]">
            hAPPY Moments
          </div>
        </div>

        <div className="px-5 lg:px-20 py-10 lg:py-20">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
            {Array.from({ length: totalImages }).map((_, i) => (
              <div
                key={i}
                className="mb-5 break-inside-avoid overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={galleryBaseUrl + (i + 1) + ".jpg"}
                  alt={`happy moments image ${i + 1}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoriesPage;

export const metadata = {
  title: "About Neel Infra Tech | Trusted Real Estate Developer in Nagpur",

  description:
    "Learn about Neel Infra Tech, a trusted real estate developer in Nagpur offering premium residential and investment plots with transparency and long-term value.",

  keywords: [
    "Neel Infra Tech",
    "real estate company in Nagpur",
    "trusted property developer Nagpur",
    "Nagpur real estate company",
    "property developers in Nagpur",
  ],

  openGraph: {
    title: "About Neel Infra Tech",
    description:
      "Discover the vision, mission, and leadership behind Neel Infra Tech in Nagpur.",
    url: "https://www.neelinfratech.com/about",
    siteName: "Neel Infra Tech",
    images: [
      {
        url: "/images/storiesBanner.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

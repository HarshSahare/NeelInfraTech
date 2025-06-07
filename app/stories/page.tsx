import Image from "next/image";
import React from "react";
import { DirectorsInfo } from "../lib/directors";


function StoriesPage() {
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

            <div className="text-md text-[#6A5F6C]">
              At Neel Infratech, our mission is simple — to make real estate
              transparent, accessible, and truly rewarding for everyone. We aim
              to help people not just buy land, but secure their dreams and
              create lasting value through smart property choices. We envision a
              future where Neel Infratech becomes a leading name in Nagpur’s
              real estate industry, known for trust, integrity, and meaningful
              customer relationships.
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col w-[90%] mx-auto py-20 gap-10 lg:gap-0 lg:py-40">
        <div className="lg:flex-2 flex-1">
          <Image
            alt="property image"
            src="/images/storiesImage3.png"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="lg:flex-3 flex-1 flex items-center justify-center text-center lg:text-left">
          <div className="lg:px-30 ">
            <div className="font-classica text-[#757279] py-2 text-md font-[400] ">
              Our Leader
            </div>
            <div className="font-classica font-[400]   uppercase lg:text-5xl text-3xl">
              Mr. Pitambar ikar
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
          } flex-col w-[90%] mx-auto  gap-10 lg:gap-0  text-center md:text-left  ${
            index % 2 == 0 ? "py-0" : "py-20"
          }`}
          key={index}
        >
          <div className=" flex-1 ">
            <Image
              alt="property image"
              src={director.image}
              width={1920}
              height={1080}
              className="w-full lg:h-full xl:h-auto object-cover"
            />
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

      <div className="md:py-20 px-10">
        <div className="font-classica text-center">
          <div className="text-md text-[#757279]">Our Vision </div>
          <div className="text-3xl py-3 uppercase font-[400]">
            Our Commitment
          </div>
        </div>
        <div className="py-20 mx-auto w-full max-w-[500px]">
          <Image
            src={"/images/storiesImage4.png"}
            alt="vision image"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="text-center w-full max-w-[1000px] mx-auto">
          At Neel Infratech, we believe that real estate is more than just
          buying and selling property — it’s about building trust, fulfilling
          dreams, and creating long-term value for every client. Our commitment
          is to stand by our clients at every step, offering honest advice,
          complete transparency, and personalized service that continues even
          after the deal is done.
        </div>
        <div className="w-fit mx-auto bg-black text-white font-classica px-6 py-2 md:my-20 my-15">
          Contact Us
        </div>
      </div>

      <div className="">
        <div className="font-classica text-center">
          <div className="text-md text-[#757279]">Memories</div>
          <div className="text-3xl py-3 uppercase font-[400]">
            hAPPY Moments
          </div>
        </div>

        <div className="grid grid-cols-5 px-5 lg:px-20 py-10 lg:py-20 gap-5 lg:gap-10">
          <div className="col-span-1 rounded-lg overflow-hidden">
            <Image
              src={"/images/storiesImage7.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 rounded-lg overflow-hidden">
            <Image
              src={"/images/storiesImage6.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-lg overflow-hidden">
            <Image
              src={"/images/storiesImage5.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-lg overflow-hidden">
            <Image
              src={"/images/storiesImage8.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 rounded-lg overflow-hidden">
            <Image
              src={"/images/storiesImage9.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-lg overflow-hidden">
            <Image
              src={"/images/storiesImage10.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-lg overflow-hidden">
            <Image
              src={"/images/storiesImage11.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 rounded-lg overflow-hidden">
            <Image
              src={"/images/storiesImage12.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-lg overflow-hidden">
            <Image
              src={"/images/storiesImage5.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoriesPage;


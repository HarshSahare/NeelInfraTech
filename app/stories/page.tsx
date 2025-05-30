import Image from "next/image";
import React from "react";

interface DirectorsInfoInterface {
  name: string;
  description: string;
  image: string;
  subDescription: string;
  quoteAuthor: string;
}

function StoriesPage() {
  const DirectorsInfo: DirectorsInfoInterface[] = [
    {
      name: "Mr. Ajay Dandekar",
      description:
        "Neel Infratech is driven by a dynamic team of five visionary directors, each bringing their own expertise, leadership, and commitment to building a trustworthy and progressive real estate brand in Nagpur.Together, our directors share a common goal — to transform land into lasting value and guide clients toward smart and secure real estate decisions. With diverse backgrounds in real estate development, customer relations, finance, and strategy, they ensure every project reflects the company’s core values: transparency, integrity, and client satisfaction.",
      image: "/images/storiesImage3.png",
      subDescription:
        '"The directors at Neel Infratech are professional, honest, and easy to trust. Their teamwork made my investment journey smooth and stress-free."',
      quoteAuthor: "Mr. Ajay Dandekar",
    },
    {
      name: "Mr. Satendra sir",
      description:
        "Neel Infratech is driven by a dynamic team of five visionary directors, each bringing their own expertise, leadership, and commitment to building a trustworthy and progressive real estate brand in Nagpur.Together, our directors share a common goal — to transform land into lasting value and guide clients toward smart and secure real estate decisions. With diverse backgrounds in real estate development, customer relations, finance, and strategy, they ensure every project reflects the company’s core values: transparency, integrity, and client satisfaction.",
      image: "/images/storiesImage3.png",
      subDescription:
        '"The directors at Neel Infratech are professional, honest, and easy to trust. Their teamwork made my investment journey smooth and stress-free."',
      quoteAuthor: "Mr. Satendra sir",
    },
  ];
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
              <br /> Whether you&apos;re looking for residential plots, bungalows,
              villas, or
              <br /> commercial spaces.
            </div>
          </div>
        </div>
      </div>

      <div className="flex xl:flex-row flex-col w-[90%] mx-auto py-20 gap-10 xl:gap-0 xl:py-40">
        <div className="xl:flex-2 flex-1">
          <Image
            alt="property image"
            src="/images/storiesImage1.png"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="xl:flex-3 flex-1 flex items-center justify-center">
          <div className="xl:px-30 max-w-[70%]">
            <div className="font-classica font-[400]  uppercase text-5xl">
              Why Choose Neel <br /> Infratech?
            </div>

            <div className="h-[0.5px] w-[50%] bg-[#6A5F6C] my-10"></div>

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

      <div className="flex xl:flex-row-reverse flex-col w-[90%] mx-auto py-20 gap-10 xl:gap-0">
        <div className=" flex-1">
          <Image
            alt="property image"
            src="/images/storiesImage2.png"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="xl:px-30 max-w-[85%]">
            <div className="font-classica font-[400] uppercase text-5xl">
              Our Mission & <br /> Vision
            </div>

            <div className="h-[0.5px] w-[50%] bg-[#6A5F6C] my-10"></div>

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

      <div className="flex xl:flex-row flex-col w-[90%] mx-auto py-20 gap-10 xl:gap-0 xl:py-40">
        <div className="xl:flex-2 flex-1">
          <Image
            alt="property image"
            src="/images/storiesImage3.png"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="xl:flex-3 flex-1 flex items-center justify-center">
          <div className="xl:px-30 ">
            <div className="font-classica text-[#757279] py-2 text-md font-[400] ">
              Our Leader
            </div>
            <div className="font-classica font-[400]   uppercase text-5xl">
              Mr. Pitambar ikar
            </div>

            <div className="h-[0.5px] w-[50%] bg-[#6A5F6C] my-10"></div>

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
            index % 2 == 0 ? "xl:flex-row" : "xl:flex-row-reverse xl:text-right"
          } flex-col w-[90%] mx-auto  gap-10 xl:gap-0 ${
            index % 2 == 0 && index != DirectorsInfo.length - 1
              ? "py-20"
              : "py-0"
          }`}
          key={index}
        >
          <div className=" flex-1">
            <Image
              alt="property image"
              src={director.image}
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="xl:flex-3 flex-1 flex items-center justify-center">
            <div className="xl:px-30 ">
              <div className="font-classica text-[#757279] py-2 text-md font-[400] ">
                Our Director
              </div>
              <div className="font-classica font-[400]   uppercase text-5xl">
                {director.name}
              </div>

              <div
                className={`h-[0.5px] w-[50%] bg-[#6A5F6C] my-10 ${
                  index % 2 != 0 && "xl:ml-[50%]"
                }`}
              ></div>

              <div className="text-md text-[#6A5F6C]">
                {director.description}
              </div>

              <div className="text-[#6A5F6C] font-[300] italic py-10">
                {director.subDescription}
                <br />-{director.quoteAuthor}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="py-40">
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
        <div className="w-fit mx-auto bg-black text-white font-classica px-6 py-2 my-20">
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

        <div className="grid grid-cols-5 px-20 py-20 gap-10">
          <div className="col-span-5 md:col-span-1 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage7.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-5 md:col-span-3 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage6.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-5 md:col-span-1 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage5.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-5 md:col-span-1 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage8.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-5 md:col-span-3 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage9.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-5 md:col-span-1 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage10.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-5 md:col-span-1 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage11.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-5 md:col-span-3 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage12.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-5 md:col-span-1 rounded-4xl overflow-hidden">
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

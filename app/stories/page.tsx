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
      name: "Mr. Pushparaj Meshram",
      description: `Pushparaj Meshram’s story is one of grit and growth. Born near Bhivapoor village, Umred, he began working while in 7th grade to support his education. After moving to Nagpur, he completed his 12th, graduation, LLB, and LLM—working jobs like digging, selling books, and tutoring to fund his studies.

        <br/><br/>Starting his legal career in 2000, he practiced law with dedication. In 2007, he stepped into real estate, where he found his true calling. By 2009, he was excelling in the field, eventually dedicating himself fully to real estate.
        
        <br/><br/>With over 18 years in the industry, including 10 years at Neel Infratech, he has helped over 2,000 clients buy property and empowered 500+ individuals to build their own real estate businesses. His hard work has taken him from rural beginnings to international milestones, including visits to Andaman & Nicobar (2010) and Thailand (2012).
        
        <br/><br/>> "Hume zarurat ke hisaab se nahi, chahat ke hisaab se jeena chahiye."        
        `,
      image: "/images/storiesImage3.png",
      subDescription:
        '"Mr. Meshram’s experience and honesty gave us full confidence during our property purchase. A true professional we deeply trust."',
      quoteAuthor: "Mr. Rajesh K. Homebuyer",
    },
    {
      name: "Mr. Satendra Sir",
      description: `Hailing from Manjhuriya village in Darbhanga district, Satendra Sir's life journey reflects resilience and responsibility. Married at a young age, he moved to Nagpur at 25 with his wife and three children, determined to give them a better future through education.

        <br/><br/>To support his family, he took on various jobs over the years—never stepping back from hard work. With the support of a friend, he entered the real estate industry, where his dedication and sincerity led him to co-build a company and eventually become its Director.
        
        <br/><br/>Through his real estate earnings, he educated his children, arranged their marriages, and secured their futures by buying properties and land. By the age of 45, he had firmly established himself. Today, he stands proud with 700–800 happy clients across Nagpur, having sold property in both private and government sectors—with customer satisfaction at the core of his journey.
        
        <br/><br/>> "Karam pe vishvash rakho, result pe nahi — result aapka karam hi dilayega."
        `,
      image: "/images/storiesImage3.png",
      subDescription:
        '"Satendra Sir treats every client like family. His honesty and long-term thinking gave me full confidence in my property purchase. A rare gem in this industry!"',
      quoteAuthor: "Mr. Sameer P., Government Employee",
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
              <br /> Whether you&apos;re looking for residential plots,
              bungalows, villas, or
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
          } flex-col w-[90%] mx-auto  gap-10 xl:gap-0  ${
            index % 2 == 0 && index != DirectorsInfo.length - 1
              ? "py-20"
              : "py-0"
          }`}
          key={index}
        >
          <div className=" flex-1 ">
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

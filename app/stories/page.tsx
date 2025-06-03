import Image from "next/image";
import React from "react";

interface DirectorsInfoInterface {
  name: string;
  quote: string;
  description: string;
  image: string;
  subDescription: string;
  quoteAuthor: string;
}

function StoriesPage() {
  const DirectorsInfo: DirectorsInfoInterface[] = [
    {
      name: "Mr. Pushparaj Meshram",
      quote:
        '"Hume zarurat ke hisaab se nahi, chahat ke hisaab se jeena chahiye."',
      description: `Pushparaj Meshram’s story is one of grit and growth. Born near Bhivapoor village, Umred, he began working while in 7th grade to support his education. After moving to Nagpur, he completed his 12th, graduation, LLB, and LLM—working jobs like digging, selling books, and tutoring to fund his studies.

        <br/><br/>Starting his legal career in 2000, he practiced law with dedication. In 2007, he stepped into real estate, where he found his true calling. By 2009, he was excelling in the field, eventually dedicating himself fully to real estate.
        
        <br/><br/>With over 18 years in the industry, including 10 years at Neel Infratech, he has helped over 2,000 clients buy property and empowered 500+ individuals to build their own real estate businesses. His hard work has taken him from rural beginnings to international milestones, including visits to Andaman & Nicobar (2010) and Thailand (2012).
             
        `,
      image: "/images/storiesImage3.png",
      subDescription:
        '"Mr. Meshram’s experience and honesty gave us full confidence during our property purchase. A true professional we deeply trust."',
      quoteAuthor: "Mr. Rajesh K. Homebuyer",
    },
    {
      name: "Mr. Satendra Sir",
      quote:
        '"Karam pe vishvash rakho, result pe nahi — result aapka karam hi dilayega."',
      description: `
      Hailing from Manjhuriya village in Darbhanga district, Satendra Sir's life journey reflects resilience and responsibility. Married at a young age, he moved to Nagpur at 25 with his wife and three children, determined to give them a better future through education.
      <br/><br/>To support his family, he took on various jobs over the years—never stepping back from hard work. With the support of a friend, he entered the real estate industry, where his dedication and sincerity led him to co-build a company and eventually become its Director.
      <br/><br/>Through his real estate earnings, he educated his children, arranged their marriages, and secured their futures by buying properties and land. By the age of 45, he had firmly established himself. Today, he stands proud with 700–800 happy clients across Nagpur, having sold property in both private and government sectors—with customer satisfaction at the core of his journey.
        `,
      image: "/images/storiesImage3.png",
      subDescription:
        '"Satendra Sir treats every client like family. His honesty and long-term thinking gave me full confidence in my property purchase. A rare gem in this industry!"',
      quoteAuthor: "Mr. Sameer P., Government Employee",
    },
    {
      name: "Mr. Ajay Dandekar",
      quote: `"Rasta chalna, saaf chalna – chahe usme darr lage."`,
      description: `
      Ajay Dandekar’s journey from self-doubt to self-made is both inspiring and humbling. After completing his college in 1988 and pursuing BSW and MSW, he entered network marketing during his M.A. studies. Though he reached the Silver Star level, he fell into a debt of ₹3.5 lakhs—a turning point that taught him that wealth comes not just from building networks, but from delivering value through products and services.
      <br/><br/>Naturally introverted, he initially disliked public speaking. Yet, network marketing transformed him—today, his phone holds 8,000–9,000 contacts, a reflection of the lives he’s touched. Despite being told by his father that a Maharashtrian can’t be a businessman, he held on to his entrepreneurial dreams. His father once told him,
      <br/><br/> “If I can’t help myself, I’ll at least never harm others.”
      <br/>—words that stayed with him forever.
      <br/></br>Even after marriage, he struggled with ₹4.5 lakhs in debt. But a pivotal meeting with former marketing colleagues sparked the idea of launching a real estate company. He was the first to commit—and the rest is history. In 2010, he bought his first car. Real estate not only helped him clear all his debts but also empowered him to help 400+ people build their own businesses.
      <br/></br>In 2021, he fulfilled a long-awaited dream: a foreign trip with his family. With real estate, he also purchased five properties and his dream car. He proudly says:
      <br/></br>> “My real life began at 35.”
      <br/></br>Now, with 14 years as a founding director at Neel Infratech, his only regret is that his parents aren't here to witness his success.
      `,
      image: "/images/storiesImage3.png",
      subDescription:
        '"Ajay Sir\'s journey shows what belief and consistency can achieve. He’s more than a real estate expert—he’s a guide who uplifts others while rising himself."',
      quoteAuthor: "Mr. Pooja R., Entrepreneur",
    },
    {
      name: "Mr. Rupesh Sir",
      quote: `"Aadmi zindagi mein utna hi bada ban sakta hai, jitni badi uski soch ho."`,
      description: `
      Born into a humble farming family, Rupesh Sir has always believed in the power of vision and effort. While pursuing his B.A., he stepped into the world of business and soon met Ikar Sir, the current owner of Neel Infratech. That meeting marked the beginning of his journey in the real estate industry.
      <br/><br/>Over the past 11 years at Neel Infratech, he has not only contributed to the company’s success but also achieved several personal milestones—buying his first car, supporting his daughter’s education, purchasing his dream car, and successfully closing multiple property deals across Nagpur.
      `,
      image: "/images/storiesImage3.png",
      subDescription:
        '"Rupesh Sir’s calm approach and genuine advice helped us make a confident decision. He treats every deal like it’s his own."',
      quoteAuthor: "Mr. Ravi P., Government Officer",
    },
    {
      name: "Mr. Dekate Sir",
      quote: `"Jab tak thakte nahi, tab tak haarte nahi."`,
      description: `
      Born in Kargaon village, Tah. Bilapur, Nagpur, Dekate Sir comes from a humble farming background. After completing his 10th in the village, he moved to Nagpur for higher education—pursuing 12th with English Literature, followed by an M.A. in English Literature from Morris College, along with B.Ed. and BML. In 1995, he began his career as a Junior College Lecturer.
      <br/><br/>Despite a stable job, his heart was set on building something of his own. He tried various businesses—from selling farm products and running a dairy farm to a nursery and MLM. But those efforts led him into a ₹35 lakh debt.
      <br/><br/>In 2009, a friend introduced him to real estate, which turned out to be a turning point. After leaving a non-performing company, he joined Neel Infratech at age 42, and by 45, he achieved financial freedom.
      <br/><br/>With real estate, he paid off his debts, bought a house in Nagpur, built another in his village, purchased farmland at Neel Farms, and secured both commercial and residential plots—proving that with the right path, success is possible at any stage.
      `,
      image: "/images/storiesImage3.png",
      subDescription:
        '"Dekate Sir’s resilience and honesty gave us confidence in our investment. He truly leads by example."',
      quoteAuthor: "Mr. Meena A., Businesswoman",
    },
    {
      name: "Mr. Onkar Sonwani Sir",
      quote: `""Irade nek ho aur mehnat sacchi ho toh har sapna haqiqat ban sakta hai."`,
      description: `
      Onkar Sir began his journey of hard work and ambition at the young age of 20. Starting with network marketing, he moved into health product-based marketing, where he gained valuable experience in sales, communication, and team building.
      <br/><br/>Through his network, he met Ikar Sir, which led him to enter the world of real estate. That decision changed his life. With determination and the support of Neel Infratech, he turned dreams into reality—buying a house and multiple plots in Nagpur, securing a stable and successful future for his family.
      `,
      image: "/images/storiesImage3.png",
      subDescription:
        '"Onkar Sir’s dedication and genuine nature made our property buying experience smooth and trustworthy."',
      quoteAuthor: "Mr. Anjali P., Homemaker",
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
            index % 2 == 0 ? "py-20" : "py-0"
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
              <div className="italic m-2 text-[#6A5F6C]">{director.quote}</div>

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

      <div className="py-20">
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

        <div className="grid grid-cols-5 px-5 lg:px-20 py-10 lg:py-20 gap-5 lg:gap-10">
          <div className="col-span-1 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage7.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage6.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage5.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage8.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage9.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage10.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage11.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 rounded-4xl overflow-hidden">
            <Image
              src={"/images/storiesImage12.png"}
              alt="happy moments image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-4xl overflow-hidden">
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

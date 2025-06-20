"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TestimonialSection({ className }: { className?: string }) {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-container",
          start: "top 0%",
        },
      });
      timeline.from(
        ".testimonials-container .left",
        {
          opacity: 0,
          duration: 1,
          x: -50,
          stagger: 0.2,
        },
        "items"
      );

      timeline.from(
        ".testimonials-container .up",
        {
          opacity: 0,
          duration: 1,
          y: -50,
          stagger: 0.2,
        },
        "items"
      );

      timeline.from(
        ".testimonials-container .right",
        {
          opacity: 0,
          duration: 1,
          x: 50,
          stagger: 0.2,
        },
        "items"
      );

      timeline.from(
        ".testimonials-container .down",
        {
          opacity: 0,
          duration: 1,
          y: 50,
          stagger: 0.2,
        },
        "items"
      );
    });

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: "Shubhash Umade",
      msg: "I bought a plot in Vrindavan Park 3, and from the start of the documentation process to the end, everything was absolutely clear and well-managed. I'm extremely happy with the transparency and support provided throughout. Buying a plot from Neel Infratech was a smooth and satisfying experience!",
      img: "/images/Shubhash Umade.jpg",
      propertyImg: "/images/propertiesBanner.png",
    },

    {
      name: "Rajesh bandate",
      msg: "I purchased a plot near Wardha Road through Neel Infratech, and I must say — it was a great experience. The company's behavior was professional, the property had a clear title, and the entire process was trustworthy. Finding a good plot on Wardha Road is tough, but Neel Infratech made it possible. I'm genuinely happy with my decision",
      img: "/images/Rajesh bandate.jpg",
      propertyImg: "/images/silver_star_header_image.jpg",
    },
    {
      name: "Gangaram Sakhatkar ACP",
      msg: "Neel Infratech delivered exactly what they promised. Their commitment, proper documentation, and constant support made the entire process smooth. I'm truly happy to have purchased my plot through them.",
      img: "/images/Gangaram Sakhatkar.jpg",
      propertyImg: "/images/landingPropertiesImage3.jpg",
    },
    {
      name: "Hemant Bhisikar",
      msg: "I bought a property from Neel Infratech in 2020 when the prices were quite low. Looking back, it was one of the best decisions I made — within just 5 years, the property value has tripled! I'm extremely happy with my investment and thankful to Neel Infratech for the opportunity.",
      img: "/images/Hemant Bhisikar.jpg",
      propertyImg: "/images/propertiesLandingImage2.jpg",
    },
  ];

  return (
    <>
      <div
        className={`hidden lg:flex w-full testimonials-container min-h-svh relative justify-center items-center ${className}`}
      >
        <div className="heading font-classica font-[400] text-3xl sm:text-4xl lg:text-5xl max-w-[700px] text-center z-10 text-[#161616]">
          Testimonials
        </div>

        <div className="max-w-[300px] absolute left top-[10.9%] text-xs sm:text-sm lg:text-[12px] left-[4%] bg-[#e6e6e6] py-5 px-7 rounded-2xl">
          <div className="top flex items-center gap-2">
            <div className="bg-[#9c9c9c7a]  rounded-[50%] overflow-hidden ">
              <Image
                src={testimonials[0].img}
                alt={testimonials[0].name + " image"}
                height={50}
                width={50}
              />
            </div>
            <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
              <p className="text-sm sm:text-base">{testimonials[0].name}</p>
              <div className="text-[10px] sm:text-xs lg:text-[8px] flex">
                Nagpur -
                <Image
                  src="/images/star.png"
                  alt="star"
                  className="mx-2"
                  width={15}
                  height={10}
                />
                3.5
              </div>
            </div>
          </div>
          <div className="text-classica mt-4 text-[#918F8F] font-[400] text-xs sm:text-sm lg:text-[12px]">
            {testimonials[0].msg}
          </div>
        </div>

        <Image
          src={testimonials[0].propertyImg}
          alt="property Image"
          height={173}
          width={278}
          className="absolute top-[5.4%] up left-[25%] object-cover w-[278px] h-[153px] rounded-2xl"
        />
        <Image
          src={testimonials[1].propertyImg}
          alt="property Image"
          height={219}
          width={235}
          className="absolute top-[10.9%] up left-[51.3%] object-cover w-[247px] h-[153px] rounded-2xl"
        />

        <div className="max-w-[300px] right absolute top-[5.4%] text-xs sm:text-sm lg:text-[10px] left-[68.4%] bg-[#e6e6e6] py-5 px-7 rounded-2xl">
          <div className="top flex items-center gap-2">
            <div className="bg-[#9c9c9c7a]  rounded-[50%] overflow-hidden">
              <Image
                src={testimonials[1].img}
                alt={testimonials[1].name + " image"}
                height={50}
                width={50}
              />
            </div>
            <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
              <p className="text-sm sm:text-base">{testimonials[1].name}</p>
              <div className="text-[10px] sm:text-xs lg:text-[8px] flex">
                Nagpur -
                <Image
                  src="/images/star.png"
                  alt="star"
                  className="mx-2"
                  width={15}
                  height={10}
                />
                3.5
              </div>
            </div>
          </div>
          <div className="text-classica mt-4 text-[#918F8F] font-[400] text-xs sm:text-sm lg:text-[12px]">
            {testimonials[1].msg}
          </div>
        </div>

        <Image
          src={testimonials[2].propertyImg}
          alt="property Image"
          height={219}
          width={235}
          className="absolute right right-[2.6%] top-[38.4%] object-cover w-[219px] h-[162px] rounded-2xl"
        />

        <div className="max-w-[300px] absolute right right-[4.5%] text-xs sm:text-sm lg:text-[10px] bottom-[18.4%] bg-[#e6e6e6] p-5 px-7 rounded-2xl">
          <div className="top flex items-center gap-2">
            <div className=" bg-[#9c9c9c7a]  rounded-[50%] overflow-hidden ">
              <Image
                src={testimonials[2].img}
                alt={testimonials[2].name + " image"}
                height={50}
                width={50}
              />
            </div>
            <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
              <p className="text-sm sm:text-base">{testimonials[2].name}</p>
              <div className="text-[10px] sm:text-xs lg:text-[8px] flex">
                Nagpur -
                <Image
                  src="/images/star.png"
                  alt="star"
                  className="mx-2"
                  width={15}
                  height={10}
                />
                3.5
              </div>
            </div>
          </div>
          <div className="text-classica mt-4 text-[#918F8F] font-[400] text-xs sm:text-sm lg:text-[12px]">
            {testimonials[2].msg}
          </div>
        </div>

        <Image
          src={testimonials[3].propertyImg}
          alt="property Image"
          height={292}
          width={162}
          className="absolute bottom-[9.5%] down left-[39.5%] object-cover w-[300px] h-[162px] rounded-2xl"
        />

        <div className="max-w-[300px] down absolute bottom-[3%] text-xs sm:text-sm lg:text-[10px] left-[18.5%] bg-[#e6e6e6] py-5 px-7 rounded-2xl">
          <div className="top flex items-center gap-2">
            <div className=" bg-[#9c9c9c7a]  rounded-[50%] overflow-hidden ">
              <Image
                src={testimonials[3].img}
                alt={testimonials[3].name + " image"}
                height={50}
                width={50}
              />
            </div>
            <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
              <p className="text-sm sm:text-base">{testimonials[3].name}</p>
              <div className="text-[10px] sm:text-xs lg:text-[8px] flex">
                Nagpur -
                <Image
                  src="/images/star.png"
                  alt="star"
                  className="mx-2"
                  width={15}
                  height={10}
                />
                3.5
              </div>
            </div>
          </div>
          <div className="text-classica mt-4 text-[#918F8F] font-[400] text-xs sm:text-sm lg:text-[12px]">
            {testimonials[3].msg}
          </div>
        </div>

        <Image
          src={"/images/WhatsApp Image 2025-06-08 at 12.40.43_3b2a511a.jpg"}
          alt="property Image"
          height={219}
          width={160}
          className="absolute left left-[4%] top-[42.8%] object-cover w-[219px] h-[159px] rounded-2xl"
        />
      </div>

      <div
        className={`lg:hidden w-full px-4 py-10 flex flex-col space-y-10 ${className}`}
      >
        <h2 className="font-classica font-[400] text-2xl sm:text-3xl text-center text-[#161616]">
          Testimonials
        </h2>

        {/* Testimonial 1 */}
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#D9D9D940] rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#9c9c9c7a]  rounded-[50%] overflow-hidden ">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name + " image"}
                  height={50}
                  width={50}
                />
              </div>
              <div className="text-[#161616B8] font-classica font-[400]">
                <p className="text-base">{testimonial.name}</p>
                <div className="text-xs flex items-center">
                  Nagpur -
                  <Image
                    src="/images/star.png"
                    alt="star"
                    width={15}
                    height={10}
                    className="mx-2"
                  />
                  3.5
                </div>
              </div>
            </div>
            <p className="text-[#918F8F] text-sm font-[400] text-classica">
              {testimonial.msg}
            </p>
            <Image
              src={testimonial.propertyImg}
              alt="Testimonial Property 1"
              width={600}
              height={300}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default TestimonialSection;

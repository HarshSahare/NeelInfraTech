"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUserAlt } from "react-icons/fa";

function TestimonialSection() {
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
      name: "Praful Gourkar",
      msg: "I purchased property from Neel Infratech and Dandekar Sir, and I’m extremely happy with my decision. In just 5 years, my investment has tripled. The experience was smooth, and the returns have been truly rewarding.",
      img: "/images/testimonial-image1.jpg",
    },

    {
      name: "Arun Kelzale",
      msg: "I bought a property and farmhouse from Neel Infratech through Chaudhari Sir, and I’m very happy with the experience. Their service, company reputation, and documentation process are all excellent.",
      img: "/images/testimonial-image2.jpg",
    },
    {
      name: "Vilas Kadam",
      msg: "Everything about Dekate Sir is commendable — his behavior, communication, and support throughout the process were excellent. I’m truly happy with my purchase.",
      img: "/images/testimonial-image3.jpg",
    },
    {
      name: "Praful Gourkar",
      msg: "I bought property from Neel Infratech with the guidance of Onkar Sir, and I’m very happy with the experience. My investment has already brought me good profit, and I was so satisfied that I later purchased another property at Neel Farms.",
      img: "/images/testimonial-image4.jpg",
    },
  ];

  return (
    <>
      <div className="hidden lg:flex w-full testimonials-container min-h-svh relative justify-center items-center">
        <div className="heading font-classica font-[400] text-3xl sm:text-4xl lg:text-5xl max-w-[700px] text-center z-10 text-[#161616]">
          What people think about Neel Infratech
        </div>

        <div className="max-w-[300px] absolute left top-[10.9%] text-xs sm:text-sm lg:text-[12px] left-[4%] bg-[#e6e6e6] py-5 px-7 rounded-2xl">
          <div className="top flex items-center gap-2">
            <div className="p-3 bg-[#9c9c9c7a]  rounded-[50%] ">
              <FaUserAlt />
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
          src={"/images/testimonial-image1.jpg"}
          alt="property Image"
          height={173}
          width={278}
          className="absolute top-[5.4%] up left-[25%] object-cover w-[278px] h-[153px] rounded-2xl"
        />
        <Image
          src={"/images/testimonial-image2.jpg"}
          alt="property Image"
          height={219}
          width={235}
          className="absolute top-[10.9%] up left-[51.3%] object-cover w-[247px] h-[153px] rounded-2xl"
        />

        <div className="max-w-[300px] right absolute top-[5.4%] text-xs sm:text-sm lg:text-[10px] left-[68.4%] bg-[#e6e6e6] py-5 px-7 rounded-2xl">
          <div className="top flex items-center gap-2">
            <div className="p-3 bg-[#9c9c9c7a]  rounded-[50%] ">
              <FaUserAlt />
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
          src={"/images/testimonial-image3.jpg"}
          alt="property Image"
          height={219}
          width={235}
          className="absolute right right-[2.6%] top-[38.4%] object-cover w-[219px] h-[162px] rounded-2xl"
        />

        <div className="max-w-[300px] absolute right right-[4.5%] text-xs sm:text-sm lg:text-[10px] bottom-[18.4%] bg-[#e6e6e6] p-5 px-7 rounded-2xl">
          <div className="top flex items-center gap-2">
            <div className="p-3 bg-[#9c9c9c7a]  rounded-[50%] ">
              <FaUserAlt />
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
          src={"/images/testimonial-image4.jpg"}
          alt="property Image"
          height={292}
          width={162}
          className="absolute bottom-[9.5%] down left-[39.5%] object-cover w-[300px] h-[162px] rounded-2xl"
        />

        <div className="max-w-[300px] down absolute bottom-[3%] text-xs sm:text-sm lg:text-[10px] left-[18.5%] bg-[#e6e6e6] py-5 px-7 rounded-2xl">
          <div className="top flex items-center gap-2">
            <div className="p-3 bg-[#9c9c9c7a]  rounded-[50%] ">
              <FaUserAlt />
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
          src={"/images/testimonial-image5.jpg"}
          alt="property Image"
          height={219}
          width={160}
          className="absolute left left-[4%] top-[42.8%] object-cover w-[219px] h-[159px] rounded-2xl"
        />
      </div>

      <div className="lg:hidden w-full px-4 py-10 flex flex-col space-y-10">
        <h2 className="font-classica font-[400] text-2xl sm:text-3xl text-center text-[#161616]">
          What people think about Neel Infratech
        </h2>

        {/* Testimonial 1 */}
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#D9D9D940] rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-3 bg-[#9c9c9c7a]  rounded-[50%] ">
                <FaUserAlt />
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
              src={testimonial.img}
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

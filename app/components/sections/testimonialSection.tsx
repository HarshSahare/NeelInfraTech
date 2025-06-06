"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  return (
    <>
      <div className="hidden lg:flex w-full testimonials-container min-h-svh relative justify-center items-center">
        <div className="heading font-classica font-[400] text-3xl sm:text-4xl lg:text-5xl max-w-[700px] text-center z-10 text-[#161616]">
          What people think about Neel Infratech
        </div>

        <div className="max-w-[300px] absolute left top-[10.9%] text-xs sm:text-sm lg:text-[12px] left-[4%] bg-[#D9D9D940] py-5 px-7 rounded-2xl">
          <div className="top flex items-center">
            <Image
              alt="profile pic"
              src={"/images/testimonials-profile-image-1.jpg"}
              width={50}
              height={50}
              className="rounded-full w-[50px] h-[50px] mr-2"
            />
            <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
              <p className="text-sm sm:text-base">Kathryn Murphy</p>
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
            Starting with nothing but a dream and determination, Mr. Pitambar
            Ikar built Neel Infratech into a trusted empire through vision, hard
            work, and unwavering belief. belief. into a trusted empire through
            vision, hard work, and unwavering belief. belief.
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

        <div className="max-w-[300px] right absolute top-[5.4%] text-xs sm:text-sm lg:text-[10px] left-[68.4%] bg-[#D9D9D940] py-5 px-7 rounded-2xl">
          <div className="top flex items-center">
            <Image
              alt="profile pic"
              src={"/images/testimonials-profile-image-2.jpg"}
              width={50}
              height={50}
              className="rounded-full w-[50px] object-cover h-[50px] mr-2"
            />
            <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
              <p className="text-sm sm:text-base">Kathryn Murphy</p>
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
            Starting with nothing but a dream and determination, Mr. Pitambar
            Ikar built Neel Infratech into a trusted empire through vision, hard
            work, and unwavering belief. belief.
          </div>
        </div>

        <Image
          src={"/images/testimonial-image3.jpg"}
          alt="property Image"
          height={219}
          width={235}
          className="absolute right right-[2.6%] top-[38.4%] object-cover w-[219px] h-[162px] rounded-2xl"
        />

        <div className="max-w-[300px] absolute right right-[4.5%] text-xs sm:text-sm lg:text-[10px] bottom-[18.4%] bg-[#D9D9D940] p-5 px-7 rounded-2xl">
          <div className="top flex items-center">
            <Image
              alt="profile pic"
              src={"/images/testimonials-profile-image-3.jpg"}
              width={50}
              height={50}
              className="rounded-full w-[50px] object-cover h-[50px] mr-2"
            />
            <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
              <p className="text-sm sm:text-base">Kathryn Murphy</p>
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
            Starting with nothing but a dream and determination, Mr. Pitambar
            Ikar built Neel Infratech.
          </div>
        </div>

        <Image
          src={"/images/testimonial-image4.jpg"}
          alt="property Image"
          height={292}
          width={162}
          className="absolute bottom-[9.5%] down left-[39.5%] object-cover w-[300px] h-[162px] rounded-2xl"
        />

        <div className="max-w-[300px] down absolute bottom-[3%] text-xs sm:text-sm lg:text-[10px] left-[18.5%] bg-[#D9D9D940] py-5 px-7 rounded-2xl">
          <div className="top flex items-center">
            <Image
              alt="profile pic"
              src={"/images/testimonials-profile-image-4.jpg"}
              width={50}
              height={50}
              className="rounded-full w-[50px] object-cover h-[50px] mr-2"
            />
            <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
              <p className="text-sm sm:text-base">Kathryn Murphy</p>
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
            Starting with nothing but a dream and determination, Mr. Pitambar
            Ikar built Neel Infratech into a trusted empire through vision, hard
            work, and unwavering belief. belief. Starting with nothing but a
            dream and determination, Mr. Pitambar Ikar built Neel Infratech into
            a trusted empire through vision, hard work, and unwavering belief.
            belief.
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
        <div className="bg-[#D9D9D940] rounded-2xl p-5 space-y-4">
          <div className="flex items-center">
            <Image
              alt="Kathryn Murphy"
              src="/images/testimonials-profile-image-1.jpg"
              width={50}
              height={50}
              className="rounded-full w-[50px] h-[50px] object-cover mr-3"
            />
            <div className="text-[#161616B8] font-classica font-[400]">
              <p className="text-base">Kathryn Murphy</p>
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
            Starting with nothing but a dream and determination, Mr. Pitambar
            Ikar built Neel Infratech into a trusted empire through vision, hard
            work, and unwavering belief. belief. into a trusted empire through
            vision, hard work, and unwavering belief. belief.
          </p>
          <Image
            src="/images/testimonial-image1.jpg"
            alt="Testimonial Property 1"
            width={600}
            height={300}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>

        {/* Testimonial 2 */}
        <div className="bg-[#D9D9D940] rounded-2xl p-5 space-y-4">
          <div className="flex items-center">
            <Image
              alt="Kathryn Murphy"
              src="/images/testimonials-profile-image-2.jpg"
              width={50}
              height={50}
              className="rounded-full w-[50px] h-[50px] object-cover mr-3"
            />
            <div className="text-[#161616B8] font-classica font-[400]">
              <p className="text-base">Kathryn Murphy</p>
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
            Starting with nothing but a dream and determination, Mr. Pitambar
            Ikar built Neel Infratech into a trusted empire through vision, hard
            work, and unwavering belief. belief.
          </p>
          <Image
            src="/images/testimonial-image2.jpg"
            alt="Testimonial Property 2"
            width={600}
            height={300}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>

        {/* Testimonial 3 */}
        <div className="bg-[#D9D9D940] rounded-2xl p-5 space-y-4">
          <div className="flex items-center">
            <Image
              alt="Kathryn Murphy"
              src="/images/testimonials-profile-image-3.jpg"
              width={50}
              height={50}
              className="rounded-full w-[50px] h-[50px] object-cover mr-3"
            />
            <div className="text-[#161616B8] font-classica font-[400]">
              <p className="text-base">Kathryn Murphy</p>
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
            Starting with nothing but a dream and determination, Mr. Pitambar
            Ikar built Neel Infratech.
          </p>
          <Image
            src="/images/testimonial-image3.jpg"
            alt="Testimonial Property 3"
            width={600}
            height={300}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>

        {/* Testimonial 4 */}
        <div className="bg-[#D9D9D940] rounded-2xl p-5 space-y-4">
          <div className="flex items-center">
            <Image
              alt="Kathryn Murphy"
              src="/images/testimonials-profile-image-4.jpg"
              width={50}
              height={50}
              className="rounded-full w-[50px] h-[50px] object-cover mr-3"
            />
            <div className="text-[#161616B8] font-classica font-[400]">
              <p className="text-base">Kathryn Murphy</p>
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
            Starting with nothing but a dream and determination, Mr. Pitambar
            Ikar built Neel Infratech into a trusted empire through vision, hard
            work, and unwavering belief. belief. Starting with nothing but a
            dream and determination, Mr. Pitambar Ikar built Neel Infratech into
            a trusted empire through vision, hard work, and unwavering belief.
            belief.
          </p>
          <Image
            src="/images/testimonial-image4.jpg"
            alt="Testimonial Property 4"
            width={600}
            height={300}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default TestimonialSection;

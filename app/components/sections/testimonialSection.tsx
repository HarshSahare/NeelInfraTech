import Image from "next/image";
import React from "react";

function TestimonialSection() {
  return (
    <div className="w-full min-h-svh relative flex justify-center items-center">
      <div className="heading font-classica font-[400] text-5xl max-w-[700px] text-center z-10 text-[#161616]">
        What people think about Neel Infratech
      </div>

      <div className="max-w-[300px] absolute top-20 text-[12px] left-15 bg-[#D9D9D940] py-5 px-7 rounded-2xl">
        <div className="top flex items-center">
          <Image
            alt="profile pic"
            src={"/images/testimonials-profile-image-1.jpg"}
            width={50}
            height={50}
            className="rounded-full w-[50px] h-[50px] mr-2"
          />
          <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
            <p>Kathryn Murphy</p>
            <div className="text-[8px] flex">
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
        <div className="text-classica  mt-4 text-[#918F8F] font-[400]">
          Starting with nothing but a dream and determination, Mr. Pitambar Ikar
          built Neel Infratech into a trusted empire through vision, hard work,
          and unwavering belief. belief. into a trusted empire through vision,
          hard work, and unwavering belief. belief.
        </div>
      </div>

      <Image
        src={"/images/testimonial-image1.jpg"}
        alt="property Image"
        height={173}
        width={278}
        className="absolute top-10 left-95 object-cover w-[278px] h-[153px] rounded-2xl"
      />
      <Image
        src={"/images/testimonial-image2.jpg"}
        alt="property Image"
        height={219}
        width={235}
        className="absolute top-20 left-195 object-cover w-[247px] h-[153px] rounded-2xl"
      />

      <div className="max-w-[300px] absolute top-10 text-[10px] left-260 bg-[#D9D9D940] py-5 px-7 rounded-2xl">
        <div className="top flex items-center">
          <Image
            alt="profile pic"
            src={"/images/testimonials-profile-image-2.jpg"}
            width={50}
            height={50}
            className="rounded-full w-[50px] object-cover  h-[50px] mr-2"
          />
          <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
            <p>Kathryn Murphy</p>
            <div className="text-[8px] flex">
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
        <div className="text-classica  mt-4 text-[#918F8F] font-[400]">
          Starting with nothing but a dream and determination, Mr. Pitambar Ikar
          built Neel Infratech into a trusted empire through vision, hard work,
          and unwavering belief. belief.
        </div>
      </div>

      <Image
        src={"/images/testimonial-image3.jpg"}
        alt="property Image"
        height={219}
        width={235}
        className="absolute right-10 top-70 object-cover w-[219px] h-[162px] rounded-2xl"
      />

      <div className="max-w-[300px] absolute right-[69px] text-[10px] top-115 bg-[#D9D9D940] p-5 px-7 rounded-2xl">
        <div className="top flex items-center">
          <Image
            alt="profile pic"
            src={"/images/testimonials-profile-image-3.jpg"}
            width={50}
            height={50}
            className="rounded-full w-[50px] object-cover  h-[50px] mr-2"
          />
          <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
            <p>Kathryn Murphy</p>
            <div className="text-[8px] flex">
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
        <div className="text-classica  mt-4  text-[#918F8F] font-[400]">
          Starting with nothing but a dream and determination, Mr. Pitambar Ikar
          built Neel Infratech.
        </div>
      </div>

      <Image
        src={"/images/testimonial-image4.jpg"}
        alt="property Image"
        height={292}
        width={162}
        className="absolute bottom-17 left-150  object-cover w-[300px] h-[162px] rounded-2xl"
      />

      <div className="max-w-[300px] absolute bottom-5 text-[10px] left-70 bg-[#D9D9D940] py-5 px-7 rounded-2xl">
        <div className="top flex items-center">
          <Image
            alt="profile pic"
            src={"/images/testimonials-profile-image-4.jpg"}
            width={50}
            height={50}
            className="rounded-full w-[50px] object-cover  h-[50px] mr-2"
          />
          <div className="font-classica text-[#161616B8] font-[400] flex flex-col">
            <p>Kathryn Murphy</p>
            <div className="text-[8px] flex">
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
        <div className="text-classica  mt-4  text-[#918F8F] font-[400]">
          Starting with nothing but a dream and determination, Mr. Pitambar Ikar
          built Neel Infratech into a trusted empire through vision, hard work,
          and unwavering belief. belief.Starting with nothing but a dream and
          determination, Mr. Pitambar Ikar built Neel Infratech into a trusted
          empire through vision, hard work, and unwavering belief. belief.
        </div>
      </div>

      <Image
        src={"/images/testimonial-image5.jpg"}
        alt="property Image"
        height={219}
        width={160}
        className="absolute left-15 top-78 object-cover w-[219px] h-[159px] rounded-2xl"
      />
    </div>
  );
}

export default TestimonialSection;

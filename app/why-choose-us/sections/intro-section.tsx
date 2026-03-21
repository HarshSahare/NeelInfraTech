import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const features = [
  "Near Samruddhi Expressway",
  "10 Minutes from MIHAN SEZ",
  "Excellent Ring Road Connectivity",
  "Metro Connectivity",
  "Near Upcoming New Nagpur IBFC",
  "Easy Access to Nagpur Airport",
];

export default function IntroSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-30">
      <div className="lg:max-w-[calc(100%-20rem)] mx-auto px-4 sm:px-6 text-center">
        {/* Top Section */}
        <div className="flex xl:flex-row flex-col items-center justify-center gap-6 sm:gap-10 mb-12 sm:mb-20 lg:mb-25">
          {/* Left Image */}
          <div className="m-auto">
            <Image
              src="/images/landing-page-intro-section-left.png"
              alt="building"
              width={800}
              height={800}
              className="max-w-[140px] sm:max-w-xs"
            />
          </div>

          {/* Center Text */}
          <div className="flex-1 text-center max-w-xl">
            <p className="font-poppins text-[#757279] mb-3 text-xs sm:text-sm flex gap-2 justify-center items-center">
              <FaLocationDot />
              Location Advantage
            </p>

            <p className="text-black text-sm sm:text-lg md:text-2xl leading-relaxed font-classica">
              Strategically located premium plots in Nagpur offering excellent
              connectivity, modern infrastructure, and high return on
              investment. A perfect opportunity for both end users and
              investors.
            </p>
          </div>

          {/* Right Image */}
          <div className="m-auto">
            <Image
              src="/images/landing-page-intro-section-right.png"
              alt="city"
              width={800}
              height={800}
              className="max-w-[140px] sm:max-w-xs"
            />
          </div>
        </div>

        {/* Desktop Pills (UNCHANGED DESIGN, just responsive spacing) */}
        <div className="hidden xl:block">
          <div className="bg-[#E5E5E5] w-fit mx-auto p-2 rounded-xl flex flex-wrap gap-2">
            {features.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="bg-[#F0F0F0] lg:max-w-60 flex-1 min-w-[200px] rounded-xl py-8 px-6 font-semibold font-poppins text-xl flex mx-auto text-center items-center justify-center"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="bg-[#E5E5E5] w-fit mx-auto p-2 rounded-xl flex flex-wrap gap-2 mt-2">
            {features.slice(4, 6).map((item, index) => (
              <div
                key={index}
                className="bg-[#F0F0F0] lg:max-w-60 flex-1 min-w-[200px] rounded-xl py-6 px-6 font-semibold font-poppins text-xl flex mx-auto text-center items-center justify-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Pills */}
        <div className="block xl:hidden">
          <div className="bg-[#E5E5E5] mx-auto p-2 rounded-xl flex flex-wrap gap-2">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#F0F0F0] flex-1 min-w-[140px] rounded-lg py-2 px-3 font-poppins text-sm sm:text-base font-medium flex text-center items-center justify-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

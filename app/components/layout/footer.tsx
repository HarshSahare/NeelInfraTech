import { Company } from "@/app/lib/company";
import { Properties } from "@/app/lib/properties";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-gray-300 mt-30">
      {/* Center Heading */}
      <div className="text-center font-classica py-10">
        <h2 className="text-6xl font-[400] tracking-wide">NEEL INFRATECH</h2>
        <p className="text-3xl text-[#727673] text-center mt-5">
          Time Bound Delivery with Development
        </p>
      </div>

      {/* Footer Columns */}
      <div className="font-classica max-w-7xl mt-[100px] mx-auto border-t px-6 py-12 pb-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#727673]">
        {/* Residential */}
        <div>
          <h4 className="font-[400] text-md text-[#121212] mb-3">
            📍Our Projects
          </h4>
          <ul
            className="text-sm  text-[#727673]  space-y-3"
            style={{ paddingLeft: "0px" }}
          >
            {Object.keys(Properties).map((key) => (
              <li key={key}>
                <Link href={`/properties/${key.replaceAll(" ", "-")}`}>
                  {Properties[key].title}- Nagpur
                </Link>
              </li>
            ))}
            <li>Silver Park – Wardha Road, Nagpur</li>
            <li>Silver Wind – Wanadongri, Nagpur</li>
            <li>Silver Wood – Shankarpur, Nagpur</li>
          </ul>
        </div>

        {/* Mixed Use */}
        <div>
          <h4 className="font-[400] text-md text-[#121212] mb-3">Explore</h4>
          <ul
            className="text-sm text-[#727673]  space-y-3"
            style={{ paddingLeft: "0px" }}
          >
            <li>
              <Link href="/stories">Our Story</Link>
            </li>
            <li>
              <Link className="cursor-pointer" href="/properties">
                Our Properties
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" href="/why-choose-us">
                Why Choose Us
              </Link>
            </li>

            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Explore */}

        <div>
          <h4 className="font-[400] text-md text-[#121212] mb-3">
            📞 Contact Us
          </h4>
          <ul
            className="text-sm  text-[#727673] space-y-3"
            style={{ paddingLeft: "0px" }}
          >
            <li>
              <strong>Office:</strong> Neel Infratech Pvt. Ltd.
            </li>
            <li>
              Flat No. 201-202, 2<sup>nd</sup> Floor, 16, Ujjwal Co-op Ho.
              Society, Narendra Nagar Sqaure, Ring Road
            </li>
            <li>Nagpur - 440015, Maharashtra</li>
            <li>📞 {Company.phone}</li>
            <li>✉ {Company.email}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-6 px-6 text-xs text-gray-600 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="mb-0">NeelInfratech since 2006</p>
      </div>
    </footer>
  );
}

export default Footer;

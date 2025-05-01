import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-gray-300 mt-16">
      {/* Center Heading */}
      <div className="text-center font-classica py-10">
        <h2 className="text-6xl font-[400] tracking-wide">NEEL INFRATECH</h2>
        <p className="text-3xl text-[#727673] mt-1">The Art of Living</p>
      </div>

      {/* Footer Columns */}
      <div className="font-classica max-w-7xl mt-[100px] mx-auto border-t px-6 py-12 pb-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-8 text-sm text-[#727673]">
        {/* Residential */}
        <div>
          <h4 className="font-[400] text-md text-[#121212] mb-3">
            Residential
          </h4>
          <ul
            className="text-sm  text-[#727673]  space-y-3"
            style={{ paddingLeft: "0px" }}
          >
            <li>The Alba Residences, Dorchester Collection, Dubai</li>
            <li>AVA at Palm Jumeirah, Dorchester Collection, Dubai</li>
            <li>ORLA Infinity, Dorchester Collection</li>
            <li>ORLA, Dorchester Collection, Dubai</li>
            <li>VELA, Dorchester Collection, Dubai</li>
            <li>VELA Viento, Dorchester Collection, Dubai</li>
          </ul>
        </div>

        {/* Mixed Use */}
        <div>
          <h4 className="font-[400] text-md text-[#121212] mb-3">Mixed Use</h4>
          <ul
            className="text-sm  text-[#727673] space-y-3"
            style={{ paddingLeft: "0px" }}
          >
            <li>The OPUS by OMNIYAT</li>
            <li>The Lana, Dorchester Collection, Dubai</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-[400] text-md text-[#121212] mb-3">Explore</h4>
          <ul
            className="text-sm text-[#727673]  space-y-3"
            style={{ paddingLeft: "0px" }}
          >
            <li>Our Story</li>
            <li>Contact Us</li>
            <li>News</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2 col-span-1">
          <h4 className="font-[400] text-[#121212] mb-3">Stay in the know</h4>
          <div className="flex items-center border-b border-gray-400 mb-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent w-full py-1 text-sm focus:outline-none"
            />
            <button className="text-gray-500 text-sm">Submit</button>
          </div>
          <p className="text-sm mt-1 text-[#727673]">
            By signing up I want to hear about new updates and masterpieces and
            agree with the data protection policy of NeelInfratech.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-6 px-6 text-xs text-gray-600 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="mb-0">NeelInfratech © 2025</p>
        <div className="flex space-x-4 md:mt-0">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
          <a href="#">Cookie Policy</a>
        </div>
        <div className="flex space-x-4  md:mt-0 text-xl">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

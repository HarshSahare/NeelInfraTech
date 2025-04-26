import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="w-full flex bg-[#00000042] h-[94px] backdrop-blur-md">
      <div className="w-[90%] m-auto flex justify-between content-center">
        <div className="flex content-center flex-wrap">
          <Image
            className="w-[32px] h-[11px]"
            src="/images/hamburger.png"
            alt="hamburger"
            width={32}
            height={11}
          />
        </div>
        <div>
          <Image
            className="h-auto"
            src="/images/logo.png"
            alt="logo"
            width={220}
            quality={80}
            height={32}
          />
        </div>
        <div className="bg-black text-white py-2 px-5">Contact Us</div>
      </div>
    </div>
  );
}

export default Navbar;

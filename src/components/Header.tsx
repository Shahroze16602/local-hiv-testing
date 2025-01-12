import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="w-[980px]">
        <div className="flex  items-end">
          <div className="flex-none">
            <a href="index.html">
              <Image
                src="/logo.gif"
                alt="Logo"
                className="w-[288px] h-[65px] block"
              />
            </a>
          </div>
          <div className="flex-grow h-[100px]"></div>
          <div className="text-right flex-none">
            <div className="text-right text-orange-500">
              <span className="font-sans text-[30px] text-[#4482b7] pl-[30px] pt-0 font-bold">Call Now&nbsp;</span>
              <span className="font-sans text-[30px] font-bold text-[#ff6501]" id="numberassigned_1">000.000.0000</span>
            </div>
            <div className="w-[380px] p-0 border-collapse">
              <div className="text-right font-sans text-[13px] font-normal text-[#666768] no-underline">
                <a href="About-Us.html" className="hover:text-[#f96808] hover:underline">About Us</a> |
                <a href="FAQ.html" className="hover:text-[#f96808] hover:underline"> FAQ</a>
              </div>
            </div>
            <div className="h-[15px]">&nbsp;</div>
          </div>
        </div>
      </div>
    </header>
  );
};
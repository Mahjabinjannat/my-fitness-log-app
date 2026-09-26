import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    // bg-[#20242E]
    <div className="bg-[#090A0D]">
      <div className="w-full border-b-[0.5px] border-gray-800"></div>

      <div className="py-8">
        <div className="flex justify-between items-center container mx-auto">
          <div className="flex gap-4 font-bold text-[18px] font-oswald">
            <Image src={logo} alt="App Logo" />
            <p>FITLOG</p>
          </div>
          <div className="text-[#6B7280] text-[11px]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

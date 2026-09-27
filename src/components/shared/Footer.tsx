


import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#090A0D]">

      <div className="w-full border-b-[0.5px] border-gray-800"></div>

      <div className="py-6 sm:py-8">
        <div
          className="
            container mx-auto
            flex flex-col
            items-center
            justify-between
            gap-4
            px-4
            sm:px-6
            md:flex-row
            md:gap-0
            lg:px-0
          "
        >
   
          <div className="flex items-center gap-3 font-oswald text-[18px] font-bold">
            <Image src={logo} alt="FitLog Logo" className="h-auto w-[28px]" />

            <p>FITLOG</p>
          </div>

      
          <p
            className="
              text-center
              text-[10px]
              leading-5
              text-[#6B7280]
              sm:text-[11px]
              md:text-right
            "
          >
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="flex container mx-auto justify-between items-center mt-14 bg-[#15171D] py-16 px-6 pl-12 rounded-[15px]">
      <div className="space-y-3">
        <p className="text-[#C2F800] font-bold text-[11px]">WORKOUT LIBRARY</p>
        <h1 className="text-[50px] font-extrabold font-oswald leading-none">
          TRAIN WITH INTENT. LOG
          <br /> EVERY SET.
        </h1>
        <p className="text-[#9CA3AF] text-[13px]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          <br /> into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button className="bg-[#C2F800] text-[#000000] py-2.5 px-7 rounded-[7px] font-bold text-[12px] mt-5">
          BROWSE WORKOUTS
        </button>
      </div>
      <div>
        <Image src={banner} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;

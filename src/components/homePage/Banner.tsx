

"use client";

import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";

const Banner = () => {
  const handleScroll = () => {
    const workoutsSection = document.getElementById("library");

    workoutsSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="
        container mx-auto
        mt-6 md:mt-10 lg:mt-14
        flex flex-col lg:flex-row
        justify-between items-center
        gap-10
        rounded-[15px]
        bg-[#15171D]
        px-5 py-10
        sm:px-7
        md:px-10 md:py-12
        lg:px-12 lg:py-16
      "
    >
      <div className="space-y-3 w-full lg:w-1/2">
        <p className="text-[#C2F800] font-bold text-[11px]">WORKOUT LIBRARY</p>

        <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-extrabold font-oswald leading-none">
          TRAIN WITH INTENT. LOG
          <br />
          EVERY SET.
        </h1>

        <p className="text-[#9CA3AF] text-[12px] sm:text-[13px]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          <br className="hidden md:block" /> into today&apos;s plan, and watch
          the week&apos;s work add up.
        </p>

        <button
          onClick={handleScroll}
          className="mt-5 cursor-pointer rounded-[7px] bg-[#C2F800] px-4 py-1.5 lg:px-7 lg:py-2.5 text-[12px] font-bold text-black"
        >
          BROWSE WORKOUTS
        </button>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src={banner}
          alt="Banner Image"
          className="w-full max-w-[450px] h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;

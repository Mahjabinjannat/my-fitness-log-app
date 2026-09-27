"use client";

import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

interface ISortByDropDownType {
  sortBy: "duration" | "calories" | "rating";
  setSortBy: React.Dispatch<
    React.SetStateAction<"duration" | "calories" | "rating">
  >;
}

const SortByDropDown = ({ sortBy, setSortBy }: ISortByDropDownType) => {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="relative w-full sm:w-[250px] md:w-[300px] lg:w-85">
      <label className="mb-2 block text-[13px] font-medium text-[#A4A7AE]">
        Sort By
      </label>

      <button
        type="button"
        onClick={() => setSortOpen((previous) => !previous)}
        className="
      flex w-full cursor-pointer
      items-center justify-between
      rounded-[14px]
      border border-[#343840]
      bg-[#171A20]
      px-4 py-3
      text-[14px]
      text-[#E7E7EA]
      transition-all duration-200
      hover:border-[#4B505A]
      focus:border-[#C7FF00]
      focus:outline-none
    "
      >
        <span className="flex items-center gap-2">
          {sortBy === "duration" && "Duration"}
          {sortBy === "calories" && "Calories"}
          {sortBy === "rating" && "Rating"}
        </span>

        <ChevronDown
          size={17}
          className={`text-[#8C919A] transition-transform duration-200 ${
            sortOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {sortOpen && (
        <div
          className="
        absolute left-0 top-full z-50
        mt-2 w-full
        overflow-hidden
        rounded-[14px]
        border border-[#30343C]
        bg-[#171A20]
        p-1.5
        shadow-[0_15px_40px_rgba(0,0,0,0.45)]
      "
        >
          {[
            { value: "duration", label: "Duration" },
            { value: "calories", label: "Calories" },
            { value: "rating", label: "Rating" },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setSortBy(option.value as "duration" | "calories" | "rating");
                setSortOpen(false);
              }}
              className={`
            flex w-full cursor-pointer
            items-center justify-between
            rounded-[10px]
            px-3 py-2.5
            text-left
            text-[13px]
            transition-colors duration-150

            ${
              sortBy === option.value
                ? "bg-[#242A1B] text-[#C7FF00]"
                : "text-[#B8BBC2] hover:bg-[#202329] hover:text-white"
            }
          `}
            >
              <span>{option.label}</span>

              {sortBy === option.value && (
                <Check size={15} strokeWidth={2.5} className="text-[#C7FF00]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortByDropDown;

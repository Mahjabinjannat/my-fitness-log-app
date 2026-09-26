import { IWorkoutType } from "@/types/Workout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillFire } from "react-icons/ai";
import { GoStar } from "react-icons/go";
import { MdOutlineAccessTime } from "react-icons/md";

const FitlogCard = ({ workout }: { workout: IWorkoutType }) => {
  return (
    <Link
      href={`/FitLogCardDetails/${workout.id}`}
      className="space-y-3 border-[0.5px] border-gray-600 rounded-[18px] cursor-pointer overflow-hidden bg-[#20242E] hover:border-[#C2F800] transition-colors"
    >
      <Image
        src={workout.image}
        alt={workout.name}
        width="200"
        height="100"
        className="w-full aspect-video object-cover rounded-t-[18px]"
      />
      <div className="py-3 px-6 space-y-2.5 pb-5">
        <div className="flex gap-3">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="bg-[#C2F800] px-4 py-[0.5px] rounded-[15px] text-[#000000] font-bold text-[13px]"
            >
              {muscle}
            </span>
          ))}
        </div>
        <div className="text-white font-bold text-[24px] font-oswald">
          {workout.name}
        </div>
        <div className="text-[#9CA3AF] text-[12px]">{workout.equipment}</div>
        <div className="w-full border-b-[0.5px] border-gray-800"></div>
        <div className="flex gap-5">
          <div className="flex items-center gap-1.5 text-[#9CA3AF] text-[12px]">
            <MdOutlineAccessTime />
            {workout.duration} min
          </div>
          <div className="flex items-center gap-1.5 text-[#9CA3AF] text-[12px]">
            <AiFillFire />
            {workout.caloriesBurned} kcal
          </div>
          <div className="flex items-center gap-1.5 text-[#9CA3AF] text-[12px]">
            <GoStar />
            {workout.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FitlogCard;

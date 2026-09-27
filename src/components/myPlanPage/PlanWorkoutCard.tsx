"use client";

import Image from "next/image";
import Link from "next/link";
import { IWorkoutType } from "@/types/Workout";
import { Clock3, Flame, Star, Check, X } from "lucide-react";

interface PlanWorkoutCardProps {
  workout: IWorkoutType;
  onRemove: (id: number, action: "mark" | "delete") => void;
}

export default function PlanWorkoutCard({
  workout,
  onRemove,
}: PlanWorkoutCardProps) {
  return (
    <div
      className="
        relative
        flex flex-col
        gap-5
        rounded-[18px]
        border border-[#292D35]
        bg-[#1B1E24]
        p-4
        md:flex-row
        md:items-center
        md:justify-between
        md:px-5
        md:py-4
        lg:min-h-[140px]
      "
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
        <div
          className="
            relative
            h-[180px] w-full
            shrink-0
            overflow-hidden
            rounded-[14px]
            sm:h-[100px] sm:w-[155px]
          "
        >
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <h2
            className="
              pr-8
              text-[18px]
              font-medium
              uppercase
              tracking-[-0.7px]
              text-[#ECECEF]
              sm:pr-0
              sm:text-[20px]
              lg:text-[22px]
            "
          >
            {workout.name}
          </h2>

          <p className="mt-1 text-[12px] text-[#A4A7AE] sm:text-[14px]">
            {workout.equipment}
          </p>

          <div
            className="
              mt-3
              flex flex-wrap
              items-center
              gap-x-4 gap-y-2
              text-[12px]
              text-[#D4D4D7]
              sm:text-[14px]
            "
          >
            <div className="flex items-center gap-1.5">
              <Clock3 size={17} className="shrink-0 text-[#C7FF00]" />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Flame size={17} className="shrink-0 text-[#C7FF00]" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Star size={17} className="shrink-0 text-[#C7FF00]" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
          flex
          w-full
          items-center
          gap-2
          sm:gap-3
          md:w-auto
          md:shrink-0
        "
      >
        <Link
          href={`/FitLogCardDetails/${workout.id}`}
          className="
            flex-1
            whitespace-nowrap
            rounded-full
            border border-[#D8DADE]
            px-3 py-2
            text-center
            text-[11px]
            font-semibold
            text-[#E4E4E7]
            transition
            hover:bg-white
            hover:text-black
            sm:px-5
            sm:text-[12px]
            md:flex-none
          "
        >
          View Details
        </Link>

        <button
          onClick={() => onRemove(workout.id, "mark")}
          className="
            flex
            flex-1
            cursor-pointer
            items-center
            justify-center
            gap-1.5
            whitespace-nowrap
            rounded-full
            bg-[#C7FF00]
            px-3 py-2
            text-[11px]
            font-semibold
            text-black
            transition
            hover:bg-[#B5E900]
            sm:gap-2
            sm:px-5
            sm:text-[12px]
            md:flex-none
          "
        >
          <Check size={16} strokeWidth={2.5} />
          Mark as Done
        </button>

        <button
          onClick={() => onRemove(workout.id, "delete")}
          className="
            absolute right-4 top-4
            cursor-pointer
            text-[#D4D5D8]
            transition
            hover:text-[#C7FF00]
            sm:static
            sm:ml-1
          "
          aria-label={`Remove ${workout.name}`}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

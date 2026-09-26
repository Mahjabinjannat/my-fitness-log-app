"use client";

import Image from "next/image";
import Link from "next/link";
import { IWorkoutType } from "@/types/Workout";
import { Clock3, Flame, Star, Check, X } from "lucide-react";

export default function SavedWorkoutCard({
  workout,
  onRemove,
}: {
  workout: IWorkoutType;
  onRemove: (id: number) => void;
}) {
  return (
    <div className="flex min-h-[140px] items-center justify-between rounded-[18px] border border-[#292D35] bg-[#1B1E24] px-5 py-4">
      {/* LEFT */}
      <div className="flex items-center gap-5">
        <div className="relative h-[100px] w-[155px] shrink-0 overflow-hidden rounded-[14px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          {/* Workout name */}
          <h2 className="text-[22px] font-medium uppercase tracking-[-0.7px] text-[#ECECEF]">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="text-[14px] text-[#A4A7AE]">{workout.equipment}</p>

          {/* Details */}
          <div className="mt-2 flex items-center gap-4 text-[14px] text-[#D4D4D7]">
            <div className="flex items-center gap-1.5">
              <Clock3 size={17} className="text-[#C7FF00]" />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Flame size={17} className="text-[#C7FF00]" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Star size={17} className="text-[#C7FF00]" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <Link
          href={`/FitLogCardDetails/${workout.id}`}
          className="rounded-full border border-[#D8DADE] px-5 py-2 text-[12px] font-semibold text-[#E4E4E7] transition hover:bg-white hover:text-black"
        >
          View Details
        </Link>

        <button
          onClick={() => onRemove(workout.id)}
          className="ml-2 cursor-pointer text-[#D4D5D8] transition hover:text-[#C7FF00]"
          aria-label={`Remove ${workout.name}`}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

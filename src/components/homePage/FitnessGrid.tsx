import React from "react";
import FitlogCard from "../shared/FitlogCard";
import { IWorkoutType } from "@/types/Workout";

const getFitLog = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!res.ok) {
    throw new Error(`Failed to fetch FitLog: ${res.status} ${res.statusText}`);
  }

  return res.json();
};

const FitnessGrid = async () => {
  const fitlogData = await getFitLog();

  return (
    <div
      className="container mx-auto mt-10 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-0 leading-tight scroll-mt-24"
      id="library"
    >
      <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold">
        THE LIBRARY
      </h1>

      <p className="mt-1 text-[11px] sm:text-[12px] text-[#9CA3AF]">
        Twelve lifts covering every major muscle group.
      </p>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-4
          sm:gap-5
          lg:gap-6
          my-8
          lg:my-[40px]
        "
      >
        {fitlogData.map((workout: IWorkoutType) => (
          <FitlogCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default FitnessGrid;

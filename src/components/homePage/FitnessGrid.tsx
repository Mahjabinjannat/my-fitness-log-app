import React from "react";
import FitlogCard from "../shared/FitlogCard";
import { IWorkoutType } from "@/types/Workout";

const getFitLog = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const FitnessGrid = async () => {
  const fitlogData = await getFitLog();
//   console.log(data);
  return (
    <div className="container mx-auto mt-16 leading-tight">
      <h1 className="text-[32px] font-bold">THE LIBRARY</h1>
      <p className="text-[12px] text-[#9CA3AF]">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-3 gap-6 my-[40px]">
        {fitlogData.map((workout: IWorkoutType) => <FitlogCard key={workout.id} workout={workout}/>) }
      </div>
    </div>
  );
};

export default FitnessGrid;

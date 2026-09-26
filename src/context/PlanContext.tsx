"use client";
import { IWorkoutType } from "@/types/Workout";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface IPlansType {
  plans: IWorkoutType[];
  setPlans: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
}

export const PlanContext = createContext<IPlansType>({
  plans: [],
  setPlans: () => {},
});

const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [plans, setPlans] = useState<IWorkoutType[]>([]);
  const value = {
    plans,
    setPlans,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

export default PlanProvider;

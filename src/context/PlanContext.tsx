"use client";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface IPlansNumberType {
  plansNumber: number;
  setPlansNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const PlanContext = createContext<IPlansNumberType>({
  plansNumber: 0,
  setPlansNumber: () => {},
});

const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [plansNumber, setPlansNumber] = useState<number>(0);
  const value = {
    plansNumber,
    setPlansNumber,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

export default PlanProvider;

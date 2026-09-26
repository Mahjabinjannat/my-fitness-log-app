"use client";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface ISavedNumberType {
  savedNumber: number;
  setSavedNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const PlanContext = createContext<ISavedNumberType>({
  savedNumber: 0,
  setSavedNumber: () => {},
});

const SaveProvider = ({ children }: { children: ReactNode }) => {
  const [savedNumber, setSavedNumber] = useState<number>(0);
  const value = {
    savedNumber,
    setSavedNumber,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

export default SaveProvider;
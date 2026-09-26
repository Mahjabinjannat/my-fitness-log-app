"use client";
import { IWorkoutType } from "@/types/Workout";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface ISavedType {
  saved: IWorkoutType[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
}

export const SaveContext = createContext<ISavedType>({
  saved: [],
  setSaved: () => {},
});

const SaveProvider = ({ children }: { children: ReactNode }) => {
  const [saved, setSaved] = useState<IWorkoutType[]>([]);
  const value = {
    saved,
    setSaved,
  };

  return <SaveContext.Provider value={value}>{children}</SaveContext.Provider>;
};

export default SaveProvider;
"use client";
import { PlanContext } from "@/context/PlanContext";
import { IWorkoutType } from "@/types/Workout";
import React, { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

const AddButton = ({ workout }: { workout: IWorkoutType }) => {
  const { plans, setPlans } = useContext(PlanContext);

  const handleAddToPlan = () => {
    if (plans.length < 5) {
      const isPlanExists = plans.some((plan) => plan.id === workout.id);
      if (!isPlanExists) {
        setPlans([...plans, workout]);
        toast.success("Added to today's plan");
      } else {
        toast.error("Already in your plan");
      }
    } else {
      toast.error("Today's plan is full — finish these first!");
    }
  };
  return (
    <div>
      <button
        onClick={handleAddToPlan}
        className="flex items-center gap-2 rounded-full bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:bg-[#b5ed00]"
      >
        <FiCalendar size={18} />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default AddButton;

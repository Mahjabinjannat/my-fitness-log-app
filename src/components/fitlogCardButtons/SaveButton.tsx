"use client";

import { SaveContext } from "@/context/SaveContext";
import { IWorkoutType } from "@/types/Workout";
import { useContext } from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: IWorkoutType }) => {
  const { saved, setSaved } = useContext(SaveContext);

  const handleAddToSaved = () => {
    const isPlanExists = saved.some((save) => save.id === workout.id);
    if (!isPlanExists) {
      setSaved([...saved, workout]);
      toast.success("Saved for later");
    } else {
      toast.error("Already in your plan");
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToSaved}
        className="flex items-center gap-2 rounded-full border border-[#D1D5DB] px-6 py-3 text-white transition hover:bg-[#1B1E24]"
      >
        <BsFillBookmarkHeartFill size={18} />
        Save for later
      </button>
    </div>
  );
};

export default SaveButton;

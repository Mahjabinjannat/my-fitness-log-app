"use client";
import { PlanContext } from "@/context/PlanContext";
import { SaveContext } from "@/context/SaveContext";
import { useContext, useState } from "react";
import PlanWorkoutCard from "@/components/myPlanPage/PlanWorkoutCard";
import { IWorkoutType } from "@/types/Workout";
import SavedWorkoutCard from "@/components/myPlanPage/SavedWorkoutCard";
import Link from "next/link";

const PlanPage = () => {
  const { plans, setPlans } = useContext(PlanContext);
  const { saved, setSaved } = useContext(SaveContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );
  const totalMinutes =
    activeTab === "plan"
      ? plans.reduce((total, workout) => total + workout.duration, 0)
      : saved.reduce((total, workout) => total + workout.duration, 0);

  const totalCalories =
    activeTab === "plan"
      ? plans.reduce((total, workout) => total + workout.caloriesBurned, 0)
      : saved.reduce((total, workout) => total + workout.caloriesBurned, 0);

  const sortedPlan =
    activeTab === "plan"
      ? [...plans].sort((a, b) => {
          if (sortBy === "duration") {
            return b.duration - a.duration;
          }

          if (sortBy === "calories") {
            return b.caloriesBurned - a.caloriesBurned;
          }

          if (sortBy === "rating") {
            return b.rating - a.rating;
          }

          return 0;
        })
      : [...saved].sort((a, b) => {
          if (sortBy === "duration") {
            return b.duration - a.duration;
          }

          if (sortBy === "calories") {
            return b.caloriesBurned - a.caloriesBurned;
          }

          if (sortBy === "rating") {
            return b.rating - a.rating;
          }

          return 0;
        });

  const handleRemove = (id: number) => {
    if (activeTab === "plan")
      setPlans((previous) => previous.filter((workout) => workout.id !== id));
    else {
      setSaved((previous) => previous.filter((workout) => workout.id !== id));
    }
  };

  return (
    <main className="container mx-auto px-6 py-10 text-[#E7E7EA] min-h-[700px]">
      <div>
        <h1 className="text-[40px] font-medium uppercase tracking-[-1.5px]">
          My Plan
        </h1>

        <p className="mt-1 text-[16px] text-[#96999F]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-9 grid grid-cols-3 overflow-hidden rounded-[17px] border border-[#292C33] bg-[#1B1E24]">
        <div className="px-7 py-5">
          <p className="text-[12px] text-[#989BA2]">Exercises</p>

          <h2 className="mt-1 text-[34px] font-bold text-[#C7FF00]">
            {activeTab === "plan" ? plans.length : saved.length}
          </h2>
        </div>

        <div className="border-l border-dashed border-[#30333A] px-7 py-5">
          <p className="text-[12px] text-[#989BA2]">Minutes</p>

          <h2 className="mt-1 text-[34px] font-bold text-[#E9E9EB]">
            {totalMinutes}
          </h2>
        </div>

        <div className="border-l border-dashed border-[#30333A] px-7 py-5">
          <p className="text-[12px] text-[#989BA2]">Calories</p>

          <h2 className="mt-1 text-[34px] font-bold text-[#E9E9EB]">
            {totalCalories}
          </h2>
        </div>
      </div>

      <section className="mt-10 flex items-end justify-between">
   
        <div className="flex rounded-[17px] bg-[#1C1F25] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`cursor-pointer rounded-[13px] px-4 py-3 text-[14px] transition ${
              activeTab === "plan"
                ? "bg-[#101215] text-[#C7FF00]"
                : "text-[#888D96] hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`cursor-pointer rounded-[13px] px-4 py-3 text-[14px] transition ${
              activeTab === "saved"
                ? "bg-[#101215] text-[#C7FF00]"
                : "text-[#888D96] hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort */}
        <div className="w-[340px]">
          <label className="mb-1 block text-[16px] text-[#E2E2E5]">
            Sort By
          </label>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            className="w-full cursor-pointer rounded-[18px] border border-[#3A3E45] bg-[#101215] px-4 py-3 text-[14px] text-[#D7D7DB] outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </section>

      <div className="mt-9 space-y-4">
       
        {activeTab === "plan" &&
          sortedPlan.map((workout: IWorkoutType) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              onRemove={handleRemove}
            />
          ))}

        {activeTab === "saved" &&
          sortedPlan.map((workout: IWorkoutType) => (
            <SavedWorkoutCard
              key={workout.id}
              workout={workout}
              onRemove={handleRemove}
            />
          ))}
        {activeTab === "saved" && saved.length === 0 && (
          <div className="rounded-[18px] border border-[#292D35] bg-[#1B1E24] py-16 text-center">
            <p className="text-[#969AA3]">Your workout plan is empty.</p>
          </div>
        )}
        {((!plans.length && activeTab === "plan") ||
          (!saved.length && activeTab === "saved")) && (
          <div className="mt-10 flex min-h-[310px] flex-col items-center justify-center rounded-[20px] border border-dashed border-[#292D35] bg-[#1B1E24] text-center">
            <h2 className="text-[26px] font-medium uppercase tracking-[-0.5px] text-[#E7E7EA]">
              Nothing Here Yet
            </h2>

            <p className="mt-3 text-[18px] text-[#9CA0A8]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-10 rounded-[24px] bg-[#C7F500] px-7 py-3 text-[16px] font-semibold text-black transition duration-300 hover:bg-[#B5E000]"
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default PlanPage;

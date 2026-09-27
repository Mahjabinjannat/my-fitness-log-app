"use client";

import { PlanContext } from "@/context/PlanContext";
import { SaveContext } from "@/context/SaveContext";
import { useContext, useState } from "react";
import PlanWorkoutCard from "@/components/myPlanPage/PlanWorkoutCard";
import { IWorkoutType } from "@/types/Workout";
import SavedWorkoutCard from "@/components/myPlanPage/SavedWorkoutCard";
import Link from "next/link";
import { toast } from "react-toastify";
import SortByDropDown from "@/components/myPlanPage/SortByDropDown";

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

  const handleRemove = (id: number, action?: "mark" | "delete") => {
    if (activeTab === "plan" && action === "mark") {
      setPlans((previous) => previous.filter((workout) => workout.id !== id));

      toast.success("Workout logged — nice work");
    } else if (activeTab === "plan" && action === "delete") {
      setPlans((previous) => previous.filter((workout) => workout.id !== id));

      toast.success("Removed from today's plan");
    } else {
      setSaved((previous) => previous.filter((workout) => workout.id !== id));

      toast.success("Removed from today's plan");
    }
  };

  return (
    <main
      className="
        container mx-auto min-h-175
        px-4 py-8
        sm:px-6 sm:py-10
        lg:px-6
        text-[#E7E7EA]
      "
    >
      <div>
        <h1
          className="
            text-[30px]
            sm:text-[34px]
            md:text-[40px]
            font-medium uppercase
            tracking-[-1.5px]
          "
        >
          My Plan
        </h1>

        <p
          className="
            mt-1
            text-[13px]
            sm:text-[14px]
            md:text-[16px]
            text-[#96999F]
          "
        >
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div
        className="
    mt-7 sm:mt-9
    grid grid-cols-1
    sm:grid-cols-3
    overflow-hidden
    rounded-[17px]
    border border-[#292C33]
    bg-[#1B1E24]
  "
      >
        <div
          className="
      flex items-center justify-between
      px-5 py-4
      sm:block sm:px-5 sm:py-5
      md:px-7
    "
        >
          <p className="text-[12px] text-[#989BA2]">Exercises</p>

          <h2
            className="
        text-[24px] font-bold text-[#C7FF00]
        sm:mt-1 sm:text-[28px]
        md:text-[34px]
      "
          >
            {activeTab === "plan" ? plans.length : saved.length}
          </h2>
        </div>

        <div
          className="
      flex items-center justify-between
      border-t border-dashed border-[#30333A]
      px-5 py-4

      sm:block
      sm:border-l sm:border-t-0
      sm:px-5 sm:py-5

      md:px-7
    "
        >
          <p className="text-[12px] text-[#989BA2]">Minutes</p>

          <h2
            className="
        text-[24px] font-bold text-[#E9E9EB]
        sm:mt-1 sm:text-[28px]
        md:text-[34px]
      "
          >
            {totalMinutes}
          </h2>
        </div>

        <div
          className="
      flex items-center justify-between
      border-t border-dashed border-[#30333A]
      px-5 py-4

      sm:block
      sm:border-l sm:border-t-0
      sm:px-5 sm:py-5

      md:px-7
    "
        >
          <p className="text-[12px] text-[#989BA2]">Calories</p>

          <h2
            className="
        text-[24px] font-bold text-[#E9E9EB]
        sm:mt-1 sm:text-[28px]
        md:text-[34px]
      "
          >
            {totalCalories}
          </h2>
        </div>
      </div>

      <section
        className="
          mt-8
          sm:mt-10
          flex flex-col
          gap-5
          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >
        <div className="flex w-full rounded-[17px] bg-[#1C1F25] p-1 sm:w-auto">
          <button
            onClick={() => setActiveTab("plan")}
            className={`
              flex-1 cursor-pointer
              rounded-[13px]
              px-3 py-3
              sm:flex-none sm:px-4
              text-[12px]
              sm:text-[14px]
              transition
              ${
                activeTab === "plan"
                  ? "bg-[#101215] text-[#C7FF00]"
                  : "text-[#888D96] hover:text-white"
              }
            `}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`
              flex-1 cursor-pointer
              rounded-[13px]
              px-3 py-3
              sm:flex-none sm:px-4
              text-[12px]
              sm:text-[14px]
              transition
              ${
                activeTab === "saved"
                  ? "bg-[#101215] text-[#C7FF00]"
                  : "text-[#888D96] hover:text-white"
              }
            `}
          >
            Saved
          </button>
        </div>

        <SortByDropDown
          sortBy={sortBy}
          setSortBy={setSortBy}
      
        />
      </section>

      <div className="mt-7 sm:mt-9 space-y-4">
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

        {((!plans.length && activeTab === "plan") ||
          (!saved.length && activeTab === "saved")) && (
          <div
            className="
              mt-8
              flex min-h-[260px]
              sm:min-h-[310px]
              flex-col
              items-center
              justify-center
              rounded-[20px]
              border border-dashed border-[#292D35]
              bg-[#1B1E24]
              px-5
              text-center
            "
          >
            <h2
              className="
                text-[20px]
                sm:text-[23px]
                md:text-[26px]
                font-medium uppercase
                tracking-[-0.5px]
                text-[#E7E7EA]
              "
            >
              Nothing Here Yet
            </h2>

            <p
              className="
                mt-3
                max-w-[500px]
                text-[13px]
                sm:text-[15px]
                md:text-[18px]
                leading-relaxed
                text-[#9CA0A8]
              "
            >
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="
                mt-7
                sm:mt-10
                rounded-3xl
                bg-[#C7F500]
                px-6 py-2.5
                sm:px-7 sm:py-3
                text-[13px]
                sm:text-[16px]
                font-semibold
                text-black
                transition duration-300
                hover:bg-[#B5E000]
              "
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

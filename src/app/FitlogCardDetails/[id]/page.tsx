import AddButton from "@/components/fitlogCardButtons/AddButton";
import SaveButton from "@/components/fitlogCardButtons/SaveButton";
import { IWorkoutType } from "@/types/Workout";
import Image from "next/image";

const getFitlogDetails = async (id: string) => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  return res.json();
};

const FitLogCardDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const workout: IWorkoutType = await getFitlogDetails(id);
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <div className="relative w-full  h-full min-h-[500px] overflow-hidden rounded-[18px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col">
          <h1 className="font-oswald text-[40px] md:text-[48px] uppercase leading-none text-white font-medium tracking-[-2px] origin-left scale-x-75">
            {workout.name}
          </h1>

          <p className="mt-5 text-[14px] leading-6 text-[#9CA3AF]">
            {workout.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-4 py-[0.5px] text-[14px] font-semibold text-[#0F1115]"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-7 overflow-hidden rounded-[18px] border border-[#292C33] bg-[#1B1E24]">
            <div className="grid grid-cols-2 border-b border-[#292C33]">
              <div className="px-5 py-3 font-oswald text-[12px] uppercase text-[#D1D5DB] font-bold">
                Equipment
              </div>

              <div className="px-5 py-3 text-[14px] text-[#E5E7EB] font-medium flex justify-end">
                {workout.equipment}
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-[#292C33]">
              <div className="px-5 py-3 font-oswald text-[12px] uppercase text-[#D1D5DB] font-bold">
                Difficulty
              </div>

              <div className="px-5 py-3 text-[14px] text-[#E5E7EB] font-medium flex justify-end">
                {workout.difficulty}
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-[#292C33]">
              <div className="px-5 py-3 font-oswald text-[12px] uppercase text-[#D1D5DB] font-bold">
                Sets
              </div>

              <div className="px-5 py-3 text-[14px] text-[#E5E7EB] font-medium flex justify-end">
                {workout.sets}
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-[#292C33]">
              <div className="px-5 py-3 font-oswald text-[12px] uppercase text-[#D1D5DB] font-bold">
                Reps
              </div>

              <div className="px-5 py-3 text-[14px] text-[#E5E7EB] font-medium flex justify-end">
                {workout.reps}
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-[#292C33]">
              <div className="px-5 py-3 font-oswald text-[12px] uppercase text-[#D1D5DB] font-bold">
                Duration
              </div>

              <div className="items-center gap-2 px-5 py-3 text-[14px] text-[#E5E7EB] font-medium flex justify-end">
                {workout.duration} min
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-[#292C33]">
              <div className="px-5 py-3 font-oswald text-[12px] uppercase text-[#D1D5DB] font-bold">
                Calories
              </div>

              <div className="items-center gap-2 px-5 py-3 text-[14px] text-[#E5E7EB] font-medium flex justify-end">
                {workout.caloriesBurned} kcal
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="px-5 py-3 font-oswald text-[12px] uppercase text-[#D1D5DB] font-bold">
                Rating
              </div>

              <div className="items-center gap-2 px-5 py-3 text-[14px] text-[#E5E7EB] font-medium flex justify-end">
                {workout.rating}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-oswald text-[17px] uppercase text-white font-extrabold">
              Instructions
            </h2>

            <ol className="mt-4 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[14px] leading-5 text-[#D1D5DB]"
                >
                  <span>{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <AddButton workout={workout} />

            <SaveButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitLogCardDetailsPage;

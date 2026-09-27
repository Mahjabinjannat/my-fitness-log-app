interface IStatsType {
  exercises: number;
  totalMinutes: number;
  totalCalories: number;
}

const Stats = ({ exercises, totalMinutes, totalCalories }: IStatsType) => {
  return (
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
          {exercises}
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
  );
};

export default Stats;

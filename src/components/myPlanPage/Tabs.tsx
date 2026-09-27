import { Dispatch, SetStateAction } from "react";

interface IActiveTabsType {
  activeTab: "plan" | "saved";
  setActiveTab: Dispatch<SetStateAction<"plan" | "saved">>;
}

const Tabs = ({ activeTab, setActiveTab }: IActiveTabsType) => {
  return (
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
  );
};

export default Tabs;

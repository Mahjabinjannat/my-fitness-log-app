import Banner from "@/components/homePage/Banner";
import FitnessGrid from "@/components/homePage/FitnessGrid";


export default function Home() {
  return (
    <div className=" flex-1 font-sans dark:bg-black">
      <Banner />
      <FitnessGrid />
    </div>
  );
}

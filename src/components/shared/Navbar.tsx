"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { PlanContext } from "@/context/PlanContext";
import { SaveContext } from "@/context/SaveContext";

const Navbar = () => {
  const pathName = usePathname();
  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`text-[#9CA3AF] text-[12px] ${pathName === "/" ? "text-[#C2F800] bg-[#1A2312] px-5 py-1.5 rounded-[20px]" : ""} hover:rounded-[20px] hover:px-3 hover:py-1.5 `}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/plans"
          className={`text-[#9CA3AF] text-[12px] ${pathName === "/plans" ? "text-[#C2F800] bg-[#1A2312] px-5 py-1.5 rounded-[20px]" : ""} hover:rounded-[20px] hover:px-3 hover:py-1.5 `}
        >
          Plan
        </Link>
      </li>
    </>
  );
  const { plans } = useContext(PlanContext);
  const { saved } = useContext(SaveContext);

  return (
    // <div className="flex justify-between container mx-auto items-center">
    //   <div className="flex">
    //     <Image src={logo} alt="App Logo" />
    //     <p>FITLOG</p>
    //   </div>
    //   <ul className="flex">
    //     <li>Workout</li>
    //     <li>Plan</li>
    //   </ul>
    //   <div>
    //     <button>Plan (0)</button>
    //     <button>Saved (0)</button>
    //   </div>
    // </div>
    <div>
      <div className="navbar container mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* <Link href='/'><Image src={logo} alt="App Logo" /></Link> */}
          <Link
            href="/"
            className=" flex gap-4 font-bold text-[18px] font-oswald"
          >
            <Image src={logo} alt="App Logo" />
            FITLOG
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-3">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/plans"
            className="flex items-center justify-center gap-2 rounded-[20px] px-4 py-2 text-[12px] transition-colors duration-300 hover:bg-gray-800"
          >
            Plan{" "}
            <span className="h-5 w-5 flex items-center justify-center rounded-full bg-lime-400 text-sm font-semibold text-black ">
              {plans.length}
            </span>
          </Link>
          <Link
            href="/plans"
            className="flex items-center justify-center gap-2 rounded-[20px] px-4 py-2 text-[12px] text-[#9CA3AF] transition-colors duration-300 hover:bg-gray-800"
          >
            Saved
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-sm font-medium text-gray-300">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full border-b-[0.5px] border-gray-800"></div>
    </div>
  );
};

export default Navbar;

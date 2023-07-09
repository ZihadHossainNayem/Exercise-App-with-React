import React from "react";
import { Link } from "react-router-dom";
import { IoIosFitness } from "react-icons/io";
import { BiMoon, BiSun } from "react-icons/bi";

export const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="md:px-16 px-4 h-[80px] flex items-center border-b dark:border-gray-700">
      {/* container */}
      <div className="flex items-center justify-between w-full">
        {/* logo & menu*/}
        <div className="flex items-center md:gap-24 gap-8">
          <p className="flex items-center gap-2 ">
            <IoIosFitness size={30} />
            <span className="font-semibold md:text-2xl text-xl">Exercise.</span>
          </p>

          <div className="flex md:gap-8 gap-4 ">
            <Link to="/">Home</Link>
            <a href="#exercises">Exercises</a>
          </div>
        </div>
        {/* dark mode button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center justify-center md:ml-12 ml-4"
        >
          {darkMode ? <BiSun size={20} /> : <BiMoon size={20} />}
        </button>
      </div>
    </div>
  );
};

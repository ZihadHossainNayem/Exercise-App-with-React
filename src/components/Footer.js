import React from "react";
import { IoIosFitness } from "react-icons/io";
export const Footer = () => {
  return (
    <div className="mt-12 border-t dark:border-gray-700 h-[120px] flex items-center justify-between px-32">
      <div className="flex gap-2 items-center">
        <IoIosFitness size={30} />
        <span className="font-semibold md:text-2xl text-xl">Exercise.</span>
      </div>
      <div className="md:text-xl text-lg">&copy; Active Fitness, Exercise</div>
      <div></div>
    </div>
  );
};

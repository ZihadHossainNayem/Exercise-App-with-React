import React from "react";
import { Link } from "react-router-dom";

export const ExerciseCard = ({ exercises }) => {
  return (
    <div className="py-6">
      <div className="shadow2 border rounded-md bg-white border-gray-200 dark:border-gray-700 overflow-hidden ">
        <Link to={`/exercise/${exercises.id}`}>
          <img
            src={exercises.gifUrl}
            alt={exercises.name}
            loading="lazy"
            className="transition-transform hover:scale-125 py-8"
          />
          <div className="py-4 px-2 flex items-center justify-center gap-4">
            <button className="capitalize px-2 py-1 text-xs md:text-base rounded-md text-[#ff5733] border border-[#ff5733] hover:bg-[#ff5733] hover:text-white">
              {exercises.bodyPart}
            </button>
            <button className="capitalize px-2 py-1 text-xs md:text-base rounded-md text-[#ff5733] border border-[#ff5733] hover:bg-[#ff5733] hover:text-white">
              {exercises.target}
            </button>
          </div>
          <div className="h-[70px] flex items-center justify-center text-center m-4 text-sm md:text-lg text-[#18191a] font-medium capitalize">
            {exercises.name}
          </div>
        </Link>
      </div>
    </div>
  );
};

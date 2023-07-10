import React from "react";
import { Loading } from "./Loading";
import { Category } from "./Category";

export const MatchingExercise = ({ targetMuscle, equipment }) => {
  return (
    <div className="mx-4 md:mx-24 my-8">
      <div>
        <h1 className="text-center md:text-2xl text-lg text-[#ff5733] font-semibold capitalize py-4 border-b dark:border-gray-700">
          Exercises for same target muscle
        </h1>
        <div className="py-6 px-2">
          {targetMuscle.length ? <Category data={targetMuscle} /> : <Loading />}
        </div>
      </div>
      <div>
        <h1 className="text-center md:text-2xl text-lg text-[#ff5733] font-semibold capitalize py-4 border-b dark:border-gray-700">
          Exercises for same equipment
        </h1>
        <div className="py-6 px-2">
          {equipment.length ? <Category data={equipment} /> : <Loading />}
        </div>
      </div>
    </div>
  );
};

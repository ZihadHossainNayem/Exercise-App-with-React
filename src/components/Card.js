import React from "react";
import { IoIosFitness } from "react-icons/io";

export const Card = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div className="border-2 border-gray-100 dark:border-gray-700 rounded-md shadow2">
      <button
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        }}
        className="mx-auto flex flex-col justify-center items-center py-4 gap-4"
      >
        <IoIosFitness
          size={70}
          className="text-[#FF5733] transition-transform hover:scale-150 duration-300"
        />
        <div className="text-2xl capitalize">{item}</div>
      </button>
    </div>
  );
};

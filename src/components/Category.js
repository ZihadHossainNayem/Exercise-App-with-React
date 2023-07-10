import React, { useState } from "react";
import { Card } from "./Card";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { ExerciseCard } from "../components/ExerciseCard";

export const Category = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  const [showMore, setShowMore] = useState(false);

  const displayedData = showMore ? data : data.slice(0, 8); // Show all data if showMore is true, otherwise show only the first 5 items

  return (
    <div className="lg:mx-44 md:mx-16 mx-2">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {displayedData.map((item) => (
          <div
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
          >
            {isBodyPart ? (
              <Card item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            ) : (
              <ExerciseCard exercises={item} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {!showMore ? (
          <button
            className="w-[700px] justify-center bg-[#f9f9f9] dark:bg-transparent px-4 py-2 border dark:border-gray-700 rounded-lg flex items-center gap-1 mt-8 "
            onClick={() => setShowMore(!showMore)}
          >
            Show More <AiFillCaretDown size={20} />
          </button>
        ) : (
          <button
            className="w-[700px] justify-center bg-[#f9f9f9] dark:bg-transparent px-4 py-2 border dark:border-gray-700 rounded-lg flex items-center gap-1 mt-8"
            onClick={() => setShowMore(!showMore)}
          >
            Show Less <AiFillCaretUp size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

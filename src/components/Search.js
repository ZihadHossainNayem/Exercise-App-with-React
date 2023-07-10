import React, { useState, useEffect } from "react";
import { options, fetchData } from "../utility/fetchData";
import { Category } from "./Category";
import { BsSearch } from "react-icons/bs";

export const Search = ({ setExercises, bodyPart, setBodyPart }) => {
  /* search states */
  const [search, setSearch] = useState("");

  /* state for display exercises */
  const [bodyParts, setBodyParts] = useState([]);

  /* for showing all the categories as soon as the page loads */
  useEffect(() => {
    const fetchExcData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options,
      );

      setBodyParts(["all", ...bodyPartData]);
    };
    fetchExcData();
  }, []);

  /* search handle function */
  const handleSearch = async () => {
    if (search) {
      const data = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        options,
      );
      const searched = data.filter(
        (eachExercise) =>
          eachExercise.name.toLowerCase().includes(search) ||
          eachExercise.bodyPart.toLowerCase().includes(search) ||
          eachExercise.equipment.toLowerCase().includes(search) ||
          eachExercise.target.toLowerCase().includes(search),
      );
      setExercises("");
      setExercises(searched);
    }
  };

  return (
    <div>
      <h1 className="text-center md:text-3xl text-xl font-semibold pt-16">
        Discover these Incredible Exercises for a Stronger Body
      </h1>
      <div className="flex mb-10 mt-6 mx-3 justify-center">
        <input
          type="text"
          placeholder="search exercise here..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className=" border border-gray-200 dark:border-gray-700 px-4 h-[50px] w-[960px] rounded-l-md focus:outline-none bg-transparent"
        />

        <button
          onClick={handleSearch}
          className="bg-[#FF5733] px-4 h-[50px] rounded-r-md text-white flex items-center justify-center"
        >
          <BsSearch size={25} />
        </button>
      </div>
      {/* category showcase */}
      <div>
        <Category
          data={bodyParts}
          bodyParts={bodyParts}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  );
};

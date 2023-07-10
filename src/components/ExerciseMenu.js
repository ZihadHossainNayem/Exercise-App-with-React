import React, { useState, useEffect, useRef } from "react";
import { ExerciseCard } from "./ExerciseCard";
import Pagination from "@mui/material/Pagination";
import { options, fetchData } from "../utility/fetchData";

export const ExerciseMenu = ({ exercises, setExercises, bodyPart }) => {
  const [current, setCurrent] = useState(1);
  const containerRef = useRef(null);

  const itemsPerPageLg = 12;
  const itemsPerPageSm = 6;

  const itemsPerPage =
    window.innerWidth < 640 ? itemsPerPageSm : itemsPerPageLg;

  const indexOfLastItem = current * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = exercises.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (e, value) => {
    setCurrent(value);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          options,
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          options,
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div className="md:px-16 px-4 mt-12 ">
      <div
        className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 justify-items-center gap-4"
        ref={containerRef}
      >
        {currentItem.map((exercises, index) => (
          <ExerciseCard key={index} exercises={exercises} />
        ))}
      </div>
      {/* pagination */}
      <div className="my-6 flex justify-center">
        {exercises.length > 9 && (
          <Pagination
            count={Math.ceil(exercises.length / itemsPerPage)}
            page={current}
            onChange={paginate}
            color="primary"
            size="large"
          />
        )}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Hero } from "../components/Hero";
import { Search } from "../components/Search";
import { ExerciseMenu } from "../components/ExerciseMenu";

export const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  console.log(bodyPart);
  return (
    <div className="">
      <Hero />
      <Search
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <ExerciseMenu
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { options, fetchData } from "../utility/fetchData";
import { ExerciseDetails } from "../components/ExerciseDetails";
import { Videos } from "../components/Videos";
import { MatchingExercise } from "../components/MatchingExercise";

export const Exercises = () => {
  const [detailsData, setDetailsData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseUrl}/exercises/exercise/${id}`,
        options
      );
      setDetailsData(exerciseDetailsData);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <div>
      <ExerciseDetails detailsData={detailsData} />
      <Videos />
      <MatchingExercise />
    </div>
  );
};

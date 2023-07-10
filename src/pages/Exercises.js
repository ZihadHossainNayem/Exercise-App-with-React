import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { options, fetchData, ytOptions } from "../utility/fetchData";
import { ExerciseDetails } from "../components/ExerciseDetails";
import { Videos } from "../components/Videos";
import { MatchingExercise } from "../components/MatchingExercise";

export const Exercises = () => {
  const [detailsData, setDetailsData] = useState({});
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseUrl = "https://exercisedb.p.rapidapi.com";
      const ytUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseUrl}/exercises/exercise/${id}`,
        options
      );
      setDetailsData(exerciseDetailsData);

      const videoData = await fetchData(
        `${ytUrl}/search?query=exercise${exerciseDetailsData.name}`,
        ytOptions
      );
      setVideos(videoData.contents);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <div>
      <ExerciseDetails detailsData={detailsData} />
      <Videos videos={videos} name={detailsData.name} />
      <MatchingExercise />
    </div>
  );
};

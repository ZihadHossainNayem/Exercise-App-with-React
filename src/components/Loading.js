import React from "react";
import { FadeLoader } from "react-spinners";
export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <FadeLoader color="#36d7b7" />
    </div>
  );
};

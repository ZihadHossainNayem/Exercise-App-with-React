import React from "react";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { BiBody } from "react-icons/bi";
import { CgGym } from "react-icons/cg";

export const ExerciseDetails = ({ detailsData }) => {
  const { bodyPart, gifUrl, name, target, equipment } = detailsData;

  const exerciseDetails = [
    {
      icon: <MdOutlineSportsGymnastics size={30} />,
      name: bodyPart,
    },
    {
      icon: <BiBody size={30} />,
      name: target,
    },
    {
      icon: <CgGym size={30} />,
      name: equipment,
    },
  ];

  return (
    <div className="mx-4 md:mx-24 grid md:grid-cols-2">
      <div className="mx-auto px-4">
        <img
          src={gifUrl}
          alt={name}
          loading="lazy"
          className="md:h-[600px] object-cover mt-4"
        />
      </div>
      <div className="my-auto">
        <div className="capitalize text-2xl md:text-4xl font-semibold my-4 py-2 text-[#FF5733] border-b dark:border-gray-700">
          {name}
        </div>
        <div className="text-justify  text-base md:text-xl ">
          <span className="capitalize font-medium">{name}</span>, one of the
          top-notch lower body exercises, excels at targeting your {""}
          <span className="capitalize font-medium">{target}</span>.
          Incorporating this exercise into your routine will not only enhance
          your <span className="capitalize font-medium">{target}</span> strength
          but also uplift your spirits and boost your energy levels.
        </div>
        <div className="my-4 flex flex-wrap md:flex-row">
          {exerciseDetails.map((item) => (
            <div key={item.name} className="flex gap-1 md:gap-4 py-2">
              <button className="border border-gray-400 dark:border-gray-700 rounded-lg p-2 hover:bg-[#ff5733] hover:text-white">
                {item.icon}
              </button>
              <div className="flex items-center text-base md:text-xl pr-2 capitalize">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

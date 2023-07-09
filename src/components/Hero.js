import React from "react";
import heroImg from "../assets/heroImg.jpg";
import { BsArrowRightShort } from "react-icons/bs";

export const Hero = () => {
  return (
    <div className="grid md:grid-cols-2">
      {/* left */}
      <div
        className="flex flex-col gap-4 md:items-start items-center md:justify-center 
        lg:pl-28 md:pl-12 pl-0 pr-2 pt-12 md:pt-0 text-center md:text-start order-2"
      >
        <h1 className="md:text-6xl text-4xl font-bold text-[#FF5733]">
          Active Fitness
        </h1>
        <p className="md:text-6xl text-2xl md:font-semibold font-semibold">
          Inspire, conquer, achieve greatness
        </p>
        <p className="font-medium md:text-2xl text-sm">
          Take a look at the most efficient workouts
        </p>
        <button
          className="bg-[#FF5733] text-white md:text-2xl font-medium px-8 md:py-2 py-1 
        rounded flex items-center gap-1 shadow2 hover:bg-white hover:text-[#ff5733] border border-[#FF5733]"
        >
          Explore <BsArrowRightShort size={30} />
        </button>
      </div>
      {/* right */}
      <div className="md:order-2 order-1 flex justify-end">
        <img
          src={heroImg}
          alt="heroImg"
          className="md:h-[871px] h-[480px] object-cover md:rounded-bl-2xl"
        />
      </div>
    </div>
  );
};

import React from "react";
import { Loading } from "../components/Loading";

export const Videos = ({ videos, name }) => {
  if (!videos.length) return <Loading />;
  return (
    <div className="mx-4 md:mx-24 my-8">
      <h1 className="md:text-2xl text-lg text-[#ff5733] font-semibold capitalize py-4 border-b dark:border-gray-700">
        Watch recommended videos of <span className="font-bold">{name}</span>{" "}
        from youtube directly
      </h1>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-between py-6 items-center gap-4 overflow-hidden">
        {videos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="md:w-[220px] lg:w-[500px]"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="md:w-[220px] lg:w-[500px]"
            />
            <div className="py-4 max-w-[400px]">
              <p className="font-medium lg:text-xl text-sm truncate">
                <span className="text-[#ff5733] font-semibold">Title: </span>
                {item.video.title}
              </p>
              <p className="font-medium lg:text-lg text-sm">
                <span className="text-[#ff5733] font-semibold">Channel: </span>
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

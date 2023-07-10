import React from "react";

export const Videos = ({ videos, name }) => {
  if (!videos.length) return "loading...";
  return (
    <div className="mx-4 md:mx-24 my-4">
      <div>
        <h1 className="md:text-3xl text-lg text-[#ff5733] font-semibold capitalize py-4 border-b dark:border-gray-700">
          Watch recommended videos of <span className="font-bold">{name}</span>{" "}
          from youtube directly
        </h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-between py-6 px-2 items-center gap-4 overflow-hidden">
        {videos?.slice(0, 4).map((item, index) => (
          <a
            key={index}
            href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="rounded-lg"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

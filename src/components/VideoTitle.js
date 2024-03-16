import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white ">
      <h1 className="text-6xl w-1/4 font-bold drop-shadow-md">{title}</h1>
      <p className="py-6 text-lg w-1/4 drop-shadow-md">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl  rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
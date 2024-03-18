import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-6 md:px-24 absolute text-white ">
      <h1 className="text-6xl w-1/4 font-bold drop-shadow-md">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 drop-shadow-md">
        {overview}
      </p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black py-1 md:py-4 px-12 text-xl  rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

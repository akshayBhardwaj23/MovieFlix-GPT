import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4 scale-95 cursor-pointer hover:scale-100 duration-300">
      <img
        className="rounded-md"
        alt="Movie Card"
        src={IMG_CDN_URL + poster_path}
      />
    </div>
  );
};

export default MovieCard;

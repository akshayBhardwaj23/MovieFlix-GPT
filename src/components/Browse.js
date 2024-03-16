import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SeconaryContainer />
      {/* 
      Main COntainer
        - video background
        - video title

      Secondary Container
        - MovieList * n
          - cards * n
      */}
    </div>
  );
};

export default Browse;

import React from "react";
import Header from "./Header";
import useNowPlaying from "../utils/useNowPlaying";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlaying();
  return (
    <div className="">
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;

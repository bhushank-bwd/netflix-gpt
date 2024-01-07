import React from "react";
import Header from "./Header";
import useNowPlaying from "../utils/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";

const Browse = () => {
  useNowPlaying();
  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondoryContainer />
    </div>
  );
};

export default Browse;

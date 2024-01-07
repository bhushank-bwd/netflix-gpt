import React from "react";
import Header from "./Header";
import useNowPlaying from "../utils/useNowPlaying";

const Browse = () => {
  useNowPlaying();
  return (
    <div className="">
      <Header />
    </div>
  );
};

export default Browse;

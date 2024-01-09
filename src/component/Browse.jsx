import React from "react";
import Header from "./Header";
import useNowPlaying from "../utils/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";
import { useSelector } from "react-redux";
import GPTSearch from "./GptSearch";

const Browse = () => {
  const { showGptSearch } = useSelector((store) => store.site);

  useNowPlaying();
  return (
    <div className="">
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondoryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

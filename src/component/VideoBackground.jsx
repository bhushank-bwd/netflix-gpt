import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtrailer } from "../utils/movieSlice";

const VideoBackground = ({ id }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movie.trailer);
  useEffect(() => {
    getTrailers();
  }, []);
  const getTrailers = async () => {
    const fetchResult = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const videoList = await fetchResult.json();
    const trailers = videoList?.results.filter((v) => {
      if (v.type === "Trailer") return v;
    });
    const temp_trailer = trailers.length > 0 ? trailers[0] : videoList[0];

    dispatch(addtrailer(temp_trailer));
  };
  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

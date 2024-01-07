import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "./movieSlice";
import { API_OPTIONS } from "./constants";
const useNowPlaying = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieList();
  }, []);
  const fetchMovieList = async () => {
    const fetchResult = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const result = await fetchResult.json();
    dispatch(addNowPlaying(result.results));
  };
};
export default useNowPlaying;

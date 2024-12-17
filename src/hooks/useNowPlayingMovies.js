import { useDispatch } from "react-redux";
import { NOW_PLAYING_URL, OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/Redux Slices/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    const data = await fetch(NOW_PLAYING_URL, OPTIONS);
    const json = await data.json();
    // console.log(json?.results);

    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;

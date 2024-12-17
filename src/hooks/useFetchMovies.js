import { useDispatch } from "react-redux";
import {
  NOW_PLAYING_URL,
  OPTIONS,
  POPULAR_URL,
  TOP_RATED_URL,
  UPCOMING_URL,
} from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/Redux Slices/moviesSlice";
import { useEffect } from "react";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    const data = await fetch(NOW_PLAYING_URL, OPTIONS);
    const json = await data.json();

    dispatch(addNowPlayingMovies(json?.results));
  };

  const getPopular = async () => {
    const data = await fetch(POPULAR_URL, OPTIONS);
    const json = await data.json();

    dispatch(addPopularMovies(json?.results));
  };

  const getTopRated = async () => {
    const data = await fetch(TOP_RATED_URL, OPTIONS);
    const json = await data.json();

    dispatch(addTopRatedMovies(json?.results));
  };

  const getUpcoming = async () => {
    const data = await fetch(UPCOMING_URL, OPTIONS);
    const json = await data.json();

    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    getNowPlaying();
    getPopular();
    getTopRated();
    getUpcoming();
  }, []);
};

export default useFetchMovies;

import { useDispatch, useSelector } from "react-redux";
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
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getNowPlaying = async () => {
    try {
      const data = await fetch(NOW_PLAYING_URL, OPTIONS);
      const json = await data.json();

      dispatch(addNowPlayingMovies(json?.results));
    } catch (err) {
      console.log(err);
    }
  };

  const getPopular = async () => {
    try {
      const data = await fetch(POPULAR_URL, OPTIONS);
      const json = await data.json();

      dispatch(addPopularMovies(json?.results));
    } catch (err) {
      console.log(err);
    }
  };

  const getTopRated = async () => {
    try {
      const data = await fetch(TOP_RATED_URL, OPTIONS);
      const json = await data.json();

      dispatch(addTopRatedMovies(json?.results));
    } catch (err) {
      console.log(err);
    }
  };

  const getUpcoming = async () => {
    try {
      const data = await fetch(UPCOMING_URL, OPTIONS);
      const json = await data.json();

      dispatch(addUpcomingMovies(json?.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlaying();
    !popularMovies && getPopular();
    !topRatedMovies && getTopRated();
    !upcomingMovies && getUpcoming();
  }, []);
};

export default useFetchMovies;

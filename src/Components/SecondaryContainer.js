import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  {
    /*
    Movie List                * n
      - Movie Cards * n
     */
  }
  return (
    <div className="bg-black">
      <div className="relative z-20 -mt-[200px]">
        <MovieList title="Now Playing" list={movies?.nowPlayingMovies} />
        <MovieList title="Top Rated" list={movies?.topRatedMovies} />
        <MovieList title="Popular" list={movies?.popularMovies} />
        <MovieList title="Upcoming" list={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

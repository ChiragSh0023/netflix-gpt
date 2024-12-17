import MovieCard from "./MovieCard";
import { memo } from "react";

const MovieList = memo(({ title, list }) => {
  if (!list) {
    return null;
  }

  return (
    <div className="px-12 pb-20">
      <div className="font-metropolis_semi_bold text-white text-2xl my-8">
        {title}
      </div>
      <div className="flex overflow-x-scroll gap-9 hide-scrollbar">
        {list.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
});

export default MovieList;

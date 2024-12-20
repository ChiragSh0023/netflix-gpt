import { useSelector } from "react-redux";
import MovieCard from "../Browse/MovieCard";
import Shimmer from "./Shimmer";

const GptMovieList = () => {
  const movieName = useSelector((store) => store.gpt.gptMovieNames);
  const gptMovies = useSelector((store) => store.gpt.gptMovieResults);
  const showShimmer = useSelector((store) => store.gpt.showShimmer);

  if (showShimmer) {
    return <Shimmer />;
  }

  if (!movieName) {
    return null;
  }

  return (
    <div className="mx-4 mt-6 p-8 pb-11 bg-black text-white bg-opacity-90 flex flex-col gap-9 rounded-sm">
      <div className="font-metropolis_semi_bold text-2xl">
        {gptMovies
          ? "Your movie matches are in! Let's dive into the reel magic!"
          : movieName}
      </div>
      {gptMovies && (
        <div className="grid grid-cols-6 gap-y-9 justify-items-center">
          {gptMovies?.map((movie) => (
            <MovieCard key={movie?.id} movie={movie} imgWidth="w-36" />
          ))}
        </div>
      )}
    </div>
  );
};

export default GptMovieList;

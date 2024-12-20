import MovieCard from "./MovieCard";
import { memo, useRef } from "react";
import leftIcon from "../../assets/Images/left-arrow-icon.png";
import rightIcon from "../../assets/Images/right-arrow-icon.png";

const MovieList = memo(({ title, list }) => {
  const refContainer = useRef(null);
  if (!list) {
    return null;
  }

  const onScrollLeft = () => {
    refContainer?.current?.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };

  const onScrollRight = () => {
    refContainer?.current?.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  };
  {
    /**h-[37px] lg:h-auto */
  }

  return (
    <div className="px-12 pb-20">
      <div className="flex justify-between  mb-8 lg:my-8">
        <div className="font-metropolis_semi_bold text-white text-xl sm:text-2xl">
          {title}
        </div>
        <div className="flex items-center gap-4">
          <img
            src={leftIcon}
            alt="left-icon"
            className="w-5 h-5 cursor-pointer"
            onClick={onScrollLeft}
          />
          <img
            src={rightIcon}
            alt="right-icon"
            className="w-5 h-5 cursor-pointer"
            onClick={onScrollRight}
          />
        </div>
      </div>
      <div
        className="flex overflow-x-scroll gap-9 hide-scrollbar"
        ref={refContainer}
      >
        {list.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} imgWidth="w-40" />;
        })}
      </div>
    </div>
  );
});

export default MovieList;

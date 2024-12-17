import { MOVIE_IMG_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const imageUrl = MOVIE_IMG_URL + movie?.poster_path;
  return (
    <div className="grow-0 shrink-0 cursor-pointer">
      <div>
        <img src={imageUrl} alt="img" className="w-[175px] rounded-md" />
      </div>
    </div>
  );
};

export default MovieCard;

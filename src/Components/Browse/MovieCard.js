import { useNavigate } from "react-router-dom";
import { MOVIE_IMG_URL } from "../../utils/constants";

const MovieCard = ({ movie, imgWidth }) => {
  const navigate = useNavigate();

  const poster_path = movie?.poster_path;
  if (!poster_path) return null;
  const imageUrl = MOVIE_IMG_URL + poster_path;

  const handleCardClick = () => {
    navigate(`/watch?id=${movie.id}`);
  };

  return (
    <div className="grow-0 shrink-0 cursor-pointer" onClick={handleCardClick}>
      <div>
        <img
          src={imageUrl}
          alt="img"
          className={`rounded-sm w-32 sm:${imgWidth}`}
        />
      </div>
    </div>
  );
};

export default MovieCard;

import GptSearchBar from "./GptSearchBar";
import { BG_IMG_URL } from "../utils/constants";

const MovieGpt = () => {
  return (
    <div>
      <img
        className="absolute w-full h-full object-cover -z-10"
        src={BG_IMG_URL}
        alt="bg-img"
      />
      <GptSearchBar />
    </div>
  );
};

export default MovieGpt;

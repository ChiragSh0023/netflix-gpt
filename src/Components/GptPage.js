import GptSearchBar from "./GptSearchBar";
import bgImg from "../assets/Images/gpt-bg.jpg";
import GptMovieList from "./GptMovieList";

const GptPage = () => {
  return (
    <div>
      <img
        className="absolute w-full h-full object-cover -z-10"
        src={bgImg}
        alt="bg-img"
      />
      <GptSearchBar />
      <GptMovieList />
    </div>
  );
};

export default GptPage;

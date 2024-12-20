import GptSearchBar from "./GptSearchBar";
import bgImg from "../../assets/Images/gpt-bg.jpg";
import GptMovieList from "./GptMovieList";

const GptPage = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-fixed pb-12"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <GptSearchBar />
      <GptMovieList />
    </div>
  );
};

export default GptPage;

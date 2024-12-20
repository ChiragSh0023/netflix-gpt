import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef } from "react";
import { gptSuggestedMovie } from "../utils/Redux Slices/gptSlice";
import fetchMovieNames, { fetchMovieDetails } from "../utils/handleGptSearch";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  const dispatch = useDispatch();
  const gptSearchInput = useRef(null);

  const handleGPTSearch = async () => {
    const searchText = gptSearchInput?.current.value;
    if (!searchText) return;

    const gptSuggestedMovies = await fetchMovieNames(searchText);
    const gptMovieResults = await fetchMovieDetails(gptSuggestedMovies);
    console.log(gptSuggestedMovies);
    console.log(gptMovieResults);
    dispatch(
      gptSuggestedMovie({
        movieNames: gptSuggestedMovies,
        movieResults: gptMovieResults,
      })
    );
  };

  return (
    <div className="pt-[3%] font-metropolis flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-1/2 grid grid-cols-12 rounded-md"
      >
        <input
          type="text"
          ref={gptSearchInput}
          placeholder={lang?.[language]?.gptInputPlaceHolder}
          className="p-3 m-4 rounded-md col-span-9"
        />
        <button
          className="bg-red-600 text-white rounded-md p-3 m-4 hover:bg-red-700 col-span-3"
          onClick={handleGPTSearch}
        >
          {lang?.[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

import { useDispatch, useSelector } from "react-redux";
import { lang } from "../../utils/languageConstants";
import { useRef } from "react";
import {
  gptSuggestedMovie,
  setShowShimmer,
} from "../../utils/Redux Slices/gptSlice";
import fetchMovieNames, {
  fetchMovieDetails,
} from "../../utils/handleGptSearch";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  const dispatch = useDispatch();
  const gptSearchInput = useRef(null);

  const onGPTSearch = async () => {
    dispatch(setShowShimmer(true));

    const searchText = gptSearchInput?.current.value.trim();

    const gptSuggestedMovies = await fetchMovieNames(searchText);
    const isSuggestedMovieArray = Array.isArray(gptSuggestedMovies);
    let gptMovieResults;
    if (isSuggestedMovieArray) {
      gptMovieResults = await fetchMovieDetails(gptSuggestedMovies);
    }

    dispatch(
      gptSuggestedMovie({
        movieNames: gptSuggestedMovies,
        movieResults: isSuggestedMovieArray ? gptMovieResults : null,
      })
    );

    dispatch(setShowShimmer(false));
  };

  return (
    <div className="pt-[3%] font-metropolis flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-[95%] md:w-1/2 grid grid-cols-12 rounded-md"
      >
        <input
          type="text"
          ref={gptSearchInput}
          placeholder={lang?.[language]?.gptInputPlaceHolder}
          className="p-3 my-4 mx-2 md:m-4 rounded-md col-span-9"
        />
        <button
          className="bg-red-600 text-white md:text-[12px] lg:text-base rounded-md p-3 mx-2 my-4 md:m-4 hover:bg-red-700 col-span-3"
          onClick={onGPTSearch}
        >
          {lang?.[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

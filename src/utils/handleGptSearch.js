import model from "./googleGemini";
import { GET_MOVIE_DETAILS, OPTIONS } from "../utils/constants";

const fetchMovieNames = async (searchText) => {
  const prompt =
    "Act as a Movie Recommendation System and suggest some movies for the query : " +
    searchText +
    ". Only give me names of 20 movies, comma separated like the example result ahead. Example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  const result = await model.generateContent(prompt);
  if (!result?.response?.text()) {
    // Show error message
    return;
  }

  const suggestedMovies = result?.response
    ?.text()
    .split(", ")
    .map((movie) => movie.trim());

  return suggestedMovies;
};

export const fetchMovieDetails = async (suggestedMovies) => {
  const data = suggestedMovies.map((movie) => fetchMovieTMDB(movie));
  // [P1, P2, P3, P4, P5]

  const result = await Promise.allSettled(data);
  const searchMovieResults = result.map((res) => {
    if (res.status === "fulfilled") {
      return res.value;
    }
  });

  return searchMovieResults;
};

export const fetchMovieTMDB = async (movie) => {
  const url = GET_MOVIE_DETAILS + movie;
  const data = await fetch(url, OPTIONS);
  const json = await data.json();
  return json?.results?.[0];
};

export default fetchMovieNames;

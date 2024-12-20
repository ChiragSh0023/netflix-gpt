import model from "./googleGemini";
import { GET_MOVIE_DETAILS, OPTIONS } from "../utils/constants";

const fetchMovieNames = async (searchText) => {
  const prompt = `You are a Movie Recommendation System. Suggest 24 movie names based on the query: "${searchText}". Only provide the movie names in a single line, comma-separated, like this: Movie1, Movie2, Movie3, Movie4, .... If you don't understand, reply with the string "Hmm... That’s a tough one! Try searching for genres, actors, or popular movies to get started!"`;

  const result = await model.generateContent(prompt);
  const response = result?.response?.text();

  if (response.startsWith("Hmm")) {
    return response;
  }

  const suggestedMovies = response.split(", ").map((movie) => movie.trim());

  return suggestedMovies;
};

export const fetchMovieDetails = async (suggestedMovies) => {
  const data = suggestedMovies.map((movie) => fetchMovieTMDB(movie));
  // [P1, P2, P3, P4, P5]

  const result = await Promise.allSettled(data);
  const searchMovieResults = result
    .filter((res) => res.status === "fulfilled" && res.value)
    .map((res) => res.value);

  return searchMovieResults;
};

export const fetchMovieTMDB = async (movie) => {
  const url = GET_MOVIE_DETAILS + movie;
  const data = await fetch(url, OPTIONS);
  const json = await data.json();
  return json?.results?.[0];
};

export default fetchMovieNames;

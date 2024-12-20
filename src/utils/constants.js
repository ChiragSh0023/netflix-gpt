export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_ICON =
  "https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const POPULAR_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const MOVIE_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_BEARER_TOKEN,
  },
};

export const GET_TRAILER_URL = "https://api.themoviedb.org/3/movie/";

export const SUPPORTED_LANGUAGE = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "ind",
    name: "Hindi",
  },
  {
    identifier: "jp",
    name: "Japanese",
  },
];

export const GET_MOVIE_DETAILS =
  "https://api.themoviedb.org/3/search/movie?query=";

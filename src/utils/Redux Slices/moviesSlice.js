import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trailer: null,
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    clearMovieSlice: () => initialState,
  },
});

export const {
  addTrailer,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  clearMovieSlice,
} = moviesSlice.actions;

export default moviesSlice.reducer;

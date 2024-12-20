import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
    showShimmer: false,
    gptMovieNames: null,
    gptMovieResults: null,
  },
  reducers: {
    toggleShowGpt: (state) => {
      state.showGpt = !state.showGpt;
    },
    gptSuggestedMovie: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovieNames = movieNames;
      state.gptMovieResults = movieResults;
    },
    setShowShimmer: (state, action) => {
      state.showShimmer = action.payload;
    },
  },
});

export const { toggleShowGpt, gptSuggestedMovie, setShowShimmer } =
  gptSlice.actions;
export default gptSlice.reducer;

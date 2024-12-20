import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showGpt: false,
  showShimmer: false,
  gptMovieNames: null,
  gptMovieResults: null,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState: initialState,
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
    clearGptSlice: () => initialState,
  },
});

export const {
  toggleShowGpt,
  gptSuggestedMovie,
  setShowShimmer,
  clearGptSlice,
} = gptSlice.actions;
export default gptSlice.reducer;

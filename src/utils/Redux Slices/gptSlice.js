import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
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
  },
});

export const { toggleShowGpt, gptSuggestedMovie } = gptSlice.actions;
export default gptSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Redux Slices/userSlice";
import moviesReducer from "./Redux Slices/moviesSlice";
import gptReducer from "./Redux Slices/gptSlice";
import configReducer from "./Redux Slices/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;

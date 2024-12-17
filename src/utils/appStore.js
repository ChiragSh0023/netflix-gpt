import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Redux Slices/userSlice";
import moviesReducer from "./Redux Slices/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;

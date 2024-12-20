import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
};

const configSlice = createSlice({
  name: "config",
  initialState: initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    clearConfigSlice: () => initialState,
  },
});

export const { setLanguage, clearConfigSlice } = configSlice.actions;
export default configSlice.reducer;

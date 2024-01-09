import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
  name: "site",
  initialState: {
    lang: "en",
    showGptSearch: false,
  },
  reducers: {
    toggleShowGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { toggleShowGptSearch, changeLanguage } = siteSlice.actions;
export default siteSlice.reducer;

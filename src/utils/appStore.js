import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import siteSlice from "./siteSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    site: siteSlice,
  },
});
export default appStore;

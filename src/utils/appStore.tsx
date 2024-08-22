import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieListReducer from "./movieListSlice";

const appStore = configureStore({
  reducer: { userReducer, movieListReducer },
});

export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;

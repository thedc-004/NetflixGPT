import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: { userReducer },
});

export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;

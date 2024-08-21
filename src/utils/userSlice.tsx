import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  email: string | null;
  displayName: string;
  uid: string | null;
}

const nullData = {
  email: null,
  displayName: "user",
  uid: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: nullData,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removerUser: () => {
      return nullData;
    },
  },
});

export const { addUser, removerUser } = userSlice.actions;
export default userSlice.reducer;

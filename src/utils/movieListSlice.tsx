import { createSlice } from "@reduxjs/toolkit";

export interface movieDataInterface {
  original_title: string;
  id: number;
}

const movieListSlice = createSlice({
  name: "movieListSLice",
  initialState: [],
  reducers: {
    addMovies: (_state, action) => {
      return action.payload;
    },
  },
});

export const { addMovies } = movieListSlice.actions;
export default movieListSlice.reducer;

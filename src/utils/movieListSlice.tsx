import { createSlice } from "@reduxjs/toolkit";

export interface movieDataInterface {
  original_title: string | null;
  id: number | null;
  overview: string;
}

export interface mainMovieObjInterface {
  mainMovieObj: movieDataInterface;
}

export interface movieTrailerObj {
  name: string;
  id: string;
  key: string;
  type: string;
}

const movieDataArr: Array<movieDataInterface> = [];

const movieListSlice = createSlice({
  name: "movieListSlice",
  initialState: movieDataArr,
  reducers: {
    addMovies: (_state, action) => {
      return action.payload;
    },
  },
});

export const { addMovies } = movieListSlice.actions;
export default movieListSlice.reducer;

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

export interface MovieListItem {
  title: string;
  arr: Array<movieDataInterface>;
}

const movieDataArr: Array<MovieListItem> = [];

const movieListSlice = createSlice({
  name: "movieListsSlice",
  initialState: movieDataArr,
  reducers: {
    addMovies: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addMovies } = movieListSlice.actions;
export default movieListSlice.reducer;

import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_LIST_API } from "../utils/constants";
import { useEffect } from "react";
import { addMovies } from "../utils/movieListSlice";

function useGetMovieList() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(MOVIE_LIST_API, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addMovies({ arr: response.results, title: "Now Playing" }));
      })
      .catch((err) => console.error(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useGetMovieList;

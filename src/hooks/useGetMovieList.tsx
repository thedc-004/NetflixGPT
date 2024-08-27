import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovies } from "../utils/movieListSlice";
import { RootState } from "../utils/appStore";

function useGetMovieList(type: string) {
  const title = type
    .split("_")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");

  const movieList = useSelector(
    (state: RootState) => state?.movieListReducer
  ).filter((movie) => movie.title == title);

  const dispatch = useDispatch();

  useEffect(() => {
    if (movieList.length !== 0) return;
    fetch(`https://api.themoviedb.org/3/movie/${type}?page=1`, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addMovies({ arr: response.results, title }));
      })
      .catch((err) => console.error(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useGetMovieList;

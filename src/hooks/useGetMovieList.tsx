import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovies } from "../utils/movieListSlice";

function useGetMovieList(type: string) {
  const dispatch = useDispatch();

  const title = type
    .split("_")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
  console.log(title);

  useEffect(() => {
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

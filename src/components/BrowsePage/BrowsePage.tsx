import Header from "./Header";
import { API_OPTIONS } from "../../utils/constants.ts";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../../utils/movieListSlice.tsx";
import MovieList from "./MovieList.tsx";

function BrowsePage() {
  const [fetchedData, setFetchedData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        setFetchedData(response.results);
        dispatch(addMovies(response.results));
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <Header />
        {fetchedData.length !== 0 && <MovieList />}
      </div>
    </div>
  );
}

export default BrowsePage;

import { useSelector } from "react-redux";
import { RootState } from "../../utils/appStore";
import { movieDataInterface } from "../../utils/movieListSlice";

function MovieList() {
  const movieList = useSelector((store: RootState) => store?.movieListReducer);
  return (
    <div>
      {movieList.map((movie: movieDataInterface) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
    </div>
  );
}

export default MovieList;

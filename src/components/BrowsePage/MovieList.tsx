import { useSelector } from "react-redux";
import { RootState } from "../../utils/appStore";
import { movieDataInterface } from "../../utils/movieListSlice";

function MovieList() {
  const movieList = useSelector((store: RootState) => store.movieListReducer);
  console.log(movieList);
  return (
    <div>
      <h2>MovieList</h2>
      {movieList.map((movie: movieDataInterface) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
      <div>Hello world</div>
    </div>
  );
}

export default MovieList;

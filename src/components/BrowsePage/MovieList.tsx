import { useSelector } from "react-redux";
import { RootState } from "../../utils/appStore";
import { movieDataInterface, MovieListItem } from "../../utils/movieListSlice";

function MovieList({ movieObj }: { movieObj: MovieListItem }) {
  const movieList = useSelector((store: RootState) => store?.movieListReducer);

  const { title, arr } = movieObj;

  return (
    <div>
      {arr.map((movie: movieDataInterface) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
    </div>
  );
}

export default MovieList;

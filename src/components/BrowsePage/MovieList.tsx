import { movieDataInterface, MovieListItem } from "../../utils/movieListSlice";
import MovieCard from "./MovieCard";

function MovieList({ movieObj }: { movieObj: MovieListItem }) {
  const { title, arr } = movieObj;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">{title}</h2>
      <div className="flex overflow-x-scroll">
        {arr.map((movie: movieDataInterface) => {
          return <MovieCard movieObj={movie} />;
        })}
      </div>
    </div>
  );
}

export default MovieList;

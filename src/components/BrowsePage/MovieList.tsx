import { movieDataInterface, MovieListItem } from "../../utils/movieListSlice";
import MovieCard from "./MovieCard";

function MovieList({ movieObj }: { movieObj: MovieListItem }) {
  const { title, arr } = movieObj;

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-5">{title}</h2>
      <div className="flex overflow-x-scroll">
        {arr.map((movie: movieDataInterface, index) => {
          return <MovieCard movieObj={movie} key={"MovieCard0" + index} />;
        })}
      </div>
    </div>
  );
}

export default MovieList;

import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState } from "../../utils/appStore";

function MovieListContainer() {
  const movieListArray = useSelector(
    (store: RootState) => store?.movieListReducer
  );
  return (
    <div className="bg-black text-white px-24">
      <div className="-mt-64 relative z-50">
        {movieListArray.map((item, index) => {
          return <MovieList movieObj={item} key={"movieList0" + index} />;
        })}
      </div>
    </div>
  );
}

export default MovieListContainer;

// TODO: Give proper id to movielist and movielist container

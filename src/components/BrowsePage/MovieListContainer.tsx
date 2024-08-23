import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState } from "../../utils/appStore";

function MovieListContainer() {
  const movieListArray = useSelector(
    (store: RootState) => store?.movieListReducer
  );
  console.log(movieListArray);
  return (
    <div>
      {movieListArray.map((item) => {
        return <MovieList movieObj={item} key={item?.arr[0]?.id} />;
      })}
    </div>
  );
}

export default MovieListContainer;

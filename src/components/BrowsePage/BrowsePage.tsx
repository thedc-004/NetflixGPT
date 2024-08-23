import Header from "./Header";
import { useSelector } from "react-redux";
import MovieList from "./MovieList.tsx";
import { RootState } from "../../utils/appStore.tsx";
import MainContainer from "./MainContainer";
import useGetMovieList from "../../hooks/useGetMovieList.tsx";

function BrowsePage() {
  useGetMovieList();
  const movieList = useSelector((state: RootState) => state?.movieListReducer);

  return (
    <div>
      <div>
        <Header />
        {movieList.length !== 0 && (
          <>
            <MainContainer mainMovieObj={movieList[0]} />
            {/* <MovieList /> */}
          </>
        )}
      </div>
    </div>
  );
}

export default BrowsePage;

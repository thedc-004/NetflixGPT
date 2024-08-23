import Header from "./Header";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/appStore.tsx";
import MainContainer from "./MainContainer";
import useGetMovieList from "../../hooks/useGetMovieList.tsx";
import MovieListContainer from "./MovieListContainer.tsx";

function BrowsePage() {
  useGetMovieList("now_playing");
  useGetMovieList("upcoming");
  useGetMovieList("popular");
  useGetMovieList("top_rated");

  const movieList = useSelector((state: RootState) => state?.movieListReducer);

  if (movieList.length === 0) return;

  return (
    <div>
      <div>
        <Header />
        {movieList.length !== 0 && (
          <>
            <MainContainer
              mainMovieObj={
                movieList.filter((item) => item.title === "Now Playing")[0]
                  .arr[0]
              }
            />
            <MovieListContainer />
          </>
        )}
      </div>
    </div>
  );
}

export default BrowsePage;

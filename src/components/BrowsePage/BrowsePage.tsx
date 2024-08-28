import { useSelector } from "react-redux";
import { RootState } from "../../utils/appStore.tsx";
import MainContainer from "./MainContainer";
import useGetMovieList from "../../hooks/useGetMovieList.tsx";
import MovieListContainer from "./MovieListContainer.tsx";

function BrowsePage() {
  const movieList = useSelector((state: RootState) => state?.movieListReducer);

  useGetMovieList("now_playing");
  useGetMovieList("upcoming");
  useGetMovieList("popular");
  useGetMovieList("top_rated");

  if (movieList.length === 0) return;

  return (
    <div>
      <div>
        {movieList.length !== 0 &&
        movieList?.filter((item) => item.title === "Now Playing")[0]?.arr[0] ? (
          <>
            <MainContainer
              mainMovieObj={
                movieList?.filter((item) => item.title === "Now Playing")[0]
                  ?.arr[0]
              }
            />
            <MovieListContainer />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default BrowsePage;

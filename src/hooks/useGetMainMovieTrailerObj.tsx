import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { movieTrailerObj } from "../utils/movieListSlice";

function useGetMainMovieTrailerObj(id: number | null): Array<movieTrailerObj> {
  const [videoArray, setVideoArray] = useState<Array<movieTrailerObj>>([]);

  useEffect(() => {
    if (!id) return;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        const arrOfObj = response?.results.filter(
          (item: movieTrailerObj) => item.type === "Trailer"
        );
        setVideoArray(arrOfObj);
      })
      .catch((err) => console.error(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return videoArray;
}

export default useGetMainMovieTrailerObj;

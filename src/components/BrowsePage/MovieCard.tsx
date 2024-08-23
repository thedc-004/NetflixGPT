import { POSTER_CDN } from "../../utils/constants";
import { movieDataInterface } from "../../utils/movieListSlice";

function MovieCard({ movieObj }: { movieObj: movieDataInterface }) {
  const { id, original_title, poster_path } = movieObj;
  return (
    <div key={id} className="mx-3 mb-5">
      <div className="w-48">
        <img src={POSTER_CDN + poster_path} alt="" className="rounded" />
      </div>
      <p className="font-bold mt-5 text-center">{original_title}</p>
    </div>
  );
}

export default MovieCard;

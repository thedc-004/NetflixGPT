import { mainMovieObjInterface } from "../../utils/movieListSlice";
import useGetMainMovieTrailerObj from "../../hooks/useGetMainMovieTrailerObj";

function MainContainer({ mainMovieObj }: mainMovieObjInterface) {
  const trailerVideoArr = useGetMainMovieTrailerObj(mainMovieObj.id);

  if (trailerVideoArr.length === 0) return;
  const trailerVideo = trailerVideoArr[0];
  const { original_title, overview } = mainMovieObj;

  return (
    <div className="relative w-screen aspect-video bg-slate-500">
      <div className="absolute w-screen aspect-video pl-36 pt-[20%] text-white bg-gradient-to-r from-black/85 to-transparent">
        <div>
          <h2 className="text-4xl font-bold">{original_title}</h2>
          <p className="w-1/4 mt-5">{overview}</p>
        </div>
        <div className="flex gap-3 mt-6">
          <button className="px-8 py-3 bg-white rounded font-bold text-xl text-black hover:opacity-85">
            Play
          </button>
          <button className="px-8 py-3 bg-white rounded font-bold text-xl bg-opacity-30 hover:bg-opacity-40">
            More Info
          </button>
        </div>
      </div>
      <div className="w-full aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&autohide=1&mute=1&loop=1&controls=0&rel=0&playlist=${trailerVideo.key}`}
          title="YouTube video player"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}

export default MainContainer;

import { useRef } from "react";
import MovieListContainer from "../BrowsePage/MovieListContainer";

function SearchPage() {
  const searchValRef = useRef<HTMLInputElement>(null);

  function handleSearch() {
    console.log(searchValRef.current?.value);
  }

  return (
    <div className="bg-black flex flex-col pt-32 text-white">
      <div className="flex justify-center">
        <input
          ref={searchValRef}
          type="text"
          className="w-[30%] h-12 rounded-l-full outline-none px-5 text-lg text-black"
          placeholder="Tell us, Which type of movie would you like to see?"
        />
        <button
          className="px-3 py-2 hover:bg-red-600 bg-gradient-to-b from-black/60 to-red-600 font-bold rounded-r-full"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="mt-64">
        <MovieListContainer />
      </div>
    </div>
  );
}

export default SearchPage;

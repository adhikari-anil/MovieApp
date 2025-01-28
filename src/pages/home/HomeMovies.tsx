import { movies } from "@/constant/Movies";
import { StreamPlatform } from "@/_components/Dialog";
const HomeMovies = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="h-full overflow-y-auto">
        <div className="p-4 space-y-4 flex flex-col gap-4">
          {movies.map((movie, index) => (
            <div key={index} className="flex flex-row h-96 w-full gap-4">
              {/* StreamPlatform container */}
              <div className="w-full h-full">
                <StreamPlatform
                  trailerUrl={movie.trailerUrl}
                  movieDetails={movie}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-white p-2 font-mono text-2xl">Trending Movies</h1>
      <div className="p-2 grid grid-cols-5 gap-4 h-fit w-fit">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default HomeMovies;

const MovieCard = () => {
  return (
    <div className="relative flex flex-col gap-2 w-full">
      <div className="aspect-[3/4] rounded-lg overflow-hidden">
        <img
          src={movies[0].image}
          alt={movies[0].name}
          className="w-full h-full transition-all hover:scale-[1.15]"
        />
      </div>
      {/* Favourite section */}
      {/* description */}
      <div className="flex justify-between gap-4">
        <p>{movies[0].date?.substring(0, 4)}</p>
        <span className="rounded-full border border-gray-600 w-fit px-2">
          Movie
        </span>
        <span className="flex items-center gap-1">{movies[0].rating}</span>
      </div>
      <p className="w-full text-white">{movies[0].name}</p>
    </div>
  );
};

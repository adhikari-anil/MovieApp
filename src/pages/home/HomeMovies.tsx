import { movies } from "@/constant/Movies";
import { StreamPlatform } from "@/_components/Dialog";
const HomeMovies = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="h-full overflow-y-auto">
        <div className="p-4 space-y-4 flex flex-col gap-4">
          {movies.map((movie,index) => (
            <div key={index} className="flex flex-row h-48 w-full gap-4">
              {/* Image container */}
              <div className="w-[20%] h-full">
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* StreamPlatform container */}
              <div className="w-[80%] h-full">
                <StreamPlatform
                  trailerUrl={movie.trailerUrl}
                  movieDetails={movie}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMovies;

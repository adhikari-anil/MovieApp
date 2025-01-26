import { StreamPlatform } from "@/_components/Dialog";
import { tvShows } from "@/constant/TvShows";
const HomeTvSeries = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="h-full overflow-y-auto">
        <div className="p-4 space-y-4 flex flex-col gap-4">
          {tvShows.map((shows, index) => (
            <div key={index} className="flex flex-row h-48 w-full gap-4">
              {/* Image container */}
              <div className="w-[20%] h-full">
                <img
                  src={shows.image}
                  alt={shows.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* StreamPlatform container */}
              <div className="w-[80%] h-full">
                <StreamPlatform
                  trailerUrl={shows.trailerUrl}
                  movieDetails={shows}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTvSeries;

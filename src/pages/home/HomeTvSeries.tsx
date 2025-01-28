// import { StreamPlatform } from "@/_components/Dialog";
// import { tvShows } from "@/constant/TvShows";
// const HomeTvSeries = () => {
//   return (
//     <div className="h-full w-full overflow-hidden">
//       <div className="h-full overflow-y-auto">
//         <div className="p-4 space-y-4 flex flex-col gap-4">
//           {tvShows.map((shows, index) => (
//             <div key={index} className="flex flex-row h-48 w-full gap-4">
//               {/* Image container */}
//               <div className="w-[20%] h-full">
//                 <img
//                   src={shows.image}
//                   alt={shows.name}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>

//               {/* StreamPlatform container */}
//               <div className="w-[80%] h-full">
//                 <StreamPlatform
//                   trailerUrl={shows.trailerUrl}
//                   movieDetails={shows}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeTvSeries;

import { tvShows } from "@/constant/TvShows";
import { StreamPlatform } from "@/_components/Dialog";
const HomeTvSeries = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="h-full overflow-y-auto">
        <div className="p-4 space-y-4 flex flex-col gap-4">
          {tvShows.map((shows, index) => (
            <div key={index} className="flex flex-row h-96 w-full gap-4">
              {/* StreamPlatform container */}
              <div className="w-full h-full">
                <StreamPlatform
                  trailerUrl={shows.trailerUrl}
                  movieDetails={shows}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-white p-2 font-mono text-2xl">Trending Series</h1>
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

export default HomeTvSeries;

const MovieCard = () => {
  return (
    <div className="relative flex flex-col gap-2 w-full">
      <div className="aspect-[3/4] rounded-lg overflow-hidden">
        <img
          src={tvShows[0].image}
          alt={tvShows[0].name}
          className="w-full h-full transition-all hover:scale-[1.15]"
        />
      </div>
      {/* Favourite section */}
      {/* description */}
      <div className="flex justify-between gap-4">
        <p>{tvShows[0].date?.substring(0, 4)}</p>
        <span className="rounded-full border border-gray-600 w-fit px-2">
          Movie
        </span>
        <span className="flex items-center">{tvShows[0].rating}</span>
      </div>
      <p className="w-full text-white p-4">{tvShows[0].name}</p>
    </div>
  );
};
import { tvShows } from "@/constant/TvShows";
import { StreamPlatform } from "@/_components/Dialog";
import { useCallback, useEffect, useState } from "react";
import useType from "@/store/useType";
import useTrendingStore from "@/store/useContentData";

import {
  getMoviesTrailer,
  getTopTrendingMovies,
  getTopTrendingTvShows,
} from "@/lib/api/Movies/movies";
const HomeTvSeries = () => {
  const [topTrending, setTopTrending] = useState<any[]>([]);
  const setTrending = useTrendingStore((state)=>state.setTrending);
  const [topTrailer, setTopTrailer] = useState<any[]>([]);
  const type = useType((state) => state.type);

  const getTopTrending = useCallback(async () => {
    try {
      setTopTrending([]);
      if (type === "movies") {
        const response = await getTopTrendingMovies(1);
        setTopTrending(response.data.results);
        setTrending(topTrending);
        console.log("Top Trending: ",response.data.results);
        const id =topTrending[0].id;
        const trailer = await getMoviesTrailer(id);
        console.log("Trailer haru: ", trailer.data.results);
        console.log("Yo chai Trailer HO hai: ",trailer.data.results.filter((t: any) => t.type === "Trailer")[0])
        setTopTrailer(trailer.data.results);
      } else if(type==="tv") {
        console.log("Reached Here!");
        const response = await getTopTrendingTvShows(1);
        setTopTrending(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  }, [type]);

  useEffect(() => {
    getTopTrending();
  }, [type,getTopTrending]);

  return (
    <div className="h-full w-full overflow-hidden">
      <div className="h-full overflow-y-auto">
        <div className="p-4 space-y-4 flex flex-col gap-4">
          <div className="flex flex-row h-96 w-full gap-4">
            {/* StreamPlatform container */}
            <div className="w-full h-full">
              {type==="movies"?(
                <StreamPlatform
                  trailerUrl={tvShows[1].trailerUrl}
                  movieDetails={tvShows[1]}
                />
              ):(
                <StreamPlatform
                  trailerUrl={tvShows[0].trailerUrl}
                  movieDetails={tvShows[0]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-white p-2 font-mono text-2xl">Trending {type}</h1>
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 h-fit w-fit">
        {topTrending.map((movie, index) => (
          <MovieCard
            title={movie.original_title || movie.original_name}
            date={movie.release_date || movie.first_air_date}
            rating={movie.vote_average}
            poster_path={movie.poster_path}
            type={type}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeTvSeries;

interface props {
  title: string;
  rating: string;
  date: string;
  poster_path: string;
  type: string;
}

const MovieCard = ({ rating, title, poster_path, date, type }: props) => {
  const img_path = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <div className="relative flex flex-col gap-2 w-full">
      <div className="aspect-[3/4] rounded-lg overflow-hidden">
        <img
          src={img_path}
          alt="Hello World"
          className="w-full h-full transition-all hover:scale-[1.15]"
        />
      </div>
      {/* Favourite section */}
      {/* description */}
      <div className="flex p-2 justify-between gap-4">
        <p>{date?.substring(0, 4)}</p>
        <span className="rounded-full border border-gray-600 w-fit px-2">
          {type==="movies"? "Movie" : "Series"}
        </span>
        <span className="flex items-center">{`${rating}`.substring(0, 3)}</span>
      </div>
      <p className="w-full text-white p-2">{title}</p>
    </div>
  );
};

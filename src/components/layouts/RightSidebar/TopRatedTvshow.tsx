import Card from "./Card";
import { useCallback, useEffect, useState } from "react";
import { getTopTrendingMovies, getTopTrendingTvShows } from "@/lib/api/Movies/movies";
import { ScrollArea } from "@/components/ui/scroll-area";
import useType from "@/store/useType";

const TopRatedTvshow = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);
  const type = useType((state) => state.type);

  const getTopRatedShow = useCallback(async () => {
    try {
      setTopRatedMovies([]);
      if (type === "movies") {
        const response = await getTopTrendingMovies(1);
        console.log("From MovieAPI: ", response.data.results);
        setTopRatedMovies(response.data.results);
      } else {
        const response = await getTopTrendingTvShows(1);
        console.log("From MovieAPI: ", response.data.results);
        setTopRatedMovies(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  },[type]);
  useEffect(() => {
    getTopRatedShow();
  }, [getTopRatedShow]);
  return (
    <div className="flex flex-col gap-3 h-1/2">
      {type==="tv"?<h2> TopTvShows </h2>:<h2> TopMovies </h2>}
      <ScrollArea className="h-full">
        {topRatedMovies.map((movie, index) => (
          <Card
            title={movie.original_title||movie.original_name}
            date={movie.release_date||movie.first_air_date}
            rating={movie.vote_average}
            poster_path={movie.poster_path}
            key={index}
          />
        ))}
      </ScrollArea>
    </div>
  );
};

export default TopRatedTvshow;

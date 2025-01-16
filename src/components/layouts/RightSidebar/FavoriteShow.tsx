import Card from "./Card";
import { useEffect, useState } from "react";
import { getTopTrendingMovies } from "@/lib/api/Movies/movies";
import { ScrollArea } from "@/components/ui/scroll-area";

const FavoriteShow = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);
  const getToRatedShow = async () => {
    try {
      const response = await getTopTrendingMovies(1);
      console.log("From MovieAPI: ", response.data.results);
      setTopRatedMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToRatedShow();
  }, []);
  return (
    <div className="flex flex-col gap-6 h-1/2">
      <h2> FavouriteTvShow </h2>
      <ScrollArea className="h-full">
        {topRatedMovies.map((movie, index) => (
          <Card
            title={movie.original_title}
            date={movie.release_date}
            rating={movie.vote_average}
            poster_path={movie.poster_path}
            key={index}
          />
        ))}
      </ScrollArea>
    </div>
  );
};

export default FavoriteShow;

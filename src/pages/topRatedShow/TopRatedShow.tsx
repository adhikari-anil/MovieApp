import useType from "@/store/useType";
import useTrendingStore from "@/store/useContentData";

const TopRatedShow = () => {
  const type = useType((state) => state.type);
  const topTrending = useTrendingStore((state) => state.trending);
  console.log("Top-Rated-Shows: ", topTrending);
  
  return (
    <div className="flex flex-col">
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

export default TopRatedShow;

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
          {type === "movies" ? "Movie" : "Series"}
        </span>
        <span className="flex items-center">{`${rating}`.substring(0, 3)}</span>
      </div>
      <p className="w-full text-white p-2">{title}</p>
    </div>
  );
};

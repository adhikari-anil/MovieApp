import { StreamPlatform } from "@/_components/Dialog";
import { getMoviesTrailer } from "@/lib/api/Movies/movies";
// import { useCallback, useEffect, useState } from "react";
import useType from "@/store/useType";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTrendingStore from "@/store/useContentData";

interface Trailer {
    key: string;
}
const DetailandTrailer = () => {
    const id = useParams();
    console.log("Movie_id: ", id.movieId);
    const key = id.movieId!;
    console.log(key);
    const trailerId = parseInt(key, 10);
    console.log(trailerId);
    const type = useType((state) => state.type)
    const trending = useTrendingStore((state) => state.trending);
    console.log("Trending data's", trending);
    const movieInformation = trending.filter((movie) => movie.id == key);
    console.log("Movie info: ", movieInformation);
    const [isTrailer, setTrailer] = useState<Trailer>();

    const getTrailer = useCallback(async () => {
        try {
            const trailer = await getMoviesTrailer(trailerId);
            //setTrailer(trailer)
            console.log("Trailer response: ", trailer);
            const topTrailers = trailer.data.results.filter(
                (t: any) => t.type === "Trailer"
            )[0];
            console.log("Yo chai Trailer HO hai: ", topTrailers);
            setTrailer(topTrailers);
        } catch (error) {
            console.log("Error: ", error);
        }
    }, [type])
    useEffect(() => {
        getTrailer();
    }, [type, getTrailer]);
    return (
        <div className="h-full w-full overflow-hidden">
            <div className="h-full overflow-y-auto">
                <div className="p-4 space-y-4 flex flex-col gap-4">
                    <div className="flex flex-row h-96 w-full gap-4">
                        {/* StreamPlatform container */}
                        <div className="w-full h-full">
                            {type === "movies" && isTrailer ? (
                                <StreamPlatform trailerUrl={isTrailer?.key} movieInfo={movieInformation}/>
                            ) : (
                                <StreamPlatform trailerUrl={key} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {movieInformation.map((movie, index) =>
                <>
                    <h1 className="text-white p-2 font-mono text-2xl">{movie.original_title || movie.original_name}</h1>
                    <MovieCard
                        title={
                            movie.original_title || movie.original_name || "Undefined Title"
                        }
                        date={movie.release_date || movie.first_air_date || "Unknown Dates"}
                        rating={movie.vote_average}
                        poster_path={movie.poster_path}
                        type={type}
                        key={index}
                    />
                </>
            )}
        </div >
    )
};

export default DetailandTrailer;

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
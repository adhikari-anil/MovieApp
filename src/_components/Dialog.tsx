import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { PlayCircle, Info } from "lucide-react";

interface Movie{
  trailerUrl: string,
  movieDetails: any
}

export function StreamPlatform({ trailerUrl, movieDetails }: Movie) {
  const [isHovered, setIsHovered] = useState(false);

  // const getEmbedUrl = (url) => {
  //   const videoId = url.split("v=")[1];
  //   console.log(videoId);
  //   return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  // };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="relative w-full h-full cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Image */}
          {movieDetails.background && (
            <img
              src={movieDetails.background}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center 
              ${isHovered ? "bg-black bg-opacity-70" : "bg-black bg-opacity-40"}
              transition-all duration-300 rounded-lg`}
          >
            {/* Center Play Button */}
            <div className="flex flex-col items-center space-y-2 z-10">
              <PlayCircle className="w-12 h-12 text-white" />
              <span className="text-white font-medium">Watch Trailer</span>
            </div>

            {/* Movie Info Overlay */}
            {isHovered && (
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="text-lg font-bold">{movieDetails.name}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Info className="w-4 h-4" />
                  <span className="text-sm">
                    Rating: {movieDetails.rating}/10
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full bg-black bg-opacity-90">
        <DialogHeader className="absolute top-4 left-4 z-10">
          <DialogTitle className="text-white text-xl font-semibold">
            {movieDetails?.name}
          </DialogTitle>
        </DialogHeader>

        <div className="w-full h-full min-h-[80vh] flex items-center justify-center pt-12">
          <iframe
            className="w-full h-full aspect-video"
            src={trailerUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

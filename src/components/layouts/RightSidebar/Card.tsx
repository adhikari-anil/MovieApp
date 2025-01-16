import { AiFillStar } from "react-icons/ai";

interface movie {
  title: string;
  date: string;
  rating: string;
  poster_path: string;
}

const Card = ({ title, date, rating, poster_path }: movie) => {
  const img_path = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <div className="w-full flex gap-3 mb-4 cursor-pointer">
      <div className="w-1/4">
        <img
          src={img_path}
          alt="pic"
          loading="lazy"
          className="aspect-[3/4] rounded-lg "
        />
      </div>
      <div className="flex-1 h-[80px] flex flex-col justify-between">
        <div>
          <h4 className="text-white text-sm">{title}</h4>
          <p className="text-xs mt-1 text-gray-light">{date}</p>
        </div>
        <span className="flex items-center gap-1 text-xs text-gray-light">
          {rating} <AiFillStar className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
};

export default Card;

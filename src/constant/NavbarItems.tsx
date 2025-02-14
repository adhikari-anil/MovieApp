import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FiHome, FiSearch } from "react-icons/fi";

export const NavBarItems = [
  {
    name: "Home",
    icon: <FiHome />,
    path: "/home",
  },
  {
    name: "Search",
    icon: <FiSearch />,
    path: "/home/search/movies",
  },
  {
    name: "Favorites",
    icon: <AiOutlineHeart />,
    path: "/home/favorites/movies",
  },
  {
    name: "Top Rated Shows",
    icon: <AiOutlineStar />,
    path: "/home/top-rated/movies",
  },
];
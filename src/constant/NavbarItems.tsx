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
    path: "/search/",
  },
  {
    name: "Favorites",
    icon: <AiOutlineHeart />,
    path: "/favorites/",
  },
  {
    name: "Top Rated Shows",
    icon: <AiOutlineStar />,
    path: "/top-rated/",
  },
];
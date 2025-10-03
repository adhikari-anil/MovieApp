import { createBrowserRouter, Navigate } from "react-router-dom";
//import Search from "./pages/search/Search"
//import TopRatedShows from "./pages/topRatedShow/TopRatedShow"
//import Favourites from "./pages/favourite/Favourite"
import HomeTvSeries from "./pages/home/HomeTvSeries";
import App from "./App";
import Search from "./pages/search/Search";
//import FavoriteShow from "./components/layouts/RightSidebar/FavoriteShow";
import TopRatedShow from "./pages/topRatedShow/TopRatedShow";
import Favourite from "./pages/favourite/Favourite";
import DetailandTrailer from "./pages/details/DetailandTrailer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home/movies" replace />,
  },
  {
    path: "/home",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"movies"} replace /> },
      { path: "movies", element: <HomeTvSeries /> },
      { path: "movies/:movieId", element: <DetailandTrailer /> },
      { path: "tv-series", element: <HomeTvSeries /> },
      { path: "tv-series/:tvId", element: <DetailandTrailer /> },
      {
        path: "favorites",
        children: [
          { path: "movies", element: <Favourite /> },
          { path: "tv-series", element: <Favourite /> },
        ],
      },
      {
        path: "search",
        children: [
          { path: "movies", element: <Search /> },
          { path: "tv-series", element: <Search /> },
        ],
      },
      {
        path: "top-rated",
        children: [
          { path: "movies", element: <TopRatedShow /> },
          { path: "tv-series", element: <TopRatedShow /> },
        ],
      },
    ],
  },
]);

export default router;

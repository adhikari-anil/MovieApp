import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Layout from "./pages/layout"
import Search from "./pages/search/Search"
import TopRatedShows from "./pages/topRatedShow/TopRatedShow"
import Favourites from "./pages/favourite/Favourite"
import HomeMovies from "./pages/home/HomeMovies"
import HomeTvSeries from "./pages/home/HomeTvSeries"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to={"/homemovies"}/>}/>
            <Route path="/homemovies" element={<HomeMovies />} />
            <Route path="/homeshows" element={<HomeTvSeries />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favourites />} />
            <Route path="/top-rated" element={<TopRatedShows />} />
        </Route>
    )
)

export default router
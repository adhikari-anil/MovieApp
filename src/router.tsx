import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Home from "./pages/home/Home"
import Layout from "./pages/layout"
import Search from "./pages/search/Search"
import TopRatedShows from "./pages/topRatedShow/TopRatedShow"
import Favourites from "./pages/favourite/Favourite"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to={"/home"}/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favourites />} />
            <Route path="/top-rated" element={<TopRatedShows />} />
        </Route>
    )
)

export default router
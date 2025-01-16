import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
//import { Outlet } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import Home from "@/pages/home/Home";
import useType from "@/store/useType";

const HeadComponent = () => {
  const [movie, setToggle] = useState("tvshows");
  const setType = useType((state)=>state.setType);

  const handleMovieClick = ()=>{
    setType("movies");
    setToggle("movie")
  }
  const handleTvClick = ()=>{
    setType("tv");
    setToggle("tvshows");
  }
  const handleLoad = ()=>{
    setType("tv");
    console.log("Handaling load");
  }
  return (
    <div className="h-screen">
      <Tabs defaultValue="movies" className="h-full flex flex-col">
        <TabsList className="sticky top-0 z-10 justify-start">
          <TabsTrigger value="tvshows" onClick={handleTvClick} onLoad={handleLoad}>
            TV SHOWS
          </TabsTrigger>
          <TabsTrigger value="movies" onClick={handleMovieClick}>
            MOVIES
          </TabsTrigger>
        </TabsList>
        <div className="h-[calc(100%-48px)]">
          {movie==="movies"?(
            <TabsContent
            value={movie}
            className="h-full data-[state=active]:h-full"
          >
            <ScrollArea className="h-full">
              <Home />
            </ScrollArea>
          </TabsContent>
          ):null}
        </div>
      </Tabs>
    </div>
  );
};

export default HeadComponent;

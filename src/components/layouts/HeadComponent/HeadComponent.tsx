import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import useType from "@/store/useType";
//import { Outlet } from "react-router-dom";
import HomeMovies from "@/pages/home/HomeMovies";
import HomeTvSeries from "@/pages/home/HomeTvSeries";

const HeadComponent = () => {
  // const [movie, setToggle] = useState("tvshows");
  const setType = useType((state) => state.setType);
  const type = useType((state) => state.type);

  const handleMovieClick = () => {
    console.log("Movie clicked!");
    setType("movies");
  };
  const handleTvClick = () => {
    console.log("TV clicked!");
    setType("tv");
  };
  return (
    <div className="h-screen">
      <Tabs defaultValue="movies" className="h-full flex flex-col">
        <TabsList className="sticky top-0 z-10 justify-start">
          <TabsTrigger value="tvshows" onClick={handleTvClick}>
            TV SHOWS
          </TabsTrigger>
          <TabsTrigger value="movies" onClick={handleMovieClick}>
            MOVIES
          </TabsTrigger>
        </TabsList>
        <div className="h-[calc(100%-48px)]">
          {type === "movies" ? (
            <TabsContent
              value="movies"
              className="h-full data-[state=active]:h-full"
            >
              <ScrollArea className="h-full">
                <HomeMovies />
              </ScrollArea>
            </TabsContent>
          ) : (
            <TabsContent
              value="tvshows"
              className="h-full data-[state=active]:h-full"
            >
              <ScrollArea className="h-full">
                <HomeTvSeries />
              </ScrollArea>
            </TabsContent>
          )}
        </div>
      </Tabs>
    </div>
  );
};

export default HeadComponent;

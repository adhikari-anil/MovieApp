import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const HeadComponent = () => {
  const [movie, setToggle] = useState("tvshows");
  return (
    <div className="h-screen">
      <Tabs defaultValue="tvshows" className="h-full flex flex-col">
        <TabsList className="sticky top-0 z-10 justify-start">
          <TabsTrigger value="tvshows" onClick={() => setToggle("tvshows")}>
            TV SHOWS
          </TabsTrigger>
          <TabsTrigger value="movies" onClick={() => setToggle("movies")}>
            MOVIES
          </TabsTrigger>
        </TabsList>
        <div className="h-[calc(100%-48px)]">
          <TabsContent
            value={movie}
            className="h-full data-[state=active]:h-full"
          >
            <ScrollArea className="h-full">
              <Outlet />
            </ScrollArea>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default HeadComponent;

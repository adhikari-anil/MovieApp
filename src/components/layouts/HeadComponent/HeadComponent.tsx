import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HeadComponent = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="tvseries">Tv Series</TabsTrigger>
          <TabsTrigger value="movies">Movies</TabsTrigger>
        </TabsList>
        <TabsContent value="tvseries">
            TVSeries Here
        </TabsContent>
        <TabsContent value="movies">Movies Here</TabsContent>
      </Tabs>
    </div>
  );
};

export default HeadComponent;

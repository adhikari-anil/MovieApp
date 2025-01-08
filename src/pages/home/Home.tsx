import { Button } from "../../components/ui/button";

const Home = () => {
  return (
    // <div className="flex">
    //   <div className="flex">
    //     <img
    //       src="https://images.pexels.com/photos/12325254/pexels-photo-12325254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //       alt="Movie Picture"
    //       width={600}
    //       height={80}
    //     />
    //     <div className="z-10">
    //       <p>Name of Movie</p>
    //       <p>Rating *****</p>
    //       <p>Liked Percentage: 82%</p>
    //     </div>
    //   </div>
    // </div>
    <div className="relative w-full h-[400px] gap-5">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/12325254/pexels-photo-12325254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Movie Background"
      />

      {/* Overlay Text */}
      <div className="absolute top-0 right-0 z-10 bg-black bg-opacity-50 w-[50%] text-white p-4">
        <h1 className="text-lg font-bold">Name of Movie</h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          sint illo, deleniti, exercitationem quis in modi quibusdam incidunt
          praesentium laudantium fuga optio ratione vero, distinctio cum laborum
          facilis itaque error?
        </p>
        <div className="flex">
          <Button
            className="flex gap-3 text-[13px] border-gray-400 text-black rounded-full"
            variant={"outline"}
          >
            <h2> Watch Now</h2>
          </Button>
          <Button
            className="flex gap-3 text-[13px] border-gray-400 text-black rounded-full"
            variant={"outline"}
          >
            <h2> Explore </h2>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

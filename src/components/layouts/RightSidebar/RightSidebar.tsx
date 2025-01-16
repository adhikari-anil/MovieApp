import FavoriteShow from "./FavoriteShow"
import TopRatedTvshow from "./TopRatedTvshow"

const RightSidebar = () => {
  return (
    <div className="h-full lg:w-[400px] gap-5 p-5 flex flex-col items-center border-l-[0.5px] border-gray-dark/50">
        <TopRatedTvshow />
        <FavoriteShow />
    </div>
  )
}

export default RightSidebar
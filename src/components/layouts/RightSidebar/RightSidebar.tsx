import FavoriteShow from "./FavoriteShow"
import TopRatedTvshow from "./TopRatedTvshow"

const RightSidebar = () => {
  return (
    <div className="lg:h-full lg:w-[400px] lg:gap-5 lg:p-5 lg:flex lg:flex-col lg:items-center lg:border-l-[0.5px] lg:border-gray-dark/50 hidden">
        <TopRatedTvshow />
        <FavoriteShow />
    </div>
  )
}

export default RightSidebar
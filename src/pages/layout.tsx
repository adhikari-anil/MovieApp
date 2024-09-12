import RightSidebar from "@/components/layouts/RightSidebar/RightSidebar";
import Slidebar from "@/components/layouts/Slidebar/Slidebar";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <>
      <div className="h-screen flex justify-between w-full bg-black text-white">
        <Slidebar/>
        <Outlet />
        <RightSidebar />
      </div>
    </>
  );
};

export default layout;

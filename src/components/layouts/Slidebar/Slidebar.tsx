import { MdMenu } from "react-icons/md";
import { NavBarItems } from "@/constant/NavbarItems";
import MenuItem from "./MenuItem";
import GoogleSignIn from "@/components/GoogleSignIn";
import { useState } from "react";

const Slidebar = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      <div className="h-screen flex flex-col justify-between items-center p-5 border-r-[0.5px] border-r-gray-dark/50 transition-all">
        <div className="flex flex-col gap-10 bg-black text-white">
          <header className="flex gap-3 items-center  justify-start">
            <div
              className={`${isToggle ? "hidden" : "flex items-center gap-3"}`}
            >
              <img src="/logo.png" alt="logo" className={"w-6 h-6"} />
              <p className="text-lg">MovieStream</p>
            </div>
            <MdMenu
              className={isToggle?"flex justify-center items-center w-6 h-6": "w-6 h-6"}
              onClick={() => {
                setIsToggle(!isToggle);
              }}
            />
          </header>
          <div className="flex flex-col gap-8 p-4">
            <h5>Menu</h5>
            <div className="flex flex-col gap-3">
              {NavBarItems.map((item, index) => (
                <MenuItem
                  name={item.name}
                  path={item.path}
                  icon={item.icon}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <GoogleSignIn />
      </div>
    </>
  );
};

export default Slidebar;

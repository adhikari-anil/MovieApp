import { MdMenu } from "react-icons/md";
import { NavBarItems } from "@/constant/NavbarItems";
import MenuItem from "./MenuItem";
import GoogleSignIn from "@/components/GoogleSignIn";
import { useState } from "react";

const Slidebar = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      <div className={`${isToggle?"h-screen flex flex-col justify-between items-center p-5 border-r-[0.5px] border-r-gray-dark/50 transition-all w-fit":"h-screen flex flex-col justify-between items-center p-5 border-r-[0.5px] border-r-gray-dark/50 transition-all"}`}>
        <div className={`${isToggle?"flex flex-col items-center justify-center gap-5 bg-black text-white":"flex flex-col gap-10 bg-black text-white"}`}>
          <header className="flex gap-3 items-center  justify-start">
            <div
              className={`${isToggle ? "hidden" : "md:flex md:items-center md:gap-3 hidden"}`}
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
          <div className={`${isToggle?"flex flex-col items-center gap-8 p-4":"flex flex-col gap-8 p-2"}`}>
            <h5>Menu</h5>
            <div className={`${isToggle?"flex flex-col justify-center items-center w-fit gap-3":"flex flex-col justify-center gap-3"}`}>
              {NavBarItems.map((item, index) => (
                <MenuItem
                  name={item.name}
                  path={item.path}
                  icon={item.icon}
                  isToggle={isToggle}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <GoogleSignIn isToggle={isToggle} />
      </div>
    </>
  );
};

export default Slidebar;

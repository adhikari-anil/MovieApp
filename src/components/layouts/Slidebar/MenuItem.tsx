import { Link } from "react-router-dom";
import { IMenuProps } from "@/types/mediaTypes";

const MenuItem = ({ name, icon, path, isToggle }: IMenuProps) => {
  return (
    <Link
      to={path}
      className={`${
        isToggle
          ? "flex justify-center items-center gap-5"
          : "flex items-center gap-5"
      }`}
    >
      <div
        className={`${
          isToggle ? "flex justify-center items-center gap-5" : "flex gap-3"
        }`}
      >
        <div className={`${isToggle ? "w-10 h-10" : "p-1"}`}>{icon}</div>
        <div className={`${isToggle ? "hidden" : ""}`}>{name}</div>
      </div>
    </Link>
  );
};

export default MenuItem;

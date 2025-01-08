import { Link } from "react-router-dom";

interface IMenuProps {
    name: string;
    icon: JSX.Element;
    path: string;
    isToggle: boolean
}

const MenuItem = ({name,icon,path, isToggle}: IMenuProps) => {
    //const {pathname} = useLocation();

  return (
    <Link to={path} className={`${isToggle?"flex justify-center items-center gap-5":"flex items-center gap-5"}`}>
      <div className={`${isToggle?"flex gap-5":"flex gap-5"}`}>
        <span className={`${isToggle?"w-10 h-10 flex justify-center items-center":""}`}>{icon}</span>
        <div className={`${isToggle?"hidden":""}`}>{name}</div>
      </div>
    </Link>
  )
}

export default MenuItem
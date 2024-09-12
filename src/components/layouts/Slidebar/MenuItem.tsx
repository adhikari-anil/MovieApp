import { Link } from "react-router-dom";

interface IMenuProps {
    name: string;
    icon: JSX.Element;
    path: string;
}

const MenuItem = ({name,icon,path}: IMenuProps) => {
    //const {pathname} = useLocation();

  return (
    <Link to={path}>
      <div className="flex items-center gap-3">
        <span>{icon}</span>
        <div>{name}</div>
      </div>
    </Link>
  )
}

export default MenuItem
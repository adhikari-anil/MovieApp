import { FcGoogle } from "react-icons/fc"
import { Button } from "./ui/button"

const GoogleSignIn = ({isToggle}: any) => {
  return (
    <div>
        <Button className="flex gap-3 text-[13px] border-gray-400 text-black rounded-full" variant={"outline"}>
            <FcGoogle className="w-6 h-6"/>
            <h2 className={`${isToggle?"hidden":""}`}>SignIn with Google</h2>
        </Button>
    </div>
  )
}

export default GoogleSignIn
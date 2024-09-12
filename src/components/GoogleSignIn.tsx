import { FcGoogle } from "react-icons/fc"
import { Button } from "./ui/button"

const GoogleSignIn = () => {
  return (
    <div>
        <Button className="flex gap-3 text-[13px] border-gray-400 text-black rounded-full" variant={"outline"}>
            <FcGoogle className="w-6 h-6"/>
            <h2>SignIn with Google</h2>
        </Button>
    </div>
  )
}

export default GoogleSignIn
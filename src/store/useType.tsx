import {create} from "zustand";

interface IType{
    type: string,
    setType: (tye: string)=>void;
}

const useType = create<IType>((set)=>({
    type: "movies",
    setType: (type)=>{
        set({type})
    },
}));

export default useType;

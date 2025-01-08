import { create} from "zustand";

interface IinitialState {
    isMenuToggle: boolean;
    toggleMenu: ()=>void;
}

const useMenuToggle = create<IinitialState>((set)=>({
    isMenuToggle: false,
    toggleMenu: ()=>{
        set((state)=>({isMenuToggle: !state.isMenuToggle}))
    }
}))

export default useMenuToggle
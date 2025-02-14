import {create} from "zustand";

interface IContentData {
    trending: any[],
    setTrending: (datas: any[])=>void,
}

const useTrendingStore = create<IContentData>((set)=>({
    trending: [],
    setTrending: (datas)=>set({trending: datas}),
}));

export default useTrendingStore;
import axiosInstance from "../axiosInstance";

export const getTopTrendingMovies = async (pageno: number)=>{
    const response = await axiosInstance.get(`/movie/top_rated?language=en-US&page=${pageno}`);
    return response;
}

export const getTopTrendingTvShows = async (pageno: number)=>{
    const response = await axiosInstance.get(`/tv/top_rated?language=en-US&page=${pageno}`);
    return response;
}

export const getMoviesTrailer = async (id:number)=>{
    const response = await axiosInstance.get(`/movie/${id}/videos?language=en-US`);
    return response;
}
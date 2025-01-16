import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

axiosInstance.interceptors.request.use((config)=>{
    const token = import.meta.env.VITE_THE_MOVIE_DB_BEARER_TOKEN;
    console.log(token);
    console.log(import.meta.env);
    if(token){
        config.headers["Authorization"]=`Bearer ${token}`
    }
    return config;
})

export default axiosInstance;
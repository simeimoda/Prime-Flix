import axios from 'axios';

//Base da URL: //URL DA API: https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=dc60699e07c005529f979a82a007b3d5

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;

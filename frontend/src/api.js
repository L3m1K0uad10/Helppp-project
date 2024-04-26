import axios from "axios"
import { ACCESS_TOKEN } from "./constants";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;

//https://stackoverflow.com/questions/78224965/unable-to-use-env-files-with-vite-and-vue-3#:~:text=The%20error%20you%20are%20encountering,trying%20to%20access%20the%20variables.
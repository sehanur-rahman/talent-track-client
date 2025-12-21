import axios from "axios";

export default function useAxiosSecure() {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
    });

    instance.interceptors.request.use((config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        } else {
            delete config.headers.authorization;
        }
        return config;
    });

    return instance;
}

import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    withCredentials: false,
});

// export default axiosInstance;
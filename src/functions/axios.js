import axios from "axios";

// Read the API base URL and credential setting from Vite env vars (VITE_*)
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
const WITH_CREDENTIALS = import.meta.env.VITE_API_WITH_CREDENTIALS === 'true';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    withCredentials: WITH_CREDENTIALS,
});

export default axiosInstance;
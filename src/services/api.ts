import axios from "axios";
import { useNavigate } from "react-router-dom";


const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  
});

let navigateRef:any;
export const setNavigate = (navigate:any) => {
  navigateRef = navigate;
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token"); 
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("auth_token");
      if (navigateRef) {
        navigateRef("/login");
      } else {
        window.location.href = "/";
      }
      alert("Tu sesión ha expirado. Por favor inicia sesión nuevamente.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
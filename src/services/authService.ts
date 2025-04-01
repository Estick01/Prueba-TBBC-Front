import { FormDataReguister } from "../types/api";
import axiosInstance from "./api";


export const registerUser = async (formData: FormDataReguister) => {
    try {
        const response = await axiosInstance.post("/auth/register", formData);
        return response;
    } catch (error) {
        throw new Error("Error registering user");
    }
};

export const loginUserService = async (formData: { username: string; password: string }) => {
    try {
        const response = await axiosInstance.post(`/auth/login`, formData, 
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("Invalid credentials");
    }
};
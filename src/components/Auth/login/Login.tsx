import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { loginUserService } from "../../../services/authService";
import { useNavigate } from "react-router-dom";



const Login: React.FC = () => {
    
    const [formData, setFormData] = useState<{ username: string; password: string }>({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const [error, setError] = useState<string>("");
    const [formErrors, setFormErrors] = useState<{ username: string; password: string }>({
        username: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors: { username: string; password: string } = {
            username: "",
            password: "",
        };

        if (!formData.username) {
            errors.username = "Username is required";
        }

        if (!formData.password) {
            errors.password = "Password is required";
        }

        setFormErrors(errors);

        return !Object.values(errors).some((error) => error !== "");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await loginUserService(formData);
                localStorage.setItem("auth_token", response.token);
                navigate("/contacts");
            } catch (err) {
                setError("Invalid credentials");
                console.error(err);
            }
        }
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <LoginForm
                formData={formData}
                handleChange={handleChange}
                formErrors={formErrors}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default Login;

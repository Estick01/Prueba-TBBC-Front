import React, { useState } from "react";

import RegisterForm from "./RegisterForm";
import { FormDataReguister } from "../../../types/api";
import { registerUser } from "../../../services/authService";
import { useNavigate } from "react-router-dom";


const Register: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormDataReguister>({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState<string>("");
    const [formErrors, setFormErrors] = useState<{
        username: string;
        email: string;
        password: string;
    }>({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors: { username: string; email: string; password: string } = {
            username: "",
            email: "",
            password: "",
        };

        if (!formData.username) {
            errors.username = "Username is required";
        }

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
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
                const response:any = await registerUser(formData);
                alert(response.message)
                navigate("/");
            } catch (err) {
                setError("Error creating user");
            }
        }
    };

    return (
        <div>

            {error && <p>{error}</p>}
            <RegisterForm
                formData={formData}
                handleChange={handleChange}
                formErrors={formErrors}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default Register;
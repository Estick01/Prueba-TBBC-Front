import React from "react";
import { FormDataReguister } from "../../../types/api";


interface Props {
    formData: FormDataReguister;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formErrors: { username: string; email: string; password: string };
    handleSubmit: (e: React.FormEvent) => void;
}

const RegisterForm: React.FC<Props> = ({
    formData,
    handleChange,
    formErrors,
    handleSubmit,
}) => {
    return (
        <section>
            <form onSubmit={handleSubmit}>
            <h1>Register</h1>
                <div className="inputbox">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <label>Username</label>
                    {formErrors.username && (
                        <p style={{ color: "red" }}>{formErrors.username}</p>
                    )}
                </div>
                <div className="inputbox">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    {formErrors.email && (
                        <p style={{ color: "red" }}>{formErrors.email}</p>
                    )}
                </div>
                <div className="inputbox">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    {formErrors.password && (<p style={{ color: "red" }}>{formErrors.password}</p>)}
                </div>
                <button type="submit">Register</button>
            </form>
        </section>
    );
};

export default RegisterForm;
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {formErrors.username && <p style={{ color: "red" }}>{formErrors.username}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formErrors.password && <p style={{ color: "red" }}>{formErrors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;

interface LoginFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { username: string; password: string };
  formErrors: { username: string; password: string };
}

const LoginForm: React.FC<LoginFormProps> = ({
  handleSubmit,
  handleChange,
  formData,
  formErrors,
}) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="inputbox">
          <span></span>
          <input
            type="text"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
          />
          <label>User</label>
          {formErrors.username && <p>{formErrors.username}</p>}
        </div>
        <div className="inputbox">
          <span></span>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <label>Password</label>
          {formErrors.password && <p>{formErrors.password}</p>}
        </div>
        <button type="submit">Log in</button>
        <div className="register">
          <p>
            Don't have an account? <a href="register">Register</a>
          </p>
        </div>
      </form>
    </section>
);
};


export default LoginForm;

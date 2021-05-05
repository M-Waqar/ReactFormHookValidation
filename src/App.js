import React, { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [login, setLogin] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const btnclick = (data) => {
    console.log(data);
    setLogin(data);
  };

  return (
    <div className="container mt-5">
      <div className="col-6 offset-3 shadow p-5">
        <form onSubmit={handleSubmit(btnclick)}>
          <h1 className="text-primary text-center">Login Form</h1>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="text"
              {...register("email", {
                required: { value: true, message: "email is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
                minLength: {
                  value: 10,
                  message: "must be 10 character long",
                },
              })}
              className="form-control"
              placeholder="Enter email"
            />

            {errors && errors.email && (
              <small className="form-text text-muted">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
                minLength: {
                  value: 5,
                  message: "must be grater then 5",
                },
                pattern: {
                  value: /\d/,
                  message: "must contains number",
                },
              })}
              className="form-control"
              placeholder="Enter Password"
            />
            {errors && errors.password && (
              <small className="form-text text-muted">
                {errors.password.message}
              </small>
            )}
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              {...register("remember")}
              className="form-check-input"
            />
            <label className="form-check-label">Remember Me</label>
          </div>
          <button type="submit" className="mt-2 btn btn-primary btn-block">
            Submit
          </button>
          <p>{JSON.stringify(login)}</p>
        </form>
      </div>
    </div>
  );
}

export default App;

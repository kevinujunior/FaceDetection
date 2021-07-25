import React from "react";

const Login = () => {
  const handleSubmit = () => {};

  return (
    <div className="login">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {};
  var history = useHistory();

  useEffect(() => {
    history.replace("/login");
  }, [history]);
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

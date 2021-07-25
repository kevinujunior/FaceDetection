import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

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
      <span className="or">or connect with</span>
      <div className="social">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-google"></i>
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-github"></i>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { postExistingAuth } from "../../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      postExistingAuth({
        username: username,
        password: password,
      });
    }
  };
  var history = useHistory();

  useEffect(() => {
    history.replace("/login");
  }, [history]);
  return (
    <div className="login_container">
      <div className="login">
        <h2>Login Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
    </div>
  );
};

export default Login;

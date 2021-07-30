import React, { useEffect, useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { postExistingAuth } from "../../api";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      postExistingAuth(
        {
          username: username,
          password: password,
        },
        history
      );
    }
  };
  var history = useHistory();

  useEffect(() => {
    history.replace("/login");
  }, [history]);
  return (
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
    </div>
  );
};

export default Login;

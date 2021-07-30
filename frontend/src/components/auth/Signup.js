import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { postNewAuth } from "../../api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  var history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && password === confirmPassword) {
      postNewAuth(
        {
          username: username,
          password1: password,
          password2: confirmPassword,
        },
        history
      );
    }
  };

  useEffect(() => {
    history.replace("/signup");
  }, [history]);
  return (
    <div className="login">
      <h2>Sign-up Account</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign-up</button>
      </form>
      <span className="or">
        <span>or connect with</span>
      </span>
      <div className="social">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-google"></i>
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-github"></i>
      </div>
    </div>
  );
};

export default Register;

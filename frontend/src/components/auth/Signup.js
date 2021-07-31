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
      const regex = /^[a-zA-Z0-9_]{8,}[a-zA-Z]+[0-9]*$/;
      if (regex.test(username) && regex.test(password)) {
        postNewAuth(
          {
            username: username,
            password1: password,
            password2: confirmPassword,
          },
          history
        );
        alert("Signup successfully!");
      } else
        alert(
          "Username or password is not valid! Both should-\n • contain atleast 8 alphanumeric characters\n • contain atleast one alphabet\n • numbers are optional."
        );
    }
  };

  useEffect(() => {
    history.replace("/signup");
  }, [history]);
  return (
    <div className="login_container">
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
    </div>
  );
};

export default Register;

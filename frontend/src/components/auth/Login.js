import React, { useEffect, useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { postExistingAuth } from "../../api";
import GitHubLogin from "react-github-login";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

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

  const responseGoogle = (response) => {
    console.log(response);
  };

  const fbResponse = (response) => {
    console.log(response);
  };

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
      <span className="or">or connect with</span>
      <GoogleLogin
        clientId="579043395450-e68o76r9cag3d8vcg625qld2uiai4o06.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <FacebookLogin
        textButton="LOGIN WITH FACEBOOK"
        appId="992007751609658"
        fields="name,email,picture"
        callback={fbResponse}
      />
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

import React, { useEffect, useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { postExistingAuth, responseGoogle, loginFb } from "../../api";
import GitHubLogin from "react-github-login";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";
import { LinkedIn } from "react-linkedin-login-oauth2";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      const regex = /^[a-zA-Z0-9_]{8,}[a-zA-Z]+[0-9]*$/;
      if (regex.test(username) && regex.test(password)) {
        postExistingAuth(
          {
            username: username,
            password: password,
          },
          history
        );
        alert("Login successfully!");
      } else
        alert(
          "Username or password is not valid! Both should-\n • contain atleast 8 alphanumeric characters\n • contain atleast one alphabet\n • numbers are optional."
        );
    }
  };

  const googleResponse = async (response) => {
    responseGoogle(response, history);
  };

  const fbResponse = (response) => {
    loginFb(response, history);
  };

  const onSuccess = (response) => {
    console.log(response);
  };
  const onFailure = (response) => {
    console.error(response);
  };
  useEffect(() => {
    history.replace("/login");
  }, [history]);

  const githubLogin = async () => {
    const res = await axios.post(
      "https://mamun-facedetector.herokuapp.com/rest_auth/github/",
      { access_token: "Some token" }
    );
    console.log(res);
  };

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
        <div className="auth social">
          <GoogleLogin
            clientId="579043395450-e68o76r9cag3d8vcg625qld2uiai4o06.apps.googleusercontent.com"
            onSuccess={googleResponse}
            onFailure={googleResponse}
            render={(renderProps) => (
              <div className="social">
                <i
                  className="bi bi-google"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                ></i>
              </div>
            )}
          />
          <FacebookLogin
            textButton="LOGIN WITH FACEBOOK"
            appId="992007751609658"
            fields="name,email,picture"
            callback={fbResponse}
            render={(renderProps) => (
              <div className="social">
                <i className="bi bi-facebook" onClick={renderProps.onClick}></i>
              </div>
            )}
          />
          <i className="bi bi-github" onClick={githubLogin}></i>
          {/* <GitHubLogin
            clientId="5ab51f75942a9cbeb6fd"
            redirectUri="https://mamun-facedetector.herokuapp.com/"
            onSuccess={onSuccess}
            onFailure={onFailure}
          /> */}
        </div>
        {/* <div className="social">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-google"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-github"></i>
        </div> */}
      </div>
    </div>
  );
};

export default Login;

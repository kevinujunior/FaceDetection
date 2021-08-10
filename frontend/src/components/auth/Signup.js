import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { postNewAuth, responseGoogle, loginFb } from "../../api";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useAlert } from "react-alert";

const Register = () => {
  const alert = useAlert();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  var history = useHistory();

  const googleResponse = async (response) => {
    responseGoogle(response, history);
  };

  const fbResponse = (response) => {
    loginFb(response, history);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      alert.show("Please enter all the details", { type: "error" });
    } else if (password !== confirmPassword || password.length < 8) {
      alert.show("Passwords do not match");
    }

    postNewAuth(
      {
        username: username,
        password1: password,
        password2: confirmPassword,
      },
      history
    );
  };

  useEffect(() => {
    history.push("/signup");
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
        <span className="or">or connect with</span>

        <div className="auth">
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
        </div>

        {/* <span className="or">
          <span>or connect with</span>
        </span>
        <div className="social">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-google"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-github"></i>
        </div> */}
      </div>
    </div>
  );
};

export default Register;

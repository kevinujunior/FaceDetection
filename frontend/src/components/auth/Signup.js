import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const handleSubmit = () => {};
  var history = useHistory();

  useEffect(() => {
    history.replace("/signup");
  }, [history]);
  return (
    <div className="login">
      <h2>Sign-up Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
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

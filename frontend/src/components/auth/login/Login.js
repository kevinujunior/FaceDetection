import React from "react";
import Navbar from "../../Navbar";

const Login = () => {
  return (
    <div>
      <div className="header">
        Login
      </div>
      <div className="content">
        <div className="image">
          <img src="" alt=""/>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password"/>
          </div>
          <div className="footer">
            <button type="button" className="btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

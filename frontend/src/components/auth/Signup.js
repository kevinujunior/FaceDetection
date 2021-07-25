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
    </div>
  );
};

export default Register;

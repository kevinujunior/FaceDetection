import React, { useState, useEffect } from "react";
import "../resources/styles.css";
import { Link, NavLink, Redirect } from "react-router-dom";
import { isAuthenticated, signout } from "../api";
import axios from "axios";

const Navbar = () => {
  const [key, setKey] = useState(false);

  useEffect(() => {
    const mykey = isAuthenticated();
    setKey(mykey);
  }, []);

  const logout = async () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("key");
    }
    // await axios.get("https://mamun-facedetector.herokuapp.com/logout");
    // // console.log(res.data);
    window.location.reload();
  };

  return (
    <div className="nav_header">
      <div className="nav_container">
        <div className="brand">
          <Link to="/" className="nav_link nav_logo">
            Face Detection
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/about"
                activeClassName="nav_active"
                className="nav_link"
              >
                About
              </NavLink>
            </li>
            {key ? (
              <li>
                <NavLink
                  to="/"
                  activeClassName="nav_active"
                  className="nav_link"
                  onClick={logout}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    activeClassName="nav_active"
                    className="nav_link"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    activeClassName="nav_active"
                    className="nav_link"
                  >
                    Sign-up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

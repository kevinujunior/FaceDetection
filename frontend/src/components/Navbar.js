import React from "react";
import "../resources/styles.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

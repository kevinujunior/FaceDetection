import React from "react";
import "../resources/styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav_header">
      <div className="nav_container">
        <div className="brand">
          <Link
            to="/"
            className="nav_link_"
            style={{
              fontFamily: "Lobster, cursive",
              fontSize: "2.7em ",
              textDecoration: "none",
            }}
          >
            Face Detection
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                to="/about"
                className="nav_link"
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="nav_link"
                style={{ textDecoration: "none" }}
              >
                login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="nav_link"
                style={{ textDecoration: "none" }}
              >
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

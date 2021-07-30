import React, { useState, useEffect } from "react";
import "../resources/styles.css";
import { Link, NavLink, Redirect } from "react-router-dom";
import { isAuthenticated, signout } from "../api";
import axios from "axios";
import styled from "styled-components";

const Navbar = () => {
  const [key, setKey] = useState(false);
  const [check, setCheck] = useState(false);

  const UL = styled.ul`
    @media screen and (max-width: 500px) {
      display: ${(props) => (props.check ? "flex" : "none")} !important;
      flex-direction: column;
    }
  `;

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
        <div className="nav_brand">
          <Link to="/" className="nav_link nav_logo">
            Face Detection
          </Link>
          <input
            type="checkbox"
            id="burger"
            value={check}
            onChange={() => setCheck(!check)}
          />
          <label for="burger" className="nav_burger">
            <i
              className="bi bi-list nav_list"
              style={check ? { display: "none" } : { display: "block" }}
            ></i>
            <i
              className="bi bi-x"
              style={!check ? { display: "none" } : { display: "block" }}
            ></i>
          </label>
        </div>
        <UL check={check}>
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
        </UL>
      </div>
    </div>
  );
};

export default Navbar;

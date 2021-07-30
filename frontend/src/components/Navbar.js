import React, { useState } from "react";
import "../resources/styles.css";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [check, setCheck] = useState(false);

  const UL = styled.ul`
    @media screen and (max-width: 500px) {
      display: ${(props) => (props.check ? "flex" : "none")} !important;
      flex-direction: column;
    }
  `;

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
        </UL>
      </div>
    </div>
  );
};

export default Navbar;

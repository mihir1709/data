import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./head.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ marginBottom: "20px" }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            DATA-STRUCTURE
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dbms"
                className="nav-link"
              >
                Introduction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cpp"
                className="nav-link"
              >
                Objectives
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listofexp"
                className="nav-link"
              >
                List Of Experiments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/target"
                className="nav-link"
              >
                Target Audience
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { Link, NavLink } from "react-router-dom";
// React font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="www.google.com">
          <p class="logo">Portfolio</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff" }}
          ></FontAwesomeIcon>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="www.google.com">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

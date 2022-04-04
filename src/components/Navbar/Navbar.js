import React from "react";
import Typed from "react-typed";

// React font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a
          className="navbar-brand"
          href="https://www.linkedin.com/in/david-w-079841213/"
          rel="noreferrer"
          target="_blank"
        >
          <p class="logo">David's Portfolio</p>
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
            <li className="nav-item">
              <a className="nav-link" href="#about-me">
                About Me
              </a>
            </li>
            <li className="nav-item active">
              {/* <a className="nav-link" href="/">
                Home
              </a> */}
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/david-w-079841213/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#about-me">
                About Me
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://docs.google.com/document/d/1PajyFS85ZYu0WB6as7bPrMM4HNGvbPwNIKM44XK_AGo/edit?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
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

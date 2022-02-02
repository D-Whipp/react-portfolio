import React from "react";
// React font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
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
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-me">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://docs.google.com/document/d/1_NutIvUj36eHWeuiLrZqElTc1U--REEkUjQ60fSyCNo/edit?usp=sharing"
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

{
  /* <a href="https://docs.google.com/document/d/1_NutIvUj36eHWeuiLrZqElTc1U--REEkUjQ60fSyCNo/edit#heading=h.y7d3xdxnr44m"> */
}
import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Fullstack Web Developer</h1>
        <Typed
          className="typed-text"
          strings={["JavaScript", "React", "HTML", "CSS", "Bootstrap"]}
          typeSpeed={70}
          backSpeed={30}
          loop
        ></Typed>
        <a href="https://www.youtube.com/" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;

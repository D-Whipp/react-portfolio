import React from "react";
import Typed from "react-typed";
import { useState } from "react";
import Contact from "../Contact/Contact";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Fullstack Web Developer</h1>
        <Typed
          className="typed-text"
          strings={[
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "React",
            "Node",
            "Git",
            "Github",
          ]}
          typeSpeed={70}
          backSpeed={30}
          loop
        ></Typed>
        <a className="btn-main-offer" onClick={() => setIsToggled(!isToggled)}>
          Contact Me
        </a>
        {isToggled && <Contact></Contact>}
      </div>
    </div>
  );
};

export default Header;

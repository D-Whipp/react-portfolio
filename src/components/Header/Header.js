import React from "react";
import Typed from "react-typed";
import { useState } from "react";
import Contact from "../Contact/Contact";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web Developer</h1>
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
          typeSpeed={10}
          backSpeed={20}
          loop
        ></Typed>
        <a href="mailto: dwhipp88@gmail.com">
          <Typed
            className="typed-text"
            strings={["dwhipp88@gmail.com"]}
            typeSpeed={70}
            backSpeed={30}
            loop
          ></Typed>
        </a>

        <a className="btn-main-offer" onClick={() => setIsToggled(!isToggled)}>
          Contact Me
        </a>
        {/* <h2 className="btn-main-offer">Email me: dwhipp88@gmail.com</h2> */}
        {/* <a className="btn-main-offer" href="mailto: dwhipp88@gmail.com">Email me - dwhipp88@gmail.com</a> */}
        {isToggled && <Contact></Contact>}
      </div>
    </div>
  );
};

export default Header;

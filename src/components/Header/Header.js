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
        {/* <button onClick={ () -> setIsToggled(!isToggled)}>Toggled</button> */}

        {/* <form
          action="https://formsubmit.co/d9f0a51a557ad1b4229c95886001a12a"
          method="post"
        >
          <input
            type="text"
            name="name"
            placeholder="Your contact info"
            required
          ></input>
          <input type="email" name="email" placeholder="Email" required></input>
          <button type="submit">Send</button>
        </form> */}
      </div>
    </div>
  );
};

export default Header;

import React from "react";

function Contact() {
  return (
    <div id="contact-me">
      <form
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

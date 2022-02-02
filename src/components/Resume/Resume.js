import React from "react";

function Resume() {
  return (
    <div id="resume" className="resume-form">
      {/* <h1>Resume Coming Soon!</h1> */}
        <div className="resume-doc">
          <embed
            src="../resume/Resume.pdf"
            type="application/pdf"
            width="100%"
            height="600px"
          />
        </div>
      {/* <a href="https://docs.google.com/document/d/1_NutIvUj36eHWeuiLrZqElTc1U--REEkUjQ60fSyCNo/edit#heading=h.y7d3xdxnr44m">
        Resume */}
        {/* <embed
          src="../images/'Test Resume.pdf'"
          type="application/pdf"
          width="100%"
          height="600px"
        /> */}
      {/* </a> */}
    </div>
  );
}

export default Resume;

import React from "react";
import img from "../../src/images/fixing-bugs.svg";

const styleTitle = {
  fontWeight: "550",
  fontSize: "2rem",
};
const styleMainContent = {
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
function Section1() {
  return (
    <div className="section-1">
      <div className="container">
        <div className="main-content" style={styleMainContent}>
          <p style={styleTitle}>Hi, I'm Visay Vang</p>
          <p className="padding">Frontend Developer</p>
          <p className="padding">Available for Work</p>
          <div className="img-div">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;

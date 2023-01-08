import React from "react";
import img from "../../src/images/passwordgenerator.jpg";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";

const Project = () => {
  return (
    <div className="project-section">
      <div className="container center-content">
        <div className="project-content">
          <div className="project-col">
            <p className="title">Password Generator</p>
            <p className="description">
              A solo project that I built from frontend career path at
              scrimba.com. Built it with Html, CSS, and JavaScript. I used
              arrays, object, if/else statement, math.random, for loop plus many
              others to built it. You could set the character length and choose
              to include uppercase, lowercase, symbol, or number. Also added a
              click to copy.
            </p>
            <div className="stacks">
              <p>
                <AiFillHtml5 />{" "}
                <span>
                  {" "}
                  <DiCss3 />
                </span>
                <span>
                  {" "}
                  <DiJavascript1 />
                </span>
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://visaypasswordgenerator.netlify.app"
                target="_blank"
              >
                View
              </a>
              <a
                href="https://github.com/vsvang87/Password-Generator/tree/master"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
          <div className="project-img project-col">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

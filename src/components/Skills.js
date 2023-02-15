import React from "react";
import { useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="skills-container">
      <div className="skill">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg"
          alt="React"
        />
        <h3>ReactJs</h3>
      </div>
      <div className="skill">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain-wordmark.svg"
          alt="Node"
        />
        <h3>NodeJs</h3>
      </div>
      <div className="skill">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg"
          alt="JavaScript"
        />
        <h3>JavaScript</h3>
      </div>
      <div className="skill">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg"
          alt="HTML"
        />
        <h3>HTML</h3>
      </div>
      <div className="skill">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg"
          alt="CSS"
        />
        <h3>CSS</h3>
      </div>
      <div className="skill">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/kotlin/kotlin-original.svg"
          alt="Kotlin"
        />
        <h3>Kotlin</h3>
      </div>
      <div className="skill">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/swift/swift-original.svg"
          alt="Swift"
        />
        <h3>Swift</h3>
      </div>
      <div className="skill">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg"
          alt="Git"
        />
        <h3>Git</h3>
      </div>
      <div className="skill">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original.svg"
          alt="Python"
        />
        <h3>Python</h3>
      </div>
    </div>
  );
};

export default Skills;

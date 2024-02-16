import React from "react";
import "./education.css";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Education</span>
      <span className="skillDesc">
        Currently pursuing a Bachelor's degree in Computer Science Engineering
        (CSE) at MVJ College of EngineeringI am a detail-oriented Web
        Developer, Designer, and Programmer with a strong foundation in
        programming languages (C++, Python, Java, HTML, CSS, ReactJS) and data
        structures.{" "}
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Degree: Bachelor of Engineering (BE)</h2>{" "}
            <p>
              <h3>MVJ College of Engineering, Bengaluru, Karnataka, India</h3>
            </p>
            <p>
              ● Courses: Data Structures, DBMS, Operating System, OOP's,
              Computer Networks, CAD, Mobile Application
            </p>
            <p>● Member of Software Development Club, MVJCE</p>
            <p>● CGPA: 8.3/10</p>
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2>High School (PU)</h2>
            <p>
              <h3>Doon Public School, Begusarai, Bihar, India</h3>
            </p>
            <p>
              ● Obtained a percentage of 70% in class 12th.
              <br />● Obtained a percentage of 91% in class 10th.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

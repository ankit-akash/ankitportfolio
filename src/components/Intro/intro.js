import React from "react";
import "./intro.css";
import Typed from "react-typed";
import bg from "../Navbar/assets/logo1.png";
import resume from "../Intro/Resume_final.pdf";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Ankit Akash</span>
          <br />
          <Typed
            strings={["Web Developer", "Programmer", "UI-UX Designer"]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </span>
        <p className="introPara">
          I'm a passionate Computer Science Engineering enthusiast
          <br />
          dedicated to improving my technical skills. I have a
          <br />
          solid foundation in programming languages like C++,Python, Java,
          <br />
          HTML, CSS, ReactJS, and data structures. I'm also experienced
          <br />
          in design and 3D software, and actively contribute as a
          <br />
          core team member of the Software Development Club at MVJCE.
        </p>

        <a href={resume} download="Ankit_resume">
          <button className="btn">Download Resume</button>
        </a>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;

import React from "react";
import "./project.css";
import Project1 from "../../assets/canva_img1.png";
import Project2 from "../../assets/swissbank_final.png";

const Project = () => {
  return (
    <section id="project">
      <h2 className="projectTitle">Projects</h2>
      <div className="card-container">
        <div className="container">
          <div className="container">
            <a href="https://shopifyecommercewebsite.web.app/" target="blank">
              <img src={Project1} alt="" className="projectImg" />
            </a>
          </div>
          <div className="projectDesc">
            <h3>E-COMMERCE WEBSITE - MINI PROJECT</h3> <br />
            ● Built using ReactJs, HTML, CSS and used component-based approach
            for website building.
            <br /> ● Utilized React Router and React Compare libraries for
            seamless transitions and navigation.
            <br /> ● Key components include Header, Slider, Virtual, Product,
            Testimonials, and Footer. The Slider component displays items and
            groups similar products via props.
            <br /> Link: <br />
            <a href="https://shopifyecommercewebsite.web.app/" target="blank">
              https://shopifyecommercewebsite.web.app/
            </a>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <a
              href="https://swiss-foundation.000webhostapp.com/"
              target="blank"
            >
              <img src={Project2} alt="" className="projectImg" />
            </a>
          </div>
          <div className="projectDesc">
            <h3>BASIC BANKING WEBSITE - PERSONAL PROJECT</h3> <br />● The Basic
            Banking Website, crafted with PHP, CSS, Bootstrap, and SQL on XAMPP,
            simulates fundamental banking operations in an educational web
            environment. <br />● Leveraging MySQL integration for secure user
            data storage and management, ensuring a reliable and seamless
            experience.
            <br /> Link: <br />
            <a
              href="https://swiss-foundation.000webhostapp.com/"
              target="blank"
            >
              https://swiss-foundation.000webhostapp.com/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

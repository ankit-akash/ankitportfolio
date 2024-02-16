import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ptty7xa",
        "template_pvuys9v",
        form.current,
        "JpUZWVeQ7oeWb5Hcv"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <span className="skillTitle">Experience</span>
      <div className="skillBar">
        <div className="skillBarText">
          <h2>Software Trainee Intern - Heiti Pvt. Ltd.</h2>
          <span> July 2023-Aug 2023</span>
          <p>
            ● Worked on various coding tasks, ranging from bug fixes to feature
            enhancements.
            <br /> ● Orchestrated weekly mentorship sessions covering coding
            best practices, personal development strategies, and skill
            enhancement techniques. <br />● Proficiently navigated tools like
            Firebase (Hosting), Git Version Control & IDEs, mastering languages
            including C++ and ReactJs.
          </p>
        </div>
      </div>
      <div className="skillBar">
        <div className="skillBarText">
          <h2>
            Design & Content team - Software Developement Club( SDC, MVJCE )
          </h2>
          <span> Oct 2022-Aug 2023</span>
          <p>
            ● Demonstrated mastery in harnessing design tools like Figma and
            Canva to craft visually stunning assets collaborative projects.
            Applied Canva and Figma skills to develop compelling designs,
            ensuring alignment with project requirements and objectives.
            <br /> ● Researched, meticulously crafted, and polished captivating
            articles for the Software Development Club magazine, resulting in a
            substantial increase in readership and a boost in club membership.
          </p>
        </div>
      </div>
      <br /> <br /> <br />{" "}
      <div className="contact" id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Feel free to get in touch by filling out the form below.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Comment"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

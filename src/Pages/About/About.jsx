import React from "react";
import "./about.scss";
import about from "../../assets/about.jpg";
import icon from "../../assets/about-icon.png";
import { motion as m } from "framer-motion";
import { fadeIn } from "../../utils/variants";

function About() {
  return (
    <div id="about" className="about">
      <div className="container">
        <m.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.02 }}
          className="left"
        >
          <div className="image">
            <img src={about} alt="" />
          </div>
          <div className="circle">
            <p>Front-End Web Developer</p>
            <img src={icon} alt="" />
          </div>
        </m.div>
        <m.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.02 }}
          className="right"
        >
          <span>About Me</span>
          <h2>
            A dedicated Front-end Developer based in Toba Tek Singh, Pakistan 📍
          </h2>
          <p>
            As a Front-End Developer, I possess an impressive arsenal of skills
            in <strong> HTML, CSS, JavaScript, React,</strong> and
            <strong> SASS</strong>. I excel in designing and maintaining
            responsive websites that offer a smooth user experience. My
            expertise lies in crafting dynamic, engaging interfaces through
            writing clean and optimized code and utilizing cutting-edge
            development tools and techniques. I want to join a team who thrives
            in collaborating with cross-functional teams to produce outstanding
            web applications.
          </p>
        </m.div>
      </div>
    </div>
  );
}

export default About;

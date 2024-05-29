import React from "react";
import "./home.scss";
import { TbBrandLinkedin } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import img from "../../assets/pic.jpg";
import hand from "../../assets/hand.png";
import icon1 from "../../assets/icons.svg";
import icon2 from "../../assets/icons_2.svg";
import icon3 from "../../assets/icons_3.svg";
import icon4 from "../../assets/icons_4.svg";
import { motion as m } from "framer-motion";
import { fadeIn } from "../../utils/variants";

function Home() {
  return (
    <>
      <div id="#" className="home">
        <div className="container">
          <div className="my-info">
            <m.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="info"
            >
              <h1>Front-End React Developer</h1>
              <img src={hand} alt="" />
              <p>
                Hi, I'm<strong> Muhammad Muzammal</strong>. A passionate
                Front-end React Developer based in{" "}
                <strong>Toba Tek Singh, Pakistan</strong>. 📍
              </p>
              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-muzammal-a9ba60201/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <TbBrandLinkedin />
                </a>
                <a
                  href="https://github.com/m-muzamal"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillGithub />
                </a>
              </div>
            </m.div>
            <m.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="profile"
            >
              <div className="img">
                <img src={img} alt="" />
              </div>
            </m.div>
          </div>
          <m.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="skills"
          >
            <p>Tech Stack</p>
            <div className="icon">
              <img src={icon1} alt="icons" />
              <img src={icon4} alt="icons" />
              <img src={icon2} alt="icons" />
              <img src={icon3} alt="icons" />
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}

export default Home;

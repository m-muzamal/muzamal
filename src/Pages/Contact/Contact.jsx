import React from "react";
import "./contact.scss";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { motion as m } from "framer-motion";
import { fadeIn } from "../../utils/variants";

function Contact() {
  const screen = false;
  return (
    <div id="contact" className="contact">
      <div className="container">
        <span>Contact</span>
        <m.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.02 }}
        >
          Don't be shy! Hit me up! 👇
        </m.h2>
        <m.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.02 }}
          className="items"
        >
          <div className="item">
            <div className="icon">
              <GrMapLocation />
            </div>
            <div className="text">
              <h3>Location</h3>
              <p>Toba Tek Singh, Pakistan</p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <AiOutlineMail />
            </div>
            <div className="text">
              <h3>Email</h3>
              <a
                href="mailto:muzamal503@gmail.com"
                target="_blank"
                className="email"
              >
                muzamal503@gmail.com
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
}

export default Contact;

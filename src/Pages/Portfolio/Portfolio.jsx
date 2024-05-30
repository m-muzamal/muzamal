import React, { useContext, useEffect } from "react";
import "./portfolio.scss";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { ModuleContext } from "../../Context/ModuleContext";
import { motion as m } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { projects } from "../../utils/data";

function Portfolio() {
  const { setShowModule } = useContext(ModuleContext);

  useEffect(() => {
    const items = document.querySelectorAll(".content");

    items.forEach((item, index) => {
      if (index % 2 !== 0) {
        item.classList.add("content_reversed");
      }
    });
  }, [projects]);
  const handleClick = (url) => {
    !url && setShowModule(true);
  };

  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
        <span>Portfolio</span>
        <h2>Each project is a unique piece of development 🧩</h2>

        {projects.map((item) => (
          <div key={item.id} className="content">
            <m.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.02 }}
              className="right"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="btns">
                {item.techStack.map((teck, index) => (
                  <div key={index} className="btn">
                    {teck}
                  </div>
                ))}
              </div>
              <div className="btns2">
                <div className="btn1">
                  <a
                    href={item.url}
                    target="_blank"
                    onClick={() => handleClick(item.url)}
                  >
                    Live_Demo
                  </a>
                  <div className="icon box">
                    <BsBoxArrowUpRight />
                  </div>
                </div>
                <div className="btn1">
                  <a href={item.code} target="_blank">
                    Code
                  </a>
                  <div className="icon">
                    <AiFillGithub />
                  </div>
                </div>
              </div>
            </m.div>
            <m.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.02 }}
              className="left"
            >
              <a
                href={item.url}
                target="_blank"
                onClick={() => handleClick(item.url)}
              >
                <img src={item.image} alt="" />
              </a>
            </m.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

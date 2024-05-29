import React, { useContext } from "react";
import "./popup.scss";
import { MdClose } from "react-icons/md";
import { ModuleContext } from "../../Context/ModuleContext";

const Popup = () => {
  const { setVisible } = useContext(ModuleContext);
  return (
    <div className="popup">
      <div className="pop-container">
        <button className="btn" onClick={() => setVisible(false)}>
          <MdClose />
        </button>
        <h2 className="title">
          This Portfolio Showcases Only Front-End Skills
        </h2>
        <p>
          Welcome to my <strong>Portfolio!</strong> Here, you can find a
          collection of my projects that demonstrate my skills in{" "}
          <strong>HTML, CSS, JavaScript</strong> and <strong>React</strong>. All
          of the deployed websites are displayed here, but please note that this
          portfolio only showcases my <strong>Front-End</strong> skills. If
          you're interested in seeing backend code, you can check out my
          <a href="https://github.com/m-muzamal" target="_blank">
            {" "}
            GitHub{" "}
          </a>{" "}
          profile. Thank you for taking the time to visit my{" "}
          <strong>Portfolio</strong>!
        </p>
      </div>
    </div>
  );
};

export default Popup;

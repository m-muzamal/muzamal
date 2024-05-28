import React, { useContext } from "react";
import "./module.scss";
import { MdClose } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { ModuleContext } from "../../Context/ModuleContext";

const Module = () => {
  const { setShowModule } = useContext(ModuleContext);
  return (
    <div className="module">
      <div className="module-container">
        <button
          className="btn"
          onClick={() => {
            setShowModule(false);
          }}
        >
          <MdClose />
        </button>
        <h1 className="title">
          <IoWarningOutline />
        </h1>
        <p>
          <strong>Sorry🙁</strong>, this website is currently unavailable!
        </p>
        <p>
          I am working hard to get it back up and running as soon as possible.
          Please check back soon!
        </p>
      </div>
    </div>
  );
};

export default Module;

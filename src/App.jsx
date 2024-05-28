import { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Nav from "./Components/Navbar/Nav";
import Popup from "./Components/Popup/Popup";
import Portfolio from "./Components/Portfolio/Portfolio";
import { ModuleContext } from "./Context/ModuleContext";
import Module from "./Components/Module/Module";

function App() {
  const [visible, setVisible] = useState(false);
  const [showModule, setShowModule] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem("popupShown");
    if (!popupShown) {
      setTimeout(() => {
        setVisible(true);
        sessionStorage.setItem("popupShown", true);
      }, 10000);
    }
  }, []);

  useEffect(() => {
    if (visible || showModule) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible, showModule]);

  return (
    <ModuleContext.Provider value={{ showModule, setShowModule, setVisible }}>
      {visible && <Popup />}
      {showModule && <Module />}
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </ModuleContext.Provider>
  );
}

export default App;

import React, { useContext } from "react";
import "./portfolio.scss";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import web1 from "../../assets/web1.jpg";
import web2 from "../../assets/web2.jpg";
import web3 from "../../assets/web3.jpeg";
import web4 from "../../assets/web4.jpg";
import web5 from "../../assets/web5.jpeg";
import web6 from "../../assets/web6.jpeg";
import web7 from "../../assets/web7.jpeg";
import web8 from "../../assets/web8.jpeg";
import web9 from "../../assets/web9.jpeg";
import { ModuleContext } from "../../Context/ModuleContext";

function Portfolio() {
  const { setShowModule } = useContext(ModuleContext);

  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
        <span>Portfolio</span>
        <h2>Each project is a unique piece of development 🧩</h2>
        {/* Car reantel system */}
        <div className="content content_reversed">
          <div className="right">
            <h3>CAR RENTAL (FEBRUARY 2023) 🚗</h3>
            <p>
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">SCSS</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a href="https://car-rantel.netlify.app/" target="_blank">
                  Live_Demo
                </a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
              <div className="btn1">
                <a
                  href="https://github.com/m-muzamal/car-rantel"
                  target="_blank"
                >
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <a href="https://car-rantel.netlify.app/" target="_blank">
              <img src={web1} alt="" />
            </a>
          </div>
        </div>
        {/* Buss reservation system */}
        <div className="content">
          <div className="left">
            <a
              onClick={() => {
                setShowModule(true);
              }}
            >
              <img src={web2} alt="" />
            </a>
          </div>
          <div className="right">
            <h3>Bus Reservation System 🚌</h3>
            <p>
              A bus reservation system is an online platform for booking bus
              tickets, making travel arrangements easier by allowing users to
              select seats, dates, and routes conveniently.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">MySQL</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a onClick={() => setShowModule(true)}>Live_Demo</a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
              <div className="btn1">
                <a href="https://github.com/m-muzamal/fyp" target="_blank">
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* E-store */}
        <div className="content content_reversed">
          <div className="right">
            <h3>E-Store 📲</h3>
            <p>
              E-Stores make life easier by providing easy access to various
              products. It allow simple comparisons, secure payments, and home
              delivery, saving time and effort compared to traditional shopping.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">SCSS</div>
              <div className="btn">API</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a href="https://e-sale.netlify.app/" target="_blank">
                  Live_Demo
                </a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
              <div className="btn1">
                <a href="https://github.com/m-muzamal/e-store" target="_blank">
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <a href="https://e-sale.netlify.app/" target="_blank">
              <img src={web4} alt="" />
            </a>
          </div>
        </div>
        {/* Portfolio */}
        <div className="content">
          <div className="left">
            <a href="https://mzml.netlify.app/" target="_blank">
              <img src={web3} alt="" />
            </a>
          </div>
          <div className="right">
            <h3>Portfolio Website 🚩</h3>
            <p>
              Developed a personalized portfolio showcasing a collection of my
              work, skills, and professional journey. I always strive to learn
              new skills and improve where I am lacking. My goal is to work with
              an organization.
            </p>
            <div className="btns">
              <div className="btn">React</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a href="https://mzml.netlify.app/" target="_blank">
                  Live_Demo
                </a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
              <div className="btn1">
                <a
                  href="https://github.com/m-muzamal/m-muzamal.github.io"
                  target="_blank"
                >
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gymate */}
        <div className="content content_reversed">
          <div className="right">
            <h3>Gymate 💪</h3>
            <p>
              Get fit and healthy at our gym by joining today. Your fitness
              journey starts here with expert trainers. Make fitness a seamless
              part of your lifestyle through affordable and flexible membership
              options.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">SCSS</div>
              <div className="btn">MongoDB</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a href="https://gmate.netlify.app/" target="_blank">
                  Live_Demo
                </a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
              <div className="btn1">
                <a href="https://github.com/m-muzamal/gymate" target="_blank">
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <a href="https://gmate.netlify.app/" target="_blank">
              <img src={web5} alt="" />
            </a>
          </div>
        </div>
        {/* Ecommerce */}
        <div className="content">
          <div className="left">
            <a href="https://e-comerc.netlify.app/" target="_blank">
              <img src={web6} alt="" />
            </a>
          </div>
          <div className="right">
            <h3>ECOMMERCE 🛒</h3>
            <p>
              With a focus on simplicity and clean design, this store prioritize
              user experience, making it easy for customers to find and purchase
              the products they need.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">Vanila CSS</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a href="https://e-comerc.netlify.app/" target="_blank">
                  Live_Demo
                </a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
              <div className="btn1">
                <a
                  href="https://github.com/m-muzamal/eCommerce"
                  target="_blank"
                >
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Coindom */}
        <div className="content content_reversed">
          <div className="right">
            <h3>COINDOM 💰</h3>
            <p>
              Coindom is a crypto app that allows users to search for
              information about various cryptocurrencies in real-time.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">SCSS</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a href="https://crypto-coindom.netlify.app/" target="_blank">
                  Live_Demo
                </a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
              <div className="btn1">
                <a href="https://github.com/m-muzamal/coindom" target="_blank">
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <a href="https://crypto-coindom.netlify.app/" target="_blank">
              <img src={web7} alt="" />
            </a>
          </div>
        </div>
        {/* Blog app */}
        <div className="content">
          <div className="left">
            <a href="">
              <img src={web8} alt="" />
            </a>
          </div>
          <div className="right">
            <h3>Blog app 📖</h3>
            <p>
              A personal blog is an online platform for sharing thoughts, ideas,
              and experiences, making it easier for readers to connect with the
              author and engage in discussions by providing a space for regular
              updates and reflections.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">MySQL</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a href="https://online-blog-app.netlify.app/" target="_blank">
                  Live_Demo
                </a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
              <div className="btn1">
                <a
                  href="https://github.com/m-muzamal/bloge_app"
                  target="_blank"
                >
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Rasturant */}
        <div className="content content_reversed">
          <div className="right">
            <h3>Resturant app 👨‍🍳</h3>
            <p>
              A restaurant app is an online platform for browsing menus, making
              reservations, and ordering food, making it easier for users to
              discover and enjoy new dining experiences by providing convenient
              access to information and services.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">MongoDB</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a href="https://rasturant-app.netlify.app/" target="_blank">
                  Live_Demo
                </a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
              <div className="btn1">
                <a
                  href="https://github.com/m-muzamal/rasturant"
                  target="_blank"
                >
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <a href="https://crypto-coindom.netlify.app/" target="_blank">
              <img src={web9} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

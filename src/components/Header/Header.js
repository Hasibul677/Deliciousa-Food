import React from "react";
import Navigation from "../Navigration/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="header"
      style={{ backgroundImage: "URL(./images/hero.jpg)" }}
    >
      <div className="lg:flex justify-between text-white font-bold text-xl pt-5">
        <div>
          <h3 className="lg:ml-5">Free Call: 001-23456789</h3>
        </div>
        <div>
          <a
            className="mr-2 lg:mr-5 hover:text-red-500"
            href="https://facebook.com/"
            target="blank"
          >
            Facebook
          </a>
          <a
            className="mr-2 lg:mr-5 hover:text-red-500"
            href="https://twitter.com/"
            target="blank"
          >
            Twitter
          </a>
          <a
            className="mr-2 lg:mr-5 hover:text-red-500"
            href="https://www.instagram.com/"
            target="blank"
          >
            Instragram
          </a>
          <a
            className="mr-2 lg:mr-5 hover:text-red-500"
            href="https://www.tripadvisor.com/"
            target="blank"
          >
            Tripadvisor
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center mt-56 mb-36">
        <img src="./images/header/logo.png" alt="" />
      </div>
      {/* this part for navigration */}
      <Navigation></Navigation>
    </div>
  );
};

export default Header;

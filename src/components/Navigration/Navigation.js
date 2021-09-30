import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigration.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <header className="text-gray-400 body-font border-2 border-white mx-36 hidden lg:block">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">
            <img src="./images/nav/logo.png" alt="" />
          </span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/home"
            className="mr-5 hover:text-white"
            activeClassName="selected"
          >
            HOME
          </NavLink>
          <NavLink
            to="/menu"
            className="mr-5 hover:text-white"
            activeClassName="selected"
          >
            MENU
          </NavLink>
          <NavLink
            to="/about"
            className="mr-5 hover:text-white"
            activeClassName="selected"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="mr-5 hover:text-white"
            activeClassName="selected"
          >
            CONTACT
          </NavLink>
        </nav>
        <span className="relative inline-block">
          <span className="fa-2x bg-white rounded-full text-yellow-600 h-12 w-12 flex items-center justify-center">
            {element}
          </span>
          <span className="absolute top-0 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            00
          </span>
        </span>
      </div>
    </header>
  );
};

export default Navigation;

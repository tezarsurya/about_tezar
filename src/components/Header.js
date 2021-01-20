import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="header animate__animated animate__fadeIn animate__slow"
      id="header"
    >
      <div className="header__menu" id="nav_menu">
        <a href="#home">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header__menu" id="nav_menu">
        <a href="#home">Home</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./navbar.css";
import { FaBars } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const Navbar = () => {
  return (
    <section id="navbar">
      <nav>
        <div className="navbar__list">
          <a href="#" className="nav__items">Ajit Kushwaha</a>
          <a href="#about" className="nav__items hide">About</a>
          <a href="#skill-section" className="nav__items hide">Skills</a>
          <a href="#project-section" className="nav__items hide">Projects</a>
          <a href="#contact-section" className="nav__items hide">Blog</a>
          <a href="#contact-section" className="nav__items hide">Contact</a>
        </div>
        <div className="navbar__list">
        <a href="#contact-section" className="nav__items">Hire <BsArrowRightShort className="arrow"/></a>
        <a href="# " className="nav__items bars">
          <FaBars/>
        </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

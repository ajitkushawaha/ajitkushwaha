import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import SocialIcon from "../SocialIcon/SocialIcon";

import "./footer.css";

const Footer = () => {
  return (
    <section id="footer-section">
      <div className="footer-cont">
        <div id="footer__items">
          <div className="social__icons">
            <a href="https://www.linkedin.com/in/ajju-kushwaha77/">
              <BsLinkedin className="icon" />
            </a>
            <a href="https://twitter.com/AjitKus40102887">
              <BsTwitter className="icon" />
            </a>
            <a href="https://www.facebook.com/ajit.kushwaha.90834">
              <BsFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com/ajju_kushwaha77/">
              <BsInstagram className="icon" />
            </a>
          </div>
          <div className="copyrights">
            <a href="/" className="footer-link">
              &copy;
            </a>
            <a href="/" className="footer-link">
              Privacy |
            </a>
            <a href="/" className="footer-link">
              Tearms |
            </a> 
            <a href="/" className="footer-link">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

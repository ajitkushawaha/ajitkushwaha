import React, { useState } from "react";
import "./about.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import {
  FaHtml5,
  FaBootstrap,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import img from "../About/profile-img1.jpg";



const About = () => { 
  
  const [showMore, setShowMore] = useState(false);
  const [buttonText, setButtonText] = useState('Reed More'); 
  const [arrow, setArrow] = useState(<BsArrowDownShort/>); 
  const [dot, setDot] = useState('. . .'); 
  const [direction, setDirection] = useState('row');

   const toggleButton =() =>{
    setShowMore(!showMore);
    setButtonText(showMore ? 'Read more' : 'Read less');
    setDirection(direction === 'row' ? 'column' : 'row');
    setArrow(showMore ? <BsArrowDownShort/> : <BsArrowUpShort/>);
    setDot(showMore ? '. . .' : '');
   }


   
  return (
    <section id="about">
      <div className="about-cont">
        <div className="about__items">
          <div className="left__side">
            <div className="about__social">
              <img
                alt="Gallary"
                className="profileImg"
                src={img}
              />
            </div>
            <div className="name">
              <h2>Ajit Kushwaha</h2>
            </div>
          </div>
          <div className="right__side">
            <ul className="about_pera">
              <h2>Front End Developer</h2>
              <li>
                <strong>
                  My name is Ajit Kushwaha..! <br />
                </strong>
                I'm currently studying <strong>web development.</strong> <br />
                and I'm currently working on a
                <strong>
                  <a href="#project-section" className="riet__co"> Project.</a>
                </strong>
              </li>
              <li>
                I'm parsuing <strong>MCA </strong>in 
                <strong>
                  <a href="https://www.rietjaipur.ac.in/" className="riet__co">
                     Rajasthan Institute of Engineeting and Technology(Jaipur)
                  </a>
                  <strong className="dots" title="Click here" onClick={toggleButton}>{dot}</strong>
                </strong>
              </li>
              { showMore && <div className="hide__seemore">
                <li>
                  <span>(:🏆🏅:)</span>
                  <p className="myinfo">
                    My primary focus and inspiration for my studies is Web
                    Development. In my free time, I do coding and prectice. I am
                    both driven and self_motivated, and I am constantly
                    Exprimenting with new Technologies. I am very passionate
                    about Front End Development.
                  </p>
                </li>
                <li className="techAndtool">
                  <p className="about__heading">🖥️Technical Skills:-</p>
                  <i>Language:</i> Basic Java <DiJava />, JavaScript
                  <TbBrandJavascript />. <br />
                  <i>Web Technology:-</i> HTML <FaHtml5 />, CSS <FaCss3Alt />,
                  JavaScript
                  <TbBrandJavascript />. <br />
                  <i>Frameworks:</i> ReactJs <FaReact />, Bootsrap
                  <FaBootstrap />. <br />
                  <i>Technologies and Tools:</i>
                  Visual Stdio, GitHub, MS Excel, MS Powerpoint, Ms office
                </li>

                <li>
                  <p className="about__heading">🎓Related CourceWork:-</p>
                  <p>
                    Data Structures and Algorithm, Agile methodologies, Cloud
                    Computing, Mobile Application Development, Database
                    Management System, Big Data, opreting system, Computer
                    Architecture , Opps.
                  </p>
                </li>
              </div>}
            </ul>
          </div>
          <button onClick={toggleButton} className="read__btn">
              {buttonText} {arrow}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

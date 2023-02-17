import { VscCode } from "react-icons/vsc";
import { useState } from "react";
import React from "react";
import { projectDetails } from "../../Data.js";
import "./projects.css";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Projects = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (Direction) => {
    let newSliderNumber;

    if (Direction === "left") {
      newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(newSliderNumber);
  };

  return (
    <section id="project-section">
      <div className="project__cont">
        <div className="project__heading">
          <VscCode className="project__logo" />
          <h3 className="project__title">App/web I Build</h3>
          <p>
          Here are some of my recent projects that I've worked on:
          </p>
        </div>
        {open && (
          <div className="slider">
            <AiOutlineClose className="close" onClick={() => setOpen(false)} />
            <div className="sliderWrapper">
              <BiLeftArrowAlt
                className="Arrowrl"
                onClick={() => handleMove("left")}
              />
              <div className="sliderWrapper-content">
                <img src={projectDetails[sliderNumber].image} alt="" />
                <a href={projectDetails[sliderNumber].link}>Visit site</a>
              </div>
              <BiRightArrowAlt
                className="Arrowrl"
                onClick={() => handleMove("right")}
              />
            </div>
          </div>
        )}
        <div className="projects__items">
          {projectDetails.map((item, i) => (
            <a
              className="project__link"
              href={projectDetails.link}
              key={projectDetails.id}
            >
              <div className="image__cont" onClick={() => handleOpen(i)}>
                <a href={projectDetails.link} key={projectDetails.id}>
                  <img
                    alt="gallery"
                    className="project__img"
                    src={item.image}
                  />
                </a>
                <div className="projecTitle">
                  <h2 className="project__subtitle">{item.subtitle}</h2>
                  <h1 className="project__title">{item.title}</h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import { VscCode } from "react-icons/vsc";
import { projectDetail } from "../../Data";
import "./projects.css";


const Projects = () => {
  return (
    <section id="project-section">
      <div className="project__cont">
        <div className="project__heading">
          <VscCode className="project__logo"/>
          <h3 className="project__title">App/web I Build</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            dolorem id, saepe provident in itaque quaerat suscipit ad debitis
            blanditiis?
          </p>
        </div>
        <div className="projects__items">
          {projectDetail.map((projectDetail) => (
            <a
              href={projectDetail.link}
              key={projectDetail.image}
              className="project__link">
              <div className="image__cont">
                <img
                  alt="gallery"
                  className="project__img"
                  src={projectDetail.image}
                />
                <div className="projecTitle">
                  <h2 className="project__subtitle">
                    {projectDetail.subtitle}
                  </h2>
                  <h1 className="project__title">
                    {projectDetail.title}
                  </h1>
                  <p className="leading-relaxed">{projectDetail.description}</p>
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

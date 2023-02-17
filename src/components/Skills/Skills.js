import React from "react";
import { FcElectronics } from "react-icons/fc";
import "./skills.css";
import { skills } from "../../Data";

const Skills = () => {
  const columns = skills.reduce((acc, skill, index) => {
    const columnIndex = index % 2;
    acc[columnIndex] = [...(acc[columnIndex] || []), skill];
    return acc;
  }, []);

  return (
    <section id="skill-section">
      <div className="title">
        <FcElectronics className=" skill_icon" />
        <h3>Skills & Technology</h3>
        <p>
          I have been studying web development since 2021 and i develop some
          short project . Through i primarily use HTML CSS JAVASCRIPT AND REACT JS. I have worked
          both in frontend and back-end fetish mostly in frontend .
        </p>
      </div>
      <div className="skill__cont">
        {columns.map((column, index) => (
          <div className="skill__list" key={index}>
            {column.map((skill, index) => (
              <div className="skill__items" key={index}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

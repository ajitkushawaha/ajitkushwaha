import React from 'react'
import {FcApproval, FcElectronics} from "react-icons/fc";
import './skills.css'

const Skills = () => {
  return (
    <section id="skill-section">
        <div className="title">
        <FcElectronics className=" skill_icon"/>
        <h3>Skills & Technology</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolorem id, saepe provident in itaque quaerat suscipit ad debitis blanditiis?</p>
        </div>
      <div className="skill__cont">
        <div className="skill__list">
          <div className="skill__items">
            <FcApproval className='iconeName'/>
            <span>HTML</span>
          </div>
          <div className="skill__items">
            <FcApproval className='iconeName'/>
            <span>Css</span>
          </div>
          <div className="skill__items">
            <FcApproval className='iconeName'/>
            <span>JavaScript</span>
          </div>
          <div className="skill__items">
            <FcApproval className='iconeName'/> 
            <span>Java</span>
          </div>
        </div>
        <div className="skill__list">
          <div className="skill__items">
            <FcApproval className='iconeName'/>
            <span>ReactJs</span>
          </div>
          <div className="skill__items">
            <FcApproval className='iconeName'/>
            <span>NodeJs</span>
          </div>
          <div className="skill__items">
            <FcApproval className='iconeName'/>   
            <span>MongoDb</span>
          </div>
          <div className="skill__items">
            <FcApproval className='iconeName' /> 
            <span>Vs code</span>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Skills

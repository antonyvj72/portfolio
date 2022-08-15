import "./SkillCardStyles.css";
import React from "react";

const SkillCard = () => {
  return (
    <div>
      <h1 className="skill-heading">skills</h1>
      <div className="skills-bar">
        <div className="bars">
          <div className="info">
            <span>HTML</span>
          </div>
          <div className="progress-line html">
            <span></span>
          </div>
        </div>
        <div className="bars">
          <div className="info">
            <span>CSS</span>
          </div>
          <div className="progress-line css">
            <span></span>
          </div>
        </div>
        <div className="bars">
          <div className="info">
            <span>Bootstrap</span>
          </div>
          <div className="progress-line boot">
            <span></span>
          </div>
        </div>
        <div className="bars">
          <div className="info">
            <span>JavaScript</span>
          </div>
          <div className="progress-line js">
            <span></span>
          </div>
        </div>
        <div className="bars">
          <div className="info">
            <span>ReactJs</span>
          </div>
          <div className="progress-line react">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

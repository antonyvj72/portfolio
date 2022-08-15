import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import react2 from "../../assets/about-1.jpg";
import react1 from "../../assets/about-2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>who Am I ?</h1>
        <p>
          My name is ANTONY VIJAY I completed my degree in Bachelor of
          Engineering at the year of 2021 passed out from K.Ramakrishnan College of
          Engineering and Technology. I am much interested in developing new
          things which excite me a lot.
        </p>
        <br></br>
       
        <p>
          I would like to exploring new technologies and being a practitioner, I like to
          stay on top of latest trends. I try to live every line of code I
          write more readable, accessible, and modular.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react2} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={react1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

import "./HomePageStyles.css";

import React from "react";
import IntroImg from "../../assets/bg-home1.jpg";
import { Link } from "react-router-dom";
import resume from "./Antony_Vijay_Resume.pdf";

const HomePage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M ANTONY VIJAY</p>
        <h1>Frontend Developer.</h1>
        <div className="btn-home">
          <a href={resume} className="btn">
            View CV
          </a>
          <Link to="/contact" className="btn btn-light">
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

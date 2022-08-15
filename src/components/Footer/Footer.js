import "../Footer/Footer.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p className="address">Chennai</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9943661397
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              antonyvijay72@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4 className="social">Social Links</h4>
          
          <div className="social">
            <a href="https://github.com/antonyvj72">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/antony-vijay-9b77221a1/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
                className="socialapp-gap"
              />
            </a>
            <a href="https://www.instagram.com/_antony_vijay/?hl=en">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
                className="socialapp-gap"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CommonImg from "../components/CommonImg-Container/CommonImg";
import AboutContent from "../components/AboutContent/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <CommonImg heading="ABOUT" text="" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;

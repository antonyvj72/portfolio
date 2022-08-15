import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CommonImg from "../components/CommonImg-Container/CommonImg";
import Work from "../components/Project-Container/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <CommonImg heading="PROJECTS" text="Here are some of my Projects" />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;

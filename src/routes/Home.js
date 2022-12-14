import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HomeImg from "../components/HomePage-Container/HomePage";
import SkillCard from "../components/Skill-Container/SkillCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeImg />
      <SkillCard />
      <Footer />
    </div>
  );
};

export default Home;

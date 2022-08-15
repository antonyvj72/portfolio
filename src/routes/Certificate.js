import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CommonImg from "../components/CommonImg-Container/CommonImg";
import CertificateWorks from "../components/Certificate-Container/CertificateWorks";

const Certificate = () => {
  return (
    <div>
      <Navbar />
      <CommonImg heading="CERTIFICATIONS" text="" />
      <CertificateWorks />
      <Footer />
    </div>
  );
};

export default Certificate;

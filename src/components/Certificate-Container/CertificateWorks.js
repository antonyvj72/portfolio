import "./CertificateCardStyles.css";
import React from "react";
import CertificateCard from "./CertificateCard";
import CertificateCardData from './CertificateCardData'

const CertificateWorks = () => {
  return (
    <div className='work-container'>
      <h1 className="certificate-heading">Certificates</h1>
      <div className="certificate-container">
        {CertificateCardData.map((val, ind) => {
          return (
            <CertificateCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CertificateWorks;

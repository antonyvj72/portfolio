import "./CertificateCardStyles.css";
import React from "react";

const CerticateCard = (props) => {
  return (
    <div className="certificate-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="certificate-title">{props.title}</h2>
      <div className="certificate-details">
        <p>{props.text}</p>
      </div>
      <div className="certificate-btns">
        <a href={props.view} className="btn">
          View
        </a>
      </div>
    </div>
  );
};

export default CerticateCard;

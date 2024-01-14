import React from "react";
import "./head-line.scss";

const HeadLine = ({ label, heading }) => {
  return (
    <div className="headline">
      <div className="headline-content">
        <span>{label}</span>
        <h1 className="heading-1">{heading}</h1>
      </div>
    </div>
  );
};

export default HeadLine;

import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./our-service-item.scss";

const OurServiceItem = ({ title, text, imgSrc, linkUrl }) => {
  return (
    <div className="serviceItem">
      <img src={imgSrc} alt="service illustrator" />
      <div className="text-content">
        <p className="text-content__title">{title}</p>
        <p className="text-content__text">{text}</p>
      </div>
      <div className="view-page-link">
        <Link to={linkUrl}>
          <span>Explore Page</span>
          <Icon icon="fa6-solid:arrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default OurServiceItem;

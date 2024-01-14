import React from "react";
import boldoLogoWhite from "assets/svgs/boldo-logo-white.svg";
import prestoLogoWhite from "assets/svgs/logo-presto-white.svg";
import "./carousel.scss";

const Carousel = () => {
  return (
    <div className="logos-container">
      <ul className="carousel-slider">
        <li>
          <img src={boldoLogoWhite} alt="" />
        </li>
        <li>
          <img src={prestoLogoWhite} alt="" />
        </li>
        <li>
          <img src={boldoLogoWhite} alt="" />
        </li>
        <li>
          <img src={prestoLogoWhite} alt="" />
        </li>
        <li>
          <img src={boldoLogoWhite} alt="" />
        </li>
        <li>
          <img src={prestoLogoWhite} alt="" />
        </li>
        <li>
          <img src={boldoLogoWhite} alt="" />
        </li>
        <li>
          <img src={boldoLogoWhite} alt="" />
        </li>
        <li>
          <img src={boldoLogoWhite} alt="" />
        </li>
        <li>
          <img src={boldoLogoWhite} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Carousel;

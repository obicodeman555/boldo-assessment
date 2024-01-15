import React from "react";
import "./hero.scss";
import { Link } from "react-router-dom";
import threeDots from "assets/svgs/three-dots.svg";
import horizontalBarChart from "assets/svgs/bars-graph-hrz-1.svg";
import heroPieChart from "assets/svgs/pie-chart-1.svg";
import verticalBarChart from "assets/svgs/bar-graph-vt.svg";
import PartnersLogoCarousel from "components/carousel/Carousel";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-content__left">
              <div className="hero-writeup">
                <h1 className="heading-1">
                  Save time by building fast with Boldo Template
                </h1>
                <p className="hero-writeup__p line-h-md">
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </p>
              </div>
              <nav className="hero-links">
                <Link to="" className="button button--green">
                  Buy template
                </Link>
                <Link to="" className="button button--white-outline">
                  Explore
                </Link>
              </nav>
            </div>
            <div className="hero-content__right">
              <div className="graph-card">
                <div className="graph-card__body">
                  <div className="three-dots">
                    <img src={threeDots} alt="" />
                  </div>
                  <div className="graph-img--large">
                    <img src={horizontalBarChart} alt="" />
                  </div>
                </div>
              </div>
              <div className="content-right__cards">
                <div className="graph-card">
                  <div className="graph-card__body">
                    <div className="three-dots">
                      <img src={threeDots} alt="" />
                    </div>
                    <div className="graph-img--small">
                      <img src={verticalBarChart} alt="" />
                    </div>
                  </div>
                </div>
                <div className="graph-card">
                  <div className="graph-card__body">
                    <div className="three-dots">
                      <img src={threeDots} alt="" />
                    </div>
                    <div className="graph-img--small">
                      <img src={heroPieChart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="moon"></div>
        </div>
        <div className="logo-block">
          <div className="container">
            <PartnersLogoCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

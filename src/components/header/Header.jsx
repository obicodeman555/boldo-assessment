import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import primaryLogo from "assets/svgs/primary-logo.svg";

const Header = () => {
  return (
    <header className="header-home">
      <div className="container">
        <nav className="header-navs">
          <div className="logo">
            <img src={primaryLogo} alt="Boldo primary logo" />
          </div>
          <ul className="header-nav__list">
            <li>
              <Link to="" className="header-nav__link">
                Product
              </Link>
            </li>
            <li>
              <Link to="" className="header-nav__link">
                Services
              </Link>
            </li>
            <li>
              <Link to="" className="header-nav__link">
                About
              </Link>
            </li>
            <li>
              <Link to="" className="button button-link button-link--white">
                log in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

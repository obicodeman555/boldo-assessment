import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import primaryLogo from "assets/svgs/primary-logo.svg";
import { Icon } from '@iconify/react';
import { useState } from "react";

const Header = () => {
  const [isHiddenMobileNav, setIsHiddenMobileNav] = useState(false)
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

          <div className="mobile-nav-block">
            <button type="button" className={isHiddenMobileNav ? "mobile-nav__toggler active" : "mobile-nav__toggler"} onClick={() => setIsHiddenMobileNav(prev => !prev)}>
              <Icon icon="mdi:hamburger-open" />
            </button>

            <nav className={isHiddenMobileNav ? "mobile-nav show" : "mobile-nav hidden"}>
              <ul className="mobile-nav__list">
                <li>
                  <Link to="" className="mobile-nav__link">
                    Product
                  </Link>
                </li>
                <li>
                  <Link to="" className="mobile-nav__link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="" className="mobile-nav__link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="" className="button button-link button--primary">
                    log in
                  </Link>
                </li>
              </ul>
            </nav>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

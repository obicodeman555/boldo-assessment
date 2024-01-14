import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/svgs/boldo-logo-black.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="p-tb-8">
      <div className="container">
        <div className="footer-inner">
          <div className="vt-stack">
            <img src={logo} alt="" />
            <p>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>

            <p>All right reserved @ 2023</p>
          </div>
          <nav className="footer-navs">
            <ul className="footer-navs__list">
              <li className="vrt-stack">
                <h3>Landings</h3>
                <div className="vrt-stack link-group">
                  <Link>Home</Link>
                  <Link>Products</Link>
                  <Link>Services</Link>
                </div>
              </li>
              <li className="vrt-stack">
                <h3>Company</h3>
                <div className="vrt-stack link-group">
                  <Link>Home</Link>
                  <Link className="link-with-attention">
                    <span>Careers</span>
                    <strong className="attention-tag">Hiring!</strong>
                  </Link>
                  <Link>Services</Link>
                </div>
              </li>
              <li className="vrt-stack">
                <h3>Resources</h3>
                <div className="vrt-stack link-group">
                  <Link>Blog</Link>
                  <Link>Products</Link>
                  <Link>Services</Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

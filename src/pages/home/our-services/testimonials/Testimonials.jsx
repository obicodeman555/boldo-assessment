import "./testimonials.scss";
import womanWithFlower from "assets/images/woman-with-flower.jpeg";
import manWithCap from "assets/images/man-with-cap.jpeg";

import { Icon } from "@iconify/react";

const Testimonials = () => {
  return (
    <div className="reviewers">
      <div className="reviewers-content">
        <ul className="reviewer-list">
          <li className="reviewer">
            <div className="reviewer-container">
              <p className="reviewer-text">
                “Buyer buzz partner network disruptive non-disclosure agreement
                business”
              </p>
              <div className="reviewer-info">
                <div className="image-block reviewer-img">
                  <img src={womanWithFlower} alt="Reviewer gallery" />
                </div>
                <div className="reviewer-profile">
                  <strong>Albus Dumbledore</strong>

                  <span>Manager @ Howarts</span>
                </div>
              </div>
            </div>
          </li>
          <li className="reviewer">
            <div className="reviewer-container">
              <p className="reviewer-text">
                “Learning curve infrastructure value proposition advisor
                strategy user experience hypotheses investor.”
              </p>
              <div className="reviewer-info">
                <div className="image-block reviewer-img">
                  <img src={womanWithFlower} alt="Reviewer gallery" />
                </div>
                <div className="reviewer-profile">
                  <strong>Severus Snape</strong>

                  <span>Manager @ Slytherin</span>
                </div>
              </div>
            </div>
          </li>
          <li className="reviewer">
            <div className="reviewer-container">
              <p className="reviewer-text">
                “Release facebook responsive web design business model canvas
                seed money monetization.”
              </p>
              <div className="reviewer-info">
                <div className="image-block reviewer-img">
                  <img src={manWithCap} alt="Reviewer gallery" />
                </div>
                <div className="reviewer-profile">
                  <strong>Harry Potter</strong>

                  <span>Team Leader @ Gryffindor</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="buttons-positioner">
          <button type="button">
            <Icon icon="majesticons:arrow-left-line" />
          </button>
          <button type="button">
            <Icon icon="majesticons:arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

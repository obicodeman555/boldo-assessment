import React from "react";
import OurServiceItem from "./OurServiceItem";
import "./our-service-list.scss";
import serviceImage1 from "assets/svgs/our-services-img-1.svg";
import serviceImage2 from "assets/svgs/our-services-img-2.svg";
import serviceImage3 from "assets/svgs/our-services-img-3.svg";

export const OurServiceList = () => {
  return (
    <ul className="ourService-list">
      <li>
        <OurServiceItem
          title="Cool feature title"
          text="Learning curve network effects return on investment."
          imgSrc={serviceImage1}
          linkUrl="/#"
        />
      </li>
      <li>
        <OurServiceItem
          title="Even cooler feature"
          text="Learning curve network effects return on investment."
          imgSrc={serviceImage2}
          linkUrl="/#"
        />
      </li>
      <li>
        <OurServiceItem
          title="Cool feature title"
          text="Learning curve network effects return on investment."
          imgSrc={serviceImage3}
          linkUrl="/#"
        />
      </li>
    </ul>
  );
};

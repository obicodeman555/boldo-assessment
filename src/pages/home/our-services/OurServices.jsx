import { useState } from "react";
import HeadLine from "components/head-line/HeadLine";
import { OurServiceList } from "./our-service-list/OurServiceList";

import ITWorkersAtOffice from "assets/svgs/computer-workers.svg";
import { Icon } from "@iconify/react";

import Testimonials from "./testimonials/Testimonials";
import "./our-services.scss";
import ServiceRendered from "./service-rendered/ServiceRendered";

const OurServices = () => {
  const [accordionCatergory, setAccordionCatergory] = useState(null);
  const [accordionIndex, setAccordionIndex] = useState(null);

  const accordionContentHandler = (e) => {
    e.preventDefault();

    const buttonName = e.currentTarget.name;

    if (buttonName === "button-one") {
      setAccordionCatergory(buttonName);

      if (accordionIndex === 0) {
        return setAccordionIndex(null);
      }
      return setAccordionIndex(0);
    }

    if (buttonName === "button-two") {
      setAccordionCatergory(buttonName);
      if (accordionIndex === 1) {
        return setAccordionIndex(null);
      }
      return setAccordionIndex(1);
    }
  };
  return (
    <section className="ourServices">
      <div className="container-md">
        <section className="p-tb-8">
          <HeadLine
            label="Our Services"
            heading="Handshake infographic mass market crowdfunding iteration."
          />
          <OurServiceList />
        </section>
        <ServiceRendered />
        <article className="p-tb-8 bg-dark-blue full-bleed customer-review">
          <div className="container-md">
            <div className="heading-block text-white">
              <h1 className="heading-1">
                An enterprise template to ramp up your company website
              </h1>
            </div>
            <Testimonials />
          </div>
        </article>

        <article className="p-tb-8 ourservices-4">
          <div className="image-block">
            <img
              src={ITWorkersAtOffice}
              alt="I.T. engineers working during office hours"
            />
          </div>

          <div className="ourservices-4-content">
            <div>
              <h2 className="heading-2">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h2>
            </div>
            <ul className="accordions">
              <li className="accordion">
                <header className="accordion-header">
                  <button
                    type="button"
                    onClick={accordionContentHandler}
                    name="button-one"
                  >
                    <span className="accordion-heading-text">
                      We connect our customers with the best?
                    </span>
                    <Icon icon="ph:caret-circle-down-fill" />
                  </button>
                </header>
                <article
                  className={`${accordionCatergory === "button-one" && accordionIndex === 0
                    ? "accordion-content show"
                    : "accordion-content hide"
                    }`}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, accusantium?
                  </p>
                </article>
              </li>
              <li className="accordion">
                <header className="accordion-header">
                  <button
                    type="button"
                    onClick={accordionContentHandler}
                    name="button-two"
                  >
                    <span className="accordion-heading-text">
                      Android research & development rockstar?
                    </span>
                    <Icon icon="ph:caret-circle-down-fill" />
                  </button>
                </header>
                <article
                  className={`${accordionCatergory === "button-two" && accordionIndex === 1
                    ? "accordion-content show"
                    : "accordion-content hide"
                    }`}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, accusantium?
                  </p>
                </article>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default OurServices;

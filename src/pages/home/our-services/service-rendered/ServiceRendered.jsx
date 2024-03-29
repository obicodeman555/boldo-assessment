import manOnPhone from "assets/images/man-on-phone.png";
import ladyOnPhone from "assets/images/lady-on-phone.png";
import coloredBarchart from "assets/svgs/bar-chart-1.svg";
import coloredPieChart from "assets/svgs/pie-graph.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./service-rendered.scss"
const ServiceRendered = () => {
    return (
        <div className="service-rendered">
            <article className="p-tb-8">
                <div className="service-description">
                    <section className="description-gallery">
                        <div className="image-block">
                            <img src={manOnPhone} alt="Smiling man answering a call" />
                        </div>
                        <div className="bar-chart-positioner">
                            <div className="chart bar-chart">
                                <div className="chart-content">
                                    <img src={coloredBarchart} alt="colored barchart art" />
                                    <div className="chart-data">
                                        <span className="chart-percentage">30%</span>
                                        <span className="chart-text">More income in June</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="description-text">
                        <div className="description-content">
                            <h2 className="heading-2 line-h-lg">
                                We connect our customers with the best, and help them keep
                                up-and stay open.
                            </h2>
                            <ul className="services-listing">
                                <li>
                                    <Icon icon="octicon:check-circle-fill-24" />
                                    <span>We connect our customers with the best.</span>
                                </li>
                                <li>
                                    <Icon icon="octicon:check-circle-fill-24" />
                                    <span>We connect our customers with the best.</span>
                                </li>
                                <li>
                                    <Icon icon="octicon:check-circle-fill-24" />
                                    <span>We connect our customers with the best.</span>
                                </li>
                            </ul>

                            <div className="button-block">
                                <Link className="button button--primary">Start now</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
            <article className="p-tb-8">
                <div className="service-description">
                    <section className="description-text">
                        <div className="description-content">
                            <h2 className="heading-2 line-h-lg">
                                We connect our customers with the best, and help them keep
                                up-and stay open.
                            </h2>
                            <ul className="services-listing">
                                <li className="primary-dark-card">
                                    <Icon icon="lucide:feather" width="2.4rem" color="#fff" />
                                    <span className="fz-md fw-600">
                                        We connect our customers with the best.
                                    </span>
                                </li>
                                <li className="primary-white-card">
                                    <Icon icon="prime:eye" width="2.4rem" />
                                    <span className="fz-md fw-600">
                                        Advisor success customer launch party.
                                    </span>
                                </li>
                                <li className="primary-white-card">
                                    <Icon icon="quill:sun" width="2.4rem" />
                                    <span className="fz-md fw-600">
                                        Business-to-consumer long tail.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="description-gallery">
                        <div className="image-block">
                            <img src={ladyOnPhone} alt="Smiling man answering a call" />
                        </div>
                        <div className="pie-chart-positioner">
                            <div className="chart pie-chart">
                                <div className="chart-content">
                                    <img src={coloredPieChart} alt="colored barchart art" />
                                    <ul className="pie-chart__category-list">
                                        <li>
                                            <Icon icon="icon-park-outline:dot" color="#0dbbfc" />
                                            <span>35% - Agile Development</span>
                                        </li>
                                        <li>
                                            <Icon icon="icon-park-outline:dot" color="#69e6a6" />
                                            <span>30% - Investor bandwidth</span>
                                        </li>
                                        <li>
                                            <Icon icon="icon-park-outline:dot" color="#c4c4c4" />
                                            <span>35% - A/B testing</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    )
}
export default ServiceRendered
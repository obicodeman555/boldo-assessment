import React from "react";
import HeadLine from "components/head-line/HeadLine";
import smilingLadyOnPhone from "assets/svgs/lady-smiling-on-phone-small.svg";
import bloggerImage from "assets/images/lady-in-coat.jpeg";
import bloggerImage2 from "assets/images/bloggerImage2.png";
import bloggerImage3 from "assets/images/bloggerImage3.png";
import serviceImage1 from "assets/svgs/green-bg-illustrator-small.svg";
import feturedBlogImage3 from "assets/svgs/our-blog-img-3.svg";
import "./our-blog.scss";
import { Link } from "react-router-dom";

const OurBlog = () => {
  return (
    <div className="ourBlog">
      <div className="container-md">
        <HeadLine
          label="Our Blog"
          heading="Value proposition accelerator product management venture"
        />

        <section className="featured-blog">
          <div className="featured-blog__inner">
            <article>
              <Link to="/#">
                <div className="imge-block featured-blog__image">
                  <img src={serviceImage1} alt="" />
                </div>
                <div className="featured-blog__category">
                  <strong>Category</strong>
                  <span>November 22, 2021</span>
                </div>

                <p>Pitch termsheet backing validation focus release.</p>
                <div className="featured-blog__profile">
                  <img src={bloggerImage} alt="Blogger profile gallery" />
                  <span className="blogger-name">Chandler Bing</span>
                </div>
              </Link>
            </article>
            <article>
              <Link to="/#">
                <div className="imge-block featured-blog__image">
                  <img src={smilingLadyOnPhone} alt="" />
                </div>
                <div className="featured-blog__category">
                  <strong>Category</strong>
                  <span>November 22, 2021</span>
                </div>

                <p>
                  Seed round direct mailing non-disclosure agreement graphical
                  user interface rockstar.
                </p>
                <div className="featured-blog__profile">
                  <img src={bloggerImage2} alt="Blogger profile gallery" />
                  <span className="blogger-name">Rachel Green</span>
                </div>
              </Link>
            </article>
            <article>
              <Link to="/#">
                <div className="imge-block featured-blog__image">
                  <img src={feturedBlogImage3} alt="" />
                </div>
                <div className="featured-blog__category">
                  <strong>Category</strong>
                  <span>November 22, 2021</span>
                </div>

                <p>
                  Beta prototype sales iPad gen-z marketing network effects
                  value proposition
                </p>
                <div className="featured-blog__profile">
                  <img src={bloggerImage3} alt="Blogger profile gallery" />
                  <span className="blogger-name">Monica Geller</span>
                </div>
              </Link>
            </article>
          </div>
          <div className="load-button__block hzt-stack algn-ctr js-ctr">
            <button type="button" className="button button--darkBlue-bordered ">
              Load more
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurBlog;

import "./cta-banner.scss";

const CTABanner = () => {
  return (
    <article className="CTABanner">
      <div className="container">
        <div className="CTABanner-bg">
          <h1 className="heading-1 text-white text-ctr ctaBanner-heading">
            An enterprise template to ramp up your company website
          </h1>
          <form className="form">
            <div className="form-inner">
              <input type="text" placeholder="Your email address" />

              <button type="button" className="button button--green">
                Start now
              </button>
            </div>
          </form>

          <div className="moon"></div>
        </div>
      </div>
    </article>
  );
};

export default CTABanner;

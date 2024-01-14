import React from "react";
import Hero from "./hero/Hero";
import OurServices from "./our-services/OurServices";
import OurBlog from "./our-blog/OurBlog";
import CTABanner from "./call-to-action-banner/CTABanner";
const Home = () => {
  return (
    <main className="home">
      <Hero />
      <OurServices />
      <OurBlog />
      <CTABanner />
    </main>
  );
};

export default Home;

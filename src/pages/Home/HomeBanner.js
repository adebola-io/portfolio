import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeBanner = () => {
  const state = useSelector((state) => state);

  return (
    <section id="home-banner" style={{ height: `${state.sectionHeight}px` }}>
      <div className="overlay"></div>
      <div className="content">
        <div className="home-heading-container">
          <h1 className="home-heading">
            Adebola Akomolafe, <span>Web Developer.</span>
          </h1>
        </div>
        <p className="home-heading-info">
          Welcome! You've reached the page of Adebola Akomolafe, a front-end web
          developer from Lagos, Nigeria.
        </p>
        <Link className="heading-button contact-me" to="/contact-me">
          <span>Contact Me</span>
        </Link>
      </div>
    </section>
  );
};

export default HomeBanner;

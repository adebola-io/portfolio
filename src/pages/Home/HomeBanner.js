import React from "react";
import { useSelector } from "react-redux";

const HomeBanner = () => {
  const state = useSelector((state) => state);
  function goToContacts() {
    document.querySelector("html").scrollTop = state.sectionHeight * 3.5;
  }
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
        <button
          onClick={goToContacts}
          aria-label="contact_me"
          className="heading-button contact-me"
          to="/contact-me"
        >
          <span>Contact Me</span>
        </button>
      </div>
    </section>
  );
};

export default HomeBanner;

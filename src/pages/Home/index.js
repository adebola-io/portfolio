import React from "react";
import FeaturedWork from "./FeaturedWork";
import { navigateTo, toggleLines, updateHeaderColor } from "../../actions";
import Lines from "./Lines";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { works } from "../../data";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function scrollListener() {
    at(5, toggleLines);
    at(state.sectionHeight, updateHeaderColor);
  }
  function at(scrollT, action) {
    if (document.querySelector("html").scrollTop > scrollT) {
      dispatch(action(true));
    } else {
      dispatch(action(false));
    }
  }
  React.useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", scrollListener);
    return () => {
      if (!mounted) window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  const featuredWorks = works.filter((work) => work.featured);
  return (
    <main id="home" className="page">
      <section id="home-banner" style={{ height: `${state.sectionHeight}px` }}>
        <div className="overlay"></div>
        <div className="content">
          <div className="home-heading-container">
            <h1 className="home-heading">
              Adebola Akomolafe, <span>Web Developer.</span>
            </h1>
          </div>
          <p className="home-heading-info">
            Hi, I'm Adebola, a front-end web developer based in Lagos, Nigeria,
            bringing ideas to life, one line of code at a time.
          </p>
          <Link className="heading-button contact-me" to="/contact-me">
            <span>Contact Me</span>
          </Link>
        </div>
      </section>
      <section id="featured-works">
        <div className="content">
          <h1 className="featured-works-heading">Featured Works</h1>
          <div className="featured-works-container">
            {featuredWorks.map((featuredWork, index) => {
              return (
                <FeaturedWork
                  key={index}
                  name={featuredWork.name}
                  thColor={featuredWork.thColor}
                  thColor2={featuredWork.thColor2}
                  scColor={featuredWork.scColor}
                  info={featuredWork.info}
                  technologies={featuredWork.technologies}
                  transitionDuration={`${(index + 1) * 200}ms`}
                />
              );
            })}
            <Link
              onClick={() => {
                dispatch(navigateTo("Works"));
              }}
              className="see-all"
              to="/works"
            >
              SEE ALL WORKS -{">"}
            </Link>
          </div>
        </div>
      </section>
      <section style={{ height: `${state.sectionHeight}px` }}></section>
      <Lines />
    </main>
  );
};

export default Home;

import React from "react";
import FeaturedWork from "./FeaturedWork";
import { navigateTo, toggleLines, updateHeaderColor } from "../../actions";
import Lines from "./Lines";
import HomeBanner from "./HomeBanner";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { works } from "../../data";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function scrollListener() {
    at(state.sectionHeight / 1.25, toggleLines);
    at(state.sectionHeight / 1.5, updateHeaderColor);
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
      <HomeBanner />
      <section id="featured-works">
        <div className="content">
          <h1 className="featured-works-heading">Featured Works</h1>
          <div className="featured-works-container">
            {featuredWorks.map((featuredWork, index) => {
              return (
                <FeaturedWork
                  key={index}
                  logo={featuredWork.logo}
                  filter={featuredWork.logoFilter}
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

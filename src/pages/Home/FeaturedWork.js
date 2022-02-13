import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { navigateTo } from "../../redux/actions";
import { whenInView } from "../../utils/func";
import { works } from "../../data";

const FeaturedWorks = () => {
  const reference = React.useRef(null);
  function listen() {
    whenInView(reference.current, () => {
      console.log(9);
    });
  }
  React.useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", listen);
    return () => {
      if (!mounted) window.removeEventListener("scroll", listen);
    };
  });
  const dispatch = useDispatch();
  const featuredWorks = works.filter((work) => work.featured);
  return (
    <section id="featured-works">
      <div className="content">
        <h1 className="featured-works-heading">Featured Works</h1>
        <div ref={reference} className="featured-works-container">
          {featuredWorks.map((featuredWork, index) => {
            return (
              <FeaturedWork
                key={index}
                logo={featuredWork.logo}
                link={featuredWork.link}
                code={featuredWork.code}
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
  );
};

const FeaturedWork = (props) => {
  const FeaturedWorkStyle = {
    "--bgColor": props.thColor,
    "--bgColor2": props.thColor2,
    "--secColor": props.scColor,
    "--imgFilter": props.filter,
    height: window.innerHeight / 2,
    transitionDuration: props.transitionDuration,
  };
  return (
    <Link
      to={`/works/${props.name.toLowerCase()}`}
      style={FeaturedWorkStyle}
      className="featured-work"
    >
      <h1>{props.name}</h1>
      <p>{props.info}</p>
      <img
        id={`${props.name.toLowerCase()}-logo`}
        src={props.logo.default}
        alt={props.name}
      />
      <ul className="technologies-used">
        {props.technologies.map((technology, index) => {
          return <li key={index}>{technology}</li>;
        })}
      </ul>
    </Link>
  );
};
FeaturedWork.propTypes = {
  thColor: PropTypes.string,
  thColor2: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  technologies: PropTypes.array,
  scColor: PropTypes.string,
};
FeaturedWork.defaultProps = {
  thColor: "var(--themeColor)",
  name: "Featured Work",
  info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad, maxime voluptates ut dolor volu.",
  scColor: "white",
  logo: { default: "." },
  technologies: [],
};

export default FeaturedWorks;

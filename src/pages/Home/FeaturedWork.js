import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FeaturedWork = (props) => {
  const FeaturedWorkStyle = {
    "--bgColor": props.thColor,
    "--bgColor2": props.thColor2,
    "--secColor": props.scColor,
    height: window.innerHeight / 2,
    transitionDuration: props.transitionDuration,
  };
  return (
    <Link to="/" style={FeaturedWorkStyle} className="featured-work">
      <h1>{props.name}</h1>
      <ul className="technologies-used">
        {props.technologies.map((technology, index) => {
          return <li key={index}>{technology}</li>;
        })}
      </ul>
      <p>{props.info}</p>
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
  technologies: [],
};

export default FeaturedWork;

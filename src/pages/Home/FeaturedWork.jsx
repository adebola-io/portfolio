import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { navigateTo } from "../../redux/actions";
import { works } from "../../data";
import { Link } from "@tanstack/react-router";

const FeaturedWorks = () => {
   const reference = React.useRef(null);
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
                        id={index}
                        logo={featuredWork.logo}
                        // link={featuredWork.link}
                        // code={featuredWork.code}
                        filter={featuredWork.logoFilter}
                        name={featuredWork.name}
                        thColor={featuredWork.thColor}
                        thColor2={featuredWork.thColor2}
                        scColor={featuredWork.scColor}
                        info={featuredWork.info}
                        technologies={featuredWork.technologies}
                     />
                  );
               })}
               <Link
                  onClick={() => {
                     dispatch(navigateTo("Works"));
                  }}
                  className="see-all"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/adebola-xyz?tab=repositories"
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
   };
   return (
      <Link
         href={`http://github.com/adebola-io/${props.name.toLowerCase()}`}
         target="_blank"
         rel="noreferrer"
         style={FeaturedWorkStyle}
         className="featured-work"
         id={`fwork-${props.id + 1}`}
      >
         <h1>{props.name}</h1>
         <p>{props.info}</p>
         <img
            id={`${props.name.toLowerCase()}-logo`}
            src={props.logo}
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
   id: PropTypes.number,
   thColor: PropTypes.string,
   thColor2: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   info: PropTypes.string.isRequired,
   technologies: PropTypes.array,
   scColor: PropTypes.string,
};
FeaturedWork.defaultProps = {
   id: 0,
   thColor: "var(--themeColor)",
   name: "Featured Work",
   info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad, maxime voluptates ut dolor volu.",
   scColor: "white",
   logo: "",
   filter: "",
   technologies: [],
};

export default FeaturedWorks;

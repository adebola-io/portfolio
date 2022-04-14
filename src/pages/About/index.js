import React from "react";
import BackdropText from "../../components/BackdropText.jsx";
import { stack } from "../../data/index.js";
const AboutMe = () => {
  return (
    <main>
      <BackdropText text="About" />
      <section className="about-me-section" id="about-section-1">
        <h1>Who am I? </h1>
        <p>
          I am an entry-level front-end developer with a serious passion for
          creating structured, concise and dynamic user experiences. Over the
          years I've used that passsion to contribute my part in making the Web
          interactive, more accessible and all around prettier place to be.
        </p>
        <p>
          In my free time I enjoy an array of things, like reading fantasy
          epics, graphic novels and historical non-fiction, watching Marvel
          movies, and listening to the latest Lamar album.
        </p>
        <p>
          Want to develop a simple website for your small business, or a
          sophisticated web system for your blossoming tech startup? I'm your
          guy.
        </p>
        <p>Let's make magic. :)</p>
      </section>
      <section className="about-me-section" id="my-stack">
        <h1>My skills</h1>
        <ul id="stack-list">
          {stack.map((tech, index) => {
            return (
              <Tech
                key={index}
                filter={tech.filter}
                name={tech.name}
                percent={tech.percent}
              />
            );
          })}
        </ul>
      </section>
      {/* <section className="about-me-section" id="about-section-1">
        <h1>Experience </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae at
          aut animi consequatur libero sequi mollitia voluptate corrupti, itaque
          illum reiciendis asperiores doloribus? Placeat officiis libero nemo
          recusandae dolore sint. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam, magni, distinctio nulla quos magnam ea
          aliquam ab possimus, accusantium expedita necessitatibus tempora
          accusamus sequi officia omnis suscipit id sint recusandae.
        </p>
      </section> */}
    </main>
  );
};

const Tech = (props) => {
  return (
    <li key={props.key}>
      {/* <img
        ref={image}
        onLoad={show}
        src={props.logo}
        alt={props.name}
        className="stack-t-logo"
        id={`${props.name.toLowerCase()}-logo`}
      /> */}
      <div className="skill">{props.name}</div>
    </li>
  );
};

export default AboutMe;

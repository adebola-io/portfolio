import React from "react";
// import BackdropText from "../../components/BackdropText.jsx";
import { stack } from "../../data/index.js";
const AboutMe = () => {
  return (
    <main>
      {/* <BackdropText text="About" /> */}
      <section className="about-me-section" id="about-section-1">
        <h1>Who am I? </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae at
          aut animi consequatur libero sequi mollitia voluptate corrupti, itaque
          illum reiciendis asperiores doloribus? Placeat officiis libero nemo
          recusandae dolore sint. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam, magni, distinctio nulla quos magnam ea
          aliquam ab possimus, accusantium expedita necessitatibus tempora
          accusamus sequi officia omnis suscipit id sint recusandae.
        </p>
      </section>
      <section className="about-me-section" id="my-stack">
        <h1>My stack</h1>
        <ul id="stack-list">
          {stack.map((tech, index) => {
            return (
              <Tech
                key={index}
                filter={tech.filter}
                name={tech.name}
                logo={tech.logo.default}
              />
            );
          })}
        </ul>
      </section>
      <section className="about-me-section" id="about-section-1">
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
      </section>
    </main>
  );
};

const Tech = (props) => {
  return (
    <li key={props.key}>
      <img
        src={props.logo}
        alt={props.name}
        className="stack-t-logo"
        id={`${props.name.toLowerCase()}-logo`}
      />
      <label htmlFor="stack-t-logo">{props.name}</label>
    </li>
  );
};

export default AboutMe;

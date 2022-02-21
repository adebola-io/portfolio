import React from "react";
import { useSelector } from "react-redux";
import { contacts } from "../../data";

const ContactMe = () => {
  const state = useSelector((state) => state);
  return (
    <section id="contactme" style={{ height: `${state.sectionHeight}px` }}>
      <h2>Ready to Get Started?</h2>
      <p>Reach me at:</p>
      <h1>adebolaakomolafe@gmail.com</h1>
      <ul className="reach-me">
        {contacts.map((contact, index) => {
          return (
            <li key={index}>
              <a
                style={{ "--imgFilterContainer": contact.imgFilter }}
                href="/if"
              >
                <img src={contact.logo.default} alt={`${contact.name}-logo`} />
                <span>{contact.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ContactMe;

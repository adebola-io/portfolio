import React from "react";
import { contacts } from "../../data";

const ContactMe = (props) => {
  return (
    <section id="contactme" style={{ height: props.height }}>
      <h2>Ready to Get Started?</h2>
      <p>Reach me at:</p>
      <h1>adebolaakomolafe@gmail.com</h1>
      <ul className="reach-me">
        {contacts.map((contact, index) => {
          return <li key={index}>{contact.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default ContactMe;

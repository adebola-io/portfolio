import React from "react";
import { contacts } from "../data";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; Adebola Akomolafe, {new Date().getFullYear()}.
      </p>
      <ul className="footer-links">
        {contacts.map((contact, index) => {
          return (
            <li key={index}>
              <a href={contact.link}>
                <img
                  className="footer-link"
                  src={contact.logo.default}
                  alt={contact.name}
                  style={{ filter: contact.footerImgFilter }}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;

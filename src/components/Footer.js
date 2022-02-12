import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">&copy; Adebola Akomolafe, 2021.</p>
      <ul className="footer-links">
        <FtrLink name="Github" />
        <FtrLink name="LinkedIn" />
        <FtrLink name="Twitter" />
      </ul>
    </footer>
  );
};

const FtrLink = (props) => {
  return (
    <li>
      <img className="footer-link" src="" alt={props.name} />
    </li>
  );
};

export default Footer;

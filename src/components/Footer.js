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
      <a href={props.to}>
        <img className="footer-link" src={props.logo} alt={props.name} />
      </a>
    </li>
  );
};

export default Footer;

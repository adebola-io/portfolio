import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { navigateTo } from "../redux/actions";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <NavLink to="/" name="Home" />
          <NavLink to="/works" name="Works" />
          <NavLink to="/about-me" name="About Me" />
        </ul>
      </nav>
    </header>
  );
};

const NavLink = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <li>
      <Link
        className="header-navlink"
        id={`header-navlink-${props.name.toLowerCase()}`}
        style={{
          color: state.currentPage === props.name ? "white" : "gray",
          //   fontWeight: isSelected ? "bold" : "normal",
        }}
        onClick={() => {
          dispatch(navigateTo(props.name));
        }}
        to={props.to}
      >
        {props.name}
      </Link>
    </li>
  );
};
NavLink.propTypes = {
  /**
   * The name of the navigation link.
   */
  name: PropTypes.string.isRequired,
  /**
   * The route where the navigation link leads to.
   */
  to: PropTypes.string.isRequired,
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar as toggleNavbar } from "../redux/actions";
import { navigateTo } from "../redux/actions";
const Header = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  function toggleNavBar() {
    dispatch(toggleNavbar());
  }
  return (
    <>
      <div
        style={{
          transform: state.sideBarIsOpen ? "none" : "translateY(-100%)",
        }}
        aria-label="card_under_animation"
        className="card-under"
      ></div>
      <div
        style={{
          transform: state.sideBarIsOpen ? "none" : "translateY(-100%)",
        }}
        aria-label="card_under_animation"
        className="card-under-2"
      ></div>
      <div
        style={{
          transform: state.sideBarIsOpen ? "none" : "translateY(-100%)",
        }}
        aria-label="card_under_animation"
        className="card-under-3"
      ></div>
      <Navbar />
      <header className="header">
        {/* <nav>
          <ul>
            <NavLink to="/" name="Home" />
            <NavLink to="/works" name="Works" />
            <NavLink to="/about-me" name="About Me" />
          </ul>
        </nav> */}
        <button
          style={{
            "--beforeTransform": state.sideBarIsOpen
              ? "rotate(-45deg) translate(0, 258%)"
              : "none",
            "--afterTransform": state.sideBarIsOpen
              ? "rotate(45deg) translate(9%, -250%)"
              : "none",
          }}
          onClick={toggleNavBar}
          aria-label="sidebar_toggle_button"
        ></button>
      </header>
    </>
  );
};

const NavLink = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <li style={{ animationDuration: props.anim ? props.anim : "0" }}>
      <Link
        className="header-navlink"
        id={`header-navlink-${props.name.toLowerCase()}`}
        style={{
          color:
            state.currentPage === props.name ? "var(--themeColor)" : "gray",
          fontSize: state.currentPage === props.name ? "42pt" : "30pt",
        }}
        onClick={() => {
          dispatch(navigateTo(props.name));
          dispatch(toggleNavbar());
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
  /**
   * Animation speed.
   */
  anim: PropTypes.string,
};

const Navbar = () => {
  const state = useSelector((state) => state);
  const [showList, setShowList] = React.useState(false);
  React.useEffect(() => {
    if (state.sideBarIsOpen) {
      setTimeout(() => {
        setShowList(true);
      }, 300);
    } else setShowList(false);
  }, [state.sideBarIsOpen]);
  return (
    <menu
      aria-label="navigation_menu"
      style={{
        height: state.sideBarIsOpen ? "100%" : "0",
        transform: state.sideBarIsOpen ? "none" : "translateY(-160px)",
      }}
      className="navbar"
    >
      <ul>
        {showList && <NavLink name="Home" to="/" anim="400ms" />}
        {showList && <NavLink name="Contact" to="/contact-me" anim="800ms" />}
        {showList && <NavLink name="About" to="/about-me" anim="1200ms" />}
      </ul>
      <div className="emp"></div>
    </menu>
  );
};

export default Header;

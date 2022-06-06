import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDelay } from "./utils/hooks";
import { useDispatch } from "react-redux";
import { resizeWindow } from "./redux/actions";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Cursor from "./components/Cursor.jsx";
import Home from "./pages/Home/index";
import AboutMe from "./pages/About";
import NotFound from "./pages/NotFound";

const Start = () => {
  const delay = useDelay(3600);
  const dispatch = useDispatch();
  React.useEffect(() => {
    let mounted = true;
    function changeSectionHeight() {
      dispatch(resizeWindow());
    }
    window.addEventListener("resize", changeSectionHeight);
    return () => {
      if (!mounted) window.removeEventListener("resize", changeSectionHeight);
    };
  }, [dispatch]);
  if (delay)
    return (
      <div className="start">
        <div
          className="flex start-message"
          style={{ height: `${window.innerHeight}px` }}
        >
          <div className="fc start-main-bg">
            <p>Hi there.</p>
          </div>
          <div className="start-secondary-bg">
            {/* <div className="start-secondary-inner"></div> */}
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="app">
        <Router>
          <Cursor />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
};

export default Start;

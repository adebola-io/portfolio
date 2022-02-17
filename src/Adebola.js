import React from "react";
import { useDelay } from "./utils/hooks";
import { resizeWindow } from "./redux/actions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/index";
import Contact from "./pages/Contact";
import AboutMe from "./pages/About";
import "./styles/adebola.css";
import { useDispatch } from "react-redux";

const Adebola = () => {
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
  }, []);
  if (delay) {
    return <Start />;
  } else
    return (
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
};

export default Adebola;

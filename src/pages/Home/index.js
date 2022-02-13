import React from "react";
import FeaturedWorks from "./FeaturedWork";
import Info from "./Info";
import ContactMe from "./ContactMe";
import HomeBanner from "./HomeBanner";
import Lines from "./Lines";
import {
  toggleLines,
  stopTogglingLines,
  changeBackdropText,
} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { animateBackdropTextChange } from "../../utils/func";

const Home = () => {
  const state = useSelector((state) => state);
  const html = document.querySelector("html");
  const dispatch = useDispatch();
  function scrollListener() {
    if (
      ((html.scrollTop > state.sectionHeight / 2 &&
        html.scrollTop < state.sectionHeight * 1.5) ||
        html.scrollTop > state.sectionHeight * 2.75) &&
      !state.stopTogglingLines
    ) {
      dispatch(toggleLines(true));
      dispatch(stopTogglingLines(true));
    } else {
      dispatch(toggleLines(false));
      dispatch(stopTogglingLines(false));
    }
  }
  React.useEffect(() => {
    let mounted = true;
    animateBackdropTextChange();
    dispatch(changeBackdropText("Adebola"));
    window.addEventListener("scroll", scrollListener);
    return () => {
      if (!mounted) window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <main id="home" className="page">
      <HomeBanner />
      <Info />
      <FeaturedWorks />
      <ContactMe height={`${state.sectionHeight}px`} />
      <Lines />
    </main>
  );
};

export default Home;

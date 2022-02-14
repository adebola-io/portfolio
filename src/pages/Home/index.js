import React from "react";
import FeaturedWorks from "./FeaturedWork";
import Info from "./Info";
import ContactMe from "./ContactMe";
import HomeBanner from "./HomeBanner";
import Lines from "./Lines";
import { useSelector } from "react-redux";
import { element, elementAll, whenInView } from "../../utils/func";

const Home = () => {
  const state = useSelector((state) => state);
  React.useEffect(() => {
    let bannerisHidden = false,
    lineState = 1,
    mounted = true;
    function checkViewforInfo() {
      if (element("#info div p")) {
        whenInView(element("#info div p"),() => {
            element("#info div p").classList.remove("hidden");
          },state.sectionHeight / 4);
        }
    }
    checkViewforInfo();
    function scrollListener() {
      checkViewforInfo();
      // HOME BANNER SCROLL ANIMATION
      if (element('#home-banner')) {
        if ((element('html').scrollTop > state.sectionHeight/2) && !bannerisHidden) {
          console.log(9)
          element("#home-banner").classList.add('hide-banner')
          bannerisHidden = true;
        } else if ((element('html').scrollTop < state.sectionHeight/2) && bannerisHidden) {
          element("#home-banner").classList.remove('hide-banner')
          bannerisHidden = false;
        }
      }
      // LINES SCROLL ANIMATION
      if (element(".lines")) {
        if (element("html").scrollTop > state.sectionHeight && lineState === 1) {
          elementAll(".lines").forEach(elem=>{elem.style.setPropertyValue('--translateY', 'var(--newTranslateY)')})
          lineState = 2;
        }
      }
      //
      //     if (
      //       ((html.scrollTop > state.sectionHeight / 2 &&
      //         html.scrollTop < state.sectionHeight * 1.5) ||
      //         html.scrollTop > state.sectionHeight * 2.75) &&
      //       !state.stopTogglingLines
      //     ) {
      //       dispatch(toggleLines(true));
      //       dispatch(pastBanner(true));
      //       dispatch(stopTogglingLines(true));
      //     } else {
      //       dispatch(toggleLines(false));
      //       if (html.scrollTop < state.sectionHeight) dispatch(pastBanner(false));
      //       dispatch(stopTogglingLines(false));
      //     }
    }
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

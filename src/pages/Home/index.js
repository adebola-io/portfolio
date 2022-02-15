import React from "react";
import FeaturedWorks from "./FeaturedWork";
import Info from "./Info";
import ContactMe from "./ContactMe";
import HomeBanner from "./HomeBanner";
import BackdropText from "../../components/BackdropText";
import Lines from "./Lines";
import { useSelector } from "react-redux";
import { element, elementAll, whenInView } from "../../utils/func";

const Home = () => {
  const state = useSelector((state) => state);
  React.useEffect(() => {
    let bannerisHidden = false,
      lineState = 1,
      featured = false,
      contactIsViewed = false,
      mounted = true;
    function checkViewforInfo() {
      if (element("#info div p")) {
        whenInView(
          element("#info div p"),
          () => {
            element("#info div p").classList.remove("hidden");
          },
          state.sectionHeight / 3
        );
      }
    }
    function checkViewforFeatured() {
      if (element(".featured-work")) {
        whenInView(
          element(".featured-work"),
          () => {
            if (!featured) {
              element(".featured-works-heading").classList.remove(
                "hide-featured-works-heading"
              );
              setTimeout(() => {
                elementAll(".featured-work").forEach((elem, index) => {
                  elem.animate(
                    [
                      { opacity: "0", transform: "translate(-10%, 50%)" },
                      {
                        opacity: "1",
                      },
                    ],
                    {
                      duration: (index + 1) * 200,
                      _fill: "forwards",
                      get fill() {
                        return this._fill;
                      },
                      set fill(value) {
                        this._fill = value;
                      },
                    }
                  );
                });
              }, 200);
              featured = true;
            }
          },
          state.sectionHeight / 3
        );
      }
    }
    function checkViewforContact() {
      if (element("#contactme h1")) {
        whenInView(
          element("#contactme h1"),
          () => {
            if (!contactIsViewed) {
              element("#contactme h1").classList.remove(
                "hide-contact-heading1"
              );
              element("#contactme h2").classList.remove(
                "hide-contact-heading2"
              );
              elementAll("#contactme ul li").forEach((elem, index) => {
                elem.animate(
                  [
                    { transform: "translateX(100%)", opacity: "0" },
                    { opacity: "1" },
                  ],
                  {
                    duration: (index + 1) * 500,
                    fill: "forwards",
                  }
                );
              });
              contactIsViewed = true;
            }
          },
          state.sectionHeight / 3
        );
      }
    }
    checkViewforInfo();
    checkViewforFeatured();
    checkViewforContact();
    function scrollListener() {
      checkViewforInfo();

      // HOME BANNER SCROLL ANIMATION
      if (element("#home-banner")) {
        // Darkening
        if (element("html").scrollTop < (state.sectionHeight / 2) * 0.25) {
          element("#home-banner").style.transform = "none";
          element("#home-banner").style.filter = "none";
        } else if (
          element("html").scrollTop > 0 &&
          element("html").scrollTop < (state.sectionHeight / 2) * 0.25
        ) {
          element("#home-banner").style.transform = "translateY(-5%)";
          element("#home-banner").style.filter =
            "brightness(0.75) opacity(0.75)";
        } else if (
          element("html").scrollTop > (state.sectionHeight / 2) * 0.25 &&
          element("html").scrollTop < (state.sectionHeight / 2) * 0.5
        ) {
          element("#home-banner").style.transform = "translateY(-10%)";
          element("#home-banner").style.filter =
            "brightness(0.50) opacity(0.50)";
        } else if (
          element("html").scrollTop > (state.sectionHeight / 2) * 0.5 &&
          element("html").scrollTop < (state.sectionHeight / 2) * 0.75
        ) {
          element("#home-banner").style.transform = "translateY(-15%)";
          element("#home-banner").style.filter =
            "brightness(0.25) opacity(0.25)";
        }
        // Vanishing
        if (
          element("html").scrollTop > state.sectionHeight / 2 &&
          !bannerisHidden
        ) {
          element("#home-banner").classList.add("hide-banner");
          bannerisHidden = true;
        } else if (
          element("html").scrollTop < state.sectionHeight / 2 &&
          bannerisHidden
        ) {
          element("#home-banner").classList.remove("hide-banner");
          bannerisHidden = false;
        }
      }

      // LINES SCROLL ANIMATION
      if (element(".lines")) {
        if (
          element("html").scrollTop < state.sectionHeight / 2 &&
          lineState !== 1
        ) {
          elementAll(".lines").forEach((elem) => {
            elem.style.setProperty("--translateY", "var(--oldTranslateY)");
          });
          lineState = 1;
        } else if (
          element("html").scrollTop > state.sectionHeight / 2 &&
          element("html").scrollTop < state.sectionHeight * 1.5 &&
          lineState !== 2
        ) {
          elementAll(".lines").forEach((elem) => {
            elem.style.setProperty("--translateY", "var(--newTranslateY)");
          });
          lineState = 2;
        } else if (
          element("html").scrollTop > state.sectionHeight * 1.5 &&
          element("html").scrollTop < state.sectionHeight * 3 &&
          lineState !== 3
        ) {
          elementAll(".lines").forEach((elem) => {
            elem.style.setProperty("--translateY", "var(--oldTranslateY)");
          });
          lineState = 3;
        } else if (
          element("html").scrollTop > state.sectionHeight * 3 &&
          lineState !== 4
        ) {
          lineState = 4;
          elementAll(".lines").forEach((elem) => {
            elem.style.setProperty("--translateY", "var(--newTranslateY)");
          });
        }
      }

      // FEATURED WORKS ANIMATION
      checkViewforFeatured();

      // CONTACT ANIMATION
      checkViewforContact();
    }
    window.addEventListener("scroll", scrollListener);
    return () => {
      if (!mounted) window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <main id="home" className="page">
      <BackdropText text="Adebola" />
      <HomeBanner />
      <Info />
      <FeaturedWorks />
      <ContactMe height={`${state.sectionHeight}px`} />
      <Lines />
    </main>
  );
};

export default Home;

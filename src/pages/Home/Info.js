import React from "react";
import { useSelector } from "react-redux";
import { whenInView } from "../../utils/func";

const Info = () => {
  const state = useSelector((state) => state);
  const reference = React.useRef(null);
  function listen() {
    whenInView(
      reference.current,
      () => {
        reference.current.classList.remove("hidden");
      },
      state.sectionHeight / 4
    );
  }
  React.useEffect(() => {
    window.addEventListener("scroll", listen);
    return () => {
      window.removeEventListener("scroll", listen);
    };
  }, []);
  return (
    <section id="info" style={{ height: `${state.sectionHeight + 105}px` }}>
      <div>
        <p className="hidden" ref={reference}>
          I, Adebola, am a self-motivated developer skilled in a number of web
          technologies. I consider myself a goal-oriented, focus-driven and all
          around fun individual, and I can bring your wildest ideas to life, one
          line of code at a time.
        </p>
      </div>
    </section>
  );
};

export default Info;

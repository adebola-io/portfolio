import React from "react";
import { useSelector } from "react-redux";
import { whenInView } from "../../utils/func";

const Info = () => {
  const state = useSelector((state) => state);
  let height = state.sectionHeight;
  const reference = React.useRef(null);
  React.useEffect(() => {
    let mounted = true;
    function scrollListener() {
      whenInView(
        reference.current,
        () => {
          reference.current.classList.remove("hidden");
        },
        height / 4
      );
    }
    window.addEventListener("scroll", scrollListener);
    return () => {
      if (!mounted) window.removeEventListener("scroll", scrollListener);
    };
  }, [height]);
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

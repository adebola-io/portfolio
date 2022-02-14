import React from "react";
import { useSelector } from "react-redux";

const Info = () => {
  const state = useSelector((state) => state);
  return (
    <>
      <section
        id="info"
        style={{
          height: `${state.sectionHeight + 105}px`,
          marginTop: `${state.sectionHeight}px`,
        }}
      >
        <div>
          <p className="hidden">
            I, Adebola, am a self-motivated developer skilled in a number of web
            technologies. I consider myself a goal-oriented, focus-driven and
            all around fun individual, and I can bring your wildest ideas to
            life, one line of code at a time.
          </p>
        </div>
      </section>
    </>
  );
};

export default Info;

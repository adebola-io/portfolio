import React from "react";
import { useSelector } from "react-redux";

const Lines = () => {
  const state = useSelector((state) => state);
  const lines = [1, 2, 3, 4, 5];
  return (
    <>
      {lines.map((line) => {
        return <Line key={line} transform={state.linesTranslate} no={line} />;
      })}
    </>
  );
};

const Line = (props) => {
  return (
    <hr
      ref={props.ref}
      style={{ "--translateY": props.transform }}
      className={`lines line-${props.no}`}
    />
  );
};

export default Lines;

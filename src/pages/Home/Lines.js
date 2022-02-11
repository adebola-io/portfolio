import React from "react";
import { useSelector } from "react-redux";

const Line = (props) => {
  return (
    <hr
      ref={props.ref}
      style={{ "--translateY": props.transform }}
      className={`lines line-${props.no}`}
    />
  );
};

const LineBatch1 = () => {
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

const LineBatch2 = () => {
  const state = useSelector((state) => state);
  const lines = [6, 7, 8, 9, 10];
  return (
    <>
      {lines.map((line) => {
        return <Line key={line} transform={state.linesTranslate} no={line} />;
      })}
    </>
  );
};
const Lines = () => {
  return (
    <div id="lines-container">
      <LineBatch1 />
      <LineBatch2 />
    </div>
  );
};

export default Lines;

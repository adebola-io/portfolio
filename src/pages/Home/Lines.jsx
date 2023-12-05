import React from "react";

const Line = (props) => {
  return <hr className={`lines line-${props.no}`}/>;
};

const LineBatch1 = () => {
  const lines = [1, 2, 3, 4, 5];
  return (
    <>
      {lines.map((line) => {
        return <Line key={line} no={line} />;
      })}
    </>
  );
};

const LineBatch2 = () => {
  const lines = [6, 7, 8, 9, 10];
  return (
    <>
      {lines.map((line) => {
        return <Line key={line} no={line} />;
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

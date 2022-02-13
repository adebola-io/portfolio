import React from "react";

const BackdropText = (props) => {
  return (
    <div className="backdrop">
      <span className="text">
        <p>{props.text}</p>
      </span>
    </div>
  );
};

export default BackdropText;

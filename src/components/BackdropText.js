import React from "react";
import { useSelector } from "react-redux";

const BackdropText = () => {
  const state = useSelector((state) => state);
  return (
    <div className="backdrop">
      <span className="text">
        <p
          onChange={() => {
            console.log("0");
          }}
        >
          {state.backdropText}
        </p>
      </span>
    </div>
  );
};

export default BackdropText;

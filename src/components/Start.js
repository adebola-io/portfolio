import React from "react";

const Start = () => {
  return (
    <div className="start">
      <div
        className="flex start-message"
        style={{ height: `${window.innerHeight}px` }}
      >
        <div className="fc start-main-bg">
          <p>Hi there.</p>
        </div>
        <div className="start-secondary-bg"></div>
      </div>
    </div>
  );
};

export default Start;

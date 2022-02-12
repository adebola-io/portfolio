import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDelay } from "../hooks";

const Limbo = ({ match }) => {
  const delay = useDelay(500);
  console.log(match);
  const Component = () => {
    return <div></div>;
  };
  if (delay) {
    return <div className="limbo-page">jwkdl,</div>;
  } else
    return (
      <Routes>
        <Route path="/" element={<Component />}></Route>
      </Routes>
    );
};

export default Limbo;

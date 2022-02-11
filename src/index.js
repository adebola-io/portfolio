import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store";
import Adebola from "./Adebola";
import reportWebVitals from "./reportWebVitals";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Adebola />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
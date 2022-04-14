import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducer";
import reportWebVitals from "./reportWebVitals";
import Start from "./Start";
import "./styles/adebola.css";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Start />
  </Provider>,
  document.getElementById("adebola-root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

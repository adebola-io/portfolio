import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducer from "./redux/reducer";
import Start from "./Start";

// @ts-ignore
const store = legacy_createStore(reducer);

export const App = () => {
   return (
      <Provider store={store}>
         <Start />
      </Provider>
   );
};

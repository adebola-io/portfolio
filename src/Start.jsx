import React from "react";
import { useDelay } from "./utils/hooks";
import { Provider, useDispatch } from "react-redux";
import { resizeWindow } from "./redux/actions";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// import Cursor from "./components/Cursor.jsx";
import { Outlet } from "@tanstack/react-router";
import { legacy_createStore as createStore } from "redux";
import reducer from "./redux/reducer.js";

//@ts-ignore
const store = createStore(reducer);

const Start = () => {
   const delay = useDelay(3600);
   const dispatch = useDispatch();
   React.useEffect(() => {
      let mounted = true;
      function changeSectionHeight() {
         dispatch(resizeWindow());
      }
      window.addEventListener("resize", changeSectionHeight);
      return () => {
         if (!mounted)
            window.removeEventListener("resize", changeSectionHeight);
      };
   }, [dispatch]);
   if (delay)
      return (
         <Provider store={store}>
            <div className="start">
               <div
                  className="flex start-message"
                  style={{ height: `${window.innerHeight}px` }}
               >
                  <div className="fc start-main-bg">
                     <p>Hi there.</p>
                  </div>
                  <div className="start-secondary-bg">
                     {/* <div className="start-secondary-inner"></div> */}
                  </div>
               </div>
            </div>
         </Provider>
      );
   else
      return (
         <Provider store={store}>
            <div className="app">
               {/* <Cursor /> */}
               <Header />
               <Outlet />
               <Footer />
            </div>
         </Provider>
      );
};

export default Start;

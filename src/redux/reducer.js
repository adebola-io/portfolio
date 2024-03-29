import { element, numerate } from "../utils/func";

const initialState = {
   currentPage:
      window.location.pathname === "/"
         ? "Home"
         : window.location.pathname === "/about-me"
         ? "About"
         : "",
   backdropText: "Adebola",
   headerColor: "linear-gradient(var(--mainTheme), transparent)",
   sectionHeight:
      window.innerHeight - numerate > 900 ? 900 : window.innerHeight - 65,
   windowHeight: window.innerHeight,
   sideBarIsOpen: false,
   showFeatured: false,
   linesTranslate: "var(--oldTranslateY)",
   stopTogglingLines: false,
   bannerOpacity: "1",
   bannerScale: "1",
   bannerTranslateY: "0",
   test: "testing",
   parallaxTranslate: [0, 0],
};

const reducer = function (
   state = initialState,
   action = { type: "NO_ACTION", payload: "" }
) {
   switch (action.type) {
      case "HOME_PARALLAX":
         return {
            ...state,
            parallaxTranslate: [action.payload[0], action.payload[1]],
         };
      case "TOGGLE_HEADER_COLOR":
         return {
            ...state,
            headerColor: action.payload
               ? "linear-gradient(var(--mainTheme), var(--mainTheme))"
               : "linear-gradient(var(--mainTheme), transparent)",
         };
      case "TOGGLE_SIDE_BAR":
         return {
            ...state,
            sideBarIsOpen: action.payload,
         };
      case "RESIZE_WINDOW":
         return {
            ...state,
            sectionHeight:
               window.innerHeight -
                  (element("header")
                     ? numerate(element("header"), "height")
                     : 65) >
               (element("section")
                  ? numerate(element("section"), "max-height")
                  : 900)
                  ? element("section")
                     ? numerate(element("section"), "max-height")
                     : 900
                  : window.innerHeight - numerate(element("header"), "height"),
            windowHeight: window.innerHeight,
         };
      case "NAVIGATE_TO":
         return {
            ...state,
            currentPage: action.payload,
         };
      case "CHANGE_BACKDROP_TEXT":
         return {
            ...state,
            backdropText: action.payload,
         };
      case "SCROLL_PAST_BANNER":
         return {
            ...state,
            bannerOpacity: action.payload ? "0" : "1",
            bannerScale: action.payload ? "0.95" : "1",
            bannerTranslateY: action.payload ? "0%" : "0",
         };
      case "TOGGLE_LINES":
         return {
            ...state,
            linesTranslate: action.payload
               ? "var(--newTranslateY)"
               : "var(--oldTranslateY)",
         };
      case "STOP_TOGGLING_LINES":
         return {
            ...state,
            stopTogglingLines: action.payload,
         };
      case "SHOW_FEATURED":
         return {
            ...state,
            showFeatured: true,
         };
      case "test":
         return { ...state, test: "tested" };
      case "NO_ACTION":
      default:
         return state;
   }
};

export default reducer;

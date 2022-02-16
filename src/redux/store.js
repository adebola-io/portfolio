import { element, numerate } from "../utils/func";

const initialState = {
  currentPage: "Home",
  backdropText: "Adebola",
  sectionHeight:
    window.innerHeight - numerate > 900 ? 900 : window.innerHeight - 65,
  showFeatured: false,
  linesTranslate: "var(--oldTranslateY)",
  stopTogglingLines: false,
  bannerOpacity: "1",
  bannerScale: "1",
  bannerTranslateY: "0",
  test: "testing",
};

const reducer = function (
  state = initialState,
  action = { type: "NO_ACTION", payload: "", subload: "" }
) {
  switch (action.type) {
    case "UPDATE_HEADER_COLOR":
      return {
        ...state,
        headerColor: action.payload ? "var(--mainTheme)" : "transparent",
      };
    case "RESIZE_WINDOW":
      return {
        ...state,
        sectionHeight:
          window.innerHeight -
            (element("header") ? numerate(element("header"), "height") : 65) >
          (element("section")
            ? numerate(element("section"), "max-height")
            : 900)
            ? element("section")
              ? numerate(element("section"), "max-height")
              : 900
            : window.innerHeight - numerate(element("header"), "height"),
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

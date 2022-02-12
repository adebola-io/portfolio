const initialState = {
  headerColor: "transparent",
  currentPage: "Home",
  sectionHeight: window.innerHeight - 65 > 900 ? 900 : window.innerHeight - 65,
  showFeatured: false,
  linesTranslate: "var(--oldTranslateY)",
  test: "testing",
};

const reducer = function (
  state = initialState,
  action = { type: "NO_ACTION", payload: "" }
) {
  switch (action.type) {
    case "UPDATE_HEADER_COLOR":
      return {
        ...state,
        headerColor: action.payload ? "var(--mainTheme)" : "transparent",
      };
    case "NAVIGATE_TO":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "TOGGLE_LINES":
      return {
        ...state,
        linesTranslate: action.payload
          ? "var(--newTranslateY)"
          : "var(--oldTranslateY)",
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

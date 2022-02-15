export function resizeWindow() {
  return {
    type: "RESIZE_WINDOW",
  };
}

export function updateHeaderColor(payload) {
  return {
    type: "UPDATE_HEADER_COLOR",
    payload,
  };
}

export function toggleLines(payload) {
  return {
    type: "TOGGLE_LINES",
    payload,
  };
}

export function stopTogglingLines(payload) {
  return {
    type: "STOP_TOGGLING_LINES",
    payload,
  };
}

export function navigateTo(payload) {
  return {
    type: "NAVIGATE_TO",
    payload,
  };
}

export function changeBackdropText(payload) {
  return {
    type: "CHANGE_BACKDROP_TEXT",
    payload,
  };
}

export function pastBanner(payload) {
  return {
    type: "SCROLL_PAST_BANNER",
    payload,
  };
}
// export function showFeaturedWorks(payload) {
//   return {
//     type: "SHOW_FEATURED",
//     payload,
//   };
// }

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

// export function showFeaturedWorks(payload) {
//   return {
//     type: "SHOW_FEATURED",
//     payload,
//   };
// }

/**
 *  Checks if an element is currently within view.
 * @param {HTMLElement} element
 * @param {Function} callback
 * @param {number} offset
 */
export const whenInView = (element, callback, offset = 0) => {
  if (!element) {
  } else {
    if (
      element.getBoundingClientRect().top - (window.innerHeight - offset) <=
      0
    )
      callback();
  }
};

export const animateBackdropTextChange = () => {
  document
    .querySelector(".backdrop span")
    .animate(
      [{ transform: "translateX(-50%)" }, { transform: "translateX(-40%)" }],
      { duration: 400 }
    );
};

/**
 * Get computed values as numbers (in pixels).
 * @param {HTMLElement} element DOM Element
 * @param {'height'|'width'|'padding-right'|'padding-left'|'margin-right'|'margin-left'|'font-size'} property
 * @returns {Number}
 */
export function numerate(element, property) {
  return parseFloat(
    window
      .getComputedStyle(element, null)
      .getPropertyValue(property)
      .slice(0, -2)
  );
}

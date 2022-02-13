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

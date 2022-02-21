import React from "react";

const Cursor = () => {
  const cursorContRef = React.useRef(null);
  const cursorRef = React.useRef(null);
  let pointer = false;
  React.useEffect(() => {
    let mounted = true;
    function repositionCursor(e) {
      cursorContRef.current.style.transform = `translate(${e.x}px, ${e.y}px) ${
        pointer ? "scale(1.5)" : ""
      }`;
    }
    function changeCursor(e) {
      if (
        window.getComputedStyle(e.target, null).getPropertyValue("cursor") ===
        "pointer"
      ) {
        cursorRef.current.style.filter = "invert() brightness(1.5)";
        pointer = true;
      }
    }
    function retainCursor(e) {
      if (
        window.getComputedStyle(e.target, null).getPropertyValue("cursor") ===
        "pointer"
      ) {
        cursorRef.current.style.filter = "none";
        pointer = false;
      }
    }
    window.addEventListener("mousemove", repositionCursor);
    window.addEventListener("mouseout", retainCursor);
    window.addEventListener("mouseover", changeCursor);
    return () => {
      if (!mounted) {
        window.removeEventListener("mousemove", repositionCursor);
        window.removeEventListener("mouseover", changeCursor);
        window.removeEventListener("mouseout", retainCursor);
      }
    };
  }, []);
  return (
    <div id="cursor-container" ref={cursorContRef}>
      <figure ref={cursorRef} id="cursor"></figure>
    </div>
  );
};

export default Cursor;

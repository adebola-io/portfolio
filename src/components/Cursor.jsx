import React from "react";

const Cursor = () => {
  const cursorRef = React.useRef(null);
  React.useEffect(() => {
    let mounted = true;
    function repositionCursor(e) {
      cursorRef.current.style.transform = `translate(${e.x}px, ${e.y}px)`;
    }
    window.addEventListener("mousemove", repositionCursor);
    return () => {
      if (!mounted) {
        window.removeEventListener("mousemove", repositionCursor);
      }
    };
  }, []);
  return <figure ref={cursorRef} id="cursor"></figure>;
};

export default Cursor;

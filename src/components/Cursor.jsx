import React from "react";
// import { useDispatch } from "react-redux";

const Cursor = () => {
  const cursorRef = React.useRef(null);
  // const dispatch = useDispatch();
  React.useEffect(() => {
    let mounted = true;
    function repositionCursor(e) {
      cursorRef.current.style.transform = `translate(${e.x}px, ${e.y}px)`;
      // dispatch({ type: "HOME_PARALLAX", payload: [e.x / 100, e.y / 100] });
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

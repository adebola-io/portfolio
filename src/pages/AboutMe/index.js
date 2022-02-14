import React from "react";
import { useDispatch } from "react-redux";
import { changeBackdropText } from "../../redux/actions";
import { animateBackdropTextChange } from "../../utils/func";

const AboutMe = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    animateBackdropTextChange();
    dispatch(changeBackdropText("About"));
  }, [dispatch]);
  return <main></main>;
};

export default AboutMe;

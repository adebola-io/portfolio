import React from "react";
import { useDispatch } from "react-redux";
import { changeBackdropText } from "../../redux/actions";
import { animateBackdropTextChange } from "../../utils/func";

const AllWorks = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    animateBackdropTextChange();
    dispatch(changeBackdropText("Works"));
  }, [dispatch]);
  return <main></main>;
};

export default AllWorks;

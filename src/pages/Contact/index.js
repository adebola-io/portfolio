import React from "react";
import { useSelector } from "react-redux";
import BackdropText from "../../components/BackdropText";

const Contact = () => {
  const state = useSelector((state) => state);
  return (
    <main id="works">
      <section></section>
      <BackdropText text="Contact" />
    </main>
  );
};

export default Contact;

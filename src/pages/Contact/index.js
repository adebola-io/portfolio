import React from "react";
import { useSelector } from "react-redux";
import BackdropText from "../../components/BackdropText";

const Contact = () => {
  const state = useSelector((state) => state);
  return (
    <main id="works">
      <section id="contacts">
        <h1>adebolaakomolafe@gmail.com</h1>
        <div className="other-contacts">
          <a href="http://" target={"_blank"}>
            Twitter
          </a>
          <a href="http://" target={"_blank"}>
            LinkedIn
          </a>
          <a href="http://" target={"_blank"}>
            Github
          </a>
          <a href="http://" target={"_blank"}>
            Upwork
          </a>
          <a href="http://" target={"_blank"}>
            Instagram
          </a>
          <a href="http://" target={"_blank"}>
            Facebook
          </a>
        </div>
        <h2>Send me a message</h2>
        <form>
          <label htmlFor="name"></label>
          <input type="text" name="name" id="adebola-xyz-name" />
        </form>
      </section>
      <BackdropText text="Contact" />
    </main>
  );
};

export default Contact;

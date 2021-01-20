import React, { useContext, useEffect } from "react";
import email from "../assets/email-custom.png";
import whatsapp from "../assets/whatsapp-custom.png";
import instagram from "../assets/instagram-custom.png";
import github from "../assets/github-custom.png";
import { Scroll } from "../context/ScrollContext";

const Contact = () => {
  const [scrollValue, setScrollValue] = useContext(Scroll);

  useEffect(() => {
    let offset = document.getElementById("contact").offsetTop;
    let title = document.getElementById("contact__title");
    let cards = document.getElementById("contacts");

    if (scrollValue.position === offset) {
      title.setAttribute("style", "opacity: 1;");
      cards.setAttribute("style", "opacity: 1;");
      title.animate(
        [
          {
            opacity: 0,
            transform: "translateY(50px)",
          },
          {
            opacity: 1,
          },
        ],
        1000
      );
      cards.animate(
        [
          {
            opacity: 0,
            transform: "translateY(50px)",
          },
          {
            opacity: 1,
          },
        ],
        1000
      );
    } else {
      title.setAttribute("style", "opacity: 0;");
      cards.setAttribute("style", "opacity: 0;");
    }
  }, [scrollValue]);
  return (
    <section id="contact">
      <h1 id="contact__title">📞 Feel free to contact me 📞</h1>
      <div className="contact__container" id="contacts">
        <div className="contact__card" id="email">
          <img src={email} alt="tzr.surya@gmail.com" />
          <hr />
          <h4>tzr.surya@gmail.com</h4>
        </div>
        <div className="contact__card">
          <a
            href="https://wa.me/6289515491052"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="whatsapp number" />
            <h4>+62 895 1549 1052</h4>
          </a>
        </div>
        <div className="contact__card">
          <a
            href="https://www.instagram.com/tezarsurya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="tezarsurya" />
            <h4>tezarsurya</h4>
          </a>
        </div>
        <div className="contact__card">
          <a
            href="https://github.com/tezarsurya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="tezarsurya" />
            <h4>tezarsurya</h4>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useContext, useEffect } from "react";
import education from "../assets/education.svg";
import education_step from "../assets/education-step.svg";
import { Scroll } from "../context/ScrollContext";

const Education = () => {
  const [scrollValue] = useContext(Scroll);

  useEffect(() => {
    let offset = document.getElementById("education").offsetTop;
    let text = document.getElementsByClassName("left__container");
    let step = document.getElementById("education_step");
    let illustration = document.getElementById("illustration");

    if (scrollValue.position === offset) {
      step.setAttribute("style", "opacity: 1;");
      illustration.setAttribute("style", "opacity: 1;");
      step.animate(
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
      illustration.animate(
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
      step.setAttribute("style", "opacity: 0;");
      illustration.setAttribute("style", "opacity: 0;");
    }

    for (let i = 0; i < text.length; i++) {
      if (scrollValue.position === offset) {
        text[i].setAttribute("style", "opacity: 1;");
        text[i].animate(
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
        text[i].setAttribute("style", "opacity: 0;");
      }
    }
  }, [scrollValue]);

  return (
    <section id="education">
      <div className="education__left">
        <div className="left__container">
          <div id="sd">
            <h4>2006 - 2012</h4>
            <p>SD Negeri Kokap</p>
          </div>
          <div id="sma">
            <h4>2015 - 2018</h4>
            <p>SMAN 1 Wates</p>
          </div>
        </div>
        <img
          id="education_step"
          src={education_step}
          alt="my education history"
        />
        <div className="left__container">
          <div id="tk">
            <h4>2005 - 2006</h4>
            <p>TK Putra Utama</p>
          </div>

          <div id="smp">
            <h4>2012 - 2015</h4>
            <p>SMPN 1 Kokap</p>
          </div>

          <div id="kuliah">
            <h4>2018 - Now</h4>
            <p>D3 Teknik Informatika</p>
            <p>Universitas Sebelas Maret</p>
            <p>Surakarta</p>
          </div>
        </div>
      </div>
      <div className="education__right">
        <img
          id="illustration"
          src={education}
          alt="Designed by pch.vector / Freepik"
        />
      </div>
    </section>
  );
};

export default Education;

import { IconButton, LinearProgress, makeStyles } from "@material-ui/core";
import Carousel from "nuka-carousel";
import React, { useContext, useEffect, useState } from "react";
import { Scroll } from "../context/ScrollContext";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles({
  progressRoot: {
    width: "150px",
    height: "0.5rem",
  },
  colorPrimary: {
    color: "#1fbbb0",
    backgroundColor: "#1fbbb0",
  },
  iconBtnRoot: {
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  },
});

const softSkills = [
  {
    name: "Problem Solving",
    value: 90,
  },
  {
    name: "Critical Thinking",
    value: 80,
  },
  {
    name: "Attention to Detail",
    value: 90,
  },
  {
    name: "Teamwork",
    value: 70,
  },
  {
    name: "Communication",
    value: 80,
  },
];

const Skills = () => {
  const classes = useStyles();
  const [scrollValue, setScrollValue] = useContext(Scroll);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    let offset = document.getElementById("skills").offsetTop;
    let card = document.getElementsByClassName("carousel_container");
    let title = document.getElementsByClassName("skills__title");

    scrollValue.position === offset ? setAutoPlay(true) : setAutoPlay(false);

    for (let i = 0; i < card.length; i++) {
      if (scrollValue.position === offset) {
        card[i].setAttribute("style", "opacity: 1;");
        title[i].setAttribute("style", "opacity: 1;");
        card[i].animate(
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
        title[i].animate(
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
        card[i].setAttribute("style", "opacity: 0;");
        title[i].setAttribute("style", "opacity: 0;");
      }
    }
  }, [scrollValue]);

  // Render
  return (
    <section
      id="skills"
      onScroll={(e) => {
        setScrollValue(e.currentTarget.scrollTop);
      }}
    >
      <div className="skills__left">
        <h3 className="skills__title">Programming Skills</h3>
        <div className="carousel_container">
          <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
              <IconButton
                classes={{ root: classes.iconBtnRoot }}
                onClick={previousSlide}
              >
                <ChevronLeftIcon />
              </IconButton>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <IconButton
                classes={{ root: classes.iconBtnRoot }}
                onClick={nextSlide}
              >
                <ChevronRightIcon />
              </IconButton>
            )}
            dragging={false}
            swiping={false}
            autoplay={autoPlay}
            autoplayInterval={1500}
            speed={1000}
          >
            <img
              src="https://tezarsurya.github.io/about_tezar/images/html-5.png"
              alt="html"
            />
            <img
              src="https://tezarsurya.github.io/about_tezar/images/css-3.png"
              alt="css"
            />
            <img
              src="https://tezarsurya.github.io/about_tezar/images/php.png"
              alt="php"
            />
            <img
              src="https://tezarsurya.github.io/about_tezar/images/js.png"
              alt="javascript"
            />
            <img
              src="https://tezarsurya.github.io/about_tezar/images/codeigniter-logo.png"
              alt="codeigniter"
            />
            <img
              src="https://tezarsurya.github.io/about_tezar/images/mysql.png"
              alt="mysql"
            />
            <img
              src="https://tezarsurya.github.io/about_tezar/images/Expressjs.png"
              alt="expressjs"
            />
            <img
              src="https://tezarsurya.github.io/about_tezar/images/react.png"
              alt="reactjs"
            />
            <img
              src="https://tezarsurya.github.io/about_tezar/images/nextjs-logo.png"
              alt="nextjs"
            />
          </Carousel>
        </div>
      </div>
      <div className="skills__right">
        <h3 className="skills__title">Soft Skills</h3>
        <div className="carousel_container">
          <table className="skills__table">
            <tbody>
              {softSkills.map((skill) => (
                <tr key={skill.name}>
                  <td>{skill.name}</td>
                  <td>
                    <LinearProgress
                      classes={{
                        root: classes.progressRoot,
                        barColorPrimary: classes.colorPrimary,
                      }}
                      color="primary"
                      value={skill.value}
                      variant="determinate"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Skills;

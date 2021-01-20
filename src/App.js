import { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import "animate.css";
import Skills from "./components/Skills";
import { Scroll } from "./context/ScrollContext";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  const [scrollTop, setScrollTop] = useContext(Scroll);

  useEffect(() => {
    let header = document.getElementById("header");
    let menu = document.getElementById("nav_menu").children;
    if (scrollTop.position > 50) {
      header.style.backgroundColor = "#1FBBB0";
      for (let i = 0; i < menu.length; i++) {
        menu[i].setAttribute("style", "color: #fff;");
      }
    } else {
      header.style.backgroundColor = "transparent";
      for (let i = 0; i < menu.length; i++) {
        menu[i].setAttribute("style", "color: #1fbbb0;");
      }
    }
  }, [scrollTop]);
  return (
    <div
      className="App"
      onScroll={(e) => {
        setScrollTop((scrollTop) => ({
          ...scrollTop,
          position: e.currentTarget.scrollTop,
        }));
      }}
    >
      <Header />
      <section id="home">
        <div className="home__left">
          <div className="imgContainer animate__animated animate__fadeIn animate__slow" />
        </div>
        <div className="home__right">
          <div className="name animate__animated animate__fadeInDown">
            Tezar Surya Fernanda
            <p>Fullstack Developer</p>
          </div>
          <div className="about animate__animated animate__fadeInUp">
            <p>
              Being a fullstack developer is a dream of mine. Thus, for
              achieving my dream, I am eager to learn new experience as this
              will help me grow in the future.
            </p>
          </div>
        </div>
      </section>
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

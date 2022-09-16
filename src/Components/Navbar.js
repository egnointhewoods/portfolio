import { useState, useEffect } from "react";
import "../Component-Styles/navbar.css";
import "../Component-Styles/fade-animation.css";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
export default function Navbarr() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isLinksClicked, setIsLinksClicked] = useState(true); //listening to hamburger links click event
  function hamburgerClick() {
    if (isLinksClicked === true) {
      console.log("true");
      setIsLinksClicked(false);
    } else if (isLinksClicked === false) {
      console.log("false");
      setIsLinksClicked(true);
    }
  }
  const [scrollDir, setScrollDir] = useState(null);
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);
  if (isLinksClicked) {
    return (
      <>
        <div
          className={
            !scrollDir
              ? "nav navbarFadeIn"
              : scrollDir === "down"
              ? "nav scrolledNav"
              : "nav scrolledNavUp"
          }
        >
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">
              <img
                src="https://www.upload.ee/image/14307477/Egnate__4_.png"
                alt="logo"
                className="logo"
              />
              {language === "English" ? (
                <button className="li">
                  Language <i className="down"></i>
                  <div className="dropdown">
                    <button
                      className="drop-link"
                      onClick={() => setLanguage("Georgian")}
                    >
                      Georgian
                    </button>
                    <button
                      className="drop-link"
                      onClick={() => setLanguage("English")}
                    >
                      English
                    </button>
                  </div>
                </button>
              ) : (
                <li className="li">
                  ენა <i className="down"></i>
                  <div className="dropdown">
                    <span
                      className="drop-link"
                      onClick={() => setLanguage("Georgian")}
                    >
                      ქართული
                    </span>
                    <span
                      className="drop-link"
                      onClick={() => setLanguage("English")}
                    >
                      ინგლისური
                    </span>
                  </div>
                </li>
              )}
            </div>
          </div>
          {language === "English" ? (
            <div className="nav-links rolledUpNavLinks">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <a
                className="button"
                id="resumeButton"
                target="_blank"
                rel="noreferrer"
                href="https://www.canva.com/design/DAFBT0QqQdg/uJmGp1G31KbjuJ99XW2RHg/view?utm_content=DAFBT0QqQdg&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
              >
                Resume
              </a>
            </div>
          ) : (
            <div className="nav-links rolledUpNavLinks">
              <a href="#about">ჩემ შესახებ</a>
              <a href="#projects">პროექტები</a>
              <a href="#contact">კონტაქტი</a>
              <a
                className="button"
                id="resumeButton"
                target="_blank"
                rel="noreferrer"
                href="https://www.canva.com/design/DAFBT0QqQdg/uJmGp1G31KbjuJ99XW2RHg/view?utm_content=DAFBT0QqQdg&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
              >
                რეზიუმე
              </a>
            </div>
          )}
          <div className="nav-btn" onClick={() => hamburgerClick()}>
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className={
            !scrollDir
              ? "nav navbarFadeIn"
              : scrollDir === "down"
              ? "nav scrolledNav"
              : "nav scrolledNavUp"
          }
        >
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">
              <img
                src="https://www.upload.ee/image/14307477/Egnate__4_.png"
                alt="logo"
                className="logo"
              />
              {language === "English" ? (
                <button className="li">
                  Language <i className="down"></i>
                  <div className="dropdown">
                    <button
                      className="drop-link"
                      onClick={() => setLanguage("Georgian")}
                    >
                      Georgian
                    </button>
                    <button
                      className="drop-link"
                      onClick={() => setLanguage("English")}
                    >
                      English
                    </button>
                  </div>
                </button>
              ) : (
                <li className="li">
                  ენა <i className="down"></i>
                  <div className="dropdown">
                    <span
                      className="drop-link"
                      onClick={() => setLanguage("Georgian")}
                    >
                      ქართული
                    </span>
                    <span
                      className="drop-link"
                      onClick={() => setLanguage("English")}
                    >
                      ინგლისური
                    </span>
                  </div>
                </li>
              )}
            </div>
          </div>
          {language === "English" ? (
            <div className="nav-links" onClick={() => setIsLinksClicked(true)}>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <a
                className="button"
                id="resumeButton"
                target="_blank"
                rel="noreferrer"
                href="https://www.canva.com/design/DAFBT0QqQdg/uJmGp1G31KbjuJ99XW2RHg/view?utm_content=DAFBT0QqQdg&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
              >
                Resume
              </a>
            </div>
          ) : (
            <div className="nav-links" onClick={() => setIsLinksClicked(true)}>
              <a href="#about">ჩემ შესახებ</a>
              <a href="#projects">პროექტები</a>
              <a href="#contact">კონტაქტი</a>
              <a
                className="button"
                id="resumeButton"
                target="_blank"
                rel="noreferrer"
                href="https://www.canva.com/design/DAFBT0QqQdg/uJmGp1G31KbjuJ99XW2RHg/view?utm_content=DAFBT0QqQdg&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
              >
                რეზიუმე
              </a>
            </div>
          )}
          <div className="nav-btn" onClick={() => hamburgerClick()}>
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </>
    );
  }
}

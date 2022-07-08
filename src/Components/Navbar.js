import { useState, useEffect } from "react";
import "../Component-Styles/navbar.scss";

export default function Navbarr() {
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

  return (
    <>
      <div
        className={
          !scrollDir
            ? "nav"
            : scrollDir === "down"
            ? "nav scrolledNav"
            : "nav scrolledNavUp"
        }
      >
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            {" "}
            <h2>Egnate</h2>
          </div>{" "}
        </div>
        <div className="nav-links">
          <a href="/">
            <span className="nav-link-number">01.</span> About
          </a>
          <a href="/">
            <span className="nav-link-number">02.</span> Projects
          </a>
          <a href="/">
            <span className="nav-link-number">03.</span> Contact
          </a>
        </div>
        <div className="nav-btn">
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

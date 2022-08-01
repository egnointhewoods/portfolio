import "../Component-Styles/about-projects-contact.css";

import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <Fade up>
      <div className="section about" id="about">
        <div className="section-header">
          <h2 className="about-heading">About Me</h2>
        </div>
        <div className="paragraphsWrapper">
          <div className="paragraphs">
            <Fade up>
              <p id="paragraph1">
                Hello! My name is Egnate and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2021 when I decided to create a simple JavaScript video-game —
                turns out programming a 2D puppy, named 'Karel' taught me a lot
                about JavaScript and about programming foundamentals.
              </p>
            </Fade>
            <Fade up>
              <p id="paragraph2">
                Fast-forward to today, I build the Front-end of Websites and Web
                Applications that leads to the success of the overall product.
                Check out some of my work in the
                <a href="#projects" className="aboutMeAnchor">
                  Projects
                </a>
                section.
              </p>
            </Fade>
            <Fade up>
              <p id="paragraph3">Skills and technologies:</p>
              <ul className="technologyList">
                <li className="technology-li">React</li>
                <li className="technology-li">Material UI</li>
                <li className="technology-li">TypeScript</li>
                <li className="technology-li">Bootstrap 5</li>
                <li className="technology-li">SASS</li>
                <li className="technology-li">Git</li>
                <li className="technology-li">C-1 English</li>
              </ul>
            </Fade>
          </div>
          <Fade right>
            <img
              src="https://www.upload.ee/image/14379920/259511427_926054241674174_6240146798167287505_n__3_.jpg"
              alt="profile"
              className="profile"
            />
          </Fade>
        </div>
      </div>
    </Fade>
  );
}

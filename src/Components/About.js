import "../Component-Styles/about.scss";

import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <Fade up>
      <div className="about fadeIn">
        <div className="about-header">
          <h2 className="about-number">01.</h2>
          <h2 className="about-heading">About Me</h2>
        </div>
        <div className="paragraphsWrapper">
          <div className="paragraphs">
            <p>
              I am a self-taught front-end web developer based in Tbilisi,
              Georgia. I've been developing Web Apps since 2021. I consider
              myself as a well-organised person, problem solver and an
              independent coder with high attention to detail.
            </p>
            <p>
              I am a self-taught front-end web developer based in Tbilisi,
              Georgia. I've been developing Web Apps since 2021. I consider
              myself as a well-organised person, problem solver and an
              independent coder with high attention to detail.
            </p>
            <p>
              I am a self-taught front-end web developer based in Tbilisi,
              Georgia. I've been developing Web Apps since 2021. I consider
              myself as a well-organised person, problem solver and an
              independent coder with high attention to detail.
            </p>
          </div>
          <img
            src="https://www.upload.ee/image/14173732/About_photo.PNG"
            alt="profile"
            className="profile"
          />
        </div>
      </div>
    </Fade>
  );
}
